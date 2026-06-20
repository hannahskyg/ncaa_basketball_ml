window.CINDERELLA_MODEL = {
  "version": "2.0.0",
  "featureColumns": [
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
    "RegularSeasonMargin"
  ],
  "scaler": {
    "mean": [
      12.652714556521646,
      80.05104968534923,
      67.74572911730534,
      0.3448906895030374,
      0.3573918266665299,
      0.5157996029379863,
      0.18688735542957793,
      0.1615002311065494,
      0.3727833766951976,
      6.1366960946657,
      0.6956804024337904,
      107.15889529736972,
      98.06614508223471,
      0.6956804024337904,
      6.1366960946657
    ],
    "scale": [
      1.7133143147680667,
      56.97304477525864,
      3.0721712101510126,
      0.04831306565149912,
      0.024850947421171585,
      0.02460598964248051,
      0.021367862271459984,
      0.02013895977863738,
      0.04991351449154672,
      3.494026958748126,
      0.09026226812416804,
      4.193555922894195,
      4.089437079583019,
      0.09026226812416804,
      3.494026958748126
    ]
  },
  "pca": {
    "playStyleIndices": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ],
    "contextIndices": [
      0,
      1
    ],
    "mean": [
      -8.083019712170268e-15,
      -7.788947215267317e-15,
      -2.6355254046761658e-14,
      9.915011888822427e-15,
      7.502822623686069e-15,
      -7.773051404623915e-15,
      3.1791621286805376e-15,
      2.7261315253435613e-15,
      -1.2637169461505137e-15,
      -3.7736654467437985e-14,
      1.430622957906242e-16,
      -1.2637169461505137e-15,
      2.7261315253435613e-15
    ],
    "loadings": [
      [
        -0.056422840801222084,
        0.14270838474765657,
        0.2572012624082856,
        0.3337430913355351,
        -0.15919305910934833,
        -0.14291041235167135,
        -0.11197578724303052,
        0.3884294223023776,
        0.38858044082911236,
        0.337431703211709,
        -0.1516738015005858,
        0.38858044082911236,
        0.3884294223023776
      ],
      [
        0.043940481695432056,
        0.334241743314619,
        0.2861037988938223,
        0.24431282756925976,
        -0.2979732321769023,
        -0.4290122839454811,
        -0.26337750914156494,
        -0.23359246324055796,
        -0.18118264457780767,
        0.15464942733035958,
        0.45155135468152985,
        -0.18118264457780767,
        -0.23359246324055807
      ],
      [
        0.4082932201846532,
        -0.3219159922588056,
        0.15041241377738535,
        0.154188337503669,
        -0.030146497457703064,
        0.2867029575933155,
        0.4891828125485047,
        0.04687068062144828,
        -0.05956030809871979,
        0.42207149823808277,
        0.4137978367679064,
        -0.05956030809871976,
        0.046870680621448446
      ]
    ]
  },
  "thresholds": {
    "Baseline (KenPom)": 0.717420710000933,
    "Logistic Regression": 0.5973642926311519,
    "Random Forest": 0.3555581711702675,
    "Gradient Boosting": 0.441905860557488,
    "PCA + Logistic Regression": 0.6963600077106156
  },
  "models": {
    "baseline": {
      "feature": "PreTourneyRank",
      "mean": 80.06606886393685,
      "scale": 57.03615792759908,
      "coef": -2.1551866721575474,
      "intercept": -0.3952755379550907
    },
    "logisticRegression": {
      "coef": [
        -0.9952794992461381,
        -1.38680397392114,
        -0.06775029259271052,
        0.22771742284956276,
        0.06695279720936514,
        -0.36743929057278396,
        -0.10232272368732954,
        -0.09246520423769329,
        -0.43458862733747367,
        -0.13101687676964,
        -0.048267528247755105,
        -0.024749941994092802,
        0.1289369103501804,
        -0.048267528247755966,
        -0.13101687676964255
      ],
      "intercept": -0.38447465733087954
    },
    "pcaLogisticRegression": {
      "coef": [
        -0.21990594963251062,
        0.41985366093242144,
        -0.3969446110206333,
        -0.8193820124080813,
        -2.1661741904659224
      ],
      "intercept": -0.5271009373199904
    },
    "randomForest": {
      "trees": [
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.6751351952552795
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.5231269001960754
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2,
              0.8
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7857142857142857,
              0.21428571428571427
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": -1.3447588682174683
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.42857142857142855,
              0.5714285714285714
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9770992366412213,
              0.022900763358778626
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": -0.1190185397863388
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": 0.2838471829891205
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3620689655172414,
              0.6379310344827587
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 11,
            "threshold": -0.8502368628978729
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 2,
            "threshold": -2.493301510810852
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25,
              0.75
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 1,
            "threshold": -0.0034253372868988663
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5952380952380952,
              0.40476190476190477
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9823008849557522,
              0.017699115044247787
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 2,
            "threshold": 0.6308481395244598
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 5,
            "threshold": 0.23335683345794678
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.229607250755287,
              0.770392749244713
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4959016393442623,
              0.5040983606557377
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 13,
            "threshold": 0.5988679230213165
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5535714285714286,
              0.44642857142857145
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.6368662118911743
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 14,
            "threshold": -0.9676981866359711
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": -0.3789929002523422
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.38235294117647056,
              0.6176470588235294
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17286652078774617,
              0.8271334792122538
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9383561643835616,
              0.06164383561643835
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 9,
            "threshold": 0.30432046949863434
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": 0.25832609087228775
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7297297297297297,
              0.2702702702702703
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 0,
            "threshold": 0.1654340848326683
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2619047619047619,
              0.7380952380952381
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9523809523809523,
              0.047619047619047616
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 14,
            "threshold": -0.8060857653617859
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": -0.2750357985496521
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": -1.460429847240448
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.38,
              0.62
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.3790443241596222
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4,
              0.6
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.989010989010989,
              0.01098901098901099
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 1.7881723046302795
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": -0.1634022518992424
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25,
              0.75
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8969072164948454,
              0.10309278350515463
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 13,
            "threshold": -1.460429847240448
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 1,
            "threshold": -0.10720596089959145
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 8,
            "threshold": 1.4174687266349792
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.22777777777777777,
              0.7722222222222223
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7,
              0.3
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 13,
            "threshold": -1.2174280881881714
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3793103448275862,
              0.6206896551724138
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9007936507936508,
              0.0992063492063492
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 10,
            "threshold": -1.4030826091766357
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 11,
            "threshold": 0.1454121470451355
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 3,
            "threshold": 2.046572506427765
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.22082585278276481,
              0.7791741472172352
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 9,
            "threshold": -0.3162374198436737
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9375,
              0.0625
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.993103448275862,
              0.006896551724137931
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 1,
            "threshold": -0.4229247272014618
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.7419136762619019
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 7,
            "threshold": 1.5336801409721375
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17892156862745098,
              0.821078431372549
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9090909090909091,
              0.09090909090909091
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 3,
            "threshold": -0.36842386424541473
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 0,
            "threshold": -0.08913400024175644
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8235294117647058,
              0.17647058823529413
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 4,
            "threshold": 1.884043276309967
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.717607973421927,
              0.2823920265780731
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1,
              0.9
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.6331337690353394
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": 0.6751351952552795
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.06343283582089553,
              0.9365671641791045
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5172413793103449,
              0.4827586206896552
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 12,
            "threshold": -0.37926094233989716
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6052631578947368,
              0.39473684210526316
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.23497267759562843,
              0.7650273224043715
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 10,
            "threshold": -0.26713016629219055
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": -1.3162344098091125
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1875,
              0.8125
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9801324503311258,
              0.019867549668874173
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 7,
            "threshold": 0.3460560292005539
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9811320754716981,
              0.018867924528301886
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 5,
            "threshold": -1.8089040517807007
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 6,
            "threshold": 0.6735149323940277
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3421516754850088,
              0.6578483245149912
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7730061349693251,
              0.22699386503067484
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 0,
            "threshold": -0.4758424907922745
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 7,
            "threshold": 0.2165551818907261
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.05263157894736842,
              0.9473684210526315
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 14,
            "threshold": -0.5928804278373718
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8333333333333334,
              0.16666666666666666
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9857142857142858,
              0.014285714285714285
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": -0.2140280231833458
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.8150039315223694
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1748971193415638,
              0.8251028806584362
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9166666666666666,
              0.08333333333333333
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": 1.330393135547638
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.17351924628019333
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": -0.23485028743743896
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2542372881355932,
              0.7457627118644068
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 10,
            "threshold": -0.3705805540084839
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8898305084745762,
              0.11016949152542373
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9887005649717514,
              0.011299435028248588
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 6,
            "threshold": 0.6392790675163269
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 4,
            "threshold": -1.5214711427688599
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 11,
            "threshold": -1.0970260500907898
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9545454545454546,
              0.045454545454545456
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3665086887835703,
              0.6334913112164297
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 8,
            "threshold": -0.29733623564243317
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 12,
            "threshold": -0.0005318167386576533
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4418604651162791,
              0.5581395348837209
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 1,
            "threshold": -0.3014746606349945
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7837837837837838,
              0.21621621621621623
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 2,
            "threshold": 0.8794845640659332
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 0.6722665131092072
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16820276497695852,
              0.8317972350230415
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9788732394366197,
              0.02112676056338028
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.45,
              0.55
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9895833333333334,
              0.010416666666666666
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": -0.6574818789958954
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 7,
            "threshold": 0.35101786255836487
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5555555555555556,
              0.4444444444444444
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.06896551724137931,
              0.9310344827586207
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 5,
            "threshold": -0.061063521541655064
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.78125,
              0.21875
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.6295403838157654
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17303822937625754,
              0.8269617706237424
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7777777777777778,
              0.2222222222222222
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": -0.46722424030303955
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.45,
              0.55
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 2.174198031425476
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 2,
            "threshold": 0.8516523540019989
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9848484848484849,
              0.015151515151515152
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8909090909090909,
              0.10909090909090909
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 5,
            "threshold": 0.8554642498493195
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2222222222222222,
              0.7777777777777778
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.6381115317344666
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 4,
            "threshold": -1.3389723300933838
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": -1.003744751214981
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": 0.17182724177837372
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.21544715447154472,
              0.7845528455284553
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9147727272727273,
              0.08522727272727272
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -0.19150502979755402
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17142857142857143,
              0.8285714285714286
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.896551724137931,
              0.10344827586206896
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 12,
            "threshold": -1.6779162883758545
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5714285714285714,
              0.42857142857142855
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.952,
              0.048
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17182724177837372
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": 1.3055595755577087
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.600996732711792
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.22244488977955912,
              0.7775551102204409
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -0.15238437056541443
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3448275862068966,
              0.6551724137931034
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 2.1310540437698364
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": -0.09429536014795303
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9939024390243902,
              0.006097560975609756
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9096774193548387,
              0.09032258064516129
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 6,
            "threshold": -1.3613792657852173
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1111111111111111,
              0.8888888888888888
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 13,
            "threshold": -1.422778844833374
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 6,
            "threshold": 0.7125760614871979
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 11,
            "threshold": -1.0958023071289062
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9666666666666667,
              0.03333333333333333
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.36450079239302696,
              0.6354992076069731
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 5,
            "threshold": -0.7775606215000153
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.48214285714285715,
              0.5178571428571429
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9354838709677419,
              0.06451612903225806
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 13,
            "threshold": -1.3253481984138489
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 7,
            "threshold": -0.9583137333393097
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 1.6618582010269165
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 8,
            "threshold": 0.9273312985897064
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 11,
            "threshold": 1.23256254196167
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3967479674796748,
              0.6032520325203252
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8035714285714286,
              0.19642857142857142
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 6,
            "threshold": -0.1228967048227787
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4696969696969697,
              0.5303030303030303
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9545454545454546,
              0.045454545454545456
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 9,
            "threshold": -0.8649594783782959
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 13,
            "threshold": -1.460429847240448
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 0,
            "threshold": -0.08913400024175644
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.38235294117647056,
              0.6176470588235294
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8717948717948718,
              0.1282051282051282
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 8,
            "threshold": 0.5268330276012421
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15550239234449761,
              0.8444976076555024
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.36,
              0.64
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 4,
            "threshold": -0.956324964761734
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9583333333333334,
              0.041666666666666664
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9937106918238994,
              0.006289308176100629
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": -1.7336782217025757
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17485265225933203,
              0.825147347740668
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 1.1851404309272766
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5609756097560976,
              0.43902439024390244
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 4,
            "threshold": 0.41252993047237396
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": 0.9847303330898285
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9822485207100592,
              0.01775147928994083
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8888888888888888,
              0.1111111111111111
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -1.443234920501709
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25,
              0.75
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9752066115702479,
              0.024793388429752067
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 14,
            "threshold": -0.9249571561813354
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": -0.18397176265716553
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": 1.1700080633163452
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17391304347826086,
              0.8260869565217391
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.96,
              0.04
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 0,
            "threshold": -0.3862897753715515
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1574585635359116,
              0.8425414364640884
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.35795454545454547,
              0.6420454545454546
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 6,
            "threshold": -0.6268222033977509
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9302325581395349,
              0.06976744186046512
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9937106918238994,
              0.006289308176100629
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 9,
            "threshold": -0.846433162689209
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 13,
            "threshold": -1.460429847240448
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 13,
            "threshold": -0.5597059726715088
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5176470588235295,
              0.4823529411764706
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 10,
            "threshold": -0.21941077709197998
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 5,
            "threshold": 0.6710804998874664
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.18723404255319148,
              0.8127659574468085
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 0,
            "threshold": 0.17351924628019333
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2607260726072607,
              0.7392739273927392
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 3,
            "threshold": -1.7952923774719238
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 10,
            "threshold": 1.862003743648529
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20695970695970695,
              0.793040293040293
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 11,
            "threshold": 0.10238442942500114
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 11,
            "threshold": -1.339997410774231
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9133333333333333,
              0.08666666666666667
            ]
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": -0.10720596089959145
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 12,
            "threshold": -1.8316432237625122
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": -0.39209316670894623
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -0.19662511348724365
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14184397163120568,
              0.8581560283687943
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.36538461538461536,
              0.6346153846153846
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 12,
            "threshold": 0.10717695951461792
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 2,
            "threshold": 0.8464304506778717
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9917355371900827,
              0.008264462809917356
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9090909090909091,
              0.09090909090909091
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 2,
            "threshold": -0.2760952115058899
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6724137931034483,
              0.3275862068965517
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9047619047619048,
              0.09523809523809523
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 13,
            "threshold": -1.3096020817756653
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.7074469923973083
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 12,
            "threshold": 1.0313559472560883
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3333333333333333,
              0.6666666666666666
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 1,
            "threshold": 0.08569929748773575
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.27058823529411763,
              0.7294117647058823
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9166666666666666,
              0.08333333333333333
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 9,
            "threshold": -0.30700506269931793
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9024390243902439,
              0.0975609756097561
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 9,
            "threshold": -0.8229217827320099
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": -0.47836191952228546
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 4,
            "threshold": 0.9932356178760529
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6470588235294118,
              0.35294117647058826
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": -0.9892593622207642
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.43478260869565216,
              0.5652173913043478
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9789473684210527,
              0.021052631578947368
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 11,
            "threshold": 1.6101939678192139
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.22587268993839835,
              0.7741273100616016
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7777777777777778,
              0.2222222222222222
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.130647175014019
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9042553191489362,
              0.09574468085106383
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.6392790675163269
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.23054830729961395
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15813953488372093,
              0.8418604651162791
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9047619047619048,
              0.09523809523809523
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": -1.11849445104599
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.75,
              0.25
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 11,
            "threshold": -0.01112824585288763
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.35185185185185186,
              0.6481481481481481
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 12,
            "threshold": -1.6483646631240845
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9090909090909091,
              0.09090909090909091
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9917355371900827,
              0.008264462809917356
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 1,
            "threshold": -0.1650077998638153
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.17351924628019333
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0415080785751343
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.18995633187772926,
              0.8100436681222707
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6,
              0.4
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 5,
            "threshold": -0.5153665542602539
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.36363636363636365,
              0.6363636363636364
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9215686274509803,
              0.0784313725490196
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 6,
            "threshold": -1.3613792657852173
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.631578947368421,
              0.3684210526315789
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9752066115702479,
              0.024793388429752067
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 14,
            "threshold": -0.8699719905853271
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.7074469923973083
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 11,
            "threshold": 0.05191965401172638
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0967741935483871,
              0.9032258064516129
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 5,
            "threshold": 0.6258934140205383
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6875,
              0.3125
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 1.7905851602554321
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": -0.21590612083673477
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.24180327868852458,
              0.7581967213114754
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.47844827586206895,
              0.521551724137931
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.6722665131092072
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 14,
            "threshold": -0.9713990986347198
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": -1.4030826091766357
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7547169811320755,
              0.24528301886792453
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 0.8341463506221771
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.30828516377649323,
              0.6917148362235067
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6696428571428571,
              0.33035714285714285
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -0.18661479651927948
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.27586206896551724,
              0.7241379310344828
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8636363636363636,
              0.13636363636363635
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 2,
            "threshold": 0.4074511229991913
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.859375,
              0.140625
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": 0.09564084932208061
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.4250824749469757
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.1654340848326683
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.18706697459584296,
              0.812933025404157
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": 0.002603065688163042
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3813559322033898,
              0.6186440677966102
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 2,
            "threshold": 1.7020730376243591
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 7,
            "threshold": -0.4678678512573242
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9152542372881356,
              0.0847457627118644
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 14,
            "threshold": -1.1325398683547974
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15384615384615385,
              0.8461538461538461
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": -0.10720596089959145
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 0.24009545147418976
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": -1.7336782217025757
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1357142857142857,
              0.8642857142857143
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.6052285432815552
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.33076923076923076,
              0.6692307692307692
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5208333333333334,
              0.4791666666666667
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.1097204266116023
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": 0.2338743805885315
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.19230769230769232,
              0.8076923076923077
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": 1.4546518325805664
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.625,
              0.375
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 11,
            "threshold": -0.8464564681053162
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 7,
            "threshold": -0.2051803171634674
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2222222222222222,
              0.7777777777777778
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 11,
            "threshold": -0.8805880546569824
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8333333333333334,
              0.16666666666666666
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.17182724177837372
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": -0.3862897753715515
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17032967032967034,
              0.8296703296703297
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3902439024390244,
              0.6097560975609756
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 9,
            "threshold": -1.1102138757705688
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7058823529411765,
              0.29411764705882354
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9791666666666666,
              0.020833333333333332
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 2,
            "threshold": 0.9977487623691559
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 9,
            "threshold": -0.8781266510486603
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.7074469923973083
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25,
              0.75
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": 0.6368662118911743
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.31861804222648754,
              0.6813819577735125
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7647058823529411,
              0.23529411764705882
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 10,
            "threshold": 0.5988679230213165
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": 0.5245820581912994
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8152173913043478,
              0.18478260869565216
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 8,
            "threshold": 0.9274380207061768
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": -0.8936707079410553
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": -0.44426077604293823
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5116279069767442,
              0.4883720930232558
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9344262295081968,
              0.06557377049180328
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 5,
            "threshold": 0.1544049009680748
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2619047619047619,
              0.7380952380952381
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4930555555555556,
              0.5069444444444444
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": -0.45447249710559845
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 9,
            "threshold": 1.3567930459976196
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2,
              0.8
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 9,
            "threshold": -0.8968018293380737
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": 0.10677364096045494
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": -0.9181441962718964
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 11,
            "threshold": 0.06710755079984665
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9915966386554622,
              0.008403361344537815
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3333333333333333,
              0.6666666666666666
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": 0.9024691879749298
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": 1.5231269001960754
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.32698961937716264,
              0.6730103806228374
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.75,
              0.25
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": -0.6415498852729797
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2692307692307692,
              0.7307692307692307
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9487179487179487,
              0.05128205128205128
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 9,
            "threshold": -0.8406656980514526
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 14,
            "threshold": -1.8074467182159424
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.768,
              0.232
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 5,
            "threshold": 0.10337361693382263
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 2,
            "threshold": -0.5333778262138367
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7,
              0.3
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2476489028213166,
              0.7523510971786834
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 0,
            "threshold": 0.11380924470722675
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.32051282051282054,
              0.6794871794871795
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9736842105263158,
              0.02631578947368421
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 13,
            "threshold": -1.460429847240448
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 6,
            "threshold": 0.6275818347930908
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20710059171597633,
              0.7928994082840237
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8961038961038961,
              0.1038961038961039
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 12,
            "threshold": -1.2463919520378113
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5476190476190477,
              0.4523809523809524
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.910958904109589,
              0.08904109589041095
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 9,
            "threshold": -0.8649594783782959
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 13,
            "threshold": -1.460429847240448
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 2,
            "threshold": -1.0477541089057922
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3333333333333333,
              0.6666666666666666
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8390804597701149,
              0.16091954022988506
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 1,
            "threshold": -0.21490813046693802
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 6,
            "threshold": 0.6751351952552795
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.23318385650224216,
              0.7668161434977578
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6212121212121212,
              0.3787878787878788
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 14,
            "threshold": -0.7317535579204559
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2727272727272727,
              0.7272727272727273
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9405940594059405,
              0.0594059405940594
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 10,
            "threshold": -1.422778844833374
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 1,
            "threshold": -0.17786197364330292
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 8,
            "threshold": 0.810065895318985
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1670428893905192,
              0.8329571106094809
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.44680851063829785,
              0.5531914893617021
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 13,
            "threshold": -1.2174280881881714
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2,
              0.8
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8697183098591549,
              0.13028169014084506
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 12,
            "threshold": -1.7325568199157715
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.625,
              0.375
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2180746561886051,
              0.7819253438113949
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": 0.8129640221595764
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -1.7032155394554138
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": -1.0600380897521973
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 6,
            "threshold": -1.022909939289093
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8333333333333334,
              0.16666666666666666
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9801324503311258,
              0.019867549668874173
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 9,
            "threshold": -0.8463472425937653
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 9,
            "threshold": -1.8063002824783325
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 9,
            "threshold": -1.700384497642517
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3333333333333333,
              0.6666666666666666
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7851239669421488,
              0.21487603305785125
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 13,
            "threshold": -0.3298386484384537
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 1,
            "threshold": -0.425850585103035
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.10404624277456648,
              0.8959537572254336
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.803921568627451,
              0.19607843137254902
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 9,
            "threshold": -0.20188143104314804
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8181818181818182,
              0.18181818181818182
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4724220623501199,
              0.5275779376498801
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 9,
            "threshold": -0.9249571561813354
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 1.27280592918396
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": -0.49828101694583893
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3684210526315789,
              0.631578947368421
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 7,
            "threshold": -2.4183928966522217
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": 0.7419025003910065
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": -0.2140280231833458
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.19098712446351931,
              0.8090128755364807
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7647058823529411,
              0.23529411764705882
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 5,
            "threshold": -0.19265565276145935
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5121951219512195,
              0.4878048780487805
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9647058823529412,
              0.03529411764705882
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.7125760614871979
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.45906075835227966
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": -1.8339309692382812
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14285714285714285,
              0.8571428571428571
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": 0.20078559964895248
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9295774647887324,
              0.07042253521126761
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5520833333333334,
              0.4479166666666667
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 4,
            "threshold": -0.4690837264060974
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": 0.35388392210006714
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.47540983606557374,
              0.5245901639344263
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 11,
            "threshold": -0.882774144411087
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 7,
            "threshold": 0.36259204149246216
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": 0.1594301201403141
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.75,
              0.25
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.061012828402454033
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.13513513513513514,
              0.8648648648648649
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": 0.6368662118911743
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 2,
            "threshold": 1.006409764289856
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.31902985074626866,
              0.6809701492537313
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7582417582417582,
              0.24175824175824176
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 4,
            "threshold": -0.22929271310567856
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5238095238095238,
              0.47619047619047616
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9824561403508771,
              0.017543859649122806
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 14,
            "threshold": -0.8649594783782959
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": -1.6691856980323792
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": -1.1309685111045837
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.06666666666666667,
              0.9333333333333333
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": 1.2540833950042725
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5757575757575758,
              0.42424242424242425
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 11,
            "threshold": -0.8288236856460571
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": -0.8286769390106201
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5652173913043478,
              0.43478260869565216
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8913043478260869,
              0.10869565217391304
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 4,
            "threshold": 0.5030177384614944
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2736077481840194,
              0.7263922518159807
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6460905349794238,
              0.35390946502057613
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 0.6751351952552795
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.5186127424240112
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17256637168141592,
              0.827433628318584
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6756756756756757,
              0.32432432432432434
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 7,
            "threshold": -0.14293283969163895
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4264705882352941,
              0.5735294117647058
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": -1.3591827750205994
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": -1.3104418516159058
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 10,
            "threshold": -0.07869086787104607
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.946236559139785,
              0.053763440860215055
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 9,
            "threshold": -0.8968018293380737
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 1,
            "threshold": 0.10677364096045494
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2727272727272727,
              0.7272727272727273
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9834710743801653,
              0.01652892561983471
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 1,
            "threshold": 0.028745212592184544
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.19675456389452334,
              0.8032454361054767
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8421052631578947,
              0.15789473684210525
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 5,
            "threshold": 0.28705307841300964
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9327731092436975,
              0.06722689075630252
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 6,
            "threshold": 0.08862007781863213
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 10,
            "threshold": -1.4843278527259827
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 4,
            "threshold": -1.280448853969574
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9473684210526315,
              0.05263157894736842
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.296078431372549,
              0.703921568627451
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 14,
            "threshold": 0.7733884751796722
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 6,
            "threshold": 1.4212175607681274
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7129186602870813,
              0.28708133971291866
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9420289855072463,
              0.057971014492753624
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 10,
            "threshold": 1.5167524218559265
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3148148148148148,
              0.6851851851851852
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 11,
            "threshold": -0.8288236856460571
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 9,
            "threshold": 0.26312462240457535
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.13475803658366203
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5121951219512195,
              0.4878048780487805
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.990990990990991,
              0.009009009009009009
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": -0.7520600259304047
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15384615384615385,
              0.8461538461538461
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 10,
            "threshold": -0.3298386484384537
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": 0.09298103675246239
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14507772020725387,
              0.8549222797927462
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7377049180327869,
              0.26229508196721313
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 9,
            "threshold": 0.30711545050144196
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7272727272727273,
              0.2727272727272727
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.46254071661237783,
              0.5374592833876222
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0856192708015442
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": 1.344448983669281
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1750503018108652,
              0.8249496981891348
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7142857142857143,
              0.2857142857142857
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 7,
            "threshold": 0.6816862523555756
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9354838709677419,
              0.06451612903225806
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.13333333333333333,
              0.8666666666666667
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -0.9210180640220642
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": -1.0882766246795654
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.18181818181818182,
              0.8181818181818182
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7948717948717948,
              0.20512820512820512
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 4,
            "threshold": -0.5138677358627319
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.945054945054945,
              0.054945054945054944
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 11,
            "threshold": -0.7891568243503571
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 4,
            "threshold": -0.4150140881538391
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3076923076923077,
              0.6923076923076923
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 13,
            "threshold": -0.21590612083673477
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 12,
            "threshold": 1.787032663822174
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2366412213740458,
              0.7633587786259542
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 3,
            "threshold": -0.6156813204288483
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7636363636363637,
              0.23636363636363636
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.40336134453781514,
              0.5966386554621849
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 13,
            "threshold": -1.3253481984138489
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.7837898135185242
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": -1.4029426574707031
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.875,
              0.125
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 4,
            "threshold": -1.4080347418785095
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 9,
            "threshold": -0.7646574079990387
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.68,
              0.32
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 6,
            "threshold": 0.7683838605880737
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3596358118361153,
              0.6403641881638846
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7890625,
              0.2109375
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 9,
            "threshold": -0.8968018293380737
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": -0.41100452840328217
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 5,
            "threshold": -0.8959287703037262
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6376811594202898,
              0.36231884057971014
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 0.9394416511058807
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.75,
              0.25
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.08333333333333333,
              0.9166666666666666
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": -0.03591416962444782
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.22134387351778656,
              0.7786561264822134
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9390243902439024,
              0.06097560975609756
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": -1.1196354627609253
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.35,
              0.65
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9464285714285714,
              0.05357142857142857
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 11,
            "threshold": -0.8174992501735687
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 2,
            "threshold": -2.1438382863998413
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.42857142857142855,
              0.5714285714285714
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 0,
            "threshold": 0.17351924628019333
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 3,
            "threshold": -1.7952923774719238
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.21721311475409835,
              0.7827868852459017
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14285714285714285,
              0.8571428571428571
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9532710280373832,
              0.04672897196261682
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 2,
            "threshold": 0.8920634686946869
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 14,
            "threshold": -0.9012737274169922
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": -0.08557181805372238
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16,
              0.84
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.004086846864083782
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.24761904761904763,
              0.7523809523809524
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.905982905982906,
              0.09401709401709402
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 5,
            "threshold": 0.2917434573173523
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": -1.1196354627609253
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5185185185185185,
              0.48148148148148145
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8441558441558441,
              0.15584415584415584
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 6,
            "threshold": 0.6751351952552795
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 13,
            "threshold": -1.4047950506210327
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2739463601532567,
              0.7260536398467433
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9180327868852459,
              0.08196721311475409
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 1,
            "threshold": -0.1190185397863388
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 5,
            "threshold": -0.5744785070419312
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.19148936170212766,
              0.8085106382978723
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8260869565217391,
              0.17391304347826086
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 6,
            "threshold": 1.0891026258468628
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9722222222222222,
              0.027777777777777776
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.6331337690353394
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.7310166954994202
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.10819672131147541,
              0.8918032786885246
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": -1.393893539905548
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.32608695652173914,
              0.6739130434782609
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": -1.022909939289093
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 2,
            "threshold": 1.5959625840187073
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.92,
              0.08
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2,
              0.8
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.130647175014019
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9652173913043478,
              0.034782608695652174
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 10,
            "threshold": -1.4047950506210327
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 1,
            "threshold": -0.2140280231833458
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 9,
            "threshold": 1.9008238315582275
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20703125,
              0.79296875
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7619047619047619,
              0.23809523809523808
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5760869565217391,
              0.42391304347826086
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9417040358744395,
              0.05829596412556054
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 11,
            "threshold": -0.8747772872447968
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": 0.41117776930332184
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": 0.14187796041369438
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2857142857142857,
              0.7142857142857143
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 2,
            "threshold": 1.0049782991409302
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.18503118503118504,
              0.814968814968815
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.968944099378882,
              0.031055900621118012
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 14,
            "threshold": -0.5928804278373718
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5333333333333333,
              0.4666666666666667
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8048780487804879,
              0.1951219512195122
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.4744100123643875
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 5,
            "threshold": 0.199271522462368
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.42489178478717804
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.07964601769911504,
              0.9203539823008849
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6616541353383458,
              0.3383458646616541
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 0.2986792027950287
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.35714285714285715,
              0.6428571428571429
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8831168831168831,
              0.11688311688311688
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": 0.4671737998723984
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 4,
            "threshold": -0.11611593142151833
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4074074074074074,
              0.5925925925925926
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9310344827586207,
              0.06896551724137931
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.4472234547138214
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 14,
            "threshold": 1.0456817746162415
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.12539184952978055,
              0.8746081504702194
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.37681159420289856,
              0.6231884057971014
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": -0.3774038553237915
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5819672131147541,
              0.4180327868852459
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": -1.2907857298851013
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.8822333812713623
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7704918032786885,
              0.22950819672131148
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9928057553956835,
              0.007194244604316547
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 12,
            "threshold": 1.7700833678245544
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.11025412753224373
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.21686746987951808,
              0.7831325301204819
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9387755102040817,
              0.061224489795918366
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": 0.042844612151384354
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.40476190476190477,
              0.5952380952380952
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9629629629629629,
              0.037037037037037035
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 2,
            "threshold": 0.8920634686946869
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 13,
            "threshold": -1.3096020817756653
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 5,
            "threshold": 0.10980457067489624
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3278236914600551,
              0.6721763085399449
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5255972696245734,
              0.47440273037542663
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 0,
            "threshold": -0.4758424907922745
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 10,
            "threshold": -0.006304364651441574
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8666666666666667,
              0.13333333333333333
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1724137931034483,
              0.8275862068965517
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 10,
            "threshold": -0.07553452998399734
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7613636363636364,
              0.23863636363636365
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 14,
            "threshold": -0.9249571561813354
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": -0.3775240629911423
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": 1.216565191745758
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15384615384615385,
              0.8461538461538461
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 2,
            "threshold": 1.416136384010315
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 1,
            "threshold": 0.07808868959546089
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2722419928825623,
              0.7277580071174378
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9421487603305785,
              0.05785123966942149
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 3,
            "threshold": -1.4758244156837463
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2222222222222222,
              0.7777777777777778
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9622641509433962,
              0.03773584905660377
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.9647602438926697
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": -0.8507952392101288
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.11366930976510048
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.38461538461538464,
              0.6153846153846154
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9782608695652174,
              0.021739130434782608
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 0.6054761707782745
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2652671755725191,
              0.7347328244274809
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6496815286624203,
              0.3503184713375796
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 12,
            "threshold": -0.04692678712308407
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.38235294117647056,
              0.6176470588235294
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 13,
            "threshold": -0.37914036214351654
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9473684210526315,
              0.05263157894736842
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": 0.015287543646991253
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.5231269001960754
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0887171030044556
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2032520325203252,
              0.7967479674796748
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.875,
              0.125
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -0.5263655483722687
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -1.76673024892807
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": -2.0077309608459473
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": 0.05834296718239784
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8955223880597015,
              0.1044776119402985
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 4,
            "threshold": -1.603536605834961
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": -0.08913400024175644
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": 1.2028017342090607
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 2,
            "threshold": 1.0372802019119263
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1843687374749499,
              0.8156312625250501
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5789473684210527,
              0.42105263157894735
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 2,
            "threshold": 1.1504446864128113
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9772727272727273,
              0.022727272727272728
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7945205479452054,
              0.2054794520547945
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": -0.1634022518992424
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.5231269001960754
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 9,
            "threshold": -0.3991038501262665
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.07751937984496124,
              0.9224806201550387
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2585227272727273,
              0.7414772727272727
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -0.7332376539707184
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3684210526315789,
              0.631578947368421
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": -0.029246512800455093
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4107142857142857,
              0.5892857142857143
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": 2.236259341239929
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.978021978021978,
              0.02197802197802198
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5454545454545454,
              0.45454545454545453
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 13,
            "threshold": -1.4047950506210327
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 11,
            "threshold": -0.882774144411087
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 8,
            "threshold": -0.17732589691877365
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5365853658536586,
              0.4634146341463415
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9195402298850575,
              0.08045977011494253
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20669291338582677,
              0.7933070866141733
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9333333333333333,
              0.06666666666666667
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 10,
            "threshold": -1.422778844833374
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 2,
            "threshold": 1.0639386177062988
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 5,
            "threshold": 0.031246366910636425
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3448275862068966,
              0.6551724137931034
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5269461077844312,
              0.47305389221556887
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 3,
            "threshold": 2.0855538845062256
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8869565217391304,
              0.11304347826086956
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16666666666666666,
              0.8333333333333334
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": 1.7039626240730286
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": -1.7980396747589111
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1889763779527559,
              0.8110236220472441
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.8235216438770294
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.46153846153846156,
              0.5384615384615384
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 0.2518942207098007
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": -0.918701559305191
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 5,
            "threshold": 0.7649595737457275
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8571428571428571,
              0.14285714285714285
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": 1.7039626240730286
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0869392156600952
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.24615384615384617,
              0.7538461538461538
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6923076923076923,
              0.3076923076923077
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 7,
            "threshold": -0.7028873860836029
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9117647058823529,
              0.08823529411764706
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -1.9375187754631042
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": -0.7102657854557037
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25,
              0.75
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": 0.9937551617622375
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9568965517241379,
              0.04310344827586207
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 14,
            "threshold": -0.8649594783782959
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.021099388599395752
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 0.23783499747514725
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1111111111111111,
              0.8888888888888888
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 14,
            "threshold": -1.2457502484321594
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8163265306122449,
              0.1836734693877551
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": -0.14680016785860062
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.23228346456692914,
              0.7677165354330708
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9245283018867925,
              0.07547169811320754
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.043298495933413506
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7362637362637363,
              0.26373626373626374
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.058363597840070724
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.17182724177837372
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": -0.3817233443260193
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14285714285714285,
              0.8571428571428571
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3877551020408163,
              0.6122448979591837
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 9,
            "threshold": -0.5903550982475281
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7045454545454546,
              0.29545454545454547
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 12,
            "threshold": -1.0100446343421936
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14084507042253522,
              0.8591549295774648
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9117647058823529,
              0.08823529411764706
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 10,
            "threshold": -0.24167083203792572
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6790123456790124,
              0.32098765432098764
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9173553719008265,
              0.08264462809917356
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": -0.1634022518992424
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0415080785751343
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": 1.0874052047729492
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.21656050955414013,
              0.7834394904458599
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5714285714285714,
              0.42857142857142855
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 9,
            "threshold": 0.779056191444397
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5769230769230769,
              0.4230769230769231
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -0.031081185676157475
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": -0.23623833060264587
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5729166666666666,
              0.4270833333333333
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.92,
              0.08
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0857464671134949
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 12,
            "threshold": 0.2590494602918625
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.323943661971831,
              0.676056338028169
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.09767441860465116,
              0.9023255813953488
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": -0.5609073340892792
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.38095238095238093,
              0.6190476190476191
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 10,
            "feature": 2,
            "threshold": 0.49629761278629303
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 0,
            "threshold": 1.6618582010269165
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8243243243243243,
              0.17567567567567569
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": -1.3774887919425964
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 5,
            "threshold": 0.003069072961807251
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2,
              0.8
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1755424063116371,
              0.8244575936883629
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8461538461538461,
              0.15384615384615385
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -1.7446588277816772
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 7,
            "threshold": -2.460169792175293
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14285714285714285,
              0.8571428571428571
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 11,
            "threshold": -0.11901938915252686
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9521276595744681,
              0.047872340425531915
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.785184919834137
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": -1.7336782217025757
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8888888888888888,
              0.1111111111111111
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.21189591078066913,
              0.7881040892193308
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -1.3657050132751465
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3333333333333333,
              0.6666666666666666
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 13,
            "threshold": -0.24167083203792572
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": 1.7308565378189087
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9635036496350365,
              0.0364963503649635
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6428571428571429,
              0.35714285714285715
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 4,
            "threshold": -1.382089912891388
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.005078621208667755
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 7,
            "threshold": 0.585124671459198
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1111111111111111,
              0.8888888888888888
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 9,
            "threshold": -0.9713740348815918
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 1,
            "threshold": 0.10441692918539047
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3548387096774194,
              0.6451612903225806
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.945054945054945,
              0.054945054945054944
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 1,
            "threshold": -0.14680016785860062
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.24266144814090018,
              0.7573385518590998
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8527918781725888,
              0.14720812182741116
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 1,
            "threshold": 0.08569929748773575
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 9,
            "threshold": -0.17392870038747787
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17592592592592593,
              0.8240740740740741
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.37220843672456577,
              0.6277915632754343
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 7,
            "threshold": -1.9375187754631042
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 4,
            "threshold": 0.19943801872432232
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.125,
              0.875
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 5,
            "threshold": -0.09429536014795303
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9223300970873787,
              0.07766990291262135
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 11,
            "threshold": -0.9371821284294128
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.1654340848326683
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": -0.9181441962718964
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.09375,
              0.90625
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 9,
            "threshold": 0.1794575210660696
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8333333333333334,
              0.16666666666666666
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -0.056227169930934906
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.31666666666666665,
              0.6833333333333333
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 5,
            "threshold": 0.6448287069797516
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.45149253731343286,
              0.5485074626865671
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9827586206896551,
              0.017241379310344827
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 11,
            "threshold": -1.0987511277198792
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 14,
            "threshold": 0.38595496118068695
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 7,
            "threshold": -0.4834644943475723
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8426966292134831,
              0.15730337078651685
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 4,
            "threshold": -0.16049222648143768
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 1,
            "threshold": 0.14187796041369438
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.22105263157894736,
              0.7789473684210526
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9411764705882353,
              0.058823529411764705
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 6,
            "threshold": 0.7058447599411011
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4797687861271676,
              0.5202312138728323
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": 0.9167607128620148
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": 0.13310188427567482
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.19868995633187772,
              0.8013100436681223
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8333333333333334,
              0.16666666666666666
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": -0.10295204073190689
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.265625,
              0.734375
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 1.4546518325805664
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 2,
            "threshold": 0.6930325627326965
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9951219512195122,
              0.004878048780487805
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9479166666666666,
              0.052083333333333336
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 7,
            "threshold": -2.7825520038604736
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8823529411764706,
              0.11764705882352941
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": -0.386945515871048
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0415080785751343
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1484593837535014,
              0.8515406162464986
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6071428571428571,
              0.39285714285714285
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": -0.3774038553237915
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.582089552238806,
              0.417910447761194
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -1.7032155394554138
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": -0.9848240911960602
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": -0.15008939057588577
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8235294117647058,
              0.17647058823529413
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9890510948905109,
              0.010948905109489052
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 1,
            "threshold": -0.14680016785860062
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 9,
            "threshold": 2.0032556653022766
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": -1.7952923774719238
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.24259259259259258,
              0.7574074074074074
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 6,
            "threshold": -0.01311449334025383
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 2,
            "threshold": -0.16632598638534546
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5254237288135594,
              0.4745762711864407
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.898876404494382,
              0.10112359550561797
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 13,
            "threshold": -0.3705805540084839
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9782608695652174,
              0.021739130434782608
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 5,
            "threshold": 0.1913161724805832
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1643059490084986,
              0.8356940509915014
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.972972972972973,
              0.02702702702702703
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 0.237524151802063
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3567567567567568,
              0.6432432432432432
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9361702127659575,
              0.06382978723404255
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -1.5410261750221252
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": -0.5356398671865463
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17647058823529413,
              0.8235294117647058
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": 1.6056609749794006
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9957081545064378,
              0.004291845493562232
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9230769230769231,
              0.07692307692307693
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 8,
            "threshold": -0.029367848299443722
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 1.5404709577560425
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0761058330535889
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.30162412993039445,
              0.6983758700696056
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9117647058823529,
              0.08823529411764706
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 4,
            "threshold": -1.4006819128990173
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 10,
            "feature": 0,
            "threshold": -0.386945515871048
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20994475138121546,
              0.7900552486187845
            ]
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9644670050761421,
              0.03553299492385787
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": 0.09564084932208061
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.6010256707668304
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": -1.231464684009552
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.75,
              0.25
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1134020618556701,
              0.8865979381443299
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.3983021527528763
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7936507936507936,
              0.20634920634920634
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3346774193548387,
              0.6653225806451613
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": -1.3613792657852173
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": -1.0474059581756592
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 0,
            "threshold": 1.6618582010269165
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9483870967741935,
              0.05161290322580645
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 11,
            "threshold": -0.8173763155937195
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 1.7340371012687683
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.40540540540540543,
              0.5945945945945946
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9733333333333334,
              0.02666666666666667
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": -0.08913400024175644
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": -0.17786197364330292
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 9,
            "threshold": 0.5979325771331787
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14385964912280702,
              0.856140350877193
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4017467248908297,
              0.5982532751091703
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 9,
            "threshold": -0.7111351191997528
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6388888888888888,
              0.3611111111111111
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9361702127659575,
              0.06382978723404255
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 0.6735149323940277
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.785184919834137
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.18144329896907216,
              0.8185567010309278
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9444444444444444,
              0.05555555555555555
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": -0.3616151809692383
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6557377049180327,
              0.3442622950819672
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 10,
            "feature": 2,
            "threshold": 0.686217337846756
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 6,
            "threshold": -1.3354301452636719
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9142857142857143,
              0.08571428571428572
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 14,
            "threshold": -0.8649594783782959
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": 0.10441692918539047
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.510685533285141
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1794871794871795,
              0.8205128205128205
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 11,
            "threshold": 0.1454121470451355
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9090909090909091,
              0.09090909090909091
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 4,
            "threshold": -1.4006819128990173
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": -0.7646574079990387
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": 1.3342368602752686
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.40215716486902925,
              0.5978428351309707
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.813953488372093,
              0.18604651162790697
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.6275818347930908
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": -0.9419383704662323
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 4,
            "threshold": -0.5451660752296448
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8333333333333334,
              0.16666666666666666
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.1634022518992424
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.22107438016528927,
              0.7789256198347108
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7777777777777778,
              0.2222222222222222
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": -0.14275281876325607
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 7,
            "threshold": 1.4424225091934204
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.43859649122807015,
              0.5614035087719298
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 10,
            "threshold": -1.460429847240448
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17408123791102514,
              0.8259187620889749
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.625,
              0.375
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 1,
            "threshold": -0.8346236348152161
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16666666666666666,
              0.8333333333333334
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.927536231884058,
              0.07246376811594203
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 14,
            "threshold": -0.9709504842758179
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 4,
            "threshold": 0.9932356178760529
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 9,
            "threshold": -1.0666248202323914
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9552238805970149,
              0.04477611940298507
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7692307692307693,
              0.23076923076923078
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": -1.4461524486541748
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 2,
            "threshold": 1.006409764289856
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": -0.4602395296096802
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1589041095890411,
              0.8410958904109589
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.711340206185567,
              0.28865979381443296
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": -1.7273861765861511
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2,
              0.8
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8987341772151899,
              0.10126582278481013
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": 0.08569929748773575
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 12,
            "threshold": -1.7810221910476685
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.84,
              0.16
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2037037037037037,
              0.7962962962962963
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.7468628287315369
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9636363636363636,
              0.03636363636363636
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 1.4187567830085754
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": -0.08913400024175644
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9285714285714286,
              0.07142857142857142
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9910714285714286,
              0.008928571428571428
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -1.2026037573814392
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2857142857142857,
              0.7142857142857143
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.5355365872383118
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 7,
            "threshold": 0.5576914548873901
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0043207108974457
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.39618138424821003,
              0.60381861575179
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7386363636363636,
              0.26136363636363635
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 5,
            "threshold": -0.9175639450550079
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.43478260869565216,
              0.5652173913043478
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.08333333333333333,
              0.9166666666666666
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": -0.11366930976510048
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 9,
            "threshold": -0.6564795076847076
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.13793103448275862,
              0.8620689655172413
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6153846153846154,
              0.38461538461538464
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": 0.36729399859905243
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9705882352941176,
              0.029411764705882353
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 8,
            "threshold": -0.005985315190628171
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": -1.9553917050361633
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 4,
            "threshold": -1.5808284878730774
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.17785713821649551
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16058394160583941,
              0.8394160583941606
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7102272727272727,
              0.2897727272727273
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": -0.44509293138980865
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": -0.386945515871048
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.12574850299401197,
              0.874251497005988
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9629629629629629,
              0.037037037037037035
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": -0.33857467770576477
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8620689655172413,
              0.13793103448275862
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": 0.08569929748773575
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": 1.7039626240730286
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.21641791044776118,
              0.7835820895522388
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.8789994716644287
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.42105263157894735,
              0.5789473684210527
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 2,
            "threshold": 1.8624722361564636
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": -0.09429536014795303
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9586776859504132,
              0.04132231404958678
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -1.077760949730873
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 8,
            "threshold": 0.5766308605670929
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": 0.09564084932208061
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 5,
            "threshold": 0.6669223308563232
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2056338028169014,
              0.7943661971830986
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5045871559633027,
              0.4954128440366973
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": 1.407272458076477
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9492753623188406,
              0.050724637681159424
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6060606060606061,
              0.3939393939393939
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 2,
            "threshold": 0.5115284770727158
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": -0.6323898732662201
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.22666666666666666,
              0.7733333333333333
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9611650485436893,
              0.038834951456310676
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 9,
            "threshold": 0.6602287888526917
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5652173913043478,
              0.43478260869565216
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": 0.4342856705188751
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": -1.8364205956459045
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.18544600938967137,
              0.8145539906103286
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": -0.42095886170864105
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2571428571428571,
              0.7428571428571429
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 1.7308565378189087
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": 1.5395467877388
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9928571428571429,
              0.007142857142857143
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8333333333333334,
              0.16666666666666666
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 5,
            "threshold": 0.8211109042167664
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15789473684210525,
              0.8421052631578947
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.5231269001960754
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 5,
            "threshold": 0.2089373543858528
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16857142857142857,
              0.8314285714285714
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.32298136645962733,
              0.6770186335403726
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 14,
            "threshold": 1.347958266735077
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4230769230769231,
              0.5769230769230769
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": -1.3613792657852173
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 9,
            "threshold": -1.0474059581756592
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25,
              0.75
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": -0.8346236348152161
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4,
              0.6
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9711538461538461,
              0.028846153846153848
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 13,
            "threshold": -1.422778844833374
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 6,
            "threshold": 0.7058447599411011
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.23933209647495363,
              0.7606679035250464
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9104477611940298,
              0.08955223880597014
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 5,
            "threshold": -0.5396950840950012
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4852941176470588,
              0.5147058823529411
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9578947368421052,
              0.042105263157894736
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 13,
            "threshold": -1.422778844833374
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 6,
            "threshold": 0.6330318748950958
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2639138240574506,
              0.7360861759425493
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5882352941176471,
              0.4117647058823529
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 13,
            "threshold": -1.2361586093902588
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3684210526315789,
              0.631578947368421
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9842931937172775,
              0.015706806282722512
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 12,
            "threshold": 1.587497055530548
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 13,
            "threshold": -1.422778844833374
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 5,
            "threshold": 0.681671679019928
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.39838709677419354,
              0.6016129032258064
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6898395721925134,
              0.31016042780748665
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 8,
            "threshold": -0.8839815258979797
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 10,
            "threshold": -1.460429847240448
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.21839080459770116,
              0.7816091954022989
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6976744186046512,
              0.3023255813953488
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 3,
            "threshold": 1.5830506682395935
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9824561403508771,
              0.017543859649122806
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6410256410256411,
              0.358974358974359
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.7690273225307465
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.1634022518992424
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.892683982849121
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.18346774193548387,
              0.8165322580645161
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": -0.3006643056869507
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7204301075268817,
              0.27956989247311825
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9130434782608695,
              0.08695652173913043
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 12,
            "threshold": -1.3304964900016785
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 4,
            "threshold": -0.546941950917244
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.35294117647058826,
              0.6470588235294118
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 2,
            "threshold": -1.6724489331245422
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9576271186440678,
              0.0423728813559322
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.6331337690353394
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": 0.5420666038990021
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.10887096774193548,
              0.8911290322580645
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5172413793103449,
              0.4827586206896552
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.6437394022941589
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8974358974358975,
              0.10256410256410256
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3462897526501767,
              0.6537102473498233
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 11,
            "threshold": 0.15277252346277237
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": 0.05834296718239784
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9453125,
              0.0546875
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 8,
            "threshold": 0.9278839230537415
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 5,
            "threshold": 0.1000000424683094
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.13937282229965156,
              0.8606271777003485
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.35148514851485146,
              0.6485148514851485
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 9,
            "threshold": -0.30700506269931793
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8571428571428571,
              0.14285714285714285
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9745762711864406,
              0.025423728813559324
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": -0.5251007229089737
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 9,
            "threshold": 0.03588879853487015
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8461538461538461,
              0.15384615384615385
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.08333333333333333,
              0.9166666666666666
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 14,
            "threshold": -0.846433162689209
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": 0.10677364096045494
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": -1.0058290362358093
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3448275862068966,
              0.6551724137931034
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 9,
            "threshold": -0.8654506504535675
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.991869918699187,
              0.008130081300813009
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6,
              0.4
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 11,
            "threshold": 1.7124663591384888
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20454545454545456,
              0.7954545454545454
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6875,
              0.3125
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.7351186275482178
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8153846153846154,
              0.18461538461538463
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9819277108433735,
              0.018072289156626505
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 10,
            "threshold": -1.460429847240448
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 0,
            "threshold": 0.17252559959888458
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 13,
            "threshold": 1.7877162098884583
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.24907063197026022,
              0.7509293680297398
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 7,
            "threshold": -1.929339587688446
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.35294117647058826,
              0.6470588235294118
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9586466165413534,
              0.041353383458646614
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 3,
            "threshold": -1.787341833114624
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 12,
            "threshold": -1.807841181755066
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.75,
              0.25
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.23892100192678228,
              0.7610789980732178
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 8,
            "threshold": -1.8673800230026245
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 2,
            "threshold": 0.6829524636268616
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9954128440366973,
              0.0045871559633027525
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9504132231404959,
              0.049586776859504134
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 11,
            "threshold": -1.3638215065002441
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": -0.08913400024175644
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 5,
            "threshold": -1.388571321964264
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8,
              0.2
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 1,
            "threshold": 0.10677364096045494
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 1,
            "threshold": -0.6331337690353394
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1536050156739812,
              0.8463949843260188
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.42996742671009774,
              0.5700325732899023
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 7,
            "threshold": -1.5410261750221252
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.625,
              0.375
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9876543209876543,
              0.012345679012345678
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 13,
            "threshold": -1.422778844833374
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 11,
            "threshold": -0.7799529135227203
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 9,
            "threshold": 0.4829438775777817
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7659574468085106,
              0.23404255319148937
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2857142857142857,
              0.7142857142857143
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 8,
            "threshold": 0.1321348398923874
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2837528604118993,
              0.7162471395881007
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5058365758754864,
              0.49416342412451364
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": 0.5260575115680695
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.62721449136734
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1375921375921376,
              0.8624078624078624
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6111111111111112,
              0.3888888888888889
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": 0.8794208765029907
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2809917355371901,
              0.71900826446281
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 2.1310540437698364
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": 1.7308565378189087
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9700996677740864,
              0.029900332225913623
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8,
              0.2
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 5,
            "threshold": 0.8554642498493195
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": -0.0034253372868988663
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.44630128145217896
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.6557686924934387
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15763546798029557,
              0.8423645320197044
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 1.0411730408668518
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.391304347826087,
              0.6086956521739131
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 10,
            "feature": 0,
            "threshold": -0.4197216331958771
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 12,
            "threshold": 0.8403309881687164
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9842105263157894,
              0.015789473684210527
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8777777777777778,
              0.12222222222222222
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.6368662118911743
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": -1.0115309357643127
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 7,
            "threshold": 0.7483676970005035
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9736842105263158,
              0.02631578947368421
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 1.3426432013511658
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.30134680134680136,
              0.6986531986531986
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7543859649122807,
              0.24561403508771928
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 14,
            "threshold": 0.42351096868515015
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 4,
            "threshold": -0.5978663563728333
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7407407407407407,
              0.25925925925925924
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 14,
            "threshold": 0.7468733191490173
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.42105263157894735,
              0.5789473684210527
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8636363636363636,
              0.13636363636363635
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 9,
            "threshold": -0.846433162689209
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": -0.08557181805372238
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": -0.9065407514572144
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.875,
              0.125
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.04,
              0.96
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": -1.3591827750205994
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2857142857142857,
              0.7142857142857143
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": 0.6275818347930908
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": 0.199271522462368
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.27710843373493976,
              0.7228915662650602
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4959677419354839,
              0.5040322580645161
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 12,
            "threshold": -1.3650833368301392
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5227272727272727,
              0.4772727272727273
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.88,
              0.12
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.9556800723075867
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 14,
            "threshold": -0.8699719905853271
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": 0.20088732987642288
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9166666666666666,
              0.08333333333333333
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.46153846153846156,
              0.5384615384615384
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": 0.02406362257897854
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.24761904761904763,
              0.7523809523809524
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9259259259259259,
              0.07407407407407407
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.1654340848326683
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 2,
            "threshold": -1.6491822600364685
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7241379310344828,
              0.27586206896551724
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 9,
            "threshold": 0.26312462240457535
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 11,
            "threshold": -0.7891568243503571
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 4,
            "threshold": -0.42498980462551117
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": -1.4261634945869446
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5421686746987951,
              0.4578313253012048
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 6,
            "threshold": 0.9798170924186707
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3472222222222222,
              0.6527777777777778
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.92,
              0.08
            ]
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 3,
            "threshold": -1.7980396747589111
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 6,
            "threshold": 0.7667708396911621
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 1,
            "threshold": 0.028745212592184544
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2570356472795497,
              0.7429643527204502
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8641975308641975,
              0.13580246913580246
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 0,
            "threshold": 0.1654340848326683
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3333333333333333,
              0.6666666666666666
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.983739837398374,
              0.016260162601626018
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 5,
            "threshold": -1.392300009727478
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": -1.1032002568244934
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": 1.300439715385437
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": -0.9919823706150055
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2,
              0.8
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 10,
            "feature": 13,
            "threshold": -1.4029426574707031
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 3,
            "threshold": -1.7952923774719238
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4420654911838791,
              0.5579345088161209
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 9,
            "threshold": -0.8968018293380737
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": -0.1907324120402336
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.20269803702831268
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.05263157894736842,
              0.9473684210526315
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.84375,
              0.15625
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.2649552896618843
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 13,
            "threshold": 1.7877162098884583
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 6,
            "threshold": 0.8745265901088715
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3448275862068966,
              0.6551724137931034
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8068181818181818,
              0.19318181818181818
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 14,
            "threshold": 1.3518165349960327
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.298405647277832
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17525773195876287,
              0.8247422680412371
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6538461538461539,
              0.34615384615384615
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -0.5542574822902679
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4146341463414634,
              0.5853658536585366
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 10,
            "threshold": -0.24167083203792572
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 6,
            "threshold": -1.3354301452636719
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.35714285714285715,
              0.6428571428571429
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9558823529411765,
              0.04411764705882353
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 5,
            "threshold": -1.0403164625167847
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.875,
              0.125
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9938271604938271,
              0.006172839506172839
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 10,
            "threshold": -1.460429847240448
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 5,
            "threshold": 0.20300263911485672
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15963855421686746,
              0.8403614457831325
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.38974358974358975,
              0.6102564102564103
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 2,
            "threshold": 0.6930325627326965
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9903381642512077,
              0.00966183574879227
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.801980198019802,
              0.19801980198019803
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 1,
            "threshold": -0.20131023228168488
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.17182724177837372
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1885245901639344,
              0.8114754098360656
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9259259259259259,
              0.07407407407407407
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 13,
            "threshold": -0.7065282091498375
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 12,
            "threshold": -0.07699508406221867
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9568345323741008,
              0.04316546762589928
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.817351598173516,
              0.182648401826484
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 10,
            "threshold": -1.422778844833374
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 6,
            "threshold": 0.6368662118911743
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 12,
            "threshold": 1.673236906528473
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3585476550680787,
              0.6414523449319214
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9047619047619048,
              0.09523809523809523
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 1,
            "threshold": -0.1190185397863388
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6891891891891891,
              0.3108108108108108
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 13,
            "threshold": -1.460429847240448
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 7,
            "threshold": 1.238506555557251
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 8,
            "threshold": 0.5913662016391754
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3720538720538721,
              0.6279461279461279
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6611111111111111,
              0.3388888888888889
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 11,
            "threshold": 0.5767557770013809
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9661016949152542,
              0.03389830508474576
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15384615384615385,
              0.8461538461538461
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 11,
            "threshold": -0.8507952392101288
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20119521912350596,
              0.798804780876494
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": 1.0570672154426575
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 10,
            "feature": 7,
            "threshold": -2.7825520038604736
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 8,
            "threshold": -0.918701559305191
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.875,
              0.125
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9927797833935018,
              0.007220216606498195
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.7690273225307465
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 12,
            "threshold": -0.14733077585697174
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.37751004016064255,
              0.6224899598393574
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15483870967741936,
              0.8451612903225807
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 13,
            "threshold": -0.24167083203792572
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8289473684210527,
              0.17105263157894737
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 2,
            "threshold": -1.6478444933891296
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": 0.4508873447775841
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2,
              0.8
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 13,
            "threshold": -0.9719254076480865
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8495575221238938,
              0.1504424778761062
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 14,
            "threshold": -0.8699719905853271
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": -0.08557181805372238
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": -0.0739809051156044
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1875,
              0.8125
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8181818181818182,
              0.18181818181818182
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 7,
            "threshold": -2.5973496437072754
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9819819819819819,
              0.018018018018018018
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 1.916355848312378
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": 0.4013562798500061
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3286290322580645,
              0.6713709677419355
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6008771929824561,
              0.3991228070175439
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17351924628019333
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.7877162098884583
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 11,
            "threshold": 1.7834314703941345
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20650095602294455,
              0.7934990439770554
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7692307692307693,
              0.23076923076923078
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -1.0177907943725586
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": -1.3469553589820862
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": -1.293699473142624
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 2,
            "threshold": 0.686217337846756
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9900497512437811,
              0.009950248756218905
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9210526315789473,
              0.07894736842105263
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 1,
            "threshold": -0.1634022518992424
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.6331337690353394
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14334470989761092,
              0.856655290102389
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3236514522821577,
              0.6763485477178424
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 0,
            "threshold": -0.46531935036182404
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 3,
            "threshold": -0.6031308174133301
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16666666666666666,
              0.8333333333333334
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 0,
            "threshold": 0.1097204266116023
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7857142857142857,
              0.21428571428571427
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9690721649484536,
              0.030927835051546393
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 2,
            "threshold": 0.8794845640659332
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": -0.056227169930934906
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": 0.12196908891201019
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17484662576687116,
              0.8251533742331288
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9506172839506173,
              0.04938271604938271
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 10,
            "threshold": 0.1447344794869423
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.49065420560747663,
              0.5093457943925234
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7521367521367521,
              0.24786324786324787
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -1.4229013919830322
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": -0.14037933573126793
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.07692307692307693,
              0.9230769230769231
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": -1.031181126832962
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.48484848484848486,
              0.5151515151515151
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9622641509433962,
              0.03773584905660377
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.6070056855678558
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 11,
            "threshold": -0.831883579492569
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8723404255319149,
              0.1276595744680851
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.289134438305709,
              0.7108655616942909
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 7,
            "threshold": 0.6816862523555756
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8823529411764706,
              0.11764705882352941
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2222222222222222,
              0.7777777777777778
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.13475803658366203
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 4,
            "threshold": -0.510173499584198
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2916666666666667,
              0.7083333333333334
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9117647058823529,
              0.08823529411764706
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 4,
            "threshold": -0.7376455664634705
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8974358974358975,
              0.10256410256410256
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 5,
            "threshold": 0.1830993816256523
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 5,
            "threshold": -1.376511812210083
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6470588235294118,
              0.35294117647058826
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0990990990990991,
              0.9009009009009009
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 12,
            "threshold": 1.1554778218269348
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.33181818181818185,
              0.6681818181818182
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 13,
            "threshold": -1.2361586093902588
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": -1.422778844833374
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5333333333333333,
              0.4666666666666667
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -1.099580466747284
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9907834101382489,
              0.009216589861751152
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 3,
            "threshold": -1.7952923774719238
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 5,
            "threshold": 0.11546475812792778
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.12618296529968454,
              0.8738170347003155
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.37344398340248963,
              0.6265560165975104
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 2,
            "threshold": 1.760698139667511
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 1,
            "threshold": -0.7468628287315369
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6,
              0.4
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9696969696969697,
              0.030303030303030304
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 10,
            "threshold": -0.9956221580505371
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 13,
            "threshold": -1.422778844833374
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 4,
            "threshold": 0.3856673240661621
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 6,
            "threshold": 0.6420173346996307
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.29802955665024633,
              0.7019704433497537
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 1,
            "threshold": 0.02406362257897854
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4153846153846154,
              0.5846153846153846
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8910891089108911,
              0.10891089108910891
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 14,
            "threshold": -0.9249571561813354
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 13,
            "threshold": -1.460429847240448
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 1,
            "threshold": 0.29984739795327187
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1891891891891892,
              0.8108108108108109
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.922077922077922,
              0.07792207792207792
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 9,
            "threshold": 2.0032556653022766
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2337917485265226,
              0.7662082514734774
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9852941176470589,
              0.014705882352941176
            ]
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 6,
            "threshold": 1.0709031820297241
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 13,
            "threshold": -1.460429847240448
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 1,
            "threshold": -0.4229247272014618
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.19036697247706422,
              0.8096330275229358
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7111111111111111,
              0.28888888888888886
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 4,
            "threshold": -1.242809534072876
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 1,
            "threshold": 0.36947958916425705
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 9,
            "threshold": -0.8699719905853271
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.7074469923973083
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 5,
            "threshold": -0.7510301470756531
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25,
              0.75
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.75,
              0.25
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": -1.4739636182785034
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25,
              0.75
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 6,
            "threshold": 0.9471136033535004
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3107638888888889,
              0.6892361111111112
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7936507936507936,
              0.20634920634920634
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": 0.43067358434200287
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9818181818181818,
              0.01818181818181818
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7708333333333334,
              0.22916666666666666
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 11,
            "threshold": -0.9371821284294128
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.1654340848326683
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": 0.311212494969368
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2608695652173913,
              0.7391304347826086
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 9,
            "threshold": 0.26312462240457535
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8571428571428571,
              0.14285714285714285
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": 0.713915079832077
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": 0.09564084932208061
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2263056092843327,
              0.7736943907156673
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9166666666666666,
              0.08333333333333333
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 12,
            "threshold": -1.3749777674674988
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3888888888888889,
              0.6111111111111112
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9411764705882353,
              0.058823529411764705
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 10,
            "threshold": -1.460429847240448
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 6,
            "threshold": 0.6392790675163269
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1949685534591195,
              0.8050314465408805
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9011627906976745,
              0.09883720930232558
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 5,
            "threshold": -0.4658094644546509
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.578125,
              0.421875
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9296875,
              0.0703125
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": -0.047465281561017036
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.785184919834137
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1355421686746988,
              0.8644578313253012
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": 0.5489699840545654
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3236994219653179,
              0.6763005780346821
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.82,
              0.18
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 1.5830506682395935
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": -0.6942063570022583
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9929078014184397,
              0.0070921985815602835
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 10,
            "threshold": -0.4883355647325516
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4090909090909091,
              0.5909090909090909
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.7203050255775452
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1961904761904762,
              0.8038095238095239
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8076923076923077,
              0.19230769230769232
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 5,
            "threshold": -0.9740188717842102
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.96875,
              0.03125
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 2,
            "threshold": 1.2011933326721191
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": 0.9212327599525452
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9871794871794872,
              0.01282051282051282
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -1.0226452350616455
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3333333333333333,
              0.6666666666666666
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.6368662118911743
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0856192708015442
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": 0.10677364096045494
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.19483101391650098,
              0.805168986083499
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9514563106796117,
              0.04854368932038835
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -1.589177668094635
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8225806451612904,
              0.1774193548387097
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": 0.2639944702386856
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": 0.08174670301377773
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2727272727272727,
              0.7272727272727273
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9558823529411765,
              0.04411764705882353
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.6392790675163269
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 0.31837114691734314
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16304347826086957,
              0.8369565217391305
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.978021978021978,
              0.02197802197802198
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": -0.4568689912557602
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2804878048780488,
              0.7195121951219512
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8273381294964028,
              0.17266187050359713
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -0.19562942534685135
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": -0.5434089452028275
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3157894736842105,
              0.6842105263157895
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8918918918918919,
              0.10810810810810811
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": -0.47488950192928314
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7407407407407407,
              0.25925925925925924
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 2,
            "threshold": 1.0869392156600952
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 10,
            "threshold": -1.2670040726661682
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 1,
            "threshold": 0.08569929748773575
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25,
              0.75
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9753086419753086,
              0.024691358024691357
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 8,
            "threshold": -1.6551956534385681
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 0,
            "threshold": 1.1657571196556091
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.75,
              0.25
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 1,
            "threshold": -0.8809327781200409
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9478260869565217,
              0.05217391304347826
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 11,
            "threshold": -0.7700472772121429
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 1.4212175607681274
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 4,
            "threshold": -0.3058229833841324
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.550561797752809,
              0.449438202247191
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.12146957000368275
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7,
              0.3
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": 0.9278839230537415
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": 0.1482522040605545
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2446043165467626,
              0.7553956834532374
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5463576158940397,
              0.45364238410596025
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 4,
            "threshold": 0.0305909039452672
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5074626865671642,
              0.4925373134328358
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.95,
              0.05
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 9,
            "threshold": -0.8699719905853271
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": -0.18397176265716553
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": 1.306739866733551
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3181818181818182,
              0.6818181818181818
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": -0.3344801142811775
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9166666666666666,
              0.08333333333333333
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": -0.1650077998638153
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.21814671814671815,
              0.7818532818532818
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9545454545454546,
              0.045454545454545456
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": 0.7658288180828094
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.975609756097561,
              0.024390243902439025
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6578947368421053,
              0.34210526315789475
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.6295403838157654
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": -0.3817233443260193
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16793893129770993,
              0.8320610687022901
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3541666666666667,
              0.6458333333333334
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 12,
            "threshold": -0.25681399554014206
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3333333333333333,
              0.6666666666666666
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 10,
            "feature": 2,
            "threshold": 0.6930325627326965
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 7,
            "threshold": -1.4994369149208069
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.47368421052631576,
              0.5263157894736842
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9024390243902439,
              0.0975609756097561
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 7,
            "threshold": -1.6721552610397339
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8,
              0.2
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.21933085501858737,
              0.7806691449814126
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 5,
            "threshold": 1.2257986068725586
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": -0.7468628287315369
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": -0.012721121311187744
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25,
              0.75
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 7,
            "threshold": -1.97201007604599
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14285714285714285,
              0.8571428571428571
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9873817034700315,
              0.012618296529968454
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 10,
            "threshold": -1.460429847240448
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 8,
            "threshold": 0.5465236604213715
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15571776155717762,
              0.8442822384428224
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.40601503759398494,
              0.5939849624060151
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 8,
            "threshold": -1.099580466747284
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6944444444444444,
              0.3055555555555556
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9841897233201581,
              0.015810276679841896
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.8150039315223694
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": -0.3783189654350281
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.26418786692759294,
              0.735812133072407
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 2,
            "threshold": 0.6930325627326965
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 4,
            "threshold": 0.5213367640972137
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9682539682539683,
              0.031746031746031744
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 8,
            "threshold": -0.8872447609901428
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9888888888888889,
              0.011111111111111112
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 9,
            "threshold": 1.066660463809967
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 4,
            "threshold": 0.9245376884937286
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15649867374005305,
              0.843501326259947
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.34615384615384615,
              0.6538461538461539
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": -0.3946519196033478
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2222222222222222,
              0.7777777777777778
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7142857142857143,
              0.2857142857142857
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -1.9375187754631042
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 11,
            "threshold": 0.2828314080834389
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5384615384615384,
              0.46153846153846156
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 2,
            "threshold": 0.6825118362903595
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9902439024390244,
              0.00975609756097561
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9322033898305084,
              0.06779661016949153
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 11,
            "threshold": -0.8202807009220123
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 9,
            "threshold": 0.21834580600261688
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.0034253372868988663
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.45454545454545453,
              0.5454545454545454
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9739130434782609,
              0.02608695652173913
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.4414995238184929
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.875,
              0.125
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 14,
            "threshold": -0.9054746329784393
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 4,
            "threshold": 0.9932356178760529
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.96875,
              0.03125
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5333333333333333,
              0.4666666666666667
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 6,
            "threshold": 0.6368662118911743
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3482587064676617,
              0.6517412935323383
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8205128205128205,
              0.1794871794871795
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.5231269001960754
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.6010256707668304
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.13793103448275862,
              0.8620689655172413
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3169642857142857,
              0.6830357142857143
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": 0.6504895091056824
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9285714285714286,
              0.07142857142857142
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4444444444444444,
              0.5555555555555556
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 13,
            "threshold": -0.24167083203792572
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 6,
            "threshold": -1.3591827750205994
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25,
              0.75
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9448818897637795,
              0.05511811023622047
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 4,
            "threshold": -0.9523313343524933
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9354838709677419,
              0.06451612903225806
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.993006993006993,
              0.006993006993006993
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": -0.1634022518992424
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": -1.7336782217025757
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9166666666666666,
              0.08333333333333333
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20850202429149797,
              0.791497975708502
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": 0.196452297270298
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.875,
              0.125
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 12,
            "threshold": -0.06446915306150913
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": 0.8700821101665497
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9920634920634921,
              0.007936507936507936
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9375,
              0.0625
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.40476190476190477,
              0.5952380952380952
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9411764705882353,
              0.058823529411764705
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.6392790675163269
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.17351924628019333
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.44161248207092285
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.10242587601078167,
              0.8975741239892183
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.43548387096774194,
              0.5645161290322581
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 14,
            "threshold": -0.9177298247814178
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7884615384615384,
              0.21153846153846154
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9858156028368794,
              0.014184397163120567
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 11,
            "threshold": -0.4342906028032303
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 6,
            "threshold": 1.3653244972229004
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8648648648648649,
              0.13513513513513514
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 13,
            "threshold": 0.768742173910141
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9565217391304348,
              0.043478260869565216
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": 0.09447537735104561
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0856192708015442
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 9,
            "threshold": 0.5865664184093475
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20055710306406685,
              0.7994428969359332
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3793103448275862,
              0.6206896551724138
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 12,
            "threshold": -0.4418683350086212
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.47619047619047616,
              0.5238095238095238
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 12,
            "threshold": 1.2681666016578674
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": -1.0903956294059753
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7941176470588235,
              0.20588235294117646
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9900990099009901,
              0.009900990099009901
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 2,
            "threshold": 1.7020730376243591
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9459459459459459,
              0.05405405405405406
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16666666666666666,
              0.8333333333333334
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 14,
            "threshold": -0.8699719905853271
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.7074469923973083
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": -1.0083727538585663
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.09090909090909091,
              0.9090909090909091
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7272727272727273,
              0.2727272727272727
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": -1.3371427655220032
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3333333333333333,
              0.6666666666666666
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.990909090909091,
              0.00909090909090909
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": -0.3862897753715515
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1339031339031339,
              0.8660968660968661
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.41379310344827586,
              0.5862068965517241
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 2,
            "threshold": 0.686217337846756
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9933774834437086,
              0.006622516556291391
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8695652173913043,
              0.13043478260869565
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 9,
            "threshold": -0.8699719905853271
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": -0.1907324120402336
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": -0.08557181805372238
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14285714285714285,
              0.8571428571428571
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8490566037735849,
              0.1509433962264151
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.25617920979857445
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.17351924628019333
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": 1.5231269001960754
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20781893004115226,
              0.7921810699588477
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.717391304347826,
              0.2826086956521739
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 9,
            "threshold": -0.5324424505233765
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8611111111111112,
              0.1388888888888889
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9803921568627451,
              0.0196078431372549
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 14,
            "threshold": -0.8649594783782959
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.7074469923973083
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": -0.7112000286579132
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.11538461538461539,
              0.8846153846153846
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 1.7020730376243591
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9913793103448276,
              0.008620689655172414
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": 0.24945314228534698
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1907356948228883,
              0.8092643051771117
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9396551724137931,
              0.0603448275862069
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": 2.0886471271514893
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5695067264573991,
              0.4304932735426009
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 7,
            "threshold": -1.856938660144806
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8181818181818182,
              0.18181818181818182
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.18604651162790697,
              0.813953488372093
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -0.7391403913497925
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": -1.3613792657852173
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 7,
            "threshold": -1.760780781507492
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2857142857142857,
              0.7142857142857143
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.7366316914558411
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8611111111111112,
              0.1388888888888889
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 0.567788302898407
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": 1.8341526985168457
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20217391304347826,
              0.7978260869565217
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -0.17499154061079025
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20512820512820512,
              0.7948717948717948
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8301886792452831,
              0.16981132075471697
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 4,
            "threshold": 0.41376669704914093
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": -0.12339072301983833
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.927536231884058,
              0.07246376811594203
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 7,
            "threshold": -2.1600122451782227
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2857142857142857,
              0.7142857142857143
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9646017699115044,
              0.035398230088495575
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.5231269001960754
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": 0.13074517250061035
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1670103092783505,
              0.8329896907216495
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8,
              0.2
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 14,
            "threshold": 1.3935387134552002
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.32,
              0.68
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.7825520038604736
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": 0.8617552220821381
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": -0.8346236348152161
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6,
              0.4
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9768115942028985,
              0.02318840579710145
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 9,
            "threshold": -0.8968018293380737
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 10,
            "threshold": -1.422778844833374
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 6,
            "threshold": -0.47836191952228546
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5882352941176471,
              0.4117647058823529
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8153846153846154,
              0.18461538461538463
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 6,
            "threshold": 1.4942312240600586
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.19807692307692307,
              0.801923076923077
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9664804469273743,
              0.0335195530726257
            ]
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 11,
            "threshold": -0.9964266717433929
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 4,
            "threshold": -0.5611520111560822
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": 0.011348660103976727
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17391304347826086,
              0.8260869565217391
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 2,
            "threshold": 1.0869392156600952
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 6,
            "threshold": 0.7125760614871979
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3078231292517007,
              0.6921768707482994
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8604651162790697,
              0.13953488372093023
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 4,
            "threshold": -0.43998369574546814
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6086956521739131,
              0.391304347826087
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9066666666666666,
              0.09333333333333334
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 14,
            "threshold": -0.8699719905853271
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.7074469923973083
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": -0.741531640291214
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.11538461538461539,
              0.8846153846153846
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -1.7407968640327454
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9911504424778761,
              0.008849557522123894
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 5,
            "threshold": 0.199271522462368
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": -1.7980396747589111
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.32075471698113206,
              0.6792452830188679
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 0,
            "threshold": 0.07078175060451031
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.387434554973822,
              0.612565445026178
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9818181818181818,
              0.01818181818181818
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": 0.13074517250061035
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.7877162098884583
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.18664047151277013,
              0.8133595284872298
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9130434782608695,
              0.08695652173913043
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 7,
            "threshold": -2.8036794662475586
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4,
              0.6
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 10,
            "feature": 1,
            "threshold": -0.7380867600440979
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3333333333333333,
              0.6666666666666666
            ]
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9648093841642229,
              0.03519061583577713
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17351924628019333
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": 1.344448983669281
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.21722846441947566,
              0.7827715355805244
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8333333333333334,
              0.16666666666666666
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": 1.468387484550476
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 11,
            "threshold": 0.10238442942500114
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": -0.10389019176363945
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9928571428571429,
              0.007142857142857143
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8133333333333334,
              0.18666666666666668
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": -0.1634022518992424
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0869392156600952
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": -0.12349066883325577
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1291390728476821,
              0.8708609271523179
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.40707964601769914,
              0.5929203539823009
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.23529411764705882,
              0.7647058823529411
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": -0.07323966175317764
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 9,
            "threshold": -1.5716328024864197
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.875,
              0.125
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 0,
            "threshold": 0.1097204266116023
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.34285714285714286,
              0.6571428571428571
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.905511811023622,
              0.09448818897637795
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": 0.09799756109714508
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.5122444033622742
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 5,
            "threshold": 1.7919933199882507
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25663716814159293,
              0.7433628318584071
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9473684210526315,
              0.05263157894736842
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 5,
            "threshold": 1.6406458616256714
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9714285714285714,
              0.02857142857142857
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.38461538461538464,
              0.6153846153846154
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 2.229912281036377
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": -0.09429536014795303
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9658119658119658,
              0.03418803418803419
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 6,
            "threshold": -1.4075078964233398
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": -1.3852366209030151
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 11,
            "threshold": -0.15476728975772858
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4583333333333333,
              0.5416666666666666
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 10,
            "threshold": 1.7877162098884583
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.18846153846153846,
              0.8115384615384615
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9166666666666666,
              0.08333333333333333
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -1.1452970504760742
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 11,
            "threshold": 0.15148425847291946
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3103448275862069,
              0.6896551724137931
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 9,
            "threshold": -0.5600405633449554
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9551282051282052,
              0.04487179487179487
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.11229585111141205
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": -0.3817233443260193
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.10067114093959731,
              0.8993288590604027
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3020833333333333,
              0.6979166666666666
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": -1.3370754718780518
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9203539823008849,
              0.07964601769911504
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": -0.09251454472541809
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": 0.8963333666324615
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.34355828220858897,
              0.656441717791411
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 6,
            "threshold": 1.0891026258468628
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9611650485436893,
              0.038834951456310676
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 12,
            "threshold": -1.8884963393211365
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 10,
            "threshold": 1.785184919834137
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2338403041825095,
              0.7661596958174905
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9285714285714286,
              0.07142857142857142
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 8,
            "threshold": -0.5389879643917084
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 13,
            "threshold": 0.10146329179406166
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8064516129032258,
              0.1935483870967742
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 12,
            "threshold": -1.253390908241272
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9259259259259259,
              0.07407407407407407
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": -0.23054830729961395
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 0.6780065596103668
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1598173515981735,
              0.8401826484018264
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8421052631578947,
              0.15789473684210525
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 14,
            "threshold": 0.30432046949863434
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.85,
              0.15
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4583333333333333,
              0.5416666666666666
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": -0.45985451340675354
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": -1.1276053190231323
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.28,
              0.72
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8507462686567164,
              0.14925373134328357
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 0,
            "threshold": 0.13475803658366203
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6060606060606061,
              0.3939393939393939
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9732142857142857,
              0.026785714285714284
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 11,
            "threshold": -0.9097262918949127
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 5,
            "threshold": -0.8462918102741241
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 11,
            "threshold": -0.9678867757320404
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8041237113402062,
              0.1958762886597938
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": 0.08174670301377773
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8181818181818182,
              0.18181818181818182
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": 0.9279906451702118
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": 0.028745212592184544
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2510729613733906,
              0.7489270386266095
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9012345679012346,
              0.09876543209876543
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 4,
            "threshold": 0.4412103444337845
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5507246376811594,
              0.4492753623188406
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 14,
            "threshold": -0.8968018293380737
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": -0.3789929002523422
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": 1.2259870171546936
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1,
              0.9
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -0.19974704086780548
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8,
              0.2
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": -0.1634022518992424
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": 0.15900885313749313
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1423611111111111,
              0.8576388888888888
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.39823008849557523,
              0.6017699115044248
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 13,
            "threshold": 0.2375132367014885
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7767857142857143,
              0.22321428571428573
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.990990990990991,
              0.009009009009009009
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 11,
            "threshold": -1.3637404441833496
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": -0.08913400024175644
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.35413114726543427
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 0,
            "threshold": -0.3817233443260193
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.19466666666666665,
              0.8053333333333333
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.38461538461538464,
              0.6153846153846154
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 7,
            "threshold": -2.7825520038604736
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3333333333333333,
              0.6666666666666666
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9446640316205533,
              0.05533596837944664
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 1,
            "threshold": -0.17785713821649551
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": 1.2109010815620422
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.6295403838157654
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.23462414578587698,
              0.765375854214123
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -0.1582568809390068
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.38,
              0.62
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9629629629629629,
              0.037037037037037035
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": 0.09564084932208061
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": -0.12843357399106026
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4146341463414634,
              0.5853658536585366
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8653846153846154,
              0.1346153846153846
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 6,
            "threshold": -0.8491212427616119
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9917355371900827,
              0.008264462809917356
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.6262030899524689
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": 1.829577386379242
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1978494623655914,
              0.8021505376344086
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": 1.4257875680923462
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9824561403508771,
              0.017543859649122806
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7307692307692307,
              0.2692307692307692
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": 0.3891817778348923
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 11,
            "threshold": -0.3855820298194885
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5625,
              0.4375
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.972972972972973,
              0.02702702702702703
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 8,
            "threshold": 0.5050951838493347
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": 0.13310188427567482
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1658653846153846,
              0.8341346153846154
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": -1.3376266360282898
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.75,
              0.25
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9456521739130435,
              0.05434782608695652
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 1,
            "threshold": -0.4748043566942215
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 6,
            "threshold": 0.3730999082326889
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14130434782608695,
              0.8586956521739131
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": 0.13310188427567482
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 14,
            "threshold": 2.0032556653022766
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.224105461393597,
              0.775894538606403
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.875,
              0.125
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 11,
            "threshold": 0.3079436793923378
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 1.7308565378189087
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 11,
            "threshold": 0.002299461979418993
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.96875,
              0.03125
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 2,
            "threshold": 1.0837000012397766
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.46153846153846156,
              0.5384615384615384
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 11,
            "threshold": 2.2165743112564087
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": -1.7336782217025757
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.24670433145009416,
              0.7532956685499058
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 7,
            "threshold": -2.6919881105422974
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 9,
            "threshold": -1.1302911639213562
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5,
              0.5
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 0,
            "threshold": 1.6618582010269165
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9638009049773756,
              0.03619909502262444
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 9,
            "threshold": -0.86766517162323
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": 0.10175711661577225
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 4,
            "threshold": -1.1490098237991333
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.42105263157894735,
              0.5789473684210527
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": -1.3371427655220032
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.45454545454545453,
              0.5454545454545454
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9908256880733946,
              0.009174311926605505
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 6,
            "threshold": 0.964094340801239
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": 0.24935516715049744
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2825112107623318,
              0.7174887892376681
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5118483412322274,
              0.4881516587677725
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": -0.6415498852729797
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3888888888888889,
              0.6111111111111112
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9428571428571428,
              0.05714285714285714
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 8,
            "threshold": 0.568101167678833
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": -1.1670575737953186
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.46774193548387094,
              0.532258064516129
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16,
              0.84
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 9,
            "threshold": 1.2431267499923706
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.35454545454545455,
              0.6454545454545455
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 5,
            "threshold": -0.09429536014795303
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 12,
            "threshold": -1.2663276195526123
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.88,
              0.12
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9323308270676691,
              0.06766917293233082
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 2,
            "feature": 10,
            "threshold": -1.460429847240448
          },
          {
            "id": 1,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 2,
            "left": 3,
            "right": 6,
            "feature": 1,
            "threshold": 0.09564084932208061
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 13,
            "threshold": 0.1527581736445427
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16666666666666666,
              0.8333333333333334
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4565916398713826,
              0.5434083601286174
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 10,
            "threshold": -1.378416895866394
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.16666666666666666,
              0.8333333333333334
            ]
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9583333333333334,
              0.041666666666666664
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 13,
            "threshold": -1.3596444725990295
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 14,
            "threshold": -1.800632357597351
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 12,
            "threshold": 1.2190811038017273
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 10,
            "threshold": -0.21590612083673477
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 11,
            "threshold": -0.5118683874607086
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6444444444444445,
              0.35555555555555557
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25833333333333336,
              0.7416666666666667
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 3,
            "threshold": 1.8160532712936401
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.5107758620689655,
              0.4892241379310345
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 9,
            "threshold": 1.066660463809967
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 11,
            "threshold": 1.5309510827064514
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.19480519480519481,
              0.8051948051948052
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": -0.3946519196033478
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.22448979591836735,
              0.7755102040816326
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7307692307692307,
              0.2692307692307692
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 10,
            "feature": 1,
            "threshold": -0.8346236348152161
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.3333333333333333,
              0.6666666666666666
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 3,
            "threshold": 1.5830506682395935
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9863945578231292,
              0.013605442176870748
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7307692307692307,
              0.2692307692307692
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 3,
            "threshold": -1.7952923774719238
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.23388581952117865,
              0.7661141804788214
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7073170731707317,
              0.2926829268292683
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 13,
            "threshold": -0.7378346547484398
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 5,
            "threshold": 0.26610231399536133
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9257142857142857,
              0.07428571428571429
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 14,
            "threshold": -0.9249571561813354
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 6,
            "threshold": -1.3615009784698486
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 0,
            "threshold": 0.021099388599395752
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.25925925925925924,
              0.7407407407407407
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 1,
            "threshold": 0.028745212592184544
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 6,
            "threshold": 1.23787522315979
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2690166975881262,
              0.7309833024118738
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9,
              0.1
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 13,
            "threshold": -0.20756658911705017
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8620689655172413,
              0.13793103448275862
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 6,
            "threshold": 0.7125760614871979
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 3,
            "threshold": 0.8440404236316681
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.22203955799341202
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20147420147420148,
              0.7985257985257985
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8472222222222222,
              0.1527777777777778
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 5,
            "threshold": -0.6759500503540039
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6,
              0.4
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 4,
            "threshold": -0.7169010639190674
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": 0.4945300742983818
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.21951219512195122,
              0.7804878048780488
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9743589743589743,
              0.02564102564102564
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": 0.25832609087228775
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8604651162790697,
              0.13953488372093023
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 9,
            "threshold": -0.8699719905853271
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": -0.9998246431350708
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": 0.5318939089775085
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8,
              0.2
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": 2.120874345302582
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9312977099236641,
              0.06870229007633588
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2,
              0.8
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 13,
            "threshold": -0.45373137295246124
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": 1.0567482709884644
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1736842105263158,
              0.8263157894736842
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8181818181818182,
              0.18181818181818182
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 2,
            "threshold": 1.308100163936615
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4423076923076923,
              0.5576923076923077
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8955223880597015,
              0.1044776119402985
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 9,
            "threshold": -0.8649594783782959
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": 0.10677364096045494
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": 0.75490602850914
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.15789473684210525,
              0.8421052631578947
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": 0.41376669704914093
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7307692307692307,
              0.2692307692307692
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.17351924628019333
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 11,
            "threshold": -0.8405558466911316
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6190476190476191,
              0.38095238095238093
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.20758483033932135,
              0.7924151696606786
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 9,
            "threshold": -0.6926235556602478
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7222222222222222,
              0.2777777777777778
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9657142857142857,
              0.03428571428571429
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 5,
            "threshold": 0.20300263911485672
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.6331337690353394
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.08415841584158416,
              0.9158415841584159
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2751677852348993,
              0.7248322147651006
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 7,
            "threshold": 0.7617100179195404
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4097560975609756,
              0.5902439024390244
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 13,
            "threshold": -0.24167083203792572
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 2,
            "threshold": 0.8516523540019989
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7037037037037037,
              0.2962962962962963
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 14,
            "threshold": -0.30743783712387085
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9714285714285714,
              0.02857142857142857
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 13,
            "threshold": -1.3253481984138489
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 3,
            "threshold": 2.1163800954818726
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": -1.0221620500087738
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6666666666666666,
              0.3333333333333333
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": 1.1963363289833069
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.75,
              0.25
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 13,
            "threshold": 0.08535784855484962
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": 0.7379494309425354
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.29048843187660667,
              0.7095115681233933
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": 0.25324399769306183
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7439024390243902,
              0.25609756097560976
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4,
              0.6
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 11,
            "threshold": -0.8283945918083191
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 0,
            "threshold": 0.17252559959888458
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 9,
            "threshold": -1.0265904664993286
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.64,
              0.36
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 14,
            "threshold": 0.26312462240457535
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9912280701754386,
              0.008771929824561403
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8,
              0.2
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": 1.1522074341773987
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.17699115044247787,
              0.8230088495575221
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.49473684210526314,
              0.5052631578947369
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.8872447609901428
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.6470588235294118,
              0.35294117647058826
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9858156028368794,
              0.014184397163120567
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17252559959888458
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.62721449136734
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.6234818696975708
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1875,
              0.8125
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8571428571428571,
              0.14285714285714285
            ]
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -1.531208574771881
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2,
              0.8
            ]
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8888888888888888,
              0.1111111111111111
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 3,
            "threshold": 2.0855538845062256
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": 1.4546518325805664
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9795221843003413,
              0.020477815699658702
            ]
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.8421052631578947,
              0.15789473684210525
            ]
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": 2.2964102029800415
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.14285714285714285,
              0.8571428571428571
            ]
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9166666666666666,
              0.08333333333333333
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 9,
            "threshold": -0.9709504842758179
          },
          {
            "id": 1,
            "left": 2,
            "right": 3,
            "feature": 10,
            "threshold": -1.460429847240448
          },
          {
            "id": 2,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 3,
            "left": 4,
            "right": 5,
            "feature": 1,
            "threshold": 1.2540833950042725
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.4642857142857143,
              0.5357142857142857
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 10,
            "feature": 10,
            "threshold": -0.3298386484384537
          },
          {
            "id": 7,
            "left": 8,
            "right": 9,
            "feature": 1,
            "threshold": 0.022965164855122566
          },
          {
            "id": 8,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.1657142857142857,
              0.8342857142857143
            ]
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7659574468085106,
              0.23404255319148937
            ]
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.311178247734139,
              0.6888217522658611
            ]
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9689119170984456,
              0.031088082901554404
            ]
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 6,
            "feature": 1,
            "threshold": 0.028745212592184544
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 7,
            "threshold": 1.5336801409721375
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.2703639514731369,
              0.729636048526863
            ]
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.7407407407407407,
              0.25925925925925924
            ]
          },
          {
            "id": 5,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          },
          {
            "id": 6,
            "left": 7,
            "right": 8,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.0,
              1.0
            ]
          },
          {
            "id": 8,
            "left": 9,
            "right": 10,
            "feature": 10,
            "threshold": -0.4883355647325516
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              0.9322033898305084,
              0.06779661016949153
            ]
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": [
              1.0,
              0.0
            ]
          }
        ]
      ],
      "nEstimators": 200
    },
    "gradientBoosting": {
      "trees": [
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.276283618581907
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6363636363636365
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6666666666666667
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.0
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 9,
            "threshold": 0.14076894521713257
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 2.0
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.0
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.7366316914558411
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5254237288135593
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9597989949748744
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.2591332709090775
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5837427431766387
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6198098370754468
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9801986733067563
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": 0.7174771875143051
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9801986733067558
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.9801986733067554
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -1.099580466747284
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.3396626972708605
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9275310239516732
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0856192708015442
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.2193951934812328
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.3918223860610614
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": 2.448378562927246
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9669788987140666
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 2.032725128065566
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.7825520038604736
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": -0.09803205728530884
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.9609797070451656
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.960979707045166
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.7366316914558411
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.3373214107305424
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9212480900545572
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.6295403838157654
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": 1.344448983669281
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.2086328263493886
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.1086175970546288
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": 1.4978493452072144
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.985182759023886
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.9701208956128518
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": -0.7065282091498375
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.9423186576925848
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.961171835984434
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.8872447609901428
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.320646473980315
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9253584426479136
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.224834114476862
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5771913050027715
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6930186525784103
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9630131459712334
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.7825520038604736
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 2,
            "threshold": 1.6340134143829346
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.960977860726822
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.9241924309859735
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.7366316914558411
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.3708483755823069
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.885111203349764
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17252559959888458
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1735754736849346
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5268861453865212
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.8236516416072845
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6655152452341706
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9489708240524521
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.6919881105422974
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": -1.5519847869873047
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.906579189947597
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9423168646256508
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 7,
            "threshold": -1.9375187754631042
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.9263962939466732
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.813606124848354
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0869392156600952
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1822557195667451
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.44206125984342115
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 5,
            "threshold": 1.6096761226654053
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8992228630019963
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9387459235559599
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.6919881105422974
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": 0.9711453020572662
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9238531947876907
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.889458270341187
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.8872447609901428
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.2483454025321996
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.836139446680529
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.125755200066672
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.888906682861133
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6268020087150739
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.924894169466508
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.78978168964386
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": 0.8315662145614624
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9062494943882715
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.87281010286692
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -1.0903956294059753
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.2385872659376738
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8076607428961453
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1393047171498099
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.872240491967291
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.8236516416072845
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.5658821807791727
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9095010428875763
          },
          {
            "id": 8,
            "left": 9,
            "right": 10,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.8566161414761955
          },
          {
            "id": 10,
            "left": 11,
            "right": 12,
            "feature": 8,
            "threshold": -0.8872447609901428
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.1456085992252851
          },
          {
            "id": 12,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8075806363601032
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.184101567096145
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8526457976376207
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.9377765953540802
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.5086162498977382
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8928704894138686
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": -0.7065282091498375
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.8408587972514285
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9057998040158286
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.7366316914558411
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.3499977333104656
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8037828928877186
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0856192708015442
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": -1.7748177647590637
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.12150635585757
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.0925978261779228
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.5334202812648923
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8776871202704355
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": -0.7065282091498375
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.8255213773528216
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8887005307670195
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.5590472519397736
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5560567345685914
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8079308463836652
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 0.6751351952552795
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.6335496008396149
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.5140858438576625
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.6596255113093783
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": -0.510173499584198
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.9097286013126573
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8774427488529135
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.6919881105422974
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": 0.9131035506725311
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.8105880285844473
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8720731551681544
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.5590472519397736
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.3347489785688955
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7923064964070332
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.62721449136734
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1423665860109693
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.5236079185703405
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.5382203756650596
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8620395932156801
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 9,
            "threshold": -0.30154433846473694
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.796043685176614
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8562118410014936
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 7,
            "threshold": -1.9375187754631042
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.8406280698137963
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7411780545238515
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 0.6751351952552795
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.7877162098884583
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.189056389340615
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.2255743103090233
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": -0.510173499584198
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.0383728443021447
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5634359286520185
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 7,
            "threshold": -3.036746621131897
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8401584176047359
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.7818740204212364
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.8872447609901428
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.1467919360611092
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.750659571732102
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0857464671134949
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.0764258158950495
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4410239793567934
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.4869070998439378
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8565921141791923
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -1.9311866760253906
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": 0.8621021509170532
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.9138295987421157
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8240625709918432
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.5590472519397736
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.3617591242486744
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.750648264271786
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": -1.7758418917655945
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.140842475342616
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.085688221628477
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.4738730879505075
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8345497698542428
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": -0.7065282091498375
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.7581562321173914
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.80993035215778
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.8872447609901428
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.0952634204499838
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.722049857387539
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.62721449136734
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0869392156600952
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1586730599252872
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.44554534663562884
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": 1.6987977027893066
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9253042137184637
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.8810372446291732
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.7825520038604736
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": -0.7065282091498375
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.7472267692600685
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7956936034957347
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.8872447609901428
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.079875560667535
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7099127337646565
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.058122112277372
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.48895175564241905
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 5,
            "threshold": 1.917678952217102
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8076472271026818
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 2.087032320173842
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -1.099580466747284
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 2,
            "threshold": 0.6647741496562958
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5443366012646202
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.42176759220002114
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": -0.8346236348152161
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.7249498080161939
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7205091054016413
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0856192708015442
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": 0.5268330276012421
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1618781656444357
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.19763050340182475
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.4986084784183262
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8133906772686206
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 8,
            "threshold": -2.127866268157959
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.768994068236538
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.7298557713280316
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -1.099580466747284
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.8594417834447972
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6371067915874582
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0856192708015442
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": 0.5268330276012421
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.160048614881347
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.13036185614019488
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8165607154369354
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.4562429847745748
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7994101218003993
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.7825520038604736
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": -0.30154433846473694
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.718657546816777
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7770953378437455
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.5590472519397736
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.3210075601826379
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.689365912615598
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.6331337690353394
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.7016583979129791
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.8764542997094273
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.719517247770225
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": -0.9638389945030212
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.069258933761748
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.869062512628228
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": 0.9131035506725311
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.7042542965928111
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7634127059971498
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.8872447609901428
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.0285201665946389
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6626990761733538
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.45906075835227966
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1666324360262146
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.35846729986774567
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 0.8690933883190155
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.817288670707181
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7121666044731345
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 9,
            "threshold": -0.30154433846473694
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.69447764668996
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7500735620301873
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.5590472519397736
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.2356650668078055
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6864153764019645
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.0125047848011555
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.6546261933158464
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 0.8690933883190155
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8064285540173828
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.70007691882423
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -1.929339587688446
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": 0.8621021509170532
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.0259226313528298
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7452098500813373
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.5590472519397736
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.3498320324894637
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6527470235322341
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 0.6751351952552795
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.6295403838157654
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1049925295016172
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.7492342462442901
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": -0.17859748750925064
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.8508687533073179
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5465280118116882
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -1.9311866760253906
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": -0.6636180877685547
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.4789400106501955
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7211904963849072
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.8822333812713623
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.1819618902241293
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.62728662141847
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17351924628019333
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.45906075835227966
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.6666656732559204
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1568371464900329
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8709260497029592
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": 0.1336887702345848
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.7634415734672882
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5866560105727445
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": 0.8315662145614624
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7119630745407752
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.65980478251539
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.7366316914558411
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.110284536945452
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6113454621647296
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.6334302425384521
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": 0.6314164698123932
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.375047558413375
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.07523190278638224
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": -0.9638389945030212
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.0341150503487049
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.8344498193889204
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -1.9375187754631042
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": -0.7102657854557037
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.0798690438733412
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7060744516861028
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": -0.8346236348152161
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.28243735880413956
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.586363640753052
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": 0.6482032537460327
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.121653449817808
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.15092408559510734
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.4998870866937248
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7909724755662384
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": 0.9131035506725311
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6459451178075222
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6880478336160347
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.5590472519397736
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.1271601055907299
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6328902110058408
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.6295403838157654
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.0409165439664054
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.6954557357771398
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.751605246556502
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7784018427508281
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": 0.8315662145614624
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6765349570891466
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6354011603675822
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 7,
            "threshold": -1.544235348701477
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.676678453748029
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.545541747667097
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.6295403838157654
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.9993147971887144
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.673672802781837
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.7385553946494334
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7565982931292823
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 4,
            "threshold": 0.5294163841754198
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6836030865828402
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6212501421070205
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.7366316914558411
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.169865518812125
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5935694233497415
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0856192708015442
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.8365351557731628
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.9715921705935309
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7663238242716834
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.2849511098363604
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7458627957467563
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": 0.9131035506725311
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6157989841471105
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6721902667911763
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.5590472519397736
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.2328413001633038
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5809288635227523
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.6295403838157654
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.01740229535377
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.46425838725369895
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": 1.952998399734497
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.8888058504952314
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.810015610749795
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": -0.7065282091498375
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6051862886664123
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6610434245219936
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -1.099580466747284
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.9412857502944508
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5259186631319475
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": -0.6331337690353394
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 5,
            "threshold": -1.007966011762619
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.333634837693491
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.2673253223471803
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 0,
            "threshold": -0.9630833864212036
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.1461115328656357
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.8585205190200738
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": 1.2347630858421326
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.5918844630115951
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6137156906626566
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 7,
            "threshold": -1.9375187754631042
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.6715843230943819
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5278560316139436
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": 0.4342856705188751
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.0766025283588503
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.1001995986984262
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.4258925045624007
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.73733827059002
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.6919881105422974
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": -0.30154433846473694
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.5825369444488617
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6533092537133058
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -1.099580466747284
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.9831446285366418
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5261121780676663
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.7877162098884583
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": 0.6368662118911743
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.9695893344847469
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.24093984340313274
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": 2.448378562927246
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7591734666914323
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 2.0419649736890597
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.695512294769287
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": 0.14076894521713257
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.5786828463722362
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6354053928277354
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": -0.8346236348152161
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.18015880703458304
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4808402474824702
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0761058330535889
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": -1.7669122219085693
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.363202087640405
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.9576410779040706
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8165607154369354
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1960786411681517
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7277088766342485
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": 0.9711453020572662
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.632174467804904
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.56788608555645
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.5590472519397736
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.1420563445346525
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5364328039501736
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 5,
            "threshold": 0.20300263911485672
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.3681432604789734
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1284230575225658
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.2393553873926555
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": -1.0563819408416748
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.902896374190148
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.5106664185986014
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.6919881105422974
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": -0.30154433846473694
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.5590524594713078
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6288665374847435
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.7353755533695221
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.0199754291332472
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.509486116888634
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0856192708015442
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.8845962151901277
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.3966462118393894
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.8432914018630981
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6750262867893762
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7266515008716115
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": -0.7065282091498375
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.5510776324485622
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6118926905065467
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.8872447609901428
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.9172039656606082
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.48511463978801
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 1,
            "threshold": 0.13310188427567482
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": -1.7952923774719238
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.2632279094496957
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.8389801619726082
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": 0.5432209223508835
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.3347944904775244
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7286703092629916
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -1.9375187754631042
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 2,
            "threshold": 0.8532507121562958
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6395143113675992
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1085891490646145
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.7366316914558411
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.0754129999779996
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5136933304801328
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": 0.5268330276012421
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.122020922193634
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.14209407087481882
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6619703562132953
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7057866932771673
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.6192225217819214
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 4,
            "threshold": 0.5294163841754198
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6155999688342788
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.536615376557731
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -1.099580466747284
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.846943348494312
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.45923231627793
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 1.3653855919837952
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 2,
            "threshold": 1.0856192708015442
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.893149347783241
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.6093345169759494
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 1.0435886085033417
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.2975807757220363
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6242311089356725
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -1.9375187754631042
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 13,
            "threshold": -0.6636180877685547
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.9777287468163631
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6006021260319252
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": -0.39581963419914246
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.8204000182675973
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4591875444271665
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 3,
            "threshold": -1.7952923774719238
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": -0.1582099050283432
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.340093250770714
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.131562869455706
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 8,
            "threshold": 0.5268330276012421
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.0114862233404203
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.08581003167313189
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 12,
            "threshold": 0.5828572809696198
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5961160306342714
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.5226532939702422
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.8872447609901428
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.874381506815029
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4708494330652837
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.6331337690353394
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.143340626153419
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.422359985326648
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 2,
            "threshold": 0.8690933883190155
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7530855919662962
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5803150003171689
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 14,
            "threshold": -0.30154433846473694
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.5153856622810722
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5813731862725278
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 2,
            "threshold": 0.686217337846756
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4963923096223588
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.1088581273623
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.7877162098884583
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 3,
            "threshold": -1.7952923774719238
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.258957821994616
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.8249036299761682
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 13,
            "threshold": 1.8161022663116455
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.165892519443393
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7164170305638695
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 0,
            "threshold": 0.9711453020572662
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5774722782540143
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.503906394389854
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.5590472519397736
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.043704542637599
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4726363034776686
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.6295403838157654
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.8444384702644999
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.6518544070906478
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8382132947444916
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.6424920503501852
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7028346229272144
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -1.9375187754631042
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 5,
            "threshold": 0.8402197957038879
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.4392245836674702
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5735727389877667
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.5564323663711548
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.096685940808416
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4641954057920485
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 10,
            "threshold": 1.6295403838157654
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.9064133183247982
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.7494732711343801
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 1,
            "threshold": -0.8236516416072845
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.183828480870155
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7020578371148793
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -0.9210180640220642
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 2,
            "threshold": 0.619016483426094
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4126238897513943
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.05653485707260285
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 4,
            "threshold": -0.7548349797725677
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.2702820879783454
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4877886459411358
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 2,
            "threshold": 1.0868120193481445
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 8,
            "threshold": 0.4342856705188751
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.0548252519969048
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.2421023168428247
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 3,
            "threshold": -0.8165607154369354
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1819507888978036
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6852899785141053
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 8,
            "threshold": -1.099580466747284
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 2,
            "threshold": 0.6647741496562958
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.3659466189935987
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.45327464294104886
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 4,
            "threshold": -0.5138677358627319
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.2168215639449003
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4862658577094716
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.5231269001960754
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 6,
            "threshold": 0.6751351952552795
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.9209370142113413
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.2212382282817925
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": 1.426596760749817
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.7424636491730303
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.7159046696059754
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 3,
            "threshold": 1.6139817833900452
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5624195395504887
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.490407610503411
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.5590472519397736
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.0477076045707607
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4440570424428172
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.18070654571056366
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 5,
            "threshold": 0.10327862948179245
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.3681432604789734
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.050722916607963
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.268155306563796
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 6,
            "threshold": 0.7058447599411011
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.4320373443682311
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.9671645210674022
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 9,
            "threshold": -0.30154433846473694
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.4825627688364502
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5480602664104806
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 8,
            "threshold": -0.7366316914558411
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -0.9490938717407689
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4185686697155455
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 1,
            "threshold": -0.6331337690353394
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.1317050053969067
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.3864696355938847
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": 2.448378562927246
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6983745611524403
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.9979983354835196
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.6919881105422974
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 1,
            "threshold": 0.8315662145614624
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.539641702898515
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.4760438479680718
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 1,
            "threshold": -0.8346236348152161
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.7105437117571402
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.372442159531578
          }
        ],
        [
          {
            "id": 0,
            "left": 1,
            "right": 8,
            "feature": 0,
            "threshold": 0.17705530673265457
          },
          {
            "id": 1,
            "left": 2,
            "right": 5,
            "feature": 6,
            "threshold": 0.6780065596103668
          },
          {
            "id": 2,
            "left": 3,
            "right": 4,
            "feature": 13,
            "threshold": 1.8365351557731628
          },
          {
            "id": 3,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.8890703750196728
          },
          {
            "id": 4,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.6695141089922374
          },
          {
            "id": 5,
            "left": 6,
            "right": 7,
            "feature": 4,
            "threshold": -0.510173499584198
          },
          {
            "id": 6,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 0.7037455907940156
          },
          {
            "id": 7,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -2.0327656001680983
          },
          {
            "id": 8,
            "left": 9,
            "right": 12,
            "feature": 7,
            "threshold": -2.779027819633484
          },
          {
            "id": 9,
            "left": 10,
            "right": 11,
            "feature": 10,
            "threshold": -0.7065282091498375
          },
          {
            "id": 10,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": 1.4690694755571811
          },
          {
            "id": 11,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.5313971841371319
          },
          {
            "id": 12,
            "left": 13,
            "right": 14,
            "feature": 3,
            "threshold": 0.05834296718239784
          },
          {
            "id": 13,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.4614831415466913
          },
          {
            "id": 14,
            "left": -1,
            "right": -1,
            "feature": -2,
            "threshold": -2.0,
            "value": -1.1499238227710415
          }
        ]
      ],
      "learningRate": 0.01,
      "intercept": 1.6653345369377348e-16
    }
  },
  "metrics": {
    "Baseline (KenPom)": {
      "f1": 0.08695652173913043,
      "precision": 0.06666666666666667,
      "recall": 0.125,
      "threshold": 0.717420710000933
    },
    "Logistic Regression": {
      "f1": 0.2127659574468085,
      "precision": 0.1282051282051282,
      "recall": 0.625,
      "threshold": 0.5973642926311519
    },
    "Random Forest": {
      "f1": 0.17857142857142858,
      "precision": 0.10416666666666667,
      "recall": 0.625,
      "threshold": 0.3555581711702675
    },
    "Gradient Boosting": {
      "f1": 0.23809523809523808,
      "precision": 0.14705882352941177,
      "recall": 0.625,
      "threshold": 0.441905860557488
    },
    "PCA + Logistic Regression": {
      "f1": 0.25,
      "precision": 0.15625,
      "recall": 0.625,
      "threshold": 0.6963600077106156
    }
  },
  "featureStats": [
    {
      "key": "SeedInt",
      "label": "SeedInt",
      "min": 11.0,
      "max": 16.0,
      "mean": 13.558333333333334,
      "median": 14.0,
      "step": 1.0
    },
    {
      "key": "PreTourneyRank",
      "label": "PreTourneyRank",
      "min": 11.0,
      "max": 318.0,
      "mean": 106.81875,
      "median": 92.0,
      "step": 1.0
    },
    {
      "key": "Pace",
      "label": "Pace",
      "min": 54.142857142857146,
      "max": 77.93518518518519,
      "mean": 68.1085216425982,
      "median": 68.00703125,
      "step": 0.1
    },
    {
      "key": "ThreePointRate",
      "label": "ThreePointRate",
      "min": 0.2168164992067689,
      "max": 0.5284621920135939,
      "mean": 0.34381665980580145,
      "median": 0.3420459767310406,
      "step": 0.001
    },
    {
      "key": "ThreePointPct",
      "label": "ThreePointPct",
      "min": 0.26490066225165565,
      "max": 0.43759630200308164,
      "mean": 0.35729142929347807,
      "median": 0.3586405106573355,
      "step": 0.001
    },
    {
      "key": "EffectiveFGPct",
      "label": "EffectiveFGPct",
      "min": 0.4189342403628118,
      "max": 0.5874840357598978,
      "mean": 0.5157730509550926,
      "median": 0.5162164402822731,
      "step": 0.001
    },
    {
      "key": "TurnoverRate",
      "label": "TurnoverRate",
      "min": 0.12497771999538672,
      "max": 0.26622296173044924,
      "mean": 0.192273956817721,
      "median": 0.1906753765117955,
      "step": 0.001
    },
    {
      "key": "OffensiveReboundRate",
      "label": "OffensiveReboundRate",
      "min": 0.09445037353255069,
      "max": 0.21642468239564427,
      "mean": 0.1624376249384411,
      "median": 0.1643873023948288,
      "step": 0.001
    },
    {
      "key": "FreeThrowRate",
      "label": "FreeThrowRate",
      "min": 0.23812038014783526,
      "max": 0.5587905935050392,
      "mean": 0.3816332543983921,
      "median": 0.37905074208757794,
      "step": 0.001
    },
    {
      "key": "MarginPerGame",
      "label": "MarginPerGame",
      "min": -7.241379310344827,
      "max": 18.41176470588235,
      "mean": 5.6767383840058985,
      "median": 5.684863523573201,
      "step": 0.1
    },
    {
      "key": "WinPct",
      "label": "WinPct",
      "min": 0.36666666666666664,
      "max": 0.9583333333333334,
      "mean": 0.6925672971783251,
      "median": 0.696969696969697,
      "step": 0.001
    },
    {
      "key": "OffensiveEfficiency",
      "label": "OffensiveEfficiency",
      "min": 91.05521722397047,
      "max": 118.14870747090698,
      "mean": 106.50210839331797,
      "median": 106.75408501409697,
      "step": 0.1
    },
    {
      "key": "DefensiveEfficiency",
      "label": "DefensiveEfficiency",
      "min": 85.26224143624846,
      "max": 112.07830537602271,
      "mean": 98.13232214188967,
      "median": 98.14895895290212,
      "step": 0.1
    },
    {
      "key": "RegularSeasonWinPct",
      "label": "RegularSeasonWinPct",
      "min": 0.36666666666666664,
      "max": 0.9583333333333334,
      "mean": 0.6925672971783251,
      "median": 0.696969696969697,
      "step": 0.001
    },
    {
      "key": "RegularSeasonMargin",
      "label": "RegularSeasonMargin",
      "min": -7.241379310344827,
      "max": 18.41176470588235,
      "mean": 5.6767383840058985,
      "median": 5.684863523573201,
      "step": 0.1
    }
  ],
  "challengeCases": [
    {
      "season": 2022,
      "teamId": 1389,
      "teamName": "St Peter's",
      "seed": 15,
      "actualLabel": 1,
      "features": {
        "SeedInt": 15.0,
        "PreTourneyRank": 118.0,
        "Pace": 68.33362068965518,
        "ThreePointRate": 0.3034134007585335,
        "ThreePointPct": 0.34791666666666665,
        "EffectiveFGPct": 0.4781921618204804,
        "TurnoverRate": 0.19226159688142605,
        "OffensiveReboundRate": 0.14254742547425475,
        "FreeThrowRate": 0.3748419721871049,
        "MarginPerGame": 3.9310344827586206,
        "WinPct": 0.6206896551724138,
        "OffensiveEfficiency": 96.83727150011984,
        "DefensiveEfficiency": 91.08456230209292,
        "RegularSeasonWinPct": 0.6206896551724138,
        "RegularSeasonMargin": 3.9310344827586206
      },
      "modelProbabilities": {
        "Baseline": 0.1383980657823623,
        "Logistic Regression": 0.09846503371860733,
        "Random Forest": 0.13587178549274267,
        "Gradient Boosting": 0.30621423294405775,
        "PCA + Logistic Regression": 0.09636194611781143
      }
    },
    {
      "season": 2023,
      "teamId": 1418,
      "teamName": "Louisiana",
      "seed": 13,
      "actualLabel": 0,
      "features": {
        "SeedInt": 13.0,
        "PreTourneyRank": 92.0,
        "Pace": 69.79166666666667,
        "ThreePointRate": 0.3171014492753623,
        "ThreePointPct": 0.3656307129798903,
        "EffectiveFGPct": 0.5304347826086957,
        "TurnoverRate": 0.16811940298507463,
        "OffensiveReboundRate": 0.14476945959345563,
        "FreeThrowRate": 0.37681159420289856,
        "MarginPerGame": 5.033333333333333,
        "WinPct": 0.7666666666666667,
        "OffensiveEfficiency": 108.27462686567164,
        "DefensiveEfficiency": 101.06268656716418,
        "RegularSeasonWinPct": 0.7666666666666667,
        "RegularSeasonMargin": 5.033333333333333
      },
      "modelProbabilities": {
        "Baseline": 0.3002274684907747,
        "Logistic Regression": 0.26440814893571163,
        "Random Forest": 0.16413982850757125,
        "Gradient Boosting": 0.30621423294405775,
        "PCA + Logistic Regression": 0.22828981956426228
      }
    },
    {
      "season": 2026,
      "teamId": 1295,
      "teamName": "N Dakota St",
      "seed": 14,
      "actualLabel": 0,
      "features": {
        "SeedInt": 14.0,
        "PreTourneyRank": 113.0,
        "Pace": 70.33548387096775,
        "ThreePointRate": 0.4272965879265092,
        "ThreePointPct": 0.3574938574938575,
        "EffectiveFGPct": 0.5335958005249344,
        "TurnoverRate": 0.14722069345074298,
        "OffensiveReboundRate": 0.14497307001795331,
        "FreeThrowRate": 0.30656167979002624,
        "MarginPerGame": 8.290322580645162,
        "WinPct": 0.7741935483870968,
        "OffensiveEfficiency": 112.4105668684645,
        "DefensiveEfficiency": 100.62373876352963,
        "RegularSeasonWinPct": 0.7741935483870968,
        "RegularSeasonMargin": 8.290322580645162
      },
      "modelProbabilities": {
        "Baseline": 0.1625021193277987,
        "Logistic Regression": 0.22153412171480688,
        "Random Forest": 0.22288324947371077,
        "Gradient Boosting": 0.36156146820767593,
        "PCA + Logistic Regression": 0.10951086885409256
      }
    },
    {
      "season": 2022,
      "teamId": 1323,
      "teamName": "Notre Dame",
      "seed": 11,
      "actualLabel": 1,
      "features": {
        "SeedInt": 11.0,
        "PreTourneyRank": 51.0,
        "Pace": 66.74354838709678,
        "ThreePointRate": 0.4308849045691151,
        "ThreePointPct": 0.37718120805369126,
        "EffectiveFGPct": 0.5399074609600926,
        "TurnoverRate": 0.14451076581039607,
        "OffensiveReboundRate": 0.09712793733681462,
        "FreeThrowRate": 0.2764603817235396,
        "MarginPerGame": 5.0,
        "WinPct": 0.6774193548387096,
        "OffensiveEfficiency": 107.77893236026195,
        "DefensiveEfficiency": 100.2875715908267,
        "RegularSeasonWinPct": 0.6774193548387096,
        "RegularSeasonMargin": 5.0
      },
      "modelProbabilities": {
        "Baseline": 0.6688579617405879,
        "Logistic Regression": 0.9484262597738882,
        "Random Forest": 0.6885634084158144,
        "Gradient Boosting": 0.5946733455203802,
        "PCA + Logistic Regression": 0.9715668041930982
      }
    },
    {
      "season": 2024,
      "teamId": 1307,
      "teamName": "New Mexico",
      "seed": 11,
      "actualLabel": 0,
      "features": {
        "SeedInt": 11.0,
        "PreTourneyRank": 23.0,
        "Pace": 74.34558823529412,
        "ThreePointRate": 0.29750566893424035,
        "ThreePointPct": 0.33384146341463417,
        "EffectiveFGPct": 0.5099773242630385,
        "TurnoverRate": 0.13173771140342203,
        "OffensiveReboundRate": 0.13934426229508196,
        "FreeThrowRate": 0.3310657596371882,
        "MarginPerGame": 10.558823529411764,
        "WinPct": 0.7352941176470589,
        "OffensiveEfficiency": 109.7023044209277,
        "DefensiveEfficiency": 95.49995054890714,
        "RegularSeasonWinPct": 0.7352941176470589,
        "RegularSeasonMargin": 10.558823529411764
      },
      "modelProbabilities": {
        "Baseline": 0.8533400350281526,
        "Logistic Regression": 0.8673848405074217,
        "Random Forest": 0.6571382987387415,
        "Gradient Boosting": 0.6314574621658857,
        "PCA + Logistic Regression": 0.8664847849210991
      }
    },
    {
      "season": 2023,
      "teamId": 1343,
      "teamName": "Princeton",
      "seed": 15,
      "actualLabel": 1,
      "features": {
        "SeedInt": 15.0,
        "PreTourneyRank": 112.0,
        "Pace": 70.54722222222223,
        "ThreePointRate": 0.4074542008843967,
        "ThreePointPct": 0.3395348837209302,
        "EffectiveFGPct": 0.5246367656348705,
        "TurnoverRate": 0.15907390636689372,
        "OffensiveReboundRate": 0.12347729789590255,
        "FreeThrowRate": 0.3215413771320278,
        "MarginPerGame": 6.074074074074074,
        "WinPct": 0.7037037037037037,
        "OffensiveEfficiency": 106.2592694675224,
        "DefensiveEfficiency": 97.64932866086545,
        "RegularSeasonWinPct": 0.7037037037037037,
        "RegularSeasonMargin": 6.074074074074074
      },
      "modelProbabilities": {
        "Baseline": 0.16771045696003814,
        "Logistic Regression": 0.15052586281493993,
        "Random Forest": 0.19834774861288237,
        "Gradient Boosting": 0.34642897407779877,
        "PCA + Logistic Regression": 0.14280423874230663
      }
    },
    {
      "season": 2023,
      "teamId": 1158,
      "teamName": "Col Charleston",
      "seed": 12,
      "actualLabel": 0,
      "features": {
        "SeedInt": 12.0,
        "PreTourneyRank": 73.0,
        "Pace": 72.80227272727272,
        "ThreePointRate": 0.4743158905424868,
        "ThreePointPct": 0.33299595141700405,
        "EffectiveFGPct": 0.514882381180989,
        "TurnoverRate": 0.16066764482460796,
        "OffensiveReboundRate": 0.15770319450060655,
        "FreeThrowRate": 0.32693230916946714,
        "MarginPerGame": 12.969696969696969,
        "WinPct": 0.9090909090909091,
        "OffensiveEfficiency": 110.34454052591599,
        "DefensiveEfficiency": 92.52957887178847,
        "RegularSeasonWinPct": 0.9090909090909091,
        "RegularSeasonMargin": 12.969696969696969
      },
      "modelProbabilities": {
        "Baseline": 0.4679752055975976,
        "Logistic Regression": 0.5550199616664655,
        "Random Forest": 0.4121089886824534,
        "Gradient Boosting": 0.3317449380238174,
        "PCA + Logistic Regression": 0.3132986742117547
      }
    },
    {
      "season": 2022,
      "teamId": 1276,
      "teamName": "Michigan",
      "seed": 11,
      "actualLabel": 1,
      "features": {
        "SeedInt": 11.0,
        "PreTourneyRank": 32.0,
        "Pace": 68.17822580645162,
        "ThreePointRate": 0.3232998885172798,
        "ThreePointPct": 0.3396551724137931,
        "EffectiveFGPct": 0.5231326644370122,
        "TurnoverRate": 0.16276126376551023,
        "OffensiveReboundRate": 0.13123486682808716,
        "FreeThrowRate": 0.28929765886287623,
        "MarginPerGame": 3.161290322580645,
        "WinPct": 0.5483870967741935,
        "OffensiveEfficiency": 107.11962243171952,
        "DefensiveEfficiency": 102.48281898723695,
        "RegularSeasonWinPct": 0.5483870967741935,
        "RegularSeasonMargin": 3.161290322580645
      },
      "modelProbabilities": {
        "Baseline": 0.8054895677982649,
        "Logistic Regression": 0.951578618507878,
        "Random Forest": 0.6389538949629904,
        "Gradient Boosting": 0.6242008300603117,
        "PCA + Logistic Regression": 0.9773388766019521
      }
    },
    {
      "season": 2025,
      "teamId": 1384,
      "teamName": "St Francis PA",
      "seed": 16,
      "actualLabel": 0,
      "features": {
        "SeedInt": 16.0,
        "PreTourneyRank": 310.0,
        "Pace": 68.29666666666667,
        "ThreePointRate": 0.41853600944510033,
        "ThreePointPct": 0.3342736248236953,
        "EffectiveFGPct": 0.5156434474616293,
        "TurnoverRate": 0.18497730489530967,
        "OffensiveReboundRate": 0.1130890052356021,
        "FreeThrowRate": 0.2384887839433294,
        "MarginPerGame": -5.466666666666667,
        "WinPct": 0.43333333333333335,
        "OffensiveEfficiency": 99.56562057689491,
        "DefensiveEfficiency": 107.56991556444922,
        "RegularSeasonWinPct": 0.43333333333333335,
        "RegularSeasonMargin": -5.466666666666667
      },
      "modelProbabilities": {
        "Baseline": 0.00011349556755349104,
        "Logistic Regression": 0.008532740839350085,
        "Random Forest": 0.11391985167030873,
        "Gradient Boosting": 0.39269151061388585,
        "PCA + Logistic Regression": 0.0014354601115707018
      }
    },
    {
      "season": 2025,
      "teamId": 1400,
      "teamName": "Texas",
      "seed": 11,
      "actualLabel": 0,
      "features": {
        "SeedInt": 11.0,
        "PreTourneyRank": 41.0,
        "Pace": 69.84117647058824,
        "ThreePointRate": 0.35370094386487827,
        "ThreePointPct": 0.3595505617977528,
        "EffectiveFGPct": 0.5255837059115748,
        "TurnoverRate": 0.13518066200623263,
        "OffensiveReboundRate": 0.1330749354005168,
        "FreeThrowRate": 0.36562344759066073,
        "MarginPerGame": 6.205882352941177,
        "WinPct": 0.5588235294117647,
        "OffensiveEfficiency": 112.31365282573907,
        "DefensiveEfficiency": 103.42794575928578,
        "RegularSeasonWinPct": 0.5588235294117647,
        "RegularSeasonMargin": 6.205882352941177
      },
      "modelProbabilities": {
        "Baseline": 0.7466619069798275,
        "Logistic Regression": 0.891044072660758,
        "Random Forest": 0.6273834008335804,
        "Gradient Boosting": 0.6261763575784361,
        "PCA + Logistic Regression": 0.9281627068243681
      }
    },
    {
      "season": 2024,
      "teamId": 1213,
      "teamName": "Grand Canyon",
      "seed": 12,
      "actualLabel": 0,
      "features": {
        "SeedInt": 12.0,
        "PreTourneyRank": 53.0,
        "Pace": 70.77890625,
        "ThreePointRate": 0.3608815426997245,
        "ThreePointPct": 0.3435114503816794,
        "EffectiveFGPct": 0.5203856749311295,
        "TurnoverRate": 0.1664514277514708,
        "OffensiveReboundRate": 0.1490857946554149,
        "FreeThrowRate": 0.4534435261707989,
        "MarginPerGame": 11.71875,
        "WinPct": 0.875,
        "OffensiveEfficiency": 110.77629502080642,
        "DefensiveEfficiency": 94.21945539035508,
        "RegularSeasonWinPct": 0.875,
        "RegularSeasonMargin": 11.71875
      },
      "modelProbabilities": {
        "Baseline": 0.6519114131151467,
        "Logistic Regression": 0.2342473128348374,
        "Random Forest": 0.49755806438790556,
        "Gradient Boosting": 0.30872772668352555,
        "PCA + Logistic Regression": 0.260154496396786
      }
    },
    {
      "season": 2022,
      "teamId": 1235,
      "teamName": "Iowa St",
      "seed": 11,
      "actualLabel": 1,
      "features": {
        "SeedInt": 11.0,
        "PreTourneyRank": 45.0,
        "Pace": 68.68515625,
        "ThreePointRate": 0.374370453273643,
        "ThreePointPct": 0.3213751868460389,
        "EffectiveFGPct": 0.49888080581980976,
        "TurnoverRate": 0.19108932288408384,
        "OffensiveReboundRate": 0.12186732186732187,
        "FreeThrowRate": 0.28147733631785116,
        "MarginPerGame": 3.46875,
        "WinPct": 0.625,
        "OffensiveEfficiency": 96.7730928034396,
        "DefensiveEfficiency": 91.72287498436025,
        "RegularSeasonWinPct": 0.625,
        "RegularSeasonMargin": 3.46875
      },
      "modelProbabilities": {
        "Baseline": 0.7170229922804496,
        "Logistic Regression": 0.9424833103226967,
        "Random Forest": 0.665296712050759,
        "Gradient Boosting": 0.6034399395969005,
        "PCA + Logistic Regression": 0.9734506299469212
      }
    },
    {
      "season": 2023,
      "teamId": 1159,
      "teamName": "Colgate",
      "seed": 15,
      "actualLabel": 0,
      "features": {
        "SeedInt": 15.0,
        "PreTourneyRank": 114.0,
        "Pace": 68.56969696969698,
        "ThreePointRate": 0.3476890756302521,
        "ThreePointPct": 0.4093655589123867,
        "EffectiveFGPct": 0.5858718487394958,
        "TurnoverRate": 0.14318543397560543,
        "OffensiveReboundRate": 0.1018867924528302,
        "FreeThrowRate": 0.2773109243697479,
        "MarginPerGame": 8.909090909090908,
        "WinPct": 0.7575757575757576,
        "OffensiveEfficiency": 113.97383772317482,
        "DefensiveEfficiency": 100.98108538094395,
        "RegularSeasonWinPct": 0.7575757575757576,
        "RegularSeasonMargin": 8.909090909090908
      },
      "modelProbabilities": {
        "Baseline": 0.1574249353305833,
        "Logistic Regression": 0.2440034068166064,
        "Random Forest": 0.2650587600489218,
        "Gradient Boosting": 0.3504925610785437,
        "PCA + Logistic Regression": 0.21447845590179235
      }
    },
    {
      "season": 2023,
      "teamId": 1286,
      "teamName": "Montana St",
      "seed": 14,
      "actualLabel": 0,
      "features": {
        "SeedInt": 14.0,
        "PreTourneyRank": 110.0,
        "Pace": 68.12265625,
        "ThreePointRate": 0.3325373134328358,
        "ThreePointPct": 0.31956912028725315,
        "EffectiveFGPct": 0.5092537313432836,
        "TurnoverRate": 0.16927187861967727,
        "OffensiveReboundRate": 0.11469344608879492,
        "FreeThrowRate": 0.4435820895522388,
        "MarginPerGame": 4.09375,
        "WinPct": 0.71875,
        "OffensiveEfficiency": 104.26964230420771,
        "DefensiveEfficiency": 98.26026124751998,
        "RegularSeasonWinPct": 0.71875,
        "RegularSeasonMargin": 4.09375
      },
      "modelProbabilities": {
        "Baseline": 0.1785256065983267,
        "Logistic Regression": 0.06336002769224928,
        "Random Forest": 0.17258789677581718,
        "Gradient Boosting": 0.3195504790939282,
        "PCA + Logistic Regression": 0.0585195331873636
      }
    },
    {
      "season": 2023,
      "teamId": 1192,
      "teamName": "F Dickinson",
      "seed": 16,
      "actualLabel": 1,
      "features": {
        "SeedInt": 16.0,
        "PreTourneyRank": 312.0,
        "Pace": 71.18046875,
        "ThreePointRate": 0.3698630136986301,
        "ThreePointPct": 0.3443072702331962,
        "EffectiveFGPct": 0.5147133434804668,
        "TurnoverRate": 0.15629287352789453,
        "OffensiveReboundRate": 0.13590530469092504,
        "FreeThrowRate": 0.2785388127853881,
        "MarginPerGame": 0.3125,
        "WinPct": 0.53125,
        "OffensiveEfficiency": 107.1659843487614,
        "DefensiveEfficiency": 106.72695942312124,
        "RegularSeasonWinPct": 0.53125,
        "RegularSeasonMargin": 0.3125
      },
      "modelProbabilities": {
        "Baseline": 0.00010523536356367249,
        "Logistic Regression": 0.0025181300436580606,
        "Random Forest": 0.20664917615273867,
        "Gradient Boosting": 0.36156146820767593,
        "PCA + Logistic Regression": 0.00016700815915547535
      }
    },
    {
      "season": 2026,
      "teamId": 1275,
      "teamName": "Miami OH",
      "seed": 11,
      "actualLabel": 0,
      "features": {
        "SeedInt": 11.0,
        "PreTourneyRank": 93.0,
        "Pace": 73.39224137931035,
        "ThreePointRate": 0.44627128596594245,
        "ThreePointPct": 0.375,
        "EffectiveFGPct": 0.5916030534351145,
        "TurnoverRate": 0.13578434251482938,
        "OffensiveReboundRate": 0.09989429175475686,
        "FreeThrowRate": 0.4022313564298297,
        "MarginPerGame": 10.862068965517242,
        "WinPct": 0.9655172413793104,
        "OffensiveEfficiency": 118.82304575086627,
        "DefensiveEfficiency": 104.0230222587655,
        "RegularSeasonWinPct": 0.9655172413793104,
        "RegularSeasonMargin": 10.862068965517242
      },
      "modelProbabilities": {
        "Baseline": 0.29234931154129223,
        "Logistic Regression": 0.3265960562602378,
        "Random Forest": 0.32853720171042944,
        "Gradient Boosting": 0.31995119443192427,
        "PCA + Logistic Regression": 0.2646211255094666
      }
    },
    {
      "season": 2024,
      "teamId": 1301,
      "teamName": "NC State",
      "seed": 11,
      "actualLabel": 1,
      "features": {
        "SeedInt": 11.0,
        "PreTourneyRank": 58.0,
        "Pace": 70.49097222222223,
        "ThreePointRate": 0.3342453260373917,
        "ThreePointPct": 0.34652114597544337,
        "EffectiveFGPct": 0.5075239398084815,
        "TurnoverRate": 0.13082841577428156,
        "OffensiveReboundRate": 0.12941643509329098,
        "FreeThrowRate": 0.32512539899680803,
        "MarginPerGame": 3.6666666666666665,
        "WinPct": 0.6111111111111112,
        "OffensiveEfficiency": 108.32750450707832,
        "DefensiveEfficiency": 103.12589279557073,
        "RegularSeasonWinPct": 0.6111111111111112,
        "RegularSeasonMargin": 3.6666666666666665
      },
      "modelProbabilities": {
        "Baseline": 0.6079063347198181,
        "Logistic Regression": 0.9294248793657538,
        "Random Forest": 0.7232698793842058,
        "Gradient Boosting": 0.6005610591644143,
        "PCA + Logistic Regression": 0.9001429452096181
      }
    },
    {
      "season": 2022,
      "teamId": 1151,
      "teamName": "Chattanooga",
      "seed": 13,
      "actualLabel": 0,
      "features": {
        "SeedInt": 13.0,
        "PreTourneyRank": 70.0,
        "Pace": 67.015625,
        "ThreePointRate": 0.39287641662169454,
        "ThreePointPct": 0.34065934065934067,
        "EffectiveFGPct": 0.5277927684835402,
        "TurnoverRate": 0.1571461879225927,
        "OffensiveReboundRate": 0.13249063670411984,
        "FreeThrowRate": 0.26983270372369134,
        "MarginPerGame": 7.3125,
        "WinPct": 0.78125,
        "OffensiveEfficiency": 109.06971321986477,
        "DefensiveEfficiency": 98.15807880624854,
        "RegularSeasonWinPct": 0.78125,
        "RegularSeasonMargin": 7.3125
      },
      "modelProbabilities": {
        "Baseline": 0.4962711163866131,
        "Logistic Regression": 0.659362799063959,
        "Random Forest": 0.3632406248360897,
        "Gradient Boosting": 0.34864206476593623,
        "PCA + Logistic Regression": 0.6283295171336014
      }
    },
    {
      "season": 2024,
      "teamId": 1241,
      "teamName": "James Madison",
      "seed": 12,
      "actualLabel": 0,
      "features": {
        "SeedInt": 12.0,
        "PreTourneyRank": 59.0,
        "Pace": 73.25454545454545,
        "ThreePointRate": 0.38106796116504854,
        "ThreePointPct": 0.3643312101910828,
        "EffectiveFGPct": 0.5441747572815534,
        "TurnoverRate": 0.13899230578307273,
        "OffensiveReboundRate": 0.13190054782975136,
        "FreeThrowRate": 0.341747572815534,
        "MarginPerGame": 13.484848484848484,
        "WinPct": 0.9090909090909091,
        "OffensiveEfficiency": 113.26218251013485,
        "DefensiveEfficiency": 94.85397534541242,
        "RegularSeasonWinPct": 0.9090909090909091,
        "RegularSeasonMargin": 13.484848484848484
      },
      "modelProbabilities": {
        "Baseline": 0.5988639360956387,
        "Logistic Regression": 0.46753915381782535,
        "Random Forest": 0.4190877716854216,
        "Gradient Boosting": 0.33851094800069004,
        "PCA + Logistic Regression": 0.3592184144226542
      }
    },
    {
      "season": 2023,
      "teamId": 1338,
      "teamName": "Pittsburgh",
      "seed": 11,
      "actualLabel": 1,
      "features": {
        "SeedInt": 11.0,
        "PreTourneyRank": 77.0,
        "Pace": 68.92424242424242,
        "ThreePointRate": 0.4410229645093946,
        "ThreePointPct": 0.35976331360946745,
        "EffectiveFGPct": 0.5323590814196242,
        "TurnoverRate": 0.15519894482303803,
        "OffensiveReboundRate": 0.1310657596371882,
        "FreeThrowRate": 0.3235908141962422,
        "MarginPerGame": 5.636363636363637,
        "WinPct": 0.6666666666666666,
        "OffensiveEfficiency": 110.4418553528248,
        "DefensiveEfficiency": 102.2642338975599,
        "RegularSeasonWinPct": 0.6666666666666666,
        "RegularSeasonMargin": 5.636363636363637
      },
      "modelProbabilities": {
        "Baseline": 0.43059595929005784,
        "Logistic Regression": 0.8503596119501171,
        "Random Forest": 0.6230434135674816,
        "Gradient Boosting": 0.5997711804034178,
        "PCA + Logistic Regression": 0.8369668183807635
      }
    }
  ],
  "caseStudies": [
    {
      "season": 2022,
      "teamName": "St Peter's",
      "seed": 15,
      "actual": "Cinderella",
      "pomRank": 118,
      "modelProb": 0.13587178549274267,
      "modelPred": "Early Exit",
      "baseProb": 0.1383980657823623,
      "basePred": "Early Exit",
      "pace": 68.33362068965518,
      "threeRate": 0.3034134007585335,
      "threePct": 0.34791666666666665,
      "efg": 0.4781921618204804
    },
    {
      "season": 2022,
      "teamName": "Iowa St",
      "seed": 11,
      "actual": "Cinderella",
      "pomRank": 45,
      "modelProb": 0.665296712050759,
      "modelPred": "Cinderella",
      "baseProb": 0.7170229922804496,
      "basePred": "Early Exit",
      "pace": 68.68515625,
      "threeRate": 0.374370453273643,
      "threePct": 0.3213751868460389,
      "efg": 0.49888080581980976
    },
    {
      "season": 2023,
      "teamName": "F Dickinson",
      "seed": 16,
      "actual": "Cinderella",
      "pomRank": 312,
      "modelProb": 0.20664917615273867,
      "modelPred": "Early Exit",
      "baseProb": 0.00010523536356367249,
      "basePred": "Early Exit",
      "pace": 71.18046875,
      "threeRate": 0.3698630136986301,
      "threePct": 0.3443072702331962,
      "efg": 0.5147133434804668
    },
    {
      "season": 2023,
      "teamName": "Princeton",
      "seed": 15,
      "actual": "Cinderella",
      "pomRank": 112,
      "modelProb": 0.19834774861288237,
      "modelPred": "Early Exit",
      "baseProb": 0.16771045696003814,
      "basePred": "Early Exit",
      "pace": 70.54722222222223,
      "threeRate": 0.4074542008843967,
      "threePct": 0.3395348837209302,
      "efg": 0.5246367656348705
    },
    {
      "season": 2024,
      "teamName": "NC State",
      "seed": 11,
      "actual": "Cinderella",
      "pomRank": 58,
      "modelProb": 0.7232698793842058,
      "modelPred": "Cinderella",
      "baseProb": 0.6079063347198181,
      "basePred": "Early Exit",
      "pace": 70.49097222222223,
      "threeRate": 0.3342453260373917,
      "threePct": 0.34652114597544337,
      "efg": 0.5075239398084815
    },
    {
      "season": 2024,
      "teamName": "Oakland",
      "seed": 14,
      "actual": "Early Exit",
      "pomRank": 137,
      "modelProb": 0.2184363428480462,
      "modelPred": "Early Exit",
      "baseProb": 0.07265527073623716,
      "basePred": "Early Exit",
      "pace": 70.22867647058824,
      "threeRate": 0.4073710073710074,
      "threePct": 0.35102533172496986,
      "efg": 0.5211302211302211
    }
  ]
};
