# Camille rebuild — interaction laboratory

This directory is the isolated implementation laboratory for the Camille-style portfolio rebuild. The production portfolio on `main` remains untouched.

## Frozen homepage interaction foundation

Checkpoint 2D is now treated as the approved homepage interaction base.

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
- stable project state under stress.

The final pre-freeze shader correction is also applied: crop parallax remains at the approved `-0.18` movement ratio but is clamped to `±0.045` to prevent edge-pixel smearing on landscape screenshots.

## Checkpoint 3A — 25-plane loader foundation

This is the first contained loader checkpoint.

### Texture pipeline

- 25 logical loader media entries are created.
- Each loader plane owns a real WebGL texture.
- Loading progress is calculated from completed loader texture uploads rather than a fake timer.
- Direct image loading falls back to a CORS-safe image proxy when required.
- The three homepage project textures reuse already-loaded loader textures, avoiding a second post-loader fetch.

### Loader scene

- 25 planes are arranged as a 5 × 5 field.
- Five vertical columns enter with alternating motion directions.
- Loader duration is currently 5000ms, matching the recovered production timing target.
- Plane index 12 is the central StudentOS plane.
- The center plane is visually emphasized during the transition.
- During the second half of the intro, surrounding planes move outward and fade.
- The center plane expands from its grid rectangle into the exact fullscreen homepage rectangle.
- Homepage chrome remains hidden during the loader and fades in after the handoff.

### Handoff

- Loader completion resets homepage strip velocity and settle state.
- The homepage begins in Project 01 fullscreen mode.
- No Checkpoint 2D motion constants or interaction mechanics are replaced by the loader scene.

## Intentionally not final yet

Checkpoint 3A establishes loader architecture and continuity only.

Still to calibrate in subsequent loader checkpoints:

- exact Camille loader plane dimensions and padding;
- precise initial column offsets;
- stagger between individual planes;
- center-plane emphasis timing;
- exact easing curves;
- thumbnail/minimap emergence;
- loader text/number typography;
- mobile loader geometry;
- frame-by-frame parity against Camille reference footage.

The acceptance criterion for 3A is that the 25-plane sequence loads reliably, reads as one continuous WebGL scene, and hands the central project plane into the already-approved homepage without a visible scene swap.
