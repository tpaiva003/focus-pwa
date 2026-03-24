# CLAUDE.md — Instructions for Claude Code

## Session Protocol

1. **At the start of every session**, read `MEMORY.md` to understand:
   - What has been built and decided
   - Current state of the project
   - Known issues and bugs
   - What the user was working on last

2. **Before ending a session**, update `MEMORY.md` with:
   - What was built or changed in this session
   - Any new decisions made
   - Updated current state
   - New known issues discovered
   - Updated next steps

## Project Context

This is **FOCUS: SGNL** — a personal productivity tool (browser extension + PWA) that separates tasks into Signal vs Noise, inspired by Steve Jobs' focus methodology.

- The PWA is a single-file app (`index.html`) deployed to GitHub Pages
- The backend is Google Sheets (no server)
- The brand identity follows the **17-pillar SGNL spec** documented in `MEMORY.md`
- The user's professional brand is **AUMOVIO** — work mode UI uses Aumovio colors

## Key Files

- `index.html` — The complete PWA (HTML + CSS + JS in one file, ~800 lines)
- `manifest.json` — PWA manifest
- `sw.js` — Service worker for caching
- `MEMORY.md` — Project memory and decision log
- `extension/` — Chrome/Edge extension (to be created)

## Development Rules

- **Always validate JS syntax** after editing `index.html` — run: `node -e "const fs=require('fs');const h=fs.readFileSync('index.html','utf8');const s=h.match(/<script>([\s\S]*?)<\/script>/);try{new Function(s[1]);console.log('OK')}catch(e){console.log('ERROR:',e.message)}"`
- **Bump the service worker cache version** in `sw.js` after any change to `index.html` so mobile users get the update
- **Never expose secrets** — the OAuth Client ID is public by design, but never add API keys or tokens to committed files
- **The user tests on**: Chrome (personal), Edge (work), Android phone
- **Brand compliance**: All UI changes must align with the 17-pillar SGNL spec in `MEMORY.md`

## Git

- Development branch: check current branch with `git branch`
- Always push after committing
- The `main` branch deploys to GitHub Pages automatically
