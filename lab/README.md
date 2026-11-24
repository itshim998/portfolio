# Camille rebuild — interaction laboratory

This directory is the isolated implementation laboratory for the Camille-style portfolio rebuild. The production portfolio on `main` remains untouched.

## Frozen homepage interaction foundation

Checkpoint 2D remains the approved homepage interaction base.

Validated behavior includes:

- upright WebGL textures;
- wide landscape OUT-state geometry;
- centered fullscreen title/counter;
- fullscreen previous/next crosses;
- central OUT-state cross;
- continuous 1:1 drag;
- velocity-based inertia;
- long exponential coast;
- low-energy centering;
- elastic strip boundaries;
- immediate grab/arrest during inertia;
- simultaneous off-center recenter + expansion;
- stable project state under stress;
- final crop-parallax clamp of `±0.045`.

## Checkpoint 3A — loader architecture

3A established the 25-texture WebGL loader pipeline, real GPU upload progress, a persistent central StudentOS plane, and a continuous handoff into the frozen homepage engine.

## Checkpoint 3B — loader choreography calibration

3B replaced the generic grid-collapse approximation with choreography translated from the recovered Camille loader mechanics:

- 5000ms main intro;
- viewport-derived 25-plane geometry;
- alternating vertical columns;
- 0–65% convergence via `cubic-bezier(0.8, 0, 0.1, 1)`;
- 40–100% expansion via `cubic-bezier(0.72, 0, 0.11, 1)`;
- center-plane 1.5× texture zoom relaxation;
- spatial surrounding-plane exit;
- persistent center-plane → homepage handoff;
- loader-linked homepage thumbnail rail.

A browser audit found the architecture and main choreography correct, with only three timing/presentation issues remaining.

## Checkpoint 3C — final loader timing polish

3C addresses only those audit blockers and deliberately leaves the validated 3B structure unchanged.

### Thumbnail rail timing

- Intro rail start moved from 3200ms to 3700ms.
- Per-project stagger remains 50ms.
- Rise duration reduced from 1500ms to 1200ms.
- With three current projects, the final thumbnail begins at 3800ms and reaches its resting slot at the 5000ms loader handoff.
- This keeps the rail below or barely breaking the viewport edge while the hero still has visible black margins.

### Final expansion tail

- The recovered `0.40 → 1.0` expansion window and cubic-bezier remain unchanged.
- Only the final portion of the already-eased result is remapped.
- Values up to 0.84 are untouched.
- The remaining 0.84 → 1.0 range uses an additional cubic ease-out, closing the last black border decisively without altering the validated middle of the intro.
- Center-plane crop/zoom continuity remains unchanged.

### Preloader presentation

- The visible `TEXTURES` eyebrow is suppressed.
- The percentage becomes a compact ~12–14px readout rather than a large display number.
- Loader overlay fade is shortened from 700ms to 240ms.
- The WebGL intro begins only after the preloader fade has cleared, preventing loading typography from overlapping the first visible column entry.

## Freeze boundary after 3C

Unless a new browser check finds a reproducible regression in these three corrections, the loader architecture and homepage motion engine should now be treated as frozen.

The next major milestone is persistent client-side routing and same-plane homepage → project-hero transition work.

Still deferred:

- mobile-specific loader calibration;
- custom cursor;
- real project detail pages;
- About page migration;
- final typography and visual polish.
