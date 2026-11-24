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

3B replaces the generic grid-collapse approximation with choreography translated from the recovered Camille loader mechanics.

### Main 25-plane motion

- Total duration remains 5000ms.
- Loader cells are derived from viewport geometry using the recovered sizing relationship:
  - horizontal padding scales from a 30px desktop design value;
  - loader cell width is `(viewportWidth - 4 × padding) / 4`;
  - loader cell height inherits the viewport aspect ratio.
- Five vertical columns are generated from the 25 planes.
- Odd columns use the opposite vertical entry direction.
- Apparent staggering comes from different per-plane travel distances, not per-plane timer delays.
- Initial vertical travel uses a `12 × cellHeight` spacing unit, matching the recovered production math.

### Overlapping easing phases

The main loader uses two simultaneous progress windows:

1. **Convergence phase: 0 → 65%**
   - cubic-bezier `(0.8, 0, 0.1, 1)`;
   - large alternating vertical offsets collapse toward the 5×5 field.

2. **Expansion/exit phase: 40 → 100%**
   - cubic-bezier `(0.72, 0, 0.11, 1)`;
   - cells expand toward viewport-sized planes while moving to their final off-screen/home positions.

Because the phases overlap between 40% and 65%, the loader never pauses at a static grid.

### Center plane

- Plane index 12 remains the homepage main texture.
- Its grid position is geometrically centered.
- Its final target is a viewport-plus-2px rectangle, matching the recovered full-bleed target.
- The center texture begins with an extra 0.5 texture-scale component—approximately a 1.5× zoom—and relaxes to the normal crop through the expansion phase.
- At the final loader frame the center plane is already at the homepage full-bleed geometry, so the next homepage frame does not require a scene swap.

### Homepage thumbnail emergence

- Small project thumbnails begin rising from below the viewport at 3200ms.
- Each thumbnail uses a 1500ms ease-out-power-6 motion.
- Successive project thumbnails are staggered by 50ms.
- Desktop sizing is based on the recovered 76px × 16:9 thumbnail target, with 5px gaps and ~40px edge spacing at the 1440×900 reference viewport.
- The thumbnails slide below the viewport again as the homepage transitions from IN to OUT.

## Intentionally deferred after 3B

- browser-based side-by-side audit of the calibrated loader against Camille;
- any final numeric loader adjustments revealed by that audit;
- mobile-specific loader calibration;
- custom cursor;
- project routes and project pages;
- About page migration;
- final typography polish.

The acceptance criterion for 3B is visual choreography: the loader should read as alternating columns converging and expanding through one continuous 5-second WebGL motion, with the center project visibly becoming the fullscreen homepage while the small project rail emerges during the final third.
