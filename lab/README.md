# Camille rebuild — interaction laboratory

This directory is the isolated implementation laboratory for the Camille-style portfolio rebuild. The production portfolio on `main` remains untouched.

## Completed checkpoint 01 — single-plane continuity

- Native WebGL renderer.
- Existing StudentOS screenshot uploaded as a GPU texture.
- One persistent plane transitions between fullscreen and overview geometry.
- Wheel, pointer drag, keyboard, explicit control.
- Reduced-motion and non-WebGL fallback.
- No Three.js or GSAP on the motion-critical path.

## Completed checkpoint 02 — multi-project home foundation

- Three persistent project planes: StudentOS, SentIQ Chat, FieldLine.
- One active-project state shared by WebGL and DOM metadata.
- Horizontal overview geometry with adjacent project planes.
- Damped project-to-project movement.
- Live drag offset while dragging the overview.
- Wheel, arrow-button, keyboard and pointer navigation.
- Clicking the active overview plane returns that same plane to fullscreen.
- Clicking a neighboring plane makes it active.
- Per-plane UV offset creates a restrained internal parallax effect.
- Texture loading progress now reflects all three required home textures.

## Not implemented yet

- 25-plane intro/loader.
- Exact Camille geometry/timing calibration.
- Project route transitions.
- Individual project pages.
- About page migration.
- Final typography and visual polish.

The acceptance criterion at this stage is interaction architecture and plane continuity, not final visual parity.
