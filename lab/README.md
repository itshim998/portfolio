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

- Three persistent WebGL project planes.
- OUT mode is a free horizontal strip rather than a snap-to-card carousel.
- Drag and wheel update one continuous track position.
- Image crop counter-moves through shader UV offset.
- Clicking a visible plane can transition that plane into fullscreen.
- The third-party SlidingImages clone was used only as a behavioral reference.

## Checkpoint 02C — Camille geometry and interface choreography

Implemented after browser comparison against the original Camille Mormal homepage at 1440 × 900.

### Geometry

- Desktop OUT-state cards are now approximately `58vw × 56vh`.
- Card width is constrained to approximately a `1.66:1` landscape aspect ratio.
- Desktop gap is approximately `6vw`.
- Cards remain vertically centered.

### IN state

- Project title is centered in the viewport rather than anchored bottom-left.
- A small superscript project counter sits beside the title.
- Left and right 22px cross controls cycle projects without leaving fullscreen.
- Fullscreen project cycling uses a short WebGL slide/cross-fade rather than switching DOM images.

### IN → OUT

- Centered title moves upward and fades as the active plane contracts.
- Fullscreen left/right crosses disappear with the title.
- The explicit `View all / Close` mode button has been removed.
- The strip contains no persistent project-title block.

### OUT state

- A single 22px cross appears at the exact viewport center as the active-project affordance.
- Nearest-center project state is inferred from track position.
- Clicking the center cross opens the active project.

### OUT → IN

- Clicking any visible off-center plane selects it.
- Its track position recenters toward the viewport while the same plane expands simultaneously.
- Neighboring planes leave the viewport during the same transition.
- Returning to OUT targets the currently selected project, preserving project context rather than resetting to Project 01.

## Intentionally deferred to Checkpoint 02D

- Long-tail velocity/friction model.
- Low-energy centering behavior.
- Elastic/rubber-band boundary spring.
- Final drag sensitivity.
- Final parallax calibration.

## Still deferred

- 25-plane intro/loader.
- Project route transitions.
- Individual project pages.
- About page migration.
- Final typography and visual polish.

The acceptance criterion for 02C is geometry and interaction choreography. Physics tuning remains intentionally separate.
