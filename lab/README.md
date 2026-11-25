# Camille rebuild — interaction laboratory

This directory is the isolated implementation laboratory for the Camille-style portfolio rebuild. Production `main` remains untouched.

## Frozen motion foundations

The following systems have already passed manual/browser validation and are not to be retuned during ordinary bug fixing:

- Checkpoint 2D homepage fullscreen ↔ strip motion, direct drag, inertia, elastic boundaries, cycling and crop parallax;
- Checkpoints 3A–3C 25-plane desktop loader choreography and center-plane handoff;
- post-4C loader performance isolation/caching;
- Checkpoints 4A–4C persistent WebGL routing, virtual project scroll, hero parallax, footer overscroll/deadzone, 350×500-style next-project preview, quadratic expansion and fullscreen-before-route-commit handoff.

## Checkpoint 4D — work-page state / continuity cleanup

4D responds to the work-page browser audit without changing the approved WebGL motion math.

### 1. Project identity and history consistency

Home → project navigation is now intentionally single-shot:

- `navigateToProject()` only accepts a request while route state is genuinely `home`;
- project entry is ignored during focus cycling, recentering, route transitions, project swaps and footer commits;
- fullscreen pointer release resolves the actual rendered plane under the pointer and only opens it when it equals the current active project;
- this prevents a second project navigation from being injected after the first home → project transition has already begun.

The expected history chain is therefore:

`Home → StudentOS → SentIQ Chat → FieldLine`

with three browser Back actions returning to Home.

Project-to-project navigation remains owned by the footer expansion/history system, not by the homepage navigation helper.

### 2. Deterministic project metadata hydration

A shared `resetProjectRouteChrome()` clears stale inline state for:

- route metadata opacity/transform;
- project-story opacity;
- route status/hint opacity;
- progress-line opacity.

It is executed whenever new project metadata is hydrated and after route handoffs.

This prevents metadata that faded during one project from remaining stuck at `opacity: 0` after:

- a footer expansion;
- a chained footer expansion;
- browser Back/Forward project traversal.

### 3. In-page Back semantics

The visible project `Back` control no longer calls `history.back()`.

It always performs an explicit project → homepage route transition while keeping the active project selected.

Browser Back/Forward remains untouched and is still responsible for traversing the actual recorded route history.

Escape follows the same semantic home-return behavior as the visible Back control.

### 4. Deep-scroll Back continuity

The project root is no longer hidden at the instant a deep-scroll return starts.

Instead:

- current normal project-scroll position is captured;
- the persistent WebGL hero begins returning from that position;
- project story DOM remains mounted and opaque while the hero is still fully offscreen;
- story fade begins only after exit progress reaches 42%;
- story opacity reaches zero around 72% exit progress, when the returning hero is already visibly occupying the viewport;
- floating route chrome hides immediately;
- the route DOM is finally hidden only after the project → home WebGL transition completes.

This specifically removes the prior pure-black gap between story removal and hero re-entry.

### 5. Hero metadata / scroll-hint timing

Project hero metadata now fades across the first 180px of normal project scroll and reaches zero before story content can collide with it.

The persistent `Scroll to explore` hint fades across the first 72px and is effectively absent throughout the story/footer.

Both values are UI calibration only; virtual-scroll damping and hero motion remain unchanged.

### 6. Footer label visibility

Normal project scrolling no longer blindly ends at `projectScrollContent.scrollHeight`.

The regular scroll boundary is derived from the actual next-project footer position:

- desktop footer heading stop target: ~60px below viewport top;
- mobile target: ~42px.

The existing extra `1.5 × viewportHeight` footer overscroll and 15% expansion deadzone begin only after this calibrated normal stop.

The footer expansion curve, preview geometry, texture scale relaxation and automatic route handoff remain unchanged.

## 4D acceptance sequence

Primary state test:

`Home → StudentOS → SentIQ Chat → FieldLine → browser Back → browser Back → browser Back → Home`

Expected:

- centered homepage click opens StudentOS, never SentIQ Chat;
- no duplicate intermediate history entry;
- project metadata is visible at the top of every project;
- each browser Back lands on the expected previous route;
- third Back returns to Home.

Deep-scroll return test:

- enter StudentOS or FieldLine;
- scroll roughly 1500px into the story;
- use the visible project Back;
- story stays rendered until the returning hero is already visible;
- no pure-black intermediate frame;
- destination is Home with that project active.

UI test:

- metadata is fully gone by ~180–200px project scroll;
- scroll hint is gone almost immediately after scrolling starts;
- at normal footer rest, `NEXT PROJECT · 0%` remains visibly below the top edge.

## Performance boundary

The prior loader regression fix remains intact:

- project route DOM is removed from layout during the intro;
- static loader/thumbnail geometry is cached;
- inactive project compositor hints remain disabled.

No 4D change touches loader duration/easing or homepage physics.
