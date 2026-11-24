# Camille rebuild — Phase 1 lab

This directory is an isolated proof-of-concept for the first implementation phase.

## Scope

- Preserve the production portfolio on `main`.
- Render the existing StudentOS screenshot through native WebGL.
- Keep one persistent textured plane.
- Transition that exact plane between:
  - fullscreen / focus geometry
  - overview / gallery geometry
- Drive the transition from wheel, pointer drag, keyboard, or the explicit UI control.
- Avoid Three.js and GSAP for the motion-critical path.
- Keep a non-WebGL fallback and reduced-motion behavior.

This is intentionally **not** the final homepage. The acceptance criterion for this lab is the geometry/motion continuity of one plane. Once that is stable, the same renderer and state model will be expanded to the full project gallery.
