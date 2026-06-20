# NCAA March Madness Cinderella Anomaly Detection

### 🔗 Live Interactive App: [ncaa-basketball-ml-cinderella.vercel.app](https://ncaa-basketball-ml-cinderella.vercel.app)
### By: Hannah Gonzalez and Janie Chan
Originally made for DSC148 class but then revamped for a better model and working demo after essential feedback.
---

## 1. Project Overview

This project frames the prediction of **Cinderella upsets** in the NCAA Division I Men's Basketball Tournament as a **binary anomaly-detection problem**. 

A **Cinderella** is defined as a team seeded **11 to 16** that wins at least 2 tournament games to advance to the **Sweet 16** or further. Rather than treating these runs as random chaos, we test the hypothesis that regular-season play-style metrics carry predictive signal (a "Giant-Killer Footprint") beyond public expert ratings (KenPom).

To keep the evaluation grounded:
1. We enforce a strict **chronological split** (2003–2021 train, 2022–2026 test).
2. We fit **StandardScaler** and **SMOTE** (for class imbalance) *strictly* on training folds during cross-validation to avoid data leakage.
3. We compare all results against a **KenPom-only Logistic Baseline** model.

---

## 2. Feature Engineering & Latent Factors (PCA)

We engineered **13 play-style metrics** representing the tactical fingerprint of a team (Pace, Three-Point Rate, Three-Point Pct, Effective FG%, Turnover Rate, Offensive Rebound Rate, Free Throw Rate, win margins, etc.).

To address high-dimensionality and identify latent features, we applied **Principal Component Analysis (PCA)** to these 13 play-style metrics. PCA yielded **3 Latent Play-Style Factors** representing:
- **PC1 (39.5% Variance explained - Net Quality)**: Strongly loaded on win percentage, overall offensive efficiency, and scoring margins.
- **PC2 (21.3% Variance explained - Perimeter reliance)**: Strongly loaded on three-point volume and defensive efficiency, with negative loadings on inside play.
- **PC3 (10.4% Variance explained - Inside Attacking)**: Strongly loaded on pace, free-throw rate, and paint efficiency; negative loading on three-point volume.

---

## 3. Model Results & Performance

We evaluated five distinct classifiers on the held-out test years (2022–2026). Decision thresholds were optimized using Out-Of-Fold (OOF) cross-validation predictions.

### Comparative Metrics Table

| Model Name | Test F1-Score | Test Precision | Test Recall | Optimized Decision Threshold |
| :--- | :---: | :---: | :---: | :---: |
| **Baseline (KenPom Rank Only)** | 0.0870 | 0.0667 | 0.1250 | 0.717 |
| **Logistic Regression (Full features)** | 0.2128 | 0.1282 | 0.6250 | 0.597 |
| **PCA + Logistic Regression** 🏆 | **0.2500** | **0.1562** | **0.6250** | **0.696** |
| **Gradient Boosting Classifier** | 0.2381 | 0.1471 | 0.6250 | 0.442 |
| **Random Forest Classifier (Tuned)** | 0.1786 | 0.1042 | 0.6250 | 0.356 |

### Findings & Discussion
- The **PCA + Logistic Regression** model achieved the highest test F1-score of **0.2500**, which is a **+187.3% relative improvement** over the baseline model.
- The play-style models successfully flagged **5 of the 8 historical Cinderella runs** (62.5% recall) in the test set.
- Re-scaling and dimensionality reduction via PCA successfully de-biased the classifiers from SMOTE-induced noise, dramatically reducing false positive rates.

---

## 4. Repository Structure

The repository is organized cleanly as follows:
```
├── demo/                  # Interactive static web application
│   ├── index.html         # Light-themed HTML5 dashboard
│   ├── style.css          # Customized Light CSS (NCAA blue & orange)
│   ├── app.js             # Client-side ML evaluation & gameplay controller
│   ├── vercel.json        # Clean URLs and headers configuration for Vercel
│   ├── model-data.js      # Serialized model coefficients, trees, and loadings
│   └── *.png              # Large diagnostic plots (Threshold, Depth, Matrix)
│
├── ml_code/               # Python Model Development
│   ├── train_model.py     # Main model training and export script
│   ├── train_models_all.py# Script copy for pipeline reference
│   └── testing.ipynb      # Code scratchpad
│
├── images/                # Historical and Exploratory EDA figures
│   └── *.png              # Plots for points per game, pairings, seed rates
│
├── march-machine-learning-mania-2026/  # Raw Kaggle Datasets (csv files)
│
├── ncaa_basketball_ml.ipynb # Clean Jupyter Notebook showing EDA & models
└── requirements.txt       # Python package dependency manifest
```

---

## 5. Local Reproduction

To retrain the models and regenerate all figures/weights, execute the following commands:

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run model pipeline script
python ml_code/train_model.py
```
This script will retrain the models, conduct cross-validation, save the updated sensitivity plots to `demo/`, and serialize the model weights directly to `demo/model-data.js`.

---

## 6. Vercel Deployment

The frontend app is completely static, loading and executing all ML evaluations client-side. To deploy it to Vercel:
1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Set the **Root Directory** setting to `demo` (so only the frontend files are uploaded, avoiding the raw data files).
3. Leave all build settings at their defaults and click **Deploy**.
