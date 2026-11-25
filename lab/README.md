# Camille rebuild — interaction laboratory

This directory is the isolated implementation laboratory for the Camille-style portfolio rebuild. Production `main` remains untouched.

## Frozen desktop motion stack

The following systems are considered frozen unless a reproducible regression appears:

- Checkpoint 2D homepage fullscreen ↔ strip interaction;
- Checkpoints 3A–3C desktop loader choreography;
- loader performance isolation/caching;
- Checkpoints 4A–4D persistent project routing, virtual project scroll, hero parallax, footer overscroll expansion, project-to-project continuity, history/state cleanup and deep-scroll Back continuity.

## Checkpoint 5A — About route foundation

5A starts the next major section of the rebuild: the About page.

The reference About implementation is DOM-led rather than another project WebGL scene. Its defining behavior is a split page with:

- a left column / preview area;
- a right vertical content stream;
- remapped left-column motion based on total page scroll;
- an independently counter-moving preview element;
- staged section reveals later in the scroll.

5A implements the first three structural pieces and deliberately defers final reveal choreography.

### Route model

The lab now supports:

- `#/` — Work / Home;
- `#/project/<slug>` — project routes;
- `#/about` — About.

About uses the same History API / hash-adapter model as the project routes.

A direct `#/about` reload is remembered during the loader and activated after the accepted loader finishes.

Primary navigation updates `aria-current` between Work and About.

### Persistent canvas boundary

About does not create another WebGL renderer.

The existing canvas/context remains mounted and simply clears to the site background while About is active.

This keeps the renderer persistent while respecting the reference site's DOM-led About architecture.

### Independent About virtual scroll

About owns its own state:

- `state.about.scrollTarget`;
- `state.about.scrollCurrent`;
- `state.about.scrollMax`;
- `state.about.leftMax`;
- `state.about.previewMax`.

Wheel, keyboard and touch input are routed to this state only while the About route is active.

The damping factor is independent from project scroll and therefore cannot modify the frozen project physics.

### Split-scroll architecture

Desktop layout uses:

- 38vw fixed left window;
- 62vw right content stream;
- right column translated by About virtual scroll;
- left track remapped from 0 → its own maximum travel using normalized About scroll progress;
- left preview counter-translated downward across its own available vertical range.

This reproduces the architectural idea recovered from Camille's About `Preview.loop()`: the left wrapper and preview do not simply scroll 1:1 with the right content.

### Migrated portfolio content

5A moves the existing portfolio's main non-project material into the About route:

1. Capabilities
   - Programming and systems thinking;
   - Core AI integration;
   - Applied AI;
   - Speaking, performance and leadership.

2. Experience
   - Edunet Foundation / IBM SkillsBuild AI internship;
   - Vault of Codes AI internship.

3. Beyond AI/ML
   - Theatre;
   - Reading;
   - Writing;
   - Visual design;
   - existing Macbeth, Wattpad-cover and graphics imagery.

4. Contact
   - email;
   - LinkedIn.

### Performance isolation

The About route is completely removed from layout during the loader.

Its transform compositor hints are enabled only while `data-route="about"` is active.

This preserves the loader-performance boundary established after 4C.

## 5A acceptance criterion

At desktop size:

1. Work → About changes to `#/about` without reloading or recreating WebGL.
2. About → Work returns to the same homepage state.
3. browser Back/Forward between Work and About works.
4. direct reload on `#/about` runs the loader, then lands on About.
5. right-column scrolling is smooth.
6. left column moves at a different remapped rate rather than scrolling 1:1.
7. the left image visibly counter-moves within that column.
8. Capabilities, Experience, Beyond and Contact all appear in the right stream.
9. the loader remains smooth.

## Deferred to 5B

- browser calibration against Camille's actual About page;
- scroll-triggered line/row reveal choreography;
- exact left-column dimensions and preview geometry;
- final About typography/spacing;
- richer Beyond media treatment;
- mobile-specific About geometry.
