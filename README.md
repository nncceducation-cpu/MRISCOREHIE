# MRISCOREHIE — NE/HIE Brain MRI Consensus Score Calculator

A single-page, offline-capable **bedside calculator** that reproduces **Table 2 (The Consensus Scoring System)** from:

> Mohammad K, Reddy Gurram Venkata SK, Wintermark P, et al. *Consensus Approach for Standardization of the Timing of Brain MRI and Classification of Brain Injury in Neonates With Neonatal Encephalopathy/Hypoxic-Ischemic Encephalopathy: A Canadian Perspective.* **Pediatric Neurology 2025;166:16–31.**

The scoring table is a modified Weeke score (Weeke L, et al. *J Pediatr* 2018;192:33–40).

## Features

- **Live scoring** of all 17 items across four regions — Gray matter (max 12), White matter/cortex (max 12), Cerebellum (max 4), Additional (max 4); **total max 32**.
- Each item shows the exact Table 2 options (0 / 1 / 2 points) and the **sequences used to assess injury** (T1/T2, DWI, SWI, MRV).
- **Predominant injury pattern** selector (BGT-predominant, watershed, PWMI, global/near-total) with optional brainstem / cerebellar / PAIS descriptors.
- **Copy report** (formatted plain-text summary for the chart) and **Print** (score sheet).
- **Figure atlas** — Figures 1–10 from the article as a tap-to-zoom reference of the injury patterns.
- Works fully **offline**, mobile-friendly, no dependencies, no data leaves the device.

## Use

Open `index.html` in any browser. That's it.

## Deploy on GitHub Pages

1. Push this folder to the `MRISCOREHIE` repository.
2. Repo **Settings → Pages → Source: Deploy from a branch → `main` / root**.
3. The calculator will be live at `https://<your-username>.github.io/MRISCOREHIE/`.

## Files

```
index.html          the calculator (all logic + styling inline)
assets/figs/        fig01.jpg … fig10.jpg  (article Figures 1–10)
README.md
```

## Notes

- Intraventricular and subdural hemorrhage cap at 1 point (per Table 2); subdural is scored only when mass effect is present.
- This is a decision-support aid reproducing a published table; it does not replace radiologist interpretation. The modified score still requires validation for inter-rater reliability and outcome prediction (per the article's Limitations).
- Figures are © the authors / *Pediatric Neurology* and are included for clinical reference within the study team.
