/* global CINDERELLA_MODEL */

// Application State
const state = {
  mode: "sandbox", // "sandbox" or "challenge"
  userGuess: null,
  currentChallenge: null,
  challengeRevealed: false,
  scores: {
    user: { wins: 0, rounds: 0 },
    baseline: { wins: 0, rounds: 0 },
    logisticRegression: { wins: 0, rounds: 0 },
    pcaLogisticRegression: { wins: 0, rounds: 0 },
    randomForest: { wins: 0, rounds: 0 },
    gradientBoosting: { wins: 0, rounds: 0 },
  }
};

// Help helper functions
function sigmoid(z) {
  return 1 / (1 + Math.exp(-z));
}

function formatPercent(val) {
  return `${(val * 100).toFixed(1)}%`;
}

// Machine Learning Evaluation Functions (Runs models client-side!)
function scaleFeatures(rawFeatures) {
  const mean = CINDERELLA_MODEL.scaler.mean;
  const scale = CINDERELLA_MODEL.scaler.scale;
  return rawFeatures.map((val, idx) => (val - mean[idx]) / scale[idx]);
}

function projectPCA(scaledFeatures) {
  const playStyleIndices = CINDERELLA_MODEL.pca.playStyleIndices;
  const contextIndices = CINDERELLA_MODEL.pca.contextIndices;
  const pcaMean = CINDERELLA_MODEL.pca.mean;
  const loadings = CINDERELLA_MODEL.pca.loadings; // Shape (3, 13)

  // Extract play style features (scaled)
  const playStyle = playStyleIndices.map(idx => scaledFeatures[idx]);
  
  // Center play style features using PCA mean
  const centered = playStyle.map((val, idx) => val - pcaMean[idx]);

  // Project to 3 principal components
  const pcs = [0, 1, 2].map(pcIdx => {
    return centered.reduce((sum, val, featIdx) => sum + val * loadings[pcIdx][featIdx], 0);
  });

  // Extract context features (scaled seed and rank)
  const context = contextIndices.map(idx => scaledFeatures[idx]);

  // Combined order matched with python: play_style_pca features first, then context_pass
  return [...pcs, ...context];
}

function evaluateTree(nodeId, features, nodes) {
  const node = nodes[nodeId];
  if (node.left === -1 && node.right === -1) {
    return node.value;
  }
  const featureVal = features[node.feature];
  if (featureVal <= node.threshold) {
    return evaluateTree(node.left, features, nodes);
  } else {
    return evaluateTree(node.right, features, nodes);
  }
}

function predictBaseline(rankVal) {
  const b = CINDERELLA_MODEL.models.baseline;
  const scaledRank = (rankVal - b.mean) / b.scale;
  const z = scaledRank * b.coef + b.intercept;
  return sigmoid(z);
}

function predictLogisticRegression(scaledFeatures) {
  const lr = CINDERELLA_MODEL.models.logisticRegression;
  const z = lr.intercept + scaledFeatures.reduce((sum, val, idx) => sum + val * lr.coef[idx], 0);
  return sigmoid(z);
}

function predictPcaLogisticRegression(pcaFeatures) {
  const plr = CINDERELLA_MODEL.models.pcaLogisticRegression;
  const z = plr.intercept + pcaFeatures.reduce((sum, val, idx) => sum + val * plr.coef[idx], 0);
  return sigmoid(z);
}

function predictRandomForest(scaledFeatures) {
  const rf = CINDERELLA_MODEL.models.randomForest;
  let probSum = 0;
  rf.trees.forEach(treeNodes => {
    const leafVal = evaluateTree(0, scaledFeatures, treeNodes); // class probabilities array
    probSum += leafVal[1];
  });
  return probSum / rf.nEstimators;
}

function predictGradientBoosting(scaledFeatures) {
  const gbm = CINDERELLA_MODEL.models.gradientBoosting;
  let score = gbm.intercept;
  gbm.trees.forEach(treeNodes => {
    score += gbm.learningRate * evaluateTree(0, scaledFeatures, treeNodes);
  });
  return sigmoid(score);
}

// Compute outputs of all models on a raw feature vector
function evaluateAllModels(rawFeatures) {
  const scaled = scaleFeatures(rawFeatures);
  const pcaFeatures = projectPCA(scaled);

  const baselineProb = predictBaseline(rawFeatures[1]); // PreTourneyRank is index 1
  const lrProb = predictLogisticRegression(scaled);
  const pcaLrProb = predictPcaLogisticRegression(pcaFeatures);
  const rfProb = predictRandomForest(scaled);
  const gbmProb = predictGradientBoosting(scaled);

  const thresh = CINDERELLA_MODEL.thresholds;

  return {
    "Baseline (KenPom)": { prob: baselineProb, threshold: thresh["Baseline (KenPom)"], pred: baselineProb >= thresh["Baseline (KenPom)"] ? 1 : 0 },
    "Logistic Regression": { prob: lrProb, threshold: thresh["Logistic Regression"], pred: lrProb >= thresh["Logistic Regression"] ? 1 : 0 },
    "PCA + Logistic Regression": { prob: pcaLrProb, threshold: thresh["PCA + Logistic Regression"], pred: pcaLrProb >= thresh["PCA + Logistic Regression"] ? 1 : 0 },
    "Random Forest": { prob: rfProb, threshold: thresh["Random Forest"], pred: rfProb >= thresh["Random Forest"] ? 1 : 0 },
    "Gradient Boosting": { prob: gbmProb, threshold: thresh["Gradient Boosting"], pred: gbmProb >= thresh["Gradient Boosting"] ? 1 : 0 }
  };
}

// Get current sliders feature values
function getSliderValues() {
  return CINDERELLA_MODEL.featureColumns.map(col => {
    const slider = document.getElementById(`slider-${col}`);
    return slider ? parseFloat(slider.value) : 0.0;
  });
}

// Set sliders to specific feature values
function setSliderValues(featuresMap) {
  CINDERELLA_MODEL.featureColumns.forEach(col => {
    const slider = document.getElementById(`slider-${col}`);
    const display = document.getElementById(`val-${col}`);
    if (slider && featuresMap[col] !== undefined) {
      slider.value = featuresMap[col];
      if (display) {
        display.innerText = formatDisplayValue(col, featuresMap[col]);
      }
    }
  });
  updateDashboard();
}

function formatDisplayValue(key, val) {
  if (key === "SeedInt" || key === "PreTourneyRank") {
    return val.toFixed(0);
  }
  if (key === "ThreePointRate" || key === "ThreePointPct" || key === "EffectiveFGPct" || key === "TurnoverRate" || key === "OffensiveReboundRate" || key === "FreeThrowRate" || key === "WinPct" || key === "RegularSeasonWinPct") {
    return `${(val * 100).toFixed(1)}%`;
  }
  return val.toFixed(1);
}

// Update sandbox UI with predictions
function updateDashboard() {
  if (state.mode !== "sandbox") return;

  const rawFeatures = getSliderValues();
  const predictions = evaluateAllModels(rawFeatures);

  // Render prediction bars
  const container = document.getElementById("predictions-list");
  container.innerHTML = "";

  Object.entries(predictions).forEach(([name, data]) => {
    const isCindy = data.pred === 1;
    const probPct = (data.prob * 100).toFixed(1);
    const threshPct = (data.threshold * 100).toFixed(1);
    const classification = isCindy ? "Cinderella Anomaly" : "Early Exit";
    const statusClass = isCindy ? "badge-cindy" : "badge-exit";

    const card = document.createElement("div");
    card.className = `model-row-card ${isCindy ? 'model-cindy-active' : ''}`;
    card.innerHTML = `
      <div class="model-row-meta">
        <span class="model-name">${name}</span>
        <span class="model-badge ${statusClass}">${classification}</span>
      </div>
      <div class="progress-bar-wrapper">
        <div class="progress-bar-bg">
          <div class="progress-bar-fill ${isCindy ? 'fill-cindy' : 'fill-exit'}" style="width: ${probPct}%"></div>
          <div class="threshold-line" style="left: ${threshPct}%" title="Threshold: ${threshPct}%"></div>
        </div>
        <div class="progress-bar-labels">
          <span>Prob: ${probPct}%</span>
          <span>Threshold: ${threshPct}%</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Calculate and display PCA projection info
  const scaled = scaleFeatures(rawFeatures);
  const pcs = projectPCA(scaled).slice(0, 3); // Grab first 3 elements which are PC1, PC2, PC3

  document.getElementById("pca-pc1-val").innerText = pcs[0].toFixed(2);
  document.getElementById("pca-pc2-val").innerText = pcs[1].toFixed(2);
  document.getElementById("pca-pc3-val").innerText = pcs[2].toFixed(2);

  // Set descriptions based on scores
  document.getElementById("pca-pc1-desc").innerText = pcs[0] > 0 ? "Efficient offence/margins" : "Sub-par efficiency";
  document.getElementById("pca-pc2-desc").innerText = pcs[1] > 0 ? "Fast pace, high 3PT volume" : "Slow pace, inside style";
  document.getElementById("pca-pc3-desc").innerText = pcs[2] > 0 ? "Strong rebounding/low turnovers" : "High turnovers/weak boards";
}

// Challenge Mode logic
function loadChallenge() {
  const cases = CINDERELLA_MODEL.challengeCases;
  // Pick random case
  const randomCase = cases[Math.floor(Math.random() * cases.length)];
  state.currentChallenge = randomCase;
  state.challengeRevealed = false;
  state.userGuess = null;

  // Clear guessing UI active states
  document.getElementById("guess-exit-btn").classList.remove("active");
  document.getElementById("guess-cindy-btn").classList.remove("active");
  document.getElementById("challenge-reveal-btn").disabled = true;

  // Render stats
  const statsContainer = document.getElementById("challenge-stats-grid");
  statsContainer.innerHTML = "";

  // Show selected key metrics to user
  const visibleFeatures = [
    { key: "SeedInt", label: "Seed" },
    { key: "PreTourneyRank", label: "KenPom Rank" },
    { key: "Pace", label: "Pace" },
    { key: "ThreePointRate", label: "3PT Rate" },
    { key: "ThreePointPct", label: "3PT %" },
    { key: "EffectiveFGPct", label: "Effective FG%" },
    { key: "TurnoverRate", label: "Turnover Rate" },
    { key: "OffensiveReboundRate", label: "Offensive Rebound Rate" },
    { key: "MarginPerGame", label: "Margin/Game" },
    { key: "WinPct", label: "Win %" }
  ];

  visibleFeatures.forEach(feat => {
    const rawVal = randomCase.features[feat.key];
    const card = document.createElement("div");
    card.className = "challenge-stat-card";
    card.innerHTML = `
      <div class="challenge-stat-label">${feat.label}</div>
      <div class="challenge-stat-val">${formatDisplayValue(feat.key, rawVal)}</div>
    `;
    statsContainer.appendChild(card);
  });

  // Hide reveal area
  document.getElementById("challenge-outcome-wrapper").style.display = "none";
}

function handleUserGuess(guess) {
  if (state.challengeRevealed) return;
  state.userGuess = guess;
  document.getElementById("guess-exit-btn").classList.toggle("active", guess === 0);
  document.getElementById("guess-cindy-btn").classList.toggle("active", guess === 1);
  document.getElementById("challenge-reveal-btn").disabled = false;
}

function revealChallenge() {
  if (state.currentChallenge === null || state.userGuess === null || state.challengeRevealed) return;
  state.challengeRevealed = true;

  const actualLabel = state.currentChallenge.actualLabel; // 0 or 1
  const actualStr = actualLabel === 1 ? "Cinderella Anomaly" : "Early Exit";
  
  // Evaluate models
  const rawFeatures = CINDERELLA_MODEL.featureColumns.map(col => state.currentChallenge.features[col]);
  const predictions = evaluateAllModels(rawFeatures);

  // Update Scoreboards
  state.scores.user.rounds += 1;
  if (state.userGuess === actualLabel) state.scores.user.wins += 1;

  const mapping = {
    "Baseline (KenPom)": "baseline",
    "Logistic Regression": "logisticRegression",
    "PCA + Logistic Regression": "pcaLogisticRegression",
    "Random Forest": "randomForest",
    "Gradient Boosting": "gradientBoosting"
  };

  Object.entries(predictions).forEach(([name, data]) => {
    const key = mapping[name];
    if (key) {
      state.scores[key].rounds += 1;
      if (data.pred === actualLabel) {
        state.scores[key].wins += 1;
      }
    }
  });

  updateScoreboardUI();

  // Render outcome display
  const resultCard = document.getElementById("challenge-outcome-card");
  resultCard.className = `challenge-outcome-box ${actualLabel === 1 ? 'box-cindy' : 'box-exit'}`;
  
  const userCorrect = state.userGuess === actualLabel;
  const rfCorrect = predictions["Random Forest"].pred === actualLabel;

  resultCard.innerHTML = `
    <h4>${state.currentChallenge.teamName} (${state.currentChallenge.season})</h4>
    <p class="outcome-badge-text">Actual Outcome: <strong>${actualStr}</strong></p>
    <div class="comparison-summary">
      <div class="verdict-block ${userCorrect ? 'verdict-correct' : 'verdict-wrong'}">
        <span>Your Guess: ${state.userGuess === 1 ? 'Cinderella' : 'Early Exit'}</span>
        <strong>${userCorrect ? 'Correct! (+1 Pt)' : 'Incorrect (0 Pt)'}</strong>
      </div>
      <div class="verdict-block ${rfCorrect ? 'verdict-correct' : 'verdict-wrong'}">
        <span>RF Model: ${predictions["Random Forest"].pred === 1 ? 'Cinderella' : 'Early Exit'}</span>
        <strong>${rfCorrect ? 'Correct!' : 'Incorrect'}</strong>
      </div>
    </div>
  `;

  // Display comparison details table
  const detailsTable = document.getElementById("challenge-details-body");
  detailsTable.innerHTML = "";

  Object.entries(predictions).forEach(([name, data]) => {
    const isCorrect = data.pred === actualLabel;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${name}</strong></td>
      <td>${formatPercent(data.prob)}</td>
      <td>${data.pred === 1 ? 'Cinderella' : 'Early Exit'}</td>
      <td class="${isCorrect ? 'text-correct' : 'text-wrong'}"><strong>${isCorrect ? 'Correct' : 'Incorrect'}</strong></td>
    `;
    detailsTable.appendChild(row);
  });

  document.getElementById("challenge-outcome-wrapper").style.display = "block";
}

function updateScoreboardUI() {
  document.getElementById("score-user").innerText = `${state.scores.user.wins}/${state.scores.user.rounds}`;
  document.getElementById("score-rf").innerText = `${state.scores.randomForest.wins}/${state.scores.randomForest.rounds}`;
  document.getElementById("score-gbm").innerText = `${state.scores.gradientBoosting.wins}/${state.scores.gradientBoosting.rounds}`;
  document.getElementById("score-baseline").innerText = `${state.scores.baseline.wins}/${state.scores.baseline.rounds}`;
}

// Tab switcher
function switchTab(mode) {
  state.mode = mode;
  document.getElementById("tab-sandbox").classList.toggle("active", mode === "sandbox");
  document.getElementById("tab-challenge").classList.toggle("active", mode === "challenge");

  document.getElementById("sandbox-workspace").style.display = mode === "sandbox" ? "grid" : "none";
  document.getElementById("challenge-workspace").style.display = mode === "challenge" ? "block" : "none";

  if (mode === "sandbox") {
    updateDashboard();
  } else {
    if (!state.currentChallenge) {
      loadChallenge();
    }
  }
}

// Bootstrap Initialization
function init() {
  // 1. Build Sliders dynamically
  const slidersContainer = document.getElementById("sliders-grid");
  slidersContainer.innerHTML = "";

  // Group fields for clean design
  const groups = {
    context: { title: "Bracket Context", keys: ["SeedInt", "PreTourneyRank"] },
    shooting: { title: "Shooting & Pace", keys: ["Pace", "ThreePointRate", "ThreePointPct", "EffectiveFGPct"] },
    possession: { title: "Possession & Rebounding", keys: ["TurnoverRate", "OffensiveReboundRate", "FreeThrowRate"] },
    record: { title: "Regular Season Metrics", keys: ["WinPct", "MarginPerGame", "RegularSeasonWinPct", "RegularSeasonMargin", "OffensiveEfficiency", "DefensiveEfficiency"] }
  };

  Object.entries(groups).forEach(([id, g]) => {
    const section = document.createElement("div");
    section.className = "slider-section-box";
    section.innerHTML = `<h4>${g.title}</h4>`;
    
    g.keys.forEach(key => {
      const spec = CINDERELLA_MODEL.featureStats.find(s => s.key === key);
      if (!spec) return;

      const control = document.createElement("div");
      control.className = "slider-control-card";
      
      let tooltipText = "";
      if (key === "SeedInt") tooltipText = "Tournament Seed (11 to 16)";
      else if (key === "PreTourneyRank") tooltipText = "Pre-Tournament KenPom efficiency rank (lower is better)";
      else if (key === "Pace") tooltipText = "Estimated possessions per 40 minutes";
      else if (key === "ThreePointRate") tooltipText = "3PA / total field goal attempts";
      else if (key === "ThreePointPct") tooltipText = "Percentage of 3-pointers made";
      else if (key === "EffectiveFGPct") tooltipText = "Field goal pct adjusting for 3-pointers counting for 1.5x";
      else if (key === "TurnoverRate") tooltipText = "Turnovers per possession";
      else if (key === "OffensiveReboundRate") tooltipText = "Percentage of offensive rebound opportunities secured";
      else if (key === "FreeThrowRate") tooltipText = "Free throw attempts / field goal attempts";
      else if (key === "WinPct") tooltipText = "Season win percentage";
      else if (key === "MarginPerGame") tooltipText = "Average scoring margin in D1 games";
      else if (key === "RegularSeasonWinPct") tooltipText = "Regular season win percentage (compact)";
      else if (key === "RegularSeasonMargin") tooltipText = "Regular season average scoring margin (compact)";
      else if (key === "OffensiveEfficiency") tooltipText = "Points scored per 100 possessions";
      else if (key === "DefensiveEfficiency") tooltipText = "Points allowed per 100 possessions";

      control.innerHTML = `
        <div class="slider-header-meta">
          <label class="slider-label" for="slider-${key}">
            ${spec.label}
            <span class="tooltip-icon" title="${tooltipText}">?</span>
          </label>
          <span class="slider-display-val" id="val-${key}">${formatDisplayValue(key, spec.median)}</span>
        </div>
        <input 
          type="range" 
          id="slider-${key}" 
          min="${spec.min}" 
          max="${spec.max}" 
          step="${spec.step}" 
          value="${spec.median}"
          data-key="${key}"
        />
      `;
      section.appendChild(control);
    });
    slidersContainer.appendChild(section);
  });

  // Attach slider input listeners
  document.querySelectorAll("input[type='range']").forEach(slider => {
    slider.addEventListener("input", (e) => {
      const key = e.target.dataset.key;
      const display = document.getElementById(`val-${key}`);
      if (display) {
        display.innerText = formatDisplayValue(key, parseFloat(e.target.value));
      }
      updateDashboard();
    });
  });

  // Tab listeners
  document.getElementById("tab-sandbox").addEventListener("click", () => switchTab("sandbox"));
  document.getElementById("tab-challenge").addEventListener("click", () => switchTab("challenge"));

  // Guess listeners
  document.getElementById("guess-exit-btn").addEventListener("click", () => handleUserGuess(0));
  document.getElementById("guess-cindy-btn").addEventListener("click", () => handleUserGuess(1));
  document.getElementById("challenge-reveal-btn").addEventListener("click", revealChallenge);
  document.getElementById("challenge-next-btn").addEventListener("click", loadChallenge);

  // Load case studies interactive triggers
  const caseList = document.getElementById("case-studies-list");
  caseList.innerHTML = "";
  CINDERELLA_MODEL.caseStudies.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "case-study-btn";
    const status = c.actual === "Cinderella" ? "Cinderella" : "Exit";
    const badgeClass = c.actual === "Cinderella" ? "badge-cindy" : "badge-exit";
    btn.innerHTML = `
      <span><strong>${c.season} ${c.teamName}</strong> (Seed ${c.seed})</span>
      <span class="model-badge ${badgeClass}">${status}</span>
    `;
    btn.addEventListener("click", () => {
      setSliderValues(c.features);
      switchTab("sandbox");
      // Scroll to sandbox top
      document.getElementById("sandbox-workspace").scrollIntoView({ behavior: "smooth" });
    });
    caseList.appendChild(btn);
  });

  // Populate PCA Loadings table
  const loadingsBody = document.getElementById("pca-loadings-body");
  loadingsBody.innerHTML = "";
  
  // Extract play-style feature keys and corresponding PCA loadings
  const playStyleIndices = CINDERELLA_MODEL.pca.playStyleIndices;
  const playStyleCols = playStyleIndices.map(idx => CINDERELLA_MODEL.featureColumns[idx]);
  const loadings = CINDERELLA_MODEL.pca.loadings;

  playStyleCols.forEach((col, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${col}</strong></td>
      <td class="${loadings[0][idx] > 0 ? 'pos-val' : 'neg-val'}">${loadings[0][idx].toFixed(4)}</td>
      <td class="${loadings[1][idx] > 0 ? 'pos-val' : 'neg-val'}">${loadings[1][idx].toFixed(4)}</td>
      <td class="${loadings[2][idx] > 0 ? 'pos-val' : 'neg-val'}">${loadings[2][idx].toFixed(4)}</td>
    `;
    loadingsBody.appendChild(tr);
  });

  // Render initial dashboard
  switchTab("sandbox");
}

window.addEventListener("DOMContentLoaded", init);