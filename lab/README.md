# Camille rebuild — interaction laboratory

This directory is the isolated implementation laboratory for the Camille-style portfolio rebuild. Production `main` remains untouched.

## Frozen desktop motion stack

The following systems are considered frozen unless a reproducible regression appears:

- Checkpoint 2D homepage fullscreen ↔ strip interaction;
- Checkpoints 3A–3C desktop loader choreography;
- loader performance isolation/caching;
- Checkpoints 4A–4D persistent project routing, virtual project scroll, hero parallax, footer overscroll expansion, project-to-project continuity, history/state cleanup and deep-scroll Back continuity.

## Checkpoint 5A — About route foundation

5A introduced:

- `#/about` route/history/deep-link handling;
- one persistent WebGL context with a DOM-led About page;
- independent About virtual scroll state;
- left/right split architecture;
- remapped left-column motion and counter-moving preview;
- migrated Capabilities, Experience, Beyond AI/ML and Contact content;
- loader isolation for the About DOM.

## Checkpoint 5B — About choreography calibration

5B calibrates the desktop About page from the recovered reference implementation without modifying the frozen homepage/project motion systems.

### Recovered desktop geometry

The reference desktop CSS uses:

- right stream start: `calc(50% - 64px)`;
- right stream width: `50.1042vw`;
- right section width: `90%`;
- standard section top spacing: `14.5833vw`;
- first section top spacing: `17.7083vw`.

The left side is not a conventional 38/62 panel.

Its reference geometry is:

- small text wrapper x: `calc(40px + 3.2813vw)`;
- text wrapper width: `9.6354vw`;
- text wrapper top padding: `15.3446vw`;
- preview x: `40px`;
- preview y: `15.3446vw`;
- preview width: `15vw`;
- preview height: `19.2308vh`;
- preview border: ~1.34px at low opacity.

At 1440×900 this places the preview at roughly 216×173px rather than the portrait approximation used in 5A.

### Independent preview motion

The preview has been moved out of the moving left text wrapper.

This matches the recovered structure:

- left wrapper translates upward according to remapped About progress;
- preview is positioned independently;
- preview translates downward across its own available vertical range.

The resize calculation now also follows the source behavior:

1. temporarily reset wrapper/preview transforms;
2. measure content height / visible area;
3. calculate maximum wrapper travel;
4. calculate maximum preview counter-travel;
5. restore the current normalized scroll position.

This prevents resize-at-scroll-position geometry drift.

### Left-side entrance choreography

Recovered reference timing:

- left sections: 1500ms;
- first section extra delay: 200ms;
- following sections: ~50ms stagger;
- initial Y offset: 80px;
- target opacity: ~0.85;
- preview opacity begins ~500ms after route-show timing.

The lab reproduces that sequence for the left intro/index and preview.

### Right-side reveal choreography

The reference About scroll FX uses:

- reveal duration: 1500ms;
- initial vertical offset: 110%;
- ease family: `o6`;
- reveal threshold: element top minus `0.9 × viewportHeight`;
- above-fold elements reveal immediately after route entry but receive staged delays;
- first above-fold delay: ~700ms;
- subsequent delay: +200ms per trigger.

5B reproduces the same trigger model.

Current right-side reveal targets include:

- About hero kicker;
- About hero statement;
- each section heading;
- capability rows;
- experience rows;
- Beyond cards;
- Contact block.

Elements reveal once and remain visible for the rest of the route session.

### Typography/spacing calibration

The main desktop type scales now follow the recovered CSS family more closely:

- right large text: ~2.8125vw / 3.6458vw;
- section headings: ~2.2917vw / 2.7604vw;
- secondary text: ~1.25vw / 1.6667vw;
- left miniature text: ~0.5409vw / 0.7011vw.

These values preserve the user's portfolio content while moving the page closer to Camille's compact About composition.

## 5B acceptance criterion

At 1440×900 desktop:

1. About no longer reads as a wide 38/62 split panel.
2. Right content begins near the visual midpoint.
3. Left text is intentionally small and narrow.
4. The small bordered preview sits near the top-left and is approximately 216×173px.
5. Left wrapper and preview visibly move in opposite/remapped directions.
6. About hero text enters after the route transition rather than already sitting fully visible.
7. Offscreen section headings/rows rise into view when they approach ~90% viewport height.
8. reveal motion is slow/smooth (~1500ms), not quick IntersectionObserver-style popping.
9. Work ↔ About history remains correct.
10. loader and frozen project/home motion remain unchanged.

## Deferred after 5B

- dedicated browser fidelity audit against Camille's live About page;
- any narrow timing/geometry corrections found by that audit;
- mobile-specific About architecture;
- custom cursor;
- final production integration/cleanup.
