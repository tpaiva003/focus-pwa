# FOCUS: SGNL — Project Memory

## Project Overview

FOCUS: SGNL (pronounced "Signal") is a strategic attention-defense tool built around Steve Jobs' Signal vs Noise methodology. It exists as:
- **Browser Extension** (Chrome + Edge) — primary capture tool
- **PWA** (GitHub Pages) — mobile companion at `https://tpaiva003.github.io/focus-pwa/`
- **Backend** — Google Sheets (no server, OAuth direct to Sheets API)

**Google Sheet ID:** `1l2JoZ7hnUXvR56_h07dsy6Z8WWlSwZKGuxkzO-qDY6o`
**OAuth Client ID:** `1093598922846-a0aib49mg17nj8tp8n7asi8ph3vupbqi.apps.googleusercontent.com`
**Extension ID (Chrome + Edge):** `djekfkhipiiaioakffkebjhnoojkbkpa`
**Redirect URIs configured:** `https://djekfkhipiiaioakffkebjhnoojkbkpa.chromiumapp.org/` and `https://tpaiva003.github.io/focus-pwa/`

---

## Key Architectural Decisions

1. **Google Sheets as backend** — user can inspect their own data, no server needed
2. **Same extension in Chrome + Edge** — both share the same Sheet ID, synced via API
3. **PWA via GitHub Pages** — installable on phone, full parity with extension
4. **OAuth via `launchWebAuthFlow`** (extension) and redirect flow (PWA) — bypasses Chrome extension ID matching issues
5. **Signal is the default** — nudges user toward intentionality
6. **Personal/Professional split** — separate by default, unified when wanted
7. **Three rituals** — quick capture (anytime), daily open/close, Friday review
8. **Tags are user-configurable** — 9 defaults (Health, Side-job, Learning, Family, Cases, Risk Assessment, Admin, Clara, Idea development)
9. **Hint engine thresholds** — Signal aging: 10 days, No deadline: 5 days, Noise accumulation: 10+ open, Delegated follow-up: 15 days

---

## Brand Identity: The 17 SGNL Pillars

The brand spec was designed with Gemini and defines FOCUS: SGNL as a "Strategic Instrument" — not a utility app.

| # | Pillar | Description |
|---|--------|-------------|
| 1 | Obsidian Depth | `#050505` background + 2% organic grain texture |
| 2 | Editorial Typography | Instrument Serif Italic for signals; Inter/SF Pro for noise |
| 3 | Precision Glassmorphism | `backdrop-filter: blur(20px)`, 0.5px hairline borders |
| 4 | Light-Filament Accents | 2px glowing copper/silver wires, not thick bars |
| 5 | Onboarding Neutrality | Login button is obsidian, not Aumovio gradient |
| 6 | Extreme Negative Space | Auto-hide nav bar on scroll |
| 7 | Premium Toggle | Machined switch with knurled texture (not standard pill) |
| 8 | Ostracize Filter | Clicking a tag fades all non-matching tasks to 5% opacity |
| 9 | Intentionality Map | Polar radar chart in Friday Review |
| 10 | Atmospheric Shift | Work mode: 1px Aumovio gradient armor frame around viewport |
| 11 | Contextual Nudges | Personal: "What deserves your attention?" / Work: "What is the primary objective?" |
| 12 | Chrono-Ticker | Horizontal snap-scroll of tasks sorted by due date |
| 13 | Forward-Only View | Completed tasks implode; Done list submerged with gradient fade |
| 14 | Dual-Ignition Ritual | Morning overlay requiring 1 personal + 1 work focus signal |
| 15 | Noise Ledger | 10-day threshold blocking modal requiring reason to archive |
| 16 | Strategic Debrief | Conversational coaching narrative in Friday Review |
| 17 | Technical Iconography | 1px geometric SVG glyphs per tag |

### Color Palette
- **Obsidian:** `#050505` (foundation)
- **Luminous Copper:** `#D4AF37` (work signal accent)
- **Moonlight Silver:** `#C0C0C0` (personal accent — note: currently using Zen Violet `#6D5DFE` in code)
- **Basalt Grey:** `#1A1A1B` (noise/cards)
- **Aumovio Gradient:** `linear-gradient(135deg, #ff4208, #4827af)` (work armor)

### Typography
- **Signal font:** Instrument Serif (Italic) — via Google Fonts
- **Data font:** Inter — via Google Fonts
- **Mono:** DM Mono — via Google Fonts

---

## Session History

### Session 1 (Mar 19-20) — Discovery & Design
- Validated the need for the tool through discovery questions
- Designed data model, capture popup, task view, ritual, Friday review
- Decided on Google Sheets backend, OAuth, dual-browser support
- Built extension v1 with OAuth, Sheets integration, all 5 screens

### Session 2 (Mar 20) — Setup & Deployment
- Resolved OAuth "bad client id" errors (Extension ID mismatch)
- Switched to `launchWebAuthFlow` to bypass ID issues
- Got extension working in both Chrome and Edge
- Deployed PWA to GitHub Pages
- Connected both browsers + phone to same Google Sheet

### Session 3 (Mar 22) — Feature Groups A-D
- **Group A fixes:** Re-auth token persistence, due date saving
- **Group B:** Stats visible on screen, task reordering, ritual toggle
- **Group C:** Chart logic (closed_date not created_date), week comparison
- **Group D:** Tags (9 defaults, settings screen, tag visuals in review)
- Built PWA with full feature parity (all 5 screens)

### Session 4 (Mar 22-23) — SGNL Branding & Interaction Layer
- Designed complete SGNL brand with Gemini (17 pillars)
- Applied Obscura interaction layer (noise texture, glassmorphism, SN flash)
- Added chrono-ticker, ignition overlay, noise decay modal, ostracize filter
- Added implosion animation, focus score, contextual nudges

### Session 5 (Mar 23) — QA & Bug Fixes
- Fixed PWA `closeWeekPWA` bracket syntax error
- Fixed extension missing DOM IDs (tv-title-text, tv-date-text)
- Chart logic: counts by closed_date, 7-day personal mode, week-scoped stats

### Session 6 (Mar 24) — Current Session
- Added superpowers skills, GSD framework, UI/UX Pro Max skills
- Applied SGNL branding Phases 1-5 to PWA:
  - Signal tasks in Instrument Serif Italic
  - 2px light-filament accents with glow
  - Obsidian login button (neutrality)
  - Aumovio 1px armor frame (atmospheric shift)
  - Submerged done list with gradient fade
  - Premium machined toggle with knurled texture
  - Auto-hide bottom nav on scroll
  - Sonar pulse on intentionality radar
  - Strategic debrief narrative
  - Geometric glyph SVG icons for 9 tags
  - Fixed `closeWeekPWA` bracket mismatch

---

## Current State

### PWA (`index.html` — single file, ~800 lines)
- **All 5 screens working:** Capture, Tasks, Ritual, Review, Settings
- **SGNL branding:** ~85% applied (Phases 1-5 done)
- **JS syntax:** Verified clean
- **Deployed at:** `https://tpaiva003.github.io/focus-pwa/`
- **Cache version:** `focus-v4-sgnl`

### Extension (NOT in this repo)
- Was delivered as zip files in previous sessions
- Last version: v3.1 with chart fixes
- **Needs complete rebuild** with full SGNL branding parity

---

## Known Issues & Gaps

### PWA
- [ ] Personal mode accent is Zen Violet (`#6D5DFE`) not Moonlight Silver (`#C0C0C0`) as specified in final brand doc — user hasn't decided which to keep
- [ ] Chrono-ticker date selection is standard `<input type="date">` — spec calls for "Scrubbable Timeline" on desktop
- [ ] Tag chips in capture screen still use rounded pills — should match micro-signal spec (small caps, thin borders)
- [ ] No haptic feedback on mobile for toggle/completion (browser API limited)
- [ ] Phone cache requires manual clear after updates — PWA service worker caching

### Extension
- [ ] Not yet rebuilt with SGNL branding in this repo
- [ ] Extension files live outside git — should be added to repo under `extension/` directory

### Data/Backend
- [ ] Edge requires console command to reconnect if reinstalled: `chrome.storage.local.set({spreadsheetId: '1l2JoZ7hnUXvR56_h07dsy6Z8WWlSwZKGuxkzO-qDY6o', onboardingDone: true})`
- [ ] No offline capture support yet (PWA stores nothing locally)

---

## Next Steps

1. **Complete PWA branding** — resolve remaining gaps listed above
2. **Build Chrome/Edge extension** — full SGNL branding, add to repo under `extension/`
3. **Test end-to-end** — capture in extension → view on phone → ritual → review
4. **Deploy PWA update** — merge to main, GitHub Pages auto-deploys
5. **Future: Moonlight Silver decision** — user to decide if personal mode stays Violet or goes Silver
6. **Future: Email-to-task** — Gmail first, then Outlook
7. **Future: Global keyboard shortcut** — nice-to-have, requires companion app
