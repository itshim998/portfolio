# Camille rebuild — interaction laboratory

This directory is the isolated implementation laboratory for the Camille-style portfolio rebuild. The production portfolio on `main` remains untouched.

## Frozen foundations

### Homepage interaction engine — Checkpoint 2D

The homepage motion engine remains frozen:

- upright WebGL textures;
- landscape OUT-state geometry;
- centered fullscreen title/counter;
- fullscreen previous/next crosses;
- central OUT-state cross;
- 1:1 drag;
- velocity-based inertia;
- long exponential coast;
- low-energy centering;
- elastic boundaries;
- immediate grab/arrest;
- off-center recenter + expansion;
- stable state under stress;
- crop-parallax clamp of `±0.045`.

### Loader — Checkpoints 3A → 3C

The desktop loader remains frozen:

- real 25-texture GPU loading pipeline;
- five alternating vertical columns;
- recovered viewport-derived loader geometry;
- overlapping 0–65% convergence and 40–100% expansion phases;
- center-plane 1.5× texture zoom relaxation;
- continuous center-plane → fullscreen handoff;
- delayed/staggered homepage thumbnail rail;
- tightened final expansion tail;
- compact preloader percentage that clears before visible column entry.

### Persistent routing — Checkpoints 4A → 4B

The route and work-page foundations remain intact:

- hash-backed lab routes with slug-based internal state;
- browser Back/Forward and deep-link reloads;
- one persistent canvas/WebGL context;
- homepage plane → project hero continuity;
- project virtual scrolling;
- persistent WebGL hero parallax during project scroll;
- original portfolio Purpose / Engineering POV / Current-state content;
- secondary project media;
- deep-scroll return-to-home continuity.

## Checkpoint 4C — next-project footer expansion

4C replaces the ordinary project-to-project footer handoff with the recovered Camille-style work-page ending.

### Recovered production behavior

The reference work-page scroll model has two distinct vertical ranges:

1. **Normal page range**
   - the project page scrolls normally;
   - WebGL hero and DOM content are driven by the same clamped project step.

2. **Footer expansion range**
   - an extra `1.5 × viewportHeight` exists after the normal content limit;
   - the DOM/content step stops advancing at the normal page maximum;
   - only scroll current/target continue into this overscroll range;
   - that extra range drives the next-project preview expansion.

The recovered expansion curve is gated:

- first 15% of footer overscroll produces no expansion;
- remaining 15% → 100% range is normalized;
- normalized progress uses an ease-in quadratic shape.

In the lab this is implemented as:

`expand = ((clamp((normalizedOverscroll - 0.15) / 0.85, 0, 1))²)`.

### WebGL next-project preview

The next project now exists as a real WebGL plane at the project footer.

At the 1440×900 reference geometry:

- preview width targets ~350px;
- preview aspect ratio is 7:10, producing ~350×500 geometry;
- texture crop begins around the recovered 1.25 scale treatment.

The preview anchor is DOM geometry only. The visible image itself is the already-loaded next project's WebGL plane.

### Overscroll expansion

As footer expansion progresses:

- preview x/y interpolate from the centered footer anchor to full bleed;
- width/height interpolate to `viewport + 2px`;
- texture scale relaxes from `1.25 → 1.04`;
- texture Y offset moves toward the normal project-hero crop;
- the outgoing project content stays clamped at its normal end rather than drifting with overscroll;
- a small percentage readout exposes expansion progress for calibration.

### Automatic route handoff

When scroll current reaches the end of the footer range:

- the next-project preview has reached full-screen;
- one full animation frame is intentionally allowed to render in that state;
- only on the following frame is route/history state committed;
- the same now-fullscreen plane becomes the new project's hero;
- virtual scroll resets to the top;
- project metadata/media update;
- the following project becomes the new footer preview.

This avoids a one-frame texture/route pop at the handoff.

### Footer click behavior

Clicking the next-project title no longer starts an unrelated slide transition.

Instead it simply sets the virtual scroll target to the end of the footer expansion range. The same scroll-driven expansion runs to completion and performs the normal automatic route handoff.

### Browser-history behavior

Footer expansion pushes the new project route into browser history only at the completed handoff.

Browser Back/Forward still uses the existing project-route transition system when moving through recorded project routes.

## 4C acceptance criterion

A successful pass should confirm:

1. the next-project image is visible as a centered portrait-style WebGL preview near the footer;
2. normal project content stops moving when the footer expansion range begins;
3. continued scrolling expands that plane toward full-screen;
4. the first ~15% of extra scroll acts as a small deadzone before visible expansion;
5. expansion percentage reaches 100 as the plane becomes full bleed;
6. the route/title/content switch happens only after the plane is already full-screen;
7. clicking the next-project title produces the same expansion behavior as continued scrolling;
8. the new project begins at its hero/top state;
9. browser Back remains coherent afterward.

## Deferred after 4C

- browser fidelity audit of the finished work-page motion system against Camille;
- exact desktop footer-preview placement/typography calibration;
- richer in-page WebGL secondary media;
- mobile-specific work-page geometry;
- custom cursor;
- About-page migration.


## Performance regression fix after 4C

A loader smoothness regression was reported after the project-page system grew substantially.

The loader choreography itself had not changed from the accepted 3C implementation. The fix therefore isolates later project-page work from the intro rather than retuning motion:

- the heavy project-route DOM is removed from layout during `data-intro="true"`;
- project virtual-scroll layers no longer request compositor promotion while inactive;
- the 25 static loader layouts are cached and recalculated only on resize;
- homepage thumbnail geometry used during the intro is also cached;
- loader duration, easing windows, center zoom, final expansion tail, and homepage physics remain unchanged.

This establishes a performance boundary: future route/page features should not add layout, compositing, or per-frame calculation cost to the frozen loader.
