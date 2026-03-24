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

## Working Style

The project owner is a **solo entrepreneur without coding experience**. All explanations must be in plain language. Technical decisions should be explained in terms of what they mean for the user experience, not in code terms. The owner steers direction — Claude implements.

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
- **Moonlight Silver:** `#C0C0C0` (personal accent — now implemented in code)
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

### Session 6 (Mar 24) — SGNL Branding & Edit Panel
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
  - Completed remaining SGNL gaps:
    - Switched personal accent from Zen Violet to Moonlight Silver (#C0C0C0)
    - Capture tag chips: 3px radius, no bg fill, small-caps micro-signals
    - Added small-caps to all `.tag` badges
    - Personal buttons use silver-bordered obsidian
  - Created MEMORY.md and CLAUDE.md for session continuity
  - Built task edit panel (tap ✎ to edit name, signal/noise, tags, due date, status note)
  - Fixed setupSheet() to initialize Weekly Review header row
  - Merged PR #1 to main — deployed to GitHub Pages

### Session 7 (Mar 24) — Bug Fixes & Robustness
- **Fixed critical bug:** Missing `</span>` in `dueTag` for tasks with future due dates — caused malformed HTML that could break open task rendering
- **Added error resilience:** `buildItem` wrapped in try-catch so individual task errors surface visibly instead of producing empty/invisible items
- **Added null safety:** `buildEditPanel` guards against undefined `S.tags`
- **Added Change Sheet UI:** Settings screen now has "Change Sheet →" button so users can reconnect to a different spreadsheet without needing browser console (critical for mobile)
- **Improved error surfacing:** `loadStats` and `refreshAll` now show toast messages on failure instead of silently swallowing errors
- **Switched service worker to network-first:** Assets now served fresh from network with cache as fallback, so phone users get updates immediately without manual cache clearing
- **Bumped cache version** to `focus-v9-sgnl`

### Session 8 (Mar 24) — Robustness & Drive Recovery
- Added visible Error Log (Settings > Debug) for mobile debugging
- All network/auth/API errors now show as toasts (no more silent failures)
- Added `?sheet=ID` URL parameter to force correct sheet connection
- Auto-redirect to login on token expiry
- **Drive search recovery**: if the sheet ID is lost (cache clear, re-auth), the app now searches Google Drive for the existing "Focus" sheet before creating a new one
- Full UX audit across all 5 user paths (see below)
- Updated MEMORY.md with working style note (non-technical owner)
- Bumped cache to v15

---

## Current State

### PWA (`index.html` — single file, ~900 lines)
- **All 5 screens working:** Capture, Tasks, Ritual, Review, Settings
- **SGNL branding:** ~97% applied (all 17 pillars implemented, minor polish remaining)
- **JS syntax:** Verified clean
- **Deployed at:** `https://tpaiva003.github.io/focus-pwa/`
- **Cache version:** `focus-v15-sgnl`

### Extension (NOT in this repo)
- Was delivered as zip files in previous sessions
- Last version: v3.1 with chart fixes
- **Needs complete rebuild** with full SGNL branding parity

---

## UX Audit — 5 User Paths (Session 8)

### Path 1: Morning Entry
| What works | What's broken or missing |
|---|---|
| Ignition overlay forces intentionality | No time check — shows at 2am too, should only show after 7:00 |
| Remembers if you already did it today | Daily focus is stored locally only — lost on cache clear |
| Can skip if in a rush | No summary of yesterday's leftovers before setting focus |
| | No notification/reminder to open the app |

### Path 2: Creating Tasks (Capture)
| What works | What's broken or missing |
|---|---|
| Fast capture flow | 1.5s delay after capture before button resets |
| Signal as default nudges intentionality | No offline queue — fails if no internet |
| Tags and due dates work | "Add context" field is hidden — easy to miss |
| Contextual nudge phrases change by mode | Can't capture from Ignition screen directly |
| Stats bar shows live ratio | No quick multi-task entry |

### Path 3: Viewing & Completing Tasks
| What works | What's broken or missing |
|---|---|
| Ticker shows most urgent tasks first | No search or text filter |
| Inline editing is smooth | Can't see personal + work tasks together |
| Noise decay forces cleanup | Reorder swaps data (not true drag) — risky |
| Tag filter (ostracize) is powerful | Done section shows ALL done tasks ever — grows forever |
| Implosion animation feels rewarding | No way to delete a task |
| | Task list requires internet every time — not cached |

### Path 4: End-of-Day Review (Ritual — Evening)
| What works | What's broken or missing |
|---|---|
| Forces deliberate end-of-day cleanup | "Close the day" doesn't record a daily log in the Sheet |
| Delegate/ignore with reason builds decision log | Counts ALL done tasks, not just today's |
| Stats at a glance | If you close the app, unsaved decisions are lost |
| | Morning ritual is view-only — can't act on carried-over tasks |
| | No check: "Did you complete your morning focus?" |

### Path 5: Weekly Review
| What works | What's broken or missing |
|---|---|
| Richest screen — lots of useful data | Focus score counts ALL signals ever, not just this week |
| Radar chart gives real insight | Close Week writes incomplete data (captured counts = 0) |
| Debrief narrative adapts to performance | No history — can't look back at previous weeks |
| Week-over-week comparison | Aging alert dropdowns don't actually update tasks |
| Reflection prompts are thoughtful | No "it's Friday" reminder |
| | Reflection fields don't pre-fill from prior weeks |

---

## Known Issues & Gaps

### PWA — Resolved
- [x] ~~Personal mode accent is Zen Violet~~ — switched to Moonlight Silver
- [x] ~~Tag chips in capture screen use rounded pills~~ — fixed to 3px radius
- [x] ~~Phone cache requires manual clear~~ — switched SW to network-first
- [x] ~~Edge requires console command to reconnect~~ — has Change Sheet UI now
- [x] ~~Silent errors on mobile~~ — all errors now show as toasts + Error Log
- [x] ~~Lost sheet ID = new sheet created~~ — now searches Drive first

### PWA — Open
- [ ] Ignition shows at any hour (no 7:00 CET check)
- [ ] No offline capture queue
- [ ] Evening close doesn't filter by "today" — counts all done tasks
- [ ] Evening "Close the day" doesn't save a daily log row
- [ ] Focus score in Review counts all-time, not weekly
- [ ] Close Week writes 0 for signals_captured and noise_captured
- [ ] Aging alert actions in Review are visual-only — don't update tasks
- [ ] Done section grows forever — no date filter or archive
- [ ] No search/filter on Tasks screen
- [ ] No task deletion
- [ ] Morning ritual can't act on carried-over tasks
- [ ] No "Did you complete your morning focus?" end-of-day check

### Extension
- [ ] Not yet rebuilt with SGNL branding in this repo

### Data/Backend
- [ ] No offline capture support (PWA stores nothing locally)

---

## Next Steps (Prioritized by UX Impact)

### High Priority — Core experience is broken without these
1. **Fix evening close to filter by today** — only show/count tasks closed today
2. **Fix Focus Score to be weekly** — not all-time
3. **Fix Close Week data** — write actual captured counts, not 0
4. **Wire aging alert actions** — dropdowns in Review should actually update tasks
5. **Add 7:00 CET time gate to Ignition** — don't show before morning

### Medium Priority — Improve daily usability
6. **Add "Did you achieve your focus?" check** at end of day
7. **Morning ritual should allow acting on tasks** — not just viewing
8. **Limit Done section** — show only last 7 days, or add "show more"
9. **Add search/filter to Tasks screen**
10. **Save daily close as a log row** in the Sheet

### Lower Priority — Nice to have
11. **Offline capture queue** — save locally, sync when online
12. **Build Chrome/Edge extension** with SGNL branding
13. **Friday reminder** for weekly review
14. **Task deletion option**
15. **Future: Email-to-task** (Gmail first, then Outlook)
