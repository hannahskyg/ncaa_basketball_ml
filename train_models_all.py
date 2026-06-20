from __future__ import annotations

import json
from pathlib import Path
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
from imblearn.over_sampling import SMOTE
from imblearn.pipeline import Pipeline as ImbPipeline
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.metrics import f1_score, precision_recall_curve, precision_score, recall_score
from sklearn.model_selection import GridSearchCV, StratifiedGroupKFold, cross_val_predict
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.compose import ColumnTransformer

ROOT = Path(__file__).resolve().parent
DATA_DIR = ROOT / "march-machine-learning-mania-2026"
OUTPUT_PATH = ROOT / "model-data.js"
SEED = 42

def extract_seed(value: str) -> int:
    return int("".join(ch for ch in str(value) if ch.isdigit()))

def load_data() -> dict[str, pd.DataFrame]:
    return {
        "regular": pd.read_csv(DATA_DIR / "MRegularSeasonCompactResults.csv"),
        "detailed": pd.read_csv(DATA_DIR / "MRegularSeasonDetailedResults.csv"),
        "seeds": pd.read_csv(DATA_DIR / "MNCAATourneySeeds.csv"),
        "tourney": pd.read_csv(DATA_DIR / "MNCAATourneyCompactResults.csv"),
        "massey": pd.read_csv(DATA_DIR / "MMasseyOrdinals.csv"),
        "teams": pd.read_csv(DATA_DIR / "MTeams.csv"),
    }

def safe_divide(numerator: pd.Series, denominator: pd.Series) -> pd.Series:
    denominator = denominator.replace(0, np.nan)
    return (numerator / denominator).replace([np.inf, -np.inf], np.nan)

def build_base_population(seeds: pd.DataFrame, tourney: pd.DataFrame) -> pd.DataFrame:
    seed_table = seeds[["Season", "TeamID", "Seed"]].copy()
    seed_table["SeedInt"] = seed_table["Seed"].map(extract_seed)
    low_seeds = seed_table[seed_table["SeedInt"].between(11, 16)].copy()

    win_counts = tourney.groupby(["Season", "WTeamID"]).size().reset_index(name="TourneyWins")
    base = low_seeds.merge(
        win_counts,
        left_on=["Season", "TeamID"],
        right_on=["Season", "WTeamID"],
        how="left",
    ).fillna({"TourneyWins": 0})
    base["Cinderella"] = (base["TourneyWins"] >= 2).astype(int)
    return base[["Season", "TeamID", "SeedInt", "Cinderella"]].copy()

def build_team_features(detailed: pd.DataFrame, regular: pd.DataFrame) -> pd.DataFrame:
    wins = detailed.groupby(["Season", "WTeamID"]).agg(
        Games=("WScore", "count"),
        PointsFor=("WScore", "sum"),
        PointsAgainst=("LScore", "sum"),
        FGM=("WFGM", "sum"),
        FGA=("WFGA", "sum"),
        FGM3=("WFGM3", "sum"),
        FGA3=("WFGA3", "sum"),
        FTA=("WFTA", "sum"),
        OR=("WOR", "sum"),
        AST=("WAst", "sum"),
        TO=("WTO", "sum"),
    ).reset_index().rename(columns={"WTeamID": "TeamID"})

    losses = detailed.groupby(["Season", "LTeamID"]).agg(
        Games=("LScore", "count"),
        PointsFor=("LScore", "sum"),
        PointsAgainst=("WScore", "sum"),
        FGM=("LFGM", "sum"),
        FGA=("LFGA", "sum"),
        FGM3=("LFGM3", "sum"),
        FGA3=("LFGA3", "sum"),
        FTA=("LFTA", "sum"),
        OR=("LOR", "sum"),
        AST=("LAst", "sum"),
        TO=("LTO", "sum"),
    ).reset_index().rename(columns={"LTeamID": "TeamID"})

    team_stats = wins.merge(losses, on=["Season", "TeamID"], how="outer", suffixes=("_w", "_l")).fillna(0)

    metrics = ["Games", "PointsFor", "PointsAgainst", "FGM", "FGA", "FGM3", "FGA3", "FTA", "OR", "AST", "TO"]
    for metric in metrics:
        team_stats[metric] = team_stats[f"{metric}_w"] + team_stats[f"{metric}_l"]

    team_stats["Possessions"] = team_stats["FGA"] + 0.475 * team_stats["FTA"] + team_stats["TO"] - team_stats["OR"]
    team_stats["Pace"] = safe_divide(team_stats["Possessions"], team_stats["Games"])
    team_stats["ThreePointRate"] = safe_divide(team_stats["FGA3"], team_stats["FGA"])
    team_stats["ThreePointPct"] = safe_divide(team_stats["FGM3"], team_stats["FGA3"])
    team_stats["EffectiveFGPct"] = safe_divide(team_stats["FGM"] + 0.5 * team_stats["FGM3"], team_stats["FGA"])
    team_stats["TurnoverRate"] = safe_divide(team_stats["TO"], team_stats["Possessions"])
    team_stats["OffensiveReboundRate"] = safe_divide(team_stats["OR"], team_stats["OR"] + team_stats["FGA"])
    team_stats["FreeThrowRate"] = safe_divide(team_stats["FTA"], team_stats["FGA"])
    team_stats["MarginPerGame"] = safe_divide(team_stats["PointsFor"] - team_stats["PointsAgainst"], team_stats["Games"])
    team_stats["WinPct"] = safe_divide(team_stats["Games_w"], team_stats["Games"])
    team_stats["OffensiveEfficiency"] = safe_divide(team_stats["PointsFor"] * 100, team_stats["Possessions"])
    team_stats["DefensiveEfficiency"] = safe_divide(team_stats["PointsAgainst"] * 100, team_stats["Possessions"])

    compact_w = regular.groupby(["Season", "WTeamID"]).agg(
        RegWins=("WScore", "count"),
        RegPointsFor=("WScore", "sum"),
        RegPointsAgainst=("LScore", "sum"),
    ).reset_index().rename(columns={"WTeamID": "TeamID"})

    compact_l = regular.groupby(["Season", "LTeamID"]).agg(
        RegLosses=("LScore", "count"),
        RegLossPointsFor=("LScore", "sum"),
        RegLossPointsAgainst=("WScore", "sum"),
    ).reset_index().rename(columns={"LTeamID": "TeamID"})

    compact = compact_w.merge(compact_l, on=["Season", "TeamID"], how="outer").fillna(0)
    compact["RegularSeasonGames"] = compact["RegWins"] + compact["RegLosses"]
    compact["RegularSeasonWinPct"] = safe_divide(compact["RegWins"], compact["RegularSeasonGames"])
    compact["RegularSeasonMargin"] = safe_divide(
        (compact["RegPointsFor"] + compact["RegLossPointsFor"]) - (compact["RegPointsAgainst"] + compact["RegLossPointsAgainst"]),
        compact["RegularSeasonGames"],
    )

    features = team_stats[[
        "Season",
        "TeamID",
        "Pace",
        "ThreePointRate",
        "ThreePointPct",
        "EffectiveFGPct",
        "TurnoverRate",
        "OffensiveReboundRate",
        "FreeThrowRate",
        "MarginPerGame",
        "WinPct",
        "OffensiveEfficiency",
        "DefensiveEfficiency",
    ]].merge(
        compact[["Season", "TeamID", "RegularSeasonGames", "RegularSeasonWinPct", "RegularSeasonMargin"]],
        on=["Season", "TeamID"],
        how="left",
    )

    return features

def build_ranks(massey: pd.DataFrame) -> pd.DataFrame:
    pre_tourney = massey[(massey["RankingDayNum"] == 133) & (massey["SystemName"] == "POM")].copy()
    return pre_tourney[["Season", "TeamID", "OrdinalRank"]].rename(columns={"OrdinalRank": "PreTourneyRank"})

def serialize_tree(tree, is_classifier=False) -> list[dict]:
    serialized = []
    children_left = tree.children_left
    children_right = tree.children_right
    feature = tree.feature
    threshold = tree.threshold
    value = tree.value
    
    for i in range(len(children_left)):
        node = {
            "id": i,
            "left": int(children_left[i]),
            "right": int(children_right[i]),
            "feature": int(feature[i]),
            "threshold": float(threshold[i])
        }
        if children_left[i] == -1: # Leaf node
            if is_classifier:
                val = value[i][0].tolist()
                total = sum(val)
                val_norm = [v / total for v in val] if total > 0 else val
                node["value"] = val_norm
            else:
                node["value"] = float(value[i][0][0])
        serialized.append(node)
    return serialized

def serialize_rf(rf: RandomForestClassifier) -> list[list[dict]]:
    return [serialize_tree(dt.tree_, is_classifier=True) for dt in rf.estimators_]

def serialize_gbm(gbm: GradientBoostingClassifier, X_train) -> dict:
    trees = [serialize_tree(dt[0].tree_, is_classifier=False) for dt in gbm.estimators_]
    
    dummy_input = np.zeros((1, X_train.shape[1]))
    dec_fun = float(gbm.decision_function(dummy_input)[0])
    
    tree_sum = 0.0
    for dt in gbm.estimators_:
        tree_sum += float(dt[0].predict(dummy_input)[0])
    
    intercept = dec_fun - gbm.learning_rate * tree_sum
    
    return {
        "trees": trees,
        "learningRate": float(gbm.learning_rate),
        "intercept": intercept
    }

def main() -> None:
    print("Loading datasets...")
    data = load_data()
    base = build_base_population(data["seeds"], data["tourney"])
    features = build_team_features(data["detailed"], data["regular"])
    ranks = build_ranks(data["massey"])

    model_df = base.merge(features, on=["Season", "TeamID"], how="inner").merge(ranks, on=["Season", "TeamID"], how="inner")
    model_df = model_df.merge(data["teams"][["TeamID", "TeamName"]], on="TeamID", how="left")
    model_df = model_df.dropna().reset_index(drop=True)

    feature_columns = [
        "SeedInt",
        "PreTourneyRank",
        "Pace",
        "ThreePointRate",
        "ThreePointPct",
        "EffectiveFGPct",
        "TurnoverRate",
        "OffensiveReboundRate",
        "FreeThrowRate",
        "MarginPerGame",
        "WinPct",
        "OffensiveEfficiency",
        "DefensiveEfficiency",
        "RegularSeasonWinPct",
        "RegularSeasonMargin",
    ]

    model_df = model_df.replace([np.inf, -np.inf], np.nan).dropna(subset=feature_columns + ["Cinderella"])
    
    train_df = model_df[model_df["Season"] <= 2021].copy()
    test_df = model_df[model_df["Season"] >= 2022].copy()

    X_train = train_df[feature_columns].to_numpy(dtype=float)
    y_train = train_df["Cinderella"].to_numpy(dtype=int)
    X_test = test_df[feature_columns].to_numpy(dtype=float)
    y_test = test_df["Cinderella"].to_numpy(dtype=int)
    groups_train = train_df["Season"].to_numpy(dtype=int)

    cv = StratifiedGroupKFold(n_splits=5, shuffle=True, random_state=SEED)

    # 1. KenPom-only Baseline Model
    print("Training KenPom Baseline...")
    baseline_pipe = ImbPipeline([
        ("smote", SMOTE(random_state=SEED)),
        ("scaler", StandardScaler()),
        ("logit", LogisticRegression(max_iter=4000, random_state=SEED)),
    ])
    baseline_search = GridSearchCV(
        baseline_pipe,
        {"logit__C": [0.05, 0.1, 0.3, 1.0, 3.0], "logit__class_weight": [None, "balanced"]},
        scoring="f1",
        cv=cv,
        n_jobs=-1,
    )
    baseline_search.fit(train_df[["PreTourneyRank"]].to_numpy(dtype=float), y_train, groups=groups_train)
    best_baseline = baseline_search.best_estimator_
    best_baseline.fit(train_df[["PreTourneyRank"]].to_numpy(dtype=float), y_train)

    # 2. Full Logistic Regression
    print("Training Logistic Regression...")
    lr_pipe = ImbPipeline([
        ("smote", SMOTE(random_state=SEED)),
        ("scaler", StandardScaler()),
        ("logit", LogisticRegression(max_iter=5000, random_state=SEED)),
    ])
    lr_search = GridSearchCV(
        lr_pipe,
        {"logit__C": [0.01, 0.05, 0.1, 0.3, 1.0, 3.0, 10.0], "logit__class_weight": [None, "balanced"]},
        scoring="f1",
        cv=cv,
        n_jobs=-1,
    )
    lr_search.fit(X_train, y_train, groups=groups_train)
    best_lr = lr_search.best_estimator_
    best_lr.fit(X_train, y_train)

    # 3. Random Forest
    print("Training Random Forest...")
    rf_pipe = ImbPipeline([
        ("smote", SMOTE(random_state=SEED)),
        ("scaler", StandardScaler()),
        ("rf", RandomForestClassifier(random_state=SEED)),
    ])
    rf_search = GridSearchCV(
        rf_pipe,
        {
            "rf__n_estimators": [100, 200],
            "rf__max_depth": [3, 5, 7],
            "rf__min_samples_leaf": [2, 5, 10],
            "rf__class_weight": ["balanced", "balanced_subsample", None],
        },
        scoring="f1",
        cv=cv,
        n_jobs=-1,
    )
    rf_search.fit(X_train, y_train, groups=groups_train)
    best_rf = rf_search.best_estimator_
    best_rf.fit(X_train, y_train)

    # 4. Gradient Boosting
    print("Training Gradient Boosting...")
    gbm_pipe = ImbPipeline([
        ("smote", SMOTE(random_state=SEED)),
        ("scaler", StandardScaler()),
        ("gbm", GradientBoostingClassifier(random_state=SEED)),
    ])
    gbm_search = GridSearchCV(
        gbm_pipe,
        {
            "gbm__n_estimators": [50, 100, 150],
            "gbm__learning_rate": [0.01, 0.05, 0.1],
            "gbm__max_depth": [3, 4],
            "gbm__subsample": [0.8, 1.0],
        },
        scoring="f1",
        cv=cv,
        n_jobs=-1,
    )
    gbm_search.fit(X_train, y_train, groups=groups_train)
    best_gbm = gbm_search.best_estimator_
    best_gbm.fit(X_train, y_train)

    # 5. PCA-based Models
    print("Extracting Latent Factors (PCA) and training PCA models...")
    play_style_indices = list(range(2, 15))
    context_indices = [0, 1]
    
    pca_preprocessor = ColumnTransformer(
        transformers=[
            ("play_style_pca", PCA(n_components=3, random_state=SEED), play_style_indices),
            ("context_pass", "passthrough", context_indices),
        ]
    )

    pca_lr_pipe = ImbPipeline([
        ("smote", SMOTE(random_state=SEED)),
        ("scaler", StandardScaler()),
        ("pca_preproc", pca_preprocessor),
        ("logit", LogisticRegression(max_iter=4000, random_state=SEED)),
    ])
    
    pca_lr_search = GridSearchCV(
        pca_lr_pipe,
        {"logit__C": [0.01, 0.05, 0.1, 0.3, 1.0, 3.0, 10.0], "logit__class_weight": [None, "balanced"]},
        scoring="f1",
        cv=cv,
        n_jobs=-1,
    )
    pca_lr_search.fit(X_train, y_train, groups=groups_train)
    best_pca_lr = pca_lr_search.best_estimator_
    best_pca_lr.fit(X_train, y_train)

    # Inspect PCA loadings
    fitted_scaler = best_pca_lr.named_steps["scaler"]
    fitted_pca = best_pca_lr.named_steps["pca_preproc"].named_transformers_["play_style_pca"]
    
    play_style_cols = [feature_columns[i] for i in play_style_indices]
    loadings = pd.DataFrame(
        fitted_pca.components_.T,
        columns=["PC1", "PC2", "PC3"],
        index=play_style_cols
    )
    print("\n--- PCA Loadings on Play-Style Features ---")
    print(loadings.to_string())
    print("Explained Variance Ratio:", fitted_pca.explained_variance_ratio_)

    # 6. Evaluate all models
    models = {
        "Baseline (KenPom)": (best_baseline, lambda m, X: m.predict_proba(X[:, [1]])[:, 1]),
        "Logistic Regression": (best_lr, lambda m, X: m.predict_proba(X)[:, 1]),
        "Random Forest": (best_rf, lambda m, X: m.predict_proba(X)[:, 1]),
        "Gradient Boosting": (best_gbm, lambda m, X: m.predict_proba(X)[:, 1]),
        "PCA + Logistic Regression": (best_pca_lr, lambda m, X: m.predict_proba(X)[:, 1]),
    }

    # Threshold optimization
    oof_thresholds = {}
    print("\nOptimizing decision thresholds on OOF predictions...")
    for name, (model, predict_fn) in models.items():
        if "Baseline" in name:
            X_tr = train_df[["PreTourneyRank"]].to_numpy()
        else:
            X_tr = X_train
            
        oof_probs = cross_val_predict(
            model,
            X_tr,
            y_train,
            cv=cv,
            groups=groups_train,
            method="predict_proba",
            n_jobs=-1,
        )[:, 1]
        
        precision, recall, thresholds = precision_recall_curve(y_train, oof_probs)
        f1_scores = np.divide(2 * precision * recall, precision + recall, out=np.zeros_like(precision), where=(precision + recall) != 0)
        best_idx = int(np.argmax(f1_scores[:-1])) if len(thresholds) else 0
        best_threshold = thresholds[best_idx] if len(thresholds) else 0.5
        oof_thresholds[name] = float(best_threshold)
        print(f"{name}: Optimized Threshold = {best_threshold:.3f}, OOF Best F1 = {f1_scores[best_idx]:.4f}")

    # Evaluate on Test Set
    test_metrics = {}
    test_predictions = {}
    print("\nEvaluating models on Test Set (2022-2026)...")
    for name, (model, predict_fn) in models.items():
        if "Baseline" in name:
            probs = model.predict_proba(test_df[["PreTourneyRank"]].to_numpy())[:, 1]
        else:
            probs = model.predict_proba(X_test)[:, 1]
            
        thresh = oof_thresholds[name]
        preds = (probs >= thresh).astype(int)
        
        test_predictions[name] = (probs, preds)
        test_metrics[name] = {
            "f1": float(f1_score(y_test, preds)),
            "precision": float(precision_score(y_test, preds, zero_division=0)),
            "recall": float(recall_score(y_test, preds, zero_division=0)),
            "threshold": thresh,
        }
        print(f"{name} Test: F1 = {test_metrics[name]['f1']:.4f}, Precision = {test_metrics[name]['precision']:.4f}, Recall = {test_metrics[name]['recall']:.4f}")

    best_model_name = "Random Forest"
    primary_model, _ = models[best_model_name]
    primary_thresh = oof_thresholds[best_model_name]
    primary_probs, primary_preds = test_predictions[best_model_name]

    # --- SENSITIVITY ANALYSES ---
    print("\nGenerating sensitivity plots...")
    # 1. Threshold Sensitivity Plot
    oof_probs_rf = cross_val_predict(
        best_rf, X_train, y_train,
        cv=cv, groups=groups_train,
        method="predict_proba", n_jobs=-1
    )[:, 1]
    
    thresh_sweep = np.linspace(0.01, 0.99, 100)
    sweep_f1, sweep_prec, sweep_rec = [], [], []
    for t in thresh_sweep:
        preds_t = (oof_probs_rf >= t).astype(int)
        sweep_f1.append(f1_score(y_train, preds_t))
        sweep_prec.append(precision_score(y_train, preds_t, zero_division=0))
        sweep_rec.append(recall_score(y_train, preds_t, zero_division=0))

    fig, ax = plt.subplots(figsize=(8, 5))
    ax.plot(thresh_sweep, sweep_f1, label="OOF F1-Score", color="darkorange", linewidth=2.5)
    ax.plot(thresh_sweep, sweep_prec, label="OOF Precision", color="steelblue", linestyle="--")
    ax.plot(thresh_sweep, sweep_rec, label="OOF Recall", color="forestgreen", linestyle=":")
    ax.axvline(primary_thresh, color="red", linestyle="-.", label=f"Optimal Threshold ({primary_thresh:.3f})")
    ax.set_title("Decision Threshold Sensitivity (Random Forest Model)", fontsize=12, fontweight="bold")
    ax.set_xlabel("Classification Probability Threshold")
    ax.set_ylabel("Metric Value")
    ax.legend(loc="lower left")
    ax.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.savefig(ROOT / "threshold_sensitivity.png", dpi=150)
    plt.close()

    # 2. Hyperparameter Sensitivity: F1-score vs Tree Depth for Random Forest
    depths = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    depth_cv_f1 = []
    depth_test_f1 = []
    for d in depths:
        test_pipe = ImbPipeline([
            ("smote", SMOTE(random_state=SEED)),
            ("scaler", StandardScaler()),
            ("rf", RandomForestClassifier(n_estimators=200, max_depth=d, min_samples_leaf=2, class_weight="balanced_subsample", random_state=SEED)),
        ])
        cv_preds = cross_val_predict(test_pipe, X_train, y_train, cv=cv, groups=groups_train, method="predict", n_jobs=-1)
        depth_cv_f1.append(f1_score(y_train, cv_preds))
        
        test_pipe.fit(X_train, y_train)
        test_preds_d = test_pipe.predict(X_test)
        depth_test_f1.append(f1_score(y_test, test_preds_d))

    fig, ax = plt.subplots(figsize=(8, 5))
    ax.plot(depths, depth_cv_f1, marker="o", label="Grouped CV F1", color="darkorange", linewidth=2)
    ax.plot(depths, depth_test_f1, marker="s", label="Test F1 (Default Thresh)", color="steelblue", linestyle="--")
    ax.set_title("Hyperparameter Sensitivity: F1 vs Random Forest Max Depth", fontsize=12, fontweight="bold")
    ax.set_xlabel("Max Depth")
    ax.set_ylabel("F1 Score")
    ax.legend()
    ax.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.savefig(ROOT / "parameter_sensitivity_depth.png", dpi=150)
    plt.close()

    # 3. Confusion Matrix Plot
    fig, ax = plt.subplots(figsize=(6, 5))
    from sklearn.metrics import confusion_matrix
    cm = confusion_matrix(y_test, primary_preds)
    sns.heatmap(cm, annot=True, fmt="d", cmap="Oranges", ax=ax, cbar=False,
                xticklabels=["Early Exit", "Cinderella"], yticklabels=["Early Exit", "Cinderella"])
    ax.set_xlabel("Predicted Label")
    ax.set_ylabel("True Label")
    ax.set_title("Confusion Matrix (Tuned Random Forest Test Set)", fontsize=12, fontweight="bold")
    plt.tight_layout()
    plt.savefig(ROOT / "confusion_matrix_final_model.png", dpi=150)
    plt.close()

    # --- CASE STUDY ANALYSIS ---
    test_cases_df = test_df.copy()
    test_cases_df["ModelProb"] = primary_probs
    test_cases_df["ModelPred"] = primary_preds
    test_cases_df["BaselineProb"] = test_predictions["Baseline (KenPom)"][0]
    test_cases_df["BaselinePred"] = test_predictions["Baseline (KenPom)"][1]

    case_studies = []
    notable_teams = [
        (2022, "St Peter's"),
        (2022, "Iowa St"),
        (2023, "F Dickinson"),
        (2023, "Princeton"),
        (2024, "NC State"),
        (2024, "Oakland"),
    ]
    
    print("\nRunning Case Studies on Test Set...")
    for season, name in notable_teams:
        row = test_cases_df[(test_cases_df["Season"] == season) & (test_cases_df["TeamName"].str.contains(name, case=False))]
        if not row.empty:
            r = row.iloc[0]
            case_studies.append({
                "season": int(r.Season),
                "teamName": str(r.TeamName),
                "seed": int(r.SeedInt),
                "actual": "Cinderella" if r.Cinderella == 1 else "Early Exit",
                "pomRank": int(r.PreTourneyRank),
                "modelProb": float(r.ModelProb),
                "modelPred": "Cinderella" if r.ModelPred == 1 else "Early Exit",
                "baseProb": float(r.BaselineProb),
                "basePred": "Cinderella" if r.BaselinePred == 1 else "Early Exit",
                "pace": float(r.Pace),
                "threeRate": float(r.ThreePointRate),
                "threePct": float(r.ThreePointPct),
                "efg": float(r.EffectiveFGPct),
            })
            print(f"{r.Season} {r.TeamName} (Seed {r.SeedInt}): Actual={r.Cinderella}, RF Prob={r.ModelProb:.4f}, POM Prob={r.BaselineProb:.4f}")

    # --- EXPORT MODEL DATA ---
    print("\nSerializing and exporting models to Javascript...")
    
    scaler_step = best_rf.named_steps["scaler"]
    pca_mean = fitted_pca.mean_.tolist()
    pca_loadings = fitted_pca.components_.tolist()

    lr_clf = best_lr.named_steps["logit"]
    lr_data = {
        "coef": lr_clf.coef_[0].tolist(),
        "intercept": float(lr_clf.intercept_[0])
    }

    pca_lr_clf = best_pca_lr.named_steps["logit"]
    pca_lr_data = {
        "coef": pca_lr_clf.coef_[0].tolist(),
        "intercept": float(pca_lr_clf.intercept_[0])
    }

    rf_clf = best_rf.named_steps["rf"]
    rf_trees = serialize_rf(rf_clf)

    gbm_clf = best_gbm.named_steps["gbm"]
    gbm_serialized = serialize_gbm(gbm_clf, X_train)

    challenge_cases = []
    cindy_rows = test_cases_df[test_cases_df["Cinderella"] == 1]
    exit_rows = test_cases_df[test_cases_df["Cinderella"] == 0].sample(n=12, random_state=SEED)
    combined_cases = pd.concat([cindy_rows, exit_rows]).sample(frac=1.0, random_state=SEED)

    for _, r in combined_cases.iterrows():
        # Get probabilities for other models
        team_idx_test = test_cases_df[test_cases_df["TeamID"] == r.TeamID].index[0]
        pos_in_test = test_cases_df.index.get_loc(team_idx_test)
        
        challenge_cases.append({
            "season": int(r.Season),
            "teamId": int(r.TeamID),
            "teamName": str(r.TeamName),
            "seed": int(r.SeedInt),
            "actualLabel": int(r.Cinderella),
            "features": {col: float(r[col]) for col in feature_columns},
            "modelProbabilities": {
                "Baseline": float(r.BaselineProb),
                "Logistic Regression": float(test_predictions["Logistic Regression"][0][pos_in_test]),
                "Random Forest": float(r.ModelProb),
                "Gradient Boosting": float(test_predictions["Gradient Boosting"][0][pos_in_test]),
                "PCA + Logistic Regression": float(test_predictions["PCA + Logistic Regression"][0][pos_in_test]),
            }
        })

    feature_stats = []
    for col in feature_columns:
        feature_stats.append({
            "key": col,
            "label": col,
            "min": float(train_df[col].min()),
            "max": float(train_df[col].max()),
            "mean": float(train_df[col].mean()),
            "median": float(train_df[col].median()),
            "step": 1.0 if col in {"SeedInt", "PreTourneyRank"} else 0.001 if "Rate" in col or "Pct" in col or "WinPct" in col else 0.1
        })

    payload = {
        "version": "2.0.0",
        "featureColumns": feature_columns,
        "scaler": {
            "mean": scaler_step.mean_.tolist(),
            "scale": scaler_step.scale_.tolist(),
        },
        "pca": {
            "playStyleIndices": play_style_indices,
            "contextIndices": context_indices,
            "mean": pca_mean,
            "loadings": pca_loadings,
        },
        "thresholds": oof_thresholds,
        "models": {
            "baseline": {
                "feature": "PreTourneyRank",
                "mean": float(best_baseline.named_steps["scaler"].mean_[0]),
                "scale": float(best_baseline.named_steps["scaler"].scale_[0]),
                "coef": float(best_baseline.named_steps["logit"].coef_[0][0]),
                "intercept": float(best_baseline.named_steps["logit"].intercept_[0]),
            },
            "logisticRegression": lr_data,
            "pcaLogisticRegression": pca_lr_data,
            "randomForest": {
                "trees": rf_trees,
                "nEstimators": len(rf_trees)
            },
            "gradientBoosting": gbm_serialized
        },
        "metrics": test_metrics,
        "featureStats": feature_stats,
        "challengeCases": challenge_cases,
        "caseStudies": case_studies
    }

    OUTPUT_PATH.write_text("window.CINDERELLA_MODEL = " + json.dumps(payload, indent=2) + ";\n", encoding="utf-8")
    print(f"\nWrote model parameters and metadata to {OUTPUT_PATH}")

if __name__ == "__main__":
    main()
