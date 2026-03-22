# Focus PWA — GitHub Pages Setup

## Step 1 — Create a GitHub account (if you don't have one)
Go to https://github.com and sign up. Free.

## Step 2 — Create a new repository
1. Click the "+" icon top right → "New repository"
2. Name it exactly: `focus-pwa`
3. Set it to **Public**
4. Click "Create repository"

## Step 3 — Upload the files
1. In your new repo, click "uploading an existing file"
2. Drag and drop ALL files from this folder:
   - index.html
   - manifest.json
   - sw.js
   - icon192.png
   - icon512.png
3. Click "Commit changes"

## Step 4 — Enable GitHub Pages
1. Go to your repo → Settings → Pages (left menu)
2. Under "Source" select "Deploy from a branch"
3. Branch: main, folder: / (root)
4. Click Save
5. Wait 2 minutes — your URL will be:
   `https://YOUR_GITHUB_USERNAME.github.io/focus-pwa/`

## Step 5 — Add redirect URI in Google Cloud Console
1. Go to console.cloud.google.com → APIs & Services → Credentials
2. Click your "Focus application" OAuth client
3. Under "Authorised redirect URIs" → Add URI:
   `https://YOUR_GITHUB_USERNAME.github.io/focus-pwa/`
4. Click Save

## Step 6 — Open on your phone
1. Open Chrome (Android) or Safari (iPhone)
2. Go to: `https://YOUR_GITHUB_USERNAME.github.io/focus-pwa/`
3. Tap "Continue with Google" and sign in

## Step 7 — Add to Home Screen
**iPhone (Safari):**
- Tap the Share button → "Add to Home Screen" → Add

**Android (Chrome):**
- Tap the three dots → "Add to Home screen" → Add

The app icon will appear on your home screen. Tap it to open like a native app.

## Connecting to your existing sheet
After signing in, the PWA will look for your spreadsheet.
If it creates a new one, run this in the browser console to point it to your existing sheet:

```javascript
localStorage.setItem('focus_spreadsheet_id', 'YOUR_SHEET_ID_HERE')
location.reload()
```

Your Sheet ID: 1l2JoZ7hnUXvR56_h07dsy6Z8WWlSwZKGuxkzO-qDY6o
So the command is:
```javascript
localStorage.setItem('focus_spreadsheet_id', '1l2JoZ7hnUXvR56_h07dsy6Z8WWlSwZKGuxkzO-qDY6o')
location.reload()
```
