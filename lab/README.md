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

## Checkpoint 02C — geometry and interface choreography

- Desktop OUT-state cards use wide landscape geometry, approximately `58vw × 56vh`, constrained around a `1.66:1` aspect ratio.
- Desktop inter-card gap is approximately `6vw`.
- IN-state project title is centered with a superscript project number.
- Fullscreen left/right 22px cross controls cycle projects without leaving fullscreen.
- IN → OUT dismisses the centered title upward while the active plane contracts.
- OUT mode uses one centered 22px cross as the active-project affordance.
- Clicking an off-center project recenters its strip position while that same plane expands.
- Returning to OUT keeps the selected project as the strip context.

## Checkpoint 02D — rendering correction and physical strip motion

Implemented after direct screenshot review of Checkpoint 02C against the Camille reference.

### Rendering correction

- Removed the erroneous WebGL texture Y flip.
- Project screenshots now upload in browser-native orientation instead of appearing vertically inverted.

### Drag model

- Replaced target-seeking interpolation with a position + velocity model.
- Pointer movement remains direct while the pointer is held.
- Pointer-down immediately catches/stops an already moving strip.
- Pointer release converts measured pointer velocity into strip velocity.
- Wheel / trackpad input now adds velocity impulses instead of moving a target position.

### Inertia

- Strip velocity decays exponentially with a long glide tail.
- High-speed flicks can coast beyond one card width before settling.
- A weak centering spring is introduced only after kinetic velocity falls below a low threshold.
- Keyboard arrows use the same low-energy centering destination rather than restoring carousel snapping.

### Bounds

- Pointer dragging beyond either strip edge uses progressive non-linear resistance.
- Released overscroll is resolved with a damped spring force rather than a hard clamp.
- Boundary correction and free-motion friction are separate forces.

### OUT → IN choreography

- Off-center project activation still recenters and expands simultaneously.
- Recenter motion is isolated from free-strip inertia so the selected project reaches the viewport center deterministically during expansion.

## Deliberately deferred

- Final numerical calibration of friction, spring strength, and drag sensitivity against a new browser audit.
- Thumbnail rail / `#_p` chrome.
- Custom cursor.
- 25-plane intro/loader.
- Project routes and project pages.
- About page migration.
- Final typography and polish.

The acceptance criterion for 02D is that the strip feels materially more free and physical than 02C while preserving the corrected 02C geometry and transition architecture.
