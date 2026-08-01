# MRISCOREHIE — NE/HIE Brain MRI Consensus Score Calculator

A single-page, offline-capable **bedside calculator** that reproduces **Table 2 (The Consensus Scoring System)** from:

> Mohammad K, Reddy Gurram Venkata SK, Wintermark P, et al. *Consensus Approach for Standardization of the Timing of Brain MRI and Classification of Brain Injury in Neonates With Neonatal Encephalopathy/Hypoxic-Ischemic Encephalopathy: A Canadian Perspective.* **Pediatric Neurology 2025;166:16–31.**

The scoring table is a modified Weeke score (Weeke L, et al. *J Pediatr* 2018;192:33–40).

## How the score works

Each anatomical item in Table 2 occupies **two lines** under the 1-point and 2-point columns:

| Line | What it grades | 1 point | 2 points |
|---|---|---|---|
| 1 | Extent / severity | Focal | Extensive |
| 2 | Laterality | Unilateral | Bilateral |

**The item score is the sum of both lines**, so a single region can contribute 0–4 points. This means focal-but-bilateral (1 + 2 = **3**) and extensive-but-unilateral (2 + 1 = **3**) are both scorable, and both differ from focal-and-unilateral (1 + 1 = **2**). Laterality is scored only when the item is abnormal.

Items scored on extent alone (no laterality axis): corpus callosum (midline), intraventricular haemorrhage, subdural haemorrhage, and occlusive cerebral sinovenous thrombosis. Intraventricular and subdural haemorrhage cap at 1 point; subdural is scored only when mass effect is present.

### Maxima

| Region | Maximum |
|---|---|
| Gray matter | **23** |
| White matter / cortex | **21** |
| Cerebellum | **8** |
| Additional | **4** |
| **Total** | **56** |

These are consistent with the worked examples in the article — e.g. the near-total injury case in Figure 4 is reported as GM = 23, which is only reachable when extent and laterality are scored separately.

> **Correction note.** Versions of this calculator before this commit merged the two lines into a single 0/1/2 choice per item ("Focal · Unilateral" / "Extensive · Bilateral"), which made focal-but-bilateral and extensive-but-unilateral injury impossible to enter and capped the total at 32. Any scores recorded with the earlier version under-state grey matter and should be re-scored — this matters particularly for `predict.html`, whose grey-matter cut-off of ≥ 3 is defined on the correct 0–23 scale.

## Features

- **Live scoring** of all 17 items across four regions, with a separate extent and laterality row per lateralisable item and a running per-item subtotal.
- Laterality unlocks only once an item is marked abnormal; abnormal items with no laterality selected are flagged so a case is never silently under-scored.
- Each item shows the exact Table 2 options and the **sequences used to assess injury** (T1/T2, DWI, SWI, MRV).
- **Predominant injury pattern** selector (BGT-predominant, watershed, PWMI, global/near-total) with optional brainstem / cerebellar / PAIS descriptors.
- **Copy report** (formatted plain-text summary for the chart), **Export CSV** (extent, laterality and item total exported as separate variables), and **Print** (score sheet).
- **Figure atlas** — Figures 1–10 from the article as a tap-to-zoom reference of the injury patterns.
- Works fully **offline**, mobile-friendly, no dependencies, no data leaves the device.

## Use

Open `index.html` in any browser. That's it.

`predict.html` adds an outcome-prediction tab based on Thayyil B, Scott JN, … Mohammad K. *Consensus Classification of Brain Injury Predicts Long-Term Neurodevelopmental Outcomes in Neonates With Hypoxic-Ischemic Encephalopathy.* Pediatric Neurology 2026; doi:10.1016/j.pediatrneurol.2026.07.008.

## Deploy on GitHub Pages

1. Push this folder to the `MRISCOREHIE` repository.
2. Repo **Settings → Pages → Source: Deploy from a branch → `main` / root**.
3. The calculator will be live at `https://<your-username>.github.io/MRISCOREHIE/`.

## Files

```
index.html          the calculator (all logic + styling inline)
predict.html        calculator + 18-24 month outcome prediction
fig01.jpg … fig10.jpg   article Figures 1-10 (repository root)
sw.js               service worker for offline use
README.md
```

## Notes

- This is a decision-support aid reproducing a published table; it does not replace radiologist interpretation. The modified score still requires validation for inter-rater reliability and outcome prediction (per the article's Limitations).
- Figures are © the authors / *Pediatric Neurology* and are included for clinical reference within the study team.
