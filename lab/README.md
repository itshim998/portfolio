# Camille rebuild — interaction laboratory

This directory is the isolated implementation laboratory for the Camille-style portfolio rebuild. Production `main` remains untouched.

## Frozen desktop motion stack

The following systems are considered frozen unless a reproducible regression appears:

- Checkpoint 2D homepage fullscreen ↔ strip interaction;
- Checkpoints 3A–3C desktop loader choreography;
- loader performance isolation/caching;
- Checkpoints 4A–4D persistent project routing, virtual project scroll, hero parallax, footer overscroll expansion, project-to-project continuity, history/state cleanup and deep-scroll Back continuity.

## Checkpoint 5A — About route foundation

5A introduced:

- `#/about` route/history/deep-link handling;
- one persistent WebGL context with a DOM-led About page;
- independent About virtual scroll state;
- left/right split architecture;
- remapped left-column motion and counter-moving preview;
- migrated Capabilities, Experience, Beyond AI/ML and Contact content;
- loader isolation for the About DOM.

## Checkpoint 5B — About choreography calibration

5B calibrated:

- right stream start at `calc(50% - 64px)`;
- right stream width around `50.1042vw`;
- miniature left information system;
- small top-left preview geometry;
- 1500ms long-rise reveal motion;
- 110% right-side reveal offset;
- 80px left-side rise;
- staged hero/left entry timing;
- independent About scroll physics;
- preview counter-motion;
- reveal-state permanence.

The browser audit granted a conditional GO. It explicitly froze:

- right-stream geometry;
- About scroll physics;
- hero reveal motion;
- section reveal duration/easing;
- reveal-state permanence;
- preview counter-motion range;
- SPA routing and single-canvas persistence.

## Checkpoint 5C — desktop About corrective freeze

5C implements only the three browser-audit corrections and deliberately leaves the approved 5B systems unchanged.

### 1. Hollow preview / unobstructed index

The 5B preview geometry and travel remain in place, but the desktop preview is now a transparent bordered frame.

Its raster image is hidden on desktop.

Layering is explicit:

- preview frame: lower layer;
- miniature left text/index: upper layer.

This preserves the reference-like hollow indicator behavior while ensuring:

- `ABOUT / SOUNAK PODDAR` remains readable;
- index items 01–04 remain readable;
- the preview frame can counter-move without covering content.

### 2. Left track no longer collides with chrome

The artificial `min-height: 142vh` introduced during 5B calibration is removed.

Left travel is now based on the actual content bounds.

The calculation:

1. measures the natural left-content height;
2. compares it with the visible region below its top origin;
3. produces zero travel when the information stack fits;
4. additionally clamps any necessary travel to a desktop 90px top safe-zone.

At 1440×900 the current miniature content fits in the available area, so the expected left-track travel is effectively:

`0px → 0px`.

This matches the browser audit observation that Camille's left text system remains stationed while only the indicator frame moves.

### 3. Preview counter-motion remains frozen

The audit approved the existing preview travel of roughly 432px at a 900px viewport height.

5C therefore decouples preview travel from left-track content height.

Desktop preview travel targets:

`0.48 × viewportHeight`

subject to a bottom safety clamp.

At 900px height this is approximately:

`432px`.

### 4. Resize synchronization

About resize handling now preserves normalized page progress rather than preserving an absolute virtual-scroll pixel value.

On resize:

1. capture current normalized progress from the previous scroll range;
2. neutralize the right-stream transform before measurement;
3. calculate the new virtual scroll maximum;
4. remap the captured normalized progress onto the new maximum;
5. set both `scrollCurrent` and `scrollTarget` to the remapped position;
6. recompute left/preview travel;
7. reapply transforms;
8. refresh reveal thresholds.

Therefore a resize/restoration cycle should return to the same relative document position instead of permanently drifting.

### 5. Reveal threshold correction

5B's threshold formula was conceptually correct, but its layout-position measurement was not transform-safe.

5C now measures each reveal element relative to the transformed About content container:

`element.getBoundingClientRect().top - aboutScrollContent.getBoundingClientRect().top`.

That produces the element's stable virtual-document position regardless of current scroll transform.

The trigger remains:

`elementTop - 0.9 × viewportHeight`.

At 1440×900, a below-fold section should therefore begin revealing when its top approaches approximately 810px in the viewport.

The approved motion itself remains untouched:

- ~110% starting Y;
- ~1500ms transform duration;
- same easing;
- reveal once, then remain visible.

## 5C acceptance criteria

At 1440×900:

1. all miniature left text/index items are visible at scroll 0;
2. the moving preview is a hollow frame and never obscures the index;
3. the left text track remains below the fixed brand throughout 0–100% scroll;
4. the left text remains present at full scroll;
5. preview counter-motion remains roughly 0 → +432px;
6. Experience/Beyond/Contact begin revealing as they approach the bottom ~10% of the viewport;
7. reveal duration/easing remains identical to 5B;
8. resizing 1440×900 → 1200×760 → 1440×900 around 50% progress restores the same normalized About position without permanent transform drift;
9. Work ↔ About history remains correct;
10. loader, homepage and project motion remain unchanged.

## Desktop About freeze

Once 5C is manually accepted, the desktop About system is frozen together with the previously frozen desktop Home, Loader, Routing and Work-page systems.

The next development phase is mobile-specific geometry and interaction adaptation.
