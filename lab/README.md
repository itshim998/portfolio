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

### Persistent routing — Checkpoint 4A

The route foundation remains intact:

- hash-backed lab routes;
- slug-based internal route state;
- browser Back/Forward support;
- deep-link state survives the loader;
- one persistent canvas and WebGL context;
- active homepage plane becomes the project hero;
- no route-specific texture reload;
- reversible home ↔ project crop/depth transition.

## Checkpoint 4B — project-page motion shell

4B builds the first actual project-page experience on top of 4A.

### Source content

Project copy is taken from the original portfolio rather than placeholder case-study text.

Each project carries:

- original summary;
- Purpose;
- Engineering POV;
- Current state;
- existing live-project URL;
- existing portfolio media.

FieldLine uses all three existing screenshots. StudentOS and SentIQ Chat retain their currently available single project screenshot.

### Virtual project scroll

The page keeps the global document fixed and uses project-specific virtual scrolling:

- `scrollTarget` receives wheel, keyboard, and touch input;
- `scrollCurrent` damps toward the target;
- the project story begins exactly one viewport below the hero;
- the DOM story translates upward from the same virtual scroll value;
- a fixed right-edge progress line reflects normalized project progress;
- project scroll range is recalculated when lazy media finishes loading.

Keyboard support includes:

- Arrow Up / Down;
- Page Up / Down;
- Space;
- Home;
- End;
- Escape to return home.

### Persistent hero scroll behavior

The project hero remains the exact same WebGL plane selected on the homepage.

During project scrolling:

- the full-screen hero translates upward with virtual scroll;
- texture Y offset adds a restrained scroll parallax component;
- texture scale increases slightly to preserve safe crop margin;
- homepage/project route continuity remains in the original WebGL context;
- project metadata fades and lifts as the user scrolls away from the hero.

### Project story shell

Below the hero the first case-study layout now contains:

- large summary statement;
- Purpose / Engineering POV / Current state columns;
- primary project media;
- additional media grid when additional screenshots exist;
- next-project footer.

The story/media layer uses normal compositing. Only floating route chrome retains difference blending, so screenshots remain color-accurate.

### Project → project transition

The bottom `Next project` control now changes routes without returning through the homepage.

The transition:

- uses the same 1290ms `cubic-bezier(0.64, 0, 0.12, 1)` family;
- sends the previous project hero upward;
- brings the next project's existing WebGL plane upward from below;
- gives both planes additional crop margin while crossing the viewport;
- updates URL/history through the existing route system;
- resets the new project virtual scroll to its hero;
- preserves Back/Forward navigation between projects.

### Deep-scroll Back behavior

Returning home from anywhere in a project no longer requires being at scroll zero.

The exit captures the current virtual scroll position and animates the persistent hero back into its exact homepage position while route content fades, avoiding a last-frame hero jump.

## 4B acceptance criterion

Checkpoint 4B is about motion-shell integrity, not final editorial design.

A successful pass should confirm:

1. project scrolling feels smooth and independent of the homepage strip;
2. the WebGL hero visibly moves with project scroll instead of being replaced;
3. Purpose / Engineering / Current-state content is readable below the fold;
4. FieldLine secondary screenshots appear in the media sequence;
5. Back works both near the hero and deep in the case study;
6. Next project performs a direct persistent-plane project → project transition;
7. browser Back/Forward remains coherent across home and multiple project routes.

## Deferred after 4B

- frame-by-frame browser calibration against Camille's actual work pages;
- final project-page typography and spacing;
- richer secondary WebGL media choreography;
- footer expansion/progress behavior;
- mobile-specific work-page calibration;
- custom cursor;
- About-page migration.
