# Camille rebuild — interaction laboratory

This directory is the isolated implementation laboratory for the Camille-style portfolio rebuild. The production portfolio on `main` remains untouched.

## Checkpoint 01 — single-plane continuity

- Native WebGL renderer.
- Existing StudentOS screenshot uploaded as a GPU texture.
- One persistent plane transitions between fullscreen and an out-state.
- Wheel, pointer drag, keyboard, explicit control.
- Reduced-motion and non-WebGL fallback.
- No Three.js or GSAP on the motion-critical path.

## Checkpoint 02B — continuous sliding strip

The earlier carousel-like checkpoint was intentionally replaced after comparison with Camille-inspired sliding-track references.

Current behavior:

- Three persistent WebGL project planes: StudentOS, SentIQ Chat, FieldLine.
- OUT mode is a free horizontal strip, not a snap-to-card carousel.
- Drag movement updates the strip continuously.
- Wheel/trackpad input moves the same continuous target.
- The active project is inferred from whichever plane is nearest the viewport center; it does not control or snap the strip.
- Image crop shifts according to screen position, reproducing the track/image counter-motion principle used by Camille-inspired clones.
- Pointer release includes restrained inertial continuation.
- Edge resistance is applied while dragging beyond the first/last project.
- Clicking any visible plane transitions that exact plane from its current screen position into fullscreen.
- Returning to the strip preserves the strip position instead of resetting/re-centering it.
- Keyboard remains available as an accessibility input path.

## Behavioral reference

The continuous-track correction was informed by:

- Camille Mormal's original interaction architecture previously reverse-engineered for this project.
- `SherAli2022000/SlidingImages-Html-CSS`, whose useful behavioral idea is a continuously translated image track paired with counter-moving image crop/object-position.

The third-party implementation is used only as a behavioral reference; its code is not transplanted.

## Not implemented yet

- 25-plane intro/loader.
- Exact Camille geometry/timing calibration.
- Project route transitions.
- Individual project pages.
- About page migration.
- Final typography and visual polish.

The acceptance criterion remains interaction architecture and plane continuity, not final visual parity.
