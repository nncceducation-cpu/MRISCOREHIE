# Deploy MRISCOREHIE on GitHub Pages & share with colleagues

Your live link will be:

```
https://nncceducation-cpu.github.io/MRISCOREHIE/
```

Your GitHub username `nncceducation-cpu` is already filled in below.

---

## A. Put the files in the repo

### Easiest (no command line) — upload in the browser
1. Go to your empty **MRISCOREHIE** repo on github.com.
2. Click **Add file → Upload files**.
3. Drag in **everything inside this folder**: `index.html`, `manifest.webmanifest`, `sw.js`, `favicon.ico`, `.nojekyll`, `README.md`, `DEPLOY.md`, and the whole **`assets/`** folder (with `figs/` and `icons/` inside).
   - Tip: if drag-and-drop skips the subfolders, use **choose your files**, or just drop the `assets` folder itself — GitHub keeps the structure.
4. Scroll down, write a commit message ("initial calculator"), click **Commit changes**.

### Or with git (command line)
Run the included `push.sh` (Mac/Linux) or `push.bat` (Windows) (username already set), **or** run manually from inside this folder:

```bash
git init
git add .
git commit -m "NE/HIE MRI consensus score calculator"
git branch -M main
git remote add origin https://github.com/nncceducation-cpu/MRISCOREHIE.git
git push -u origin main
```

---

## B. Turn on GitHub Pages
1. In the repo: **Settings** (top bar) → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. Wait ~1 minute, refresh the page. GitHub shows: *"Your site is live at https://nncceducation-cpu.github.io/MRISCOREHIE/"*.
5. Open that link — you should see the calculator. **This is the link to share.**

If you see a 404 for a minute, that's normal on first publish — give it another minute and hard-refresh.

---

## C. Share with colleagues
- **Paste the URL** into email / Slack / WhatsApp: `https://nncceducation-cpu.github.io/MRISCOREHIE/`
- **QR code**: a `share-qr.png` is included in this folder — drop it into a slide, poster, or email so colleagues can scan and open it on their phone.

---

## D. Install on a phone home screen (works offline after first open)

**iPhone / iPad (Safari):**
1. Open the link in **Safari**.
2. Tap the **Share** icon → **Add to Home Screen** → **Add**.
3. It appears as an app icon ("HIE MRI Score") and opens full-screen, no browser bar.

**Android (Chrome):**
1. Open the link in **Chrome**.
2. Tap the **⋮** menu → **Add to Home screen** / **Install app** → **Install**.

After the first load it is cached, so it keeps working with no signal (e.g. in the MRI suite or NICU).

---

## Updating later
Re-upload the changed file(s) (or `git push` again). The service worker cache version is `hie-mri-score-v1` in `sw.js` — if colleagues don't see an update, bump it to `-v2` so their devices refresh.
