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

### Session 8b (Mar 24) — Fix All 12 UX Issues
- **Grey text readability**: boosted `--smoke` #555→#999, `--smoke-2` #404→#777 (passes accessibility)
- **Ignition 7am gate**: morning overlay only appears after 7:00am, not at 2am
- **Evening close today filter**: now counts only tasks closed TODAY, not all-time
- **Morning focus check**: evening shows "Did you achieve your morning focus?" with green/red feedback
- **Focus Score weekly**: Review screen now scopes to current week only
- **Close Week captured counts**: writes actual signals/noise captured (was writing 0)
- **Aging alert actions WIRED**: dropdowns in Review now actually delegate/ignore tasks
- **Done section limited**: shows last 7 days with "show more" for older tasks
- **Task search**: search bar on Tasks screen filters by name or tag
- **Task deletion**: delete button in edit panel (marks as deleted, filtered from all views)
- **Morning ritual actions**: carried-over tasks now have done/delegate/ignore dropdowns
- **Friday reminder**: toast notification on Fridays, remembered after closing the week
- Bumped cache to v16

### Session 8c (Mar 24) — UX Polish & Resilience
- **Collapsible chrono-ticker:** hidden by default, toggle "show/hide timeline" button (state remembered)
- **Category edit:** Work↔Personal switch in edit panel (move tasks between modes)
- **Clean ratios:** "1.0:1" now displays as "1:1"
- **Radar legend:** Intentionality Map shows green=signal, gold=noise, bigger slice=more tasks
- **API retry:** auto-retries up to 3× with 1.5s/3s delays on network failures
- Bumped cache to v17

### Session 8d (Mar 24) — Tags Tab Fix
- **Auto-create Tags tab:** `loadTags` now creates the Tags tab with defaults if missing (for sheets created before tags feature existed)
- **Suppressed recoverable errors:** "Unable to parse range" errors no longer show toast when auto-recovery succeeds
- Bumped cache to v18

### Session 9 (Mar 25) — Analysis, SW Bug Fix & Performance
- **Full codebase analysis**: Cross-referenced all 913 lines of `index.html` with MEMORY.md
- **Fixed service worker bug**: `sw.js` was still cache-first despite Session 7 claiming network-first switch — now actually network-first with cache update on success
- **Added client-side task caching**: 30-second TTL so switching between screens doesn't re-fetch all tasks from Google Sheets API each time (was making a full API call on every screen navigation)
- **Cache invalidation**: All mutation points (capture, edit, delete, complete, reorder) invalidate the cache so fresh data is fetched after changes
- **Bumped cache to v19** (was v18, MEMORY.md said v16)
- Updated MEMORY.md with accurate current state

### Session 10 (Mar 25) — Notes/Ideas System
- **New feature: Notes/Ideas parking lot** — lightweight capture for thoughts that aren't tasks yet
- **Task/Note toggle** on Capture screen — segmented control switches between task and note mode
- **Note mode**: Minimal capture — just text + auto-category from current mode (personal/work)
- **Notes list**: Appears below form in note mode, sorted newest first, max 10 with "show all"
- **Promote to task**: Tap "↑ promote" on any note → switches to task mode with text pre-filled, note marked as promoted after task capture
- **Archive notes**: Tap "✕ archive" to dismiss notes you no longer need
- **Google Sheets backend**: New "Notes" sheet (columns: note_id, text, category, status, created_date, promoted_to_task_id)
- **Auto-migration**: `ensureNotesSheet()` creates Notes tab for existing users on first visit (same pattern as Tags recovery)
- **New users**: `setupSheet()` now creates Notes sheet alongside Tasks, Weekly Review, Tags
- **30-second cache**: Notes have their own TTL cache (same as tasks), invalidated on mutations
- **SGNL brand compliant**: Note text in Instrument Serif Italic, glassmorphism cards, copper/silver accents
- **Bumped cache to v21**

### Session 11 (Mar 28) — Extension Build & PWA Bug Fix
- **Fixed PWA capture toggle bug:** Task/Note segmented control had `transition:all .2s` causing CSS flash on mobile — changed to `transition:background .2s,color .2s`, added `min-height:36px` and `flex-shrink:0`
- **Built Chrome extension with full SGNL branding** — complete rebuild in `extension/` directory:
  - Self-contained `popup.html` (inline CSS + JS, ~993 lines)
  - Full feature parity with PWA: all 5 screens, notes system, task/note toggle, edit panel, ritual, review, radar chart
  - All 17 SGNL branding pillars applied
  - OAuth via `chrome.identity.launchWebAuthFlow` (background.js)
  - Uses `localStorage` in popup (synchronous) with `chrome.storage.local` fallback for token persistence
  - Extension-specific: `position:absolute` instead of `fixed`, 400×600px popup dimensions, no SW registration
  - Task source tagged as 'extension' (vs 'mobile' for PWA)
  - Generated icon PNGs (16, 48, 128) with gold bar motif
- **Bumped SW cache to v26**

---

## Current State

### PWA (`index.html` — single file, ~975 lines)
- **All 5 screens working:** Capture (with Task/Note toggle), Tasks, Ritual, Review, Settings
- **Notes/Ideas system**: Capture → Note mode for quick thoughts, promote to tasks later
- **SGNL branding:** ~97% applied (all 17 pillars implemented, minor polish remaining)
- **JS syntax:** Verified clean
- **Deployed at:** `https://tpaiva003.github.io/focus-pwa/`
- **Cache version:** `focus-v26-sgnl`
- **Service worker:** Network-first with cache fallback

### Google Sheets Backend (4 sheets)
- **Tasks** — A:N (task_id through tags)
- **Weekly Review** — A:N (week stats and reflections)
- **Tags** — A:B (tag_name, color)
- **Notes** — A:F (note_id, text, category, status, created_date, promoted_to_task_id)

### Chrome Extension (`extension/` — in this repo)
- **Files:** `manifest.json`, `background.js`, `popup.html`, icon16/48/128.png
- **Full parity** with PWA (all 5 screens, notes, task/note toggle, edit, ritual, review, radar chart, tags)
- **SGNL branded:** All 17 pillars applied
- **Auth:** `chrome.identity.launchWebAuthFlow` via background.js
- **Extension ID:** `djekfkhipiiaioakffkebjhnoojkbkpa` (Chrome + Edge)
- **To install:** Load unpacked from `extension/` folder in chrome://extensions

---

## UX Audit — 5 User Paths (Session 8)

### Path 1: Morning Entry
| What works | What's broken or missing |
|---|---|
| Ignition overlay forces intentionality | Daily focus is stored locally only — lost on cache clear |
| ~~7am gate~~ (fixed 8b) — only shows after 7:00am | No summary of yesterday's leftovers before setting focus |
| Remembers if you already did it today | No notification/reminder to open the app |
| Can skip if in a rush | |

### Path 2: Creating Tasks (Capture)
| What works | What's broken or missing |
|---|---|
| Fast capture flow | 1.5s delay after capture before button resets |
| Signal as default nudges intentionality | No offline queue — fails if no internet |
| Tags and due dates work | "Add context" field is hidden — easy to miss |
| Contextual nudge phrases change by mode | Can't capture from Ignition screen directly |
| Stats bar shows live ratio (clean "1:1" format) | No quick multi-task entry |

### Path 3: Viewing & Completing Tasks
| What works | What's broken or missing |
|---|---|
| Ticker shows most urgent tasks first (collapsible) | Can't see personal + work tasks together |
| ~~Search bar~~ (fixed 8b) — filters by name or tag | Reorder swaps data (not true drag) — risky |
| Inline editing smooth + category switch (Session 9) | Task list requires internet every time — not cached |
| ~~Done section~~ (fixed 8b) — limited to 7 days | |
| ~~Delete~~ (fixed 8b) — button in edit panel | |
| Tag filter (ostracize) is powerful | |
| Implosion animation feels rewarding | |
| Noise decay forces cleanup | |

### Path 4: End-of-Day Review (Ritual — Evening)
| What works | What's broken or missing |
|---|---|
| Forces deliberate end-of-day cleanup | "Close the day" doesn't record a daily log in the Sheet |
| Delegate/ignore with reason builds decision log | If you close the app, unsaved decisions are lost |
| ~~Today filter~~ (fixed 8b) — counts only today's done | |
| ~~Morning focus check~~ (fixed 8b) — shows achievement | |
| ~~Morning ritual actions~~ (fixed 8b) — can act on tasks | |
| Stats at a glance | |

### Path 5: Weekly Review
| What works | What's broken or missing |
|---|---|
| Richest screen — lots of useful data | No history — can't look back at previous weeks |
| Radar chart with legend (Session 9) | Reflection fields don't pre-fill from prior weeks |
| ~~Focus score~~ (fixed 8b) — scoped to current week | |
| ~~Close Week~~ (fixed 8b) — writes actual counts | |
| ~~Aging alerts~~ (fixed 8b) — wired to update tasks | |
| ~~Friday reminder~~ (fixed 8b) — toast notification | |
| Debrief narrative adapts to performance | |
| Week-over-week comparison | |
| Reflection prompts are thoughtful | |

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
- [x] ~~Ignition shows at any hour~~ — now gated to after 7:00am
- [ ] No offline capture queue
- [x] ~~Evening close counts all done tasks~~ — now filters by today's closed_date
- [ ] Evening "Close the day" doesn't save a daily log row (tasks DO get updated)
- [x] ~~Focus score counts all-time~~ — now scoped to current week
- [x] ~~Close Week writes 0 for captured counts~~ — now writes actual counts
- [x] ~~Aging alert actions are visual-only~~ — now wired to update tasks
- [x] ~~Done section grows forever~~ — limited to 7 days with "show more"
- [x] ~~No search/filter on Tasks~~ — search bar added
- [x] ~~No task deletion~~ — delete button in edit panel
- [x] ~~Morning ritual view-only~~ — can now act on carried-over tasks
- [x] ~~No morning focus check~~ — evening now shows achievement status
- [ ] No "daily log" row saved in Sheet (decision log exists via task updates)

### Extension
- [x] ~~Not yet rebuilt with SGNL branding~~ — rebuilt in `extension/` with full parity (Session 11)

### Data/Backend
- [ ] No offline capture support (PWA stores nothing locally)

---

## Next Steps (Prioritized by UX Impact)

### All 12 High/Medium issues FIXED in Session 8b

### Remaining — Nice to have
1. **Offline capture queue** — save locally, sync when online
2. ~~**Build Chrome/Edge extension** with SGNL branding~~ — DONE (Session 11)
3. **Daily log row** in Sheet (decisions already saved via task updates)
4. **Future: Email-to-task** (Gmail first, then Outlook)
5. **Extension: higher-res icons** — replace generated PNGs with designed icons
