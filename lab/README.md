# Camille rebuild — interaction laboratory

This directory is the isolated implementation laboratory for the Camille-style portfolio rebuild. The production portfolio on `main` remains untouched.

## Frozen foundations

### Homepage interaction engine — Checkpoint 2D

The homepage motion engine is treated as frozen:

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

The desktop loader is also treated as frozen:

- real 25-texture GPU loading pipeline;
- five alternating vertical columns;
- recovered viewport-derived loader geometry;
- overlapping 0–65% convergence and 40–100% expansion phases;
- center-plane 1.5× texture zoom relaxation;
- continuous center-plane → fullscreen handoff;
- delayed/staggered homepage thumbnail rail;
- tightened final expansion tail;
- compact preloader percentage that clears before visible column entry.

## Checkpoint 4A — persistent route + same-plane project hero proof

4A introduces the first client-side route transition without building the full project page yet.

### Lab routing model

- Project routes use hash URLs so they can reload safely on raw.githack without server rewrite support:
  - `#/project/studentos`
  - `#/project/sentiq-chat`
  - `#/project/fieldline`
- Route state itself is slug-based and is not coupled to hash parsing, so production clean URLs can replace the lab adapter later.
- History uses `pushState` and responds to browser back/forward.
- A direct project hash on reload is remembered while the loader runs and is applied after the loader completes.

### Same WebGL object

- The project hero uses the existing `planes[activeIndex]` object.
- No second WebGL context is created.
- No route-specific duplicate texture is loaded.
- No canvas is replaced.
- The active homepage texture therefore survives the route mutation and becomes the project hero.

### Home → project transition

- Clicking the fullscreen hero with no drag opens the active project.
- Pressing Enter in fullscreen does the same.
- Project route transition duration is 1290ms.
- Easing is `cubic-bezier(0.64, 0, 0.12, 1)`, matching the recovered Camille work-transition family.
- The plane remains fullscreen while a subtle depth/crop treatment establishes the project state:
  - vertical UV shift: `0 → -0.014`;
  - texture scale: `1 → 1.04`;
  - image brightness multiplier: `0.8 → 0.9`.
- The small texture zoom guarantees the UV shift remains inside available crop margin and does not produce CLAMP_TO_EDGE smearing.
- Homepage chrome fades away while project metadata/back controls enter.

### Project → home transition

- Project Back uses browser history when the route was created inside the lab.
- Direct deep links fall back to replacing the hash with `#/`.
- Escape also returns home.
- Route crop/zoom reverses to the exact homepage hero state before the renderer resumes the homepage branch.
- Route UI begins fading immediately on exit.
- Popstate/hashchange handling is guarded against duplicate transition restarts.

### Current project route shell

The first project screen intentionally contains only enough UI to prove persistent routing:

- back control;
- project number;
- project title;
- one-line summary;
- external live-project link;
- persistent fullscreen WebGL hero.

There is no project scrolling/content system yet.

## Next milestone — Checkpoint 4B

Build the actual project-page motion/content shell on top of the proven persistent route:

- project hero scroll progression;
- hero texture parallax;
- content sections below the fold;
- persistent back navigation;
- secondary project media;
- route-to-route project transitions.

The 4A acceptance criterion is routing continuity, not final project-page design.
