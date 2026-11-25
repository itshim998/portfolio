const PROJECTS = [
  {
    slug: "studentos",
    title: "StudentOS",
    summary: "An AI-native academic workspace that turns courses, syllabi, assignments, schedules, and study materials into a clear solid roadmap broken into daily TO-DO lists.",
    purpose: "Reduce the 'Analysis Paralysis' scenarios of student life by bringing their entire academic context, scehdules, materials, and AI-driven assistance grounded to their academic story into one coherent environment.",
    engineering: "Lifecycle-driven onboarding, academic context retrieval, adaptive planning, Google Classroom integration, AI orchestration, and multi-tenant data architecture.",
    state: "The product is already live. The first version is stable. Further versions are being actively worked upon.",
    href: "https://studentos.sentiqlabs.com/",
    image: "https://i.ibb.co/jkB9vQLr/Screenshot-2026-07-14-182748.png",
    proxy: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FjkB9vQLr%2FScreenshot-2026-07-14-182748.png",
    media: [
      {
        src: "https://i.ibb.co/jkB9vQLr/Screenshot-2026-07-14-182748.png",
        alt: "StudentOS academic workspace interface",
        caption: "StudentOS academic workspace interface"
      }
    ]
  },
  {
    slug: "sentiq-chat",
    title: "SentIQ Chat",
    summary: "A multimodal, multi-model, and multi-tool AI Orchestrator built around conversation with memory & contextual awareness capable of file understanding and generation, chart & image generation, web search, deep research, live speech-speech conversation.",
    purpose: "Bring several applied AI models, their capabilities and tools into one.",
    engineering: "Orchestration, tool designing and routing, streaming, memory, db and auth management, file understanding, prompt design, and overall system behaviour.",
    state: "The product is actively evolving through ongoing feature and systems work.",
    href: "https://sentiqchat.sentiqlabs.com/",
    image: "https://i.ibb.co/nsRD4K6z/Screenshot-2026-03-15-113205.png",
    proxy: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FnsRD4K6z%2FScreenshot-2026-03-15-113205.png",
    media: [
      {
        src: "https://i.ibb.co/nsRD4K6z/Screenshot-2026-03-15-113205.png",
        alt: "Earlier SentIQGPT interface, predecessor to SentIQ Chat",
        caption: "Earlier SentIQGPT interface, predecessor to SentIQ Chat"
      }
    ]
  },
  {
    slug: "fieldline",
    title: "FieldLine",
    summary: "AI for bridging the communication gap effectively between the project lead and the field workers in large infrastructure projects. Aids project lead to manage the overall project effectively, while also guiding the execution team on the field.",
    purpose: "Connects project schedules with on-site reports and work updates, helping teams see what is completed, delayed, or at risk, while autonomously updating project status, and warning managers / admin only when any kind of anomalities are detected.",
    engineering: "Core AI + Applied AI : Houses machine learning models trained specifically for anomaly detection (statistical) and progress classification (logistic regression) in the progresses reported by the field workers, while appiled AI is used in usual AI response generaton, image recognition, while also allowing workers to report in their native language through speech to speech.",
    state: "FieldLine v1 is stable and has been deployed. Initially developed for SIH 2026. Qualified in Round 1. Round 2 is under evaluation.",
    href: "https://fieldline.sentiqlabs.com/",
    image: "https://i.ibb.co/CKyJjqjk/Screenshot-2026-10-11-185504.png",
    proxy: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FCKyJjqjk%2FScreenshot-2026-10-11-185504.png",
    media: [
      {
        src: "https://i.ibb.co/CKyJjqjk/Screenshot-2026-10-11-185504.png",
        alt: "FieldLine field operations task dashboard and safety briefing board",
        caption: "Field operations task dashboard and safety briefing board"
      },
      {
        src: "https://i.ibb.co/27zhVNC9/Screenshot-2026-10-11-184535.png",
        alt: "FieldLine refinery expansion project overview and admin control room",
        caption: "Project overview and admin control room"
      },
      {
        src: "https://i.ibb.co/FkNm4g4z/Screenshot-2026-10-11-185804.png",
        alt: "FieldLine activity delay tracking and schedule variance table",
        caption: "Activity delay tracking and schedule variance table"
      }
    ]
  }
]

const INTRO_CENTER_INDEX = 12;

const INTRO_MEDIA = [
  "https://i.ibb.co/jkB9vQLr/Screenshot-2026-07-14-182748.png",
  "https://i.ibb.co/nsRD4K6z/Screenshot-2026-03-15-113205.png",
  "https://i.ibb.co/CKyJjqjk/Screenshot-2026-10-11-185504.png",
  "https://i.ibb.co/27zhVNC9/Screenshot-2026-10-11-184535.png",
  "https://i.ibb.co/FkNm4g4z/Screenshot-2026-10-11-185804.png",
  "https://i.ibb.co/n8P5WGvM/Macbeth-Voices-of-Power.jpg",
  "https://i.ibb.co/nsRD4K6z/Screenshot-2026-03-15-113205.png",
  "https://i.ibb.co/tMzm6QYS/image.png",
  "https://i.ibb.co/c8SPnTv/graphics.jpg",
  "https://i.ibb.co/CKyJjqjk/Screenshot-2026-10-11-185504.png",
  "https://i.ibb.co/27zhVNC9/Screenshot-2026-10-11-184535.png",
  "https://i.ibb.co/FkNm4g4z/Screenshot-2026-10-11-185804.png",
  "https://i.ibb.co/jkB9vQLr/Screenshot-2026-07-14-182748.png",
  "https://i.ibb.co/n8P5WGvM/Macbeth-Voices-of-Power.jpg",
  "https://i.ibb.co/tMzm6QYS/image.png",
  "https://i.ibb.co/c8SPnTv/graphics.jpg",
  "https://i.ibb.co/nsRD4K6z/Screenshot-2026-03-15-113205.png",
  "https://i.ibb.co/27zhVNC9/Screenshot-2026-10-11-184535.png",
  "https://i.ibb.co/CKyJjqjk/Screenshot-2026-10-11-185504.png",
  "https://i.ibb.co/FkNm4g4z/Screenshot-2026-10-11-185804.png",
  "https://i.ibb.co/c8SPnTv/graphics.jpg",
  "https://i.ibb.co/n8P5WGvM/Macbeth-Voices-of-Power.jpg",
  "https://i.ibb.co/jkB9vQLr/Screenshot-2026-07-14-182748.png",
  "https://i.ibb.co/nsRD4K6z/Screenshot-2026-03-15-113205.png",
  "https://i.ibb.co/CKyJjqjk/Screenshot-2026-10-11-185504.png"
];

const canvas = document.getElementById("experience");
const loading = document.getElementById("loading");
const loadingValue = document.getElementById("loading-value");
const fallback = document.getElementById("fallback");
const focusTitle = document.getElementById("focus-title");
const projectTitle = document.getElementById("project-title");
const projectCounter = document.getElementById("project-counter");
const previousProject = document.getElementById("previous-project");
const nextProject = document.getElementById("next-project");
const openActiveProject = document.getElementById("open-active-project");
const projectRoute = document.getElementById("project-route");
const projectBack = document.getElementById("project-back");
const routeProjectIndex = document.getElementById("route-project-index");
const routeProjectTitle = document.getElementById("route-project-title");
const routeProjectSummary = document.getElementById("route-project-summary");
const routeProjectLink = document.getElementById("route-project-link");
const projectRouteMeta = document.getElementById("project-route-meta");
const projectScrollContent = document.getElementById("project-scroll-content");
const routeProjectLongSummary = document.getElementById("route-project-long-summary");
const routeProjectPurpose = document.getElementById("route-project-purpose");
const routeProjectEngineering = document.getElementById("route-project-engineering");
const routeProjectState = document.getElementById("route-project-state");
const routeProjectMediaPrimary = document.getElementById("route-project-media-primary");
const routeProjectMediaCaption = document.getElementById("route-project-media-caption");
const routeProjectMediaGrid = document.getElementById("route-project-media-grid");
const routeNextProject = document.getElementById("route-next-project");
const routeNextTitle = document.getElementById("route-next-title");
const routeNextExpand = document.getElementById("route-next-expand");
const routeNextPreviewAnchor = document.getElementById("route-next-preview-anchor");
const projectRouteProgress = document.getElementById("project-route-progress");
const homeBrand = document.getElementById("home-brand");
const homeLink = document.getElementById("home-link");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

document.body.dataset.mode = "focus";
document.body.dataset.intro = "true";
document.body.dataset.route = "home";

const gl = canvas.getContext("webgl", {
  alpha: false,
  antialias: true,
  premultipliedAlpha: false
});

if (!gl) {
  loading.hidden = true;
  fallback.hidden = false;
  throw new Error("WebGL is not available.");
}

const vertexSource = `
attribute vec2 aPosition;
attribute vec2 aUv;

uniform vec2 uViewport;
uniform vec4 uRect;

varying vec2 vUv;

void main() {
  vec2 positionPx = uRect.xy + aPosition * uRect.zw;
  vec2 clip = (positionPx / uViewport) * 2.0 - 1.0;
  clip.y *= -1.0;
  gl_Position = vec4(clip, 0.0, 1.0);
  vUv = aUv;
}
`;

const fragmentSource = `
precision mediump float;

uniform sampler2D uTexture;
uniform vec2 uPlaneSize;
uniform vec2 uImageSize;
uniform vec2 uUvOffset;
uniform float uTextureScale;
uniform float uDim;
uniform float uOpacity;

varying vec2 vUv;

void main() {
  float planeAspect = uPlaneSize.x / max(uPlaneSize.y, 1.0);
  float imageAspect = uImageSize.x / max(uImageSize.y, 1.0);

  vec2 scale = vec2(1.0);
  if (planeAspect > imageAspect) {
    scale.y = imageAspect / planeAspect;
  } else {
    scale.x = planeAspect / imageAspect;
  }

  scale /= max(uTextureScale, 0.001);
  vec2 uv = (vUv - 0.5) * scale + 0.5 + uUvOffset;
  vec4 color = texture2D(uTexture, uv);
  gl_FragColor = vec4(color.rgb * uDim, color.a * uOpacity);
}
`;

function createShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(message || "Shader compilation failed.");
  }

  return shader;
}

function createProgram(vertex, fragment) {
  const program = gl.createProgram();
  gl.attachShader(program, createShader(gl.VERTEX_SHADER, vertex));
  gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fragment));
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(message || "Program linking failed.");
  }

  return program;
}

const program = createProgram(vertexSource, fragmentSource);
gl.useProgram(program);

const geometry = new Float32Array([
  0, 0, 0, 0,
  1, 0, 1, 0,
  0, 1, 0, 1,
  1, 1, 1, 1
]);

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, geometry, gl.STATIC_DRAW);

const stride = 4 * Float32Array.BYTES_PER_ELEMENT;
const positionLocation = gl.getAttribLocation(program, "aPosition");
const uvLocation = gl.getAttribLocation(program, "aUv");

gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, stride, 0);

gl.enableVertexAttribArray(uvLocation);
gl.vertexAttribPointer(
  uvLocation,
  2,
  gl.FLOAT,
  false,
  stride,
  2 * Float32Array.BYTES_PER_ELEMENT
);

const uniforms = {
  viewport: gl.getUniformLocation(program, "uViewport"),
  rect: gl.getUniformLocation(program, "uRect"),
  planeSize: gl.getUniformLocation(program, "uPlaneSize"),
  imageSize: gl.getUniformLocation(program, "uImageSize"),
  uvOffset: gl.getUniformLocation(program, "uUvOffset"),
  textureScale: gl.getUniformLocation(program, "uTextureScale"),
  dim: gl.getUniformLocation(program, "uDim"),
  opacity: gl.getUniformLocation(program, "uOpacity")
};

gl.clearColor(0.035, 0.035, 0.031, 1);
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (a, b, t) => a + (b - a) * t;
const damp = (current, target, lambda, dt) =>
  lerp(current, target, 1 - Math.exp(-lambda * dt));

function easeInOutQuart(t) {
  return t < 0.5
    ? 8 * t * t * t * t
    : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function easeOutPower6(t) {
  return 1 - Math.pow(1 - clamp(t, 0, 1), 6);
}

function cubicBezier(x1, y1, x2, y2) {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;

  const sampleX = t => ((ax * t + bx) * t + cx) * t;
  const sampleY = t => ((ay * t + by) * t + cy) * t;
  const sampleDerivativeX = t => (3 * ax * t + 2 * bx) * t + cx;

  return value => {
    const x = clamp(value, 0, 1);
    let t = x;

    for (let i = 0; i < 6; i += 1) {
      const dx = sampleX(t) - x;
      const derivative = sampleDerivativeX(t);
      if (Math.abs(dx) < 1e-5 || Math.abs(derivative) < 1e-6) break;
      t -= dx / derivative;
      t = clamp(t, 0, 1);
    }

    let low = 0;
    let high = 1;
    for (let i = 0; i < 8; i += 1) {
      const sampled = sampleX(t);
      if (Math.abs(sampled - x) < 1e-5) break;
      if (sampled < x) low = t;
      else high = t;
      t = (low + high) * 0.5;
    }

    return sampleY(t);
  };
}

const loaderEaseIn = cubicBezier(0.8, 0, 0.1, 1);
const loaderEaseOut = cubicBezier(0.72, 0, 0.11, 1);
const projectRouteEase = cubicBezier(0.64, 0, 0.12, 1);

function routeIndexFromLocation() {
  const match = location.hash.match(/^#\/project\/([^/?#]+)/);
  if (!match) return null;
  const slug = decodeURIComponent(match[1]);
  const index = PROJECTS.findIndex(project => project.slug === slug);
  return index >= 0 ? index : null;
}

function updateProjectRouteMeta(index) {
  const project = PROJECTS[index];
  if (!project) return;

  routeProjectIndex.textContent = String(index + 1).padStart(2, "0");
  routeProjectTitle.textContent = project.title;
  routeProjectSummary.textContent = project.summary;
  routeProjectLongSummary.textContent = project.summary;
  routeProjectPurpose.textContent = project.purpose;
  routeProjectEngineering.textContent = project.engineering;
  routeProjectState.textContent = project.state;
  routeProjectLink.href = project.href;
  routeProjectLink.setAttribute("aria-label", `Visit ${project.title} live project`);

  const primaryMedia = project.media[0];
  routeProjectMediaPrimary.src = primaryMedia.src;
  routeProjectMediaPrimary.alt = primaryMedia.alt;
  routeProjectMediaCaption.textContent = primaryMedia.caption;
  routeProjectMediaPrimary.addEventListener(
    "load",
    updateProjectScrollMax,
    { once: true }
  );

  routeProjectMediaGrid.replaceChildren();
  project.media.slice(1).forEach(media => {
    const figure = document.createElement("figure");
    figure.className = "project-story__media-card";

    const image = document.createElement("img");
    image.src = media.src;
    image.alt = media.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("load", updateProjectScrollMax, { once: true });

    const caption = document.createElement("figcaption");
    caption.textContent = media.caption;

    figure.append(image, caption);
    routeProjectMediaGrid.appendChild(figure);
  });

  routeProjectMediaGrid.hidden = project.media.length <= 1;

  const nextIndex = (index + 1) % PROJECTS.length;
  routeNextProject.dataset.projectIndex = String(nextIndex);
  routeNextTitle.textContent = PROJECTS[nextIndex].title;

  requestAnimationFrame(updateProjectScrollMax);
}

function updateProjectScrollMax() {
  if (!projectScrollContent) return;

  state.route.scrollStepMax = Math.max(
    0,
    projectScrollContent.scrollHeight
  );
  state.route.footerStep = innerHeight * 1.5;
  state.route.scrollMax =
    state.route.scrollStepMax + state.route.footerStep;

  state.route.scrollTarget = clamp(
    state.route.scrollTarget,
    0,
    state.route.scrollMax
  );
  state.route.scrollCurrent = clamp(
    state.route.scrollCurrent,
    0,
    state.route.scrollMax
  );
}

function setProjectScrollTarget(value) {
  state.route.scrollTarget = clamp(
    value,
    0,
    state.route.scrollMax
  );
}

function footerExpansionFromScroll(scroll) {
  if (state.route.footerStep <= 0) return 0;

  const overscroll = clamp(
    scroll - state.route.scrollStepMax,
    0,
    state.route.footerStep
  );
  const normalized = overscroll / state.route.footerStep;
  const gated = clamp((normalized - 0.15) / 0.85, 0, 1);

  return gated * gated;
}

function beginFooterAdvance(index) {
  if (
    state.route.type !== "project" ||
    state.route.swap.active ||
    state.route.transitioning ||
    state.route.footerCommitting
  ) return;

  const next = clamp(index, 0, PROJECTS.length - 1);
  state.route.footerAdvanceArmed = true;
  routeNextProject.dataset.projectIndex = String(next);
  setProjectScrollTarget(state.route.scrollMax);
}

function commitFooterAdvance(index) {
  if (state.route.footerCommitting) return;

  const next = clamp(index, 0, PROJECTS.length - 1);
  const project = PROJECTS[next];
  if (!project) return;

  state.route.footerCommitScheduled = false;
  state.route.footerCommitting = true;
  document.body.classList.add("is-project-swapping");

  history.pushState(
    { labRoute: "project", slug: project.slug },
    "",
    `#/project/${encodeURIComponent(project.slug)}`
  );

  state.route.index = next;
  state.activeIndex = next;
  state.trackCurrent = centeredTrackFor(next);
  state.route.scrollCurrent = 0;
  state.route.scrollTarget = 0;
  state.route.footerExpand = 0;
  state.route.footerAdvanceArmed = false;
  state.route.footerCommitScheduled = false;
  state.route.progress = 1;

  projectScrollContent.style.transform = "translate3d(0, 0, 0)";
  projectRouteProgress.style.transform = "scaleY(0)";
  routeNextExpand.textContent = "0";
  document.body.style.removeProperty("--footer-expand");

  updateProjectRouteMeta(next);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      state.route.footerCommitting = false;
      document.body.classList.remove("is-project-swapping");
      updateProjectScrollMax();
    });
  });
}

function updateProjectScrollVisuals(dt) {
  if (
    state.route.type !== "project" ||
    state.route.swap.active ||
    (state.route.transitioning && state.route.direction < 0)
  ) return;

  state.route.scrollCurrent = reducedMotion.matches
    ? state.route.scrollTarget
    : damp(state.route.scrollCurrent, state.route.scrollTarget, 7.25, dt);

  const scroll = state.route.scrollCurrent;
  const stepScroll = Math.min(scroll, state.route.scrollStepMax);

  projectScrollContent.style.transform =
    `translate3d(0, ${-stepScroll}px, 0)`;

  const progress =
    state.route.scrollStepMax > 0
      ? clamp(stepScroll / state.route.scrollStepMax, 0, 1)
      : 0;

  projectRouteProgress.style.transform = `scaleY(${progress})`;

  state.route.footerExpand = footerExpansionFromScroll(scroll);
  routeNextExpand.textContent =
    String(Math.round(state.route.footerExpand * 100));
  document.body.style.setProperty(
    "--footer-expand",
    state.route.footerExpand.toFixed(4)
  );
  document.body.classList.toggle(
    "is-footer-expanding",
    state.route.footerExpand > 0.001
  );

  if (!state.route.transitioning) {
    const metaFade =
      1 - clamp(stepScroll / Math.max(innerHeight * 0.48, 1), 0, 1);

    if (stepScroll > 0.5) {
      projectRouteMeta.style.opacity = String(metaFade);
      projectRouteMeta.style.transform =
        `translateY(${lerp(0, -28, 1 - metaFade)}px)`;
    } else {
      projectRouteMeta.style.removeProperty("opacity");
      projectRouteMeta.style.removeProperty("transform");
    }
  }

  if (
    scroll >= state.route.scrollMax - 2 &&
    !state.route.footerCommitScheduled &&
    !state.route.footerCommitting
  ) {
    const next = Number(routeNextProject.dataset.projectIndex);
    if (Number.isInteger(next)) {
      state.route.footerCommitScheduled = true;
      requestAnimationFrame(() => {
        commitFooterAdvance(next);
      });
    }
  }
}

function startProjectSwap(index, { instant = false } = {}) {
  const next = clamp(index, 0, PROJECTS.length - 1);
  const from = state.route.index ?? state.activeIndex;

  if (next === from) return;

  state.route.swap = {
    active: !instant && !reducedMotion.matches,
    fromIndex: from,
    toIndex: next,
    startedAt: performance.now(),
    duration: instant || reducedMotion.matches ? 1 : 1290,
    progress: instant || reducedMotion.matches ? 1 : 0
  };

  document.body.classList.add("is-project-swapping");
  state.route.scrollTarget = 0;

  if (instant || reducedMotion.matches) {
    state.route.index = next;
    state.activeIndex = next;
    state.trackCurrent = centeredTrackFor(next);
    state.route.scrollCurrent = 0;
    updateProjectRouteMeta(next);
    document.body.classList.remove("is-project-swapping");
  } else {
    updateProjectRouteMeta(next);
  }
}

function startProjectRoute(index, { instant = false } = {}) {
  document.body.classList.remove("is-project-exiting");
  const next = clamp(index, 0, PROJECTS.length - 1);
  setActiveIndex(next, true);
  updateProjectRouteMeta(next);

  state.mode = "focus";
  state.transition = 0;
  state.transitionFrom = 0;
  state.transitionTo = 0;
  state.trackCurrent = centeredTrackFor(next);
  state.trackVelocity = 0;
  state.settleTarget = null;
  state.recenter.active = false;

  state.route.type = "project";
  state.route.index = next;
  state.route.scrollCurrent = 0;
  state.route.scrollTarget = 0;
  state.route.footerExpand = 0;
  state.route.footerAdvanceArmed = false;
  state.route.footerCommitScheduled = false;
  state.route.footerCommitting = false;
  state.route.swap.active = false;
  routeNextExpand.textContent = "0";
  document.body.classList.remove("is-footer-expanding");
  document.body.style.removeProperty("--footer-expand");
  projectScrollContent.style.transform = "translate3d(0, 0, 0)";
  projectRouteProgress.style.transform = "scaleY(0)";
  projectRouteMeta.style.removeProperty("opacity");
  projectRouteMeta.style.removeProperty("transform");
  state.route.direction = 1;
  state.route.startedAt = performance.now();
  state.route.duration = instant || reducedMotion.matches ? 1 : 1290;
  state.route.progress = instant || reducedMotion.matches ? 1 : 0;
  state.route.transitioning = !instant && !reducedMotion.matches;

  document.body.dataset.mode = "focus";
  document.body.dataset.route = "project";
  projectRoute.setAttribute("aria-hidden", "false");
}

function startHomeRoute({ instant = false } = {}) {
  if (state.route.type !== "project") {
    document.body.dataset.route = "home";
    projectRoute.setAttribute("aria-hidden", "true");
    return;
  }

  document.body.classList.add("is-project-exiting");
  state.route.exitScrollFrom = Math.min(
    state.route.scrollCurrent,
    state.route.scrollStepMax
  );
  state.route.scrollTarget = 0;
  state.route.direction = -1;
  state.route.startedAt = performance.now();
  state.route.duration = instant || reducedMotion.matches ? 1 : 900;
  state.route.transitioning = !instant && !reducedMotion.matches;

  if (instant || reducedMotion.matches) {
    state.route.type = "home";
    state.route.index = null;
    state.route.progress = 0;
    document.body.dataset.route = "home";
    document.body.classList.remove("is-project-exiting");
    projectRoute.setAttribute("aria-hidden", "true");
  }
}

function navigateToProject(index, { replace = false } = {}) {
  if (state.intro.active) return;
  const project = PROJECTS[index];
  if (!project) return;

  const url = `#/project/${encodeURIComponent(project.slug)}`;
  const method = replace ? "replaceState" : "pushState";
  history[method]({ labRoute: "project", slug: project.slug }, "", url);

  if (state.route.type === "project") {
    startProjectSwap(index);
  } else {
    startProjectRoute(index);
  }
}

function navigateHome({ replace = false, instant = false } = {}) {
  const method = replace ? "replaceState" : "pushState";
  history[method]({ labRoute: "home" }, "", "#/");
  startHomeRoute({ instant });
}

function syncRouteFromLocation({ instant = false } = {}) {
  const projectIndex = routeIndexFromLocation();

  if (projectIndex !== null) {
    if (state.intro.active) {
      state.route.pendingInitialIndex = projectIndex;
      return;
    }
    if (
      state.route.type === "project" &&
      state.route.index !== null &&
      state.route.index !== projectIndex
    ) {
      startProjectSwap(projectIndex, { instant });
    } else {
      startProjectRoute(projectIndex, { instant });
    }
    return;
  }

  state.route.pendingInitialIndex = null;
  startHomeRoute({ instant });
}

const state = {
  mode: "focus",
  transition: 0,
  transitionFrom: 0,
  transitionTo: 0,
  transitionStartedAt: performance.now(),
  transitionDuration: 880,
  activeIndex: 0,
  trackCurrent: 0,
  trackVelocity: 0,
  settleTarget: null,
  recenter: {
    active: false,
    from: 0,
    to: 0,
    startedAt: 0,
    duration: 880
  },
  pointerDown: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  dragStartCurrent: 0,
  dragDistanceX: 0,
  dragDistanceY: 0,
  pointerMoved: false,
  pointerHistory: [],
  lastTime: performance.now(),
  renderedRects: [],
  focusCycle: {
    active: false,
    fromIndex: 0,
    toIndex: 0,
    direction: 1,
    startedAt: 0,
    duration: 620,
    progress: 0
  },
  titleRevealTimer: 0,
  titleSwapTimer: 0,
  intro: {
    active: true,
    startedAt: null,
    duration: 5000,
    complete: false
  },
  route: {
    type: "home",
    index: null,
    transitioning: false,
    direction: 1,
    startedAt: 0,
    duration: 1290,
    progress: 0,
    pendingInitialIndex: null,
    scrollCurrent: 0,
    scrollTarget: 0,
    scrollMax: 0,
    scrollStepMax: 0,
    footerStep: 0,
    footerExpand: 0,
    footerAdvanceArmed: false,
    footerCommitScheduled: false,
    footerCommitting: false,
    exitScrollFrom: 0,
    swap: {
      active: false,
      fromIndex: 0,
      toIndex: 0,
      startedAt: 0,
      duration: 1290,
      progress: 0
    }
  }
};

state.route.pendingInitialIndex = routeIndexFromLocation();

const planes = PROJECTS.map((project, index) => ({
  project,
  index,
  texture: createPlaceholderTexture(index),
  imageWidth: 1600,
  imageHeight: 900
}));

const introPlanes = INTRO_MEDIA.map((source, index) => ({
  source,
  index,
  texture: createPlaceholderTexture(index + 3),
  imageWidth: 1600,
  imageHeight: 900
}));

function createPlaceholderTexture(index) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  const base = 18 + index * 9;
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array([base, base, Math.max(12, base - 5), 255])
  );

  return texture;
}

function stripMetrics() {
  if (innerWidth <= 780) {
    const w = innerWidth * 0.82;
    const h = Math.min(innerHeight * 0.46, w / 1.58);
    return {
      w,
      h,
      gap: innerWidth * 0.075,
      centerX: innerWidth * 0.5,
      centerY: innerHeight * 0.5
    };
  }

  const h = innerHeight * 0.56;
  const w = Math.min(innerWidth * 0.58, h * 1.66);

  return {
    w,
    h,
    gap: innerWidth * 0.06,
    centerX: innerWidth * 0.5,
    centerY: innerHeight * 0.5
  };
}

function spacing() {
  const metrics = stripMetrics();
  return metrics.w + metrics.gap;
}

function maxTrack() {
  return Math.max(0, (PROJECTS.length - 1) * spacing());
}

function centeredTrackFor(index) {
  return clamp(index, 0, PROJECTS.length - 1) * spacing();
}

function focusRect() {
  return { x: 0, y: 0, w: innerWidth, h: innerHeight };
}

function hiddenFocusRect(index) {
  const direction = index < state.activeIndex ? -1 : 1;
  const w = innerWidth * 0.36;
  const h = innerHeight * 0.56;

  return {
    x: direction < 0 ? -w - 120 : innerWidth + 120,
    y: innerHeight * 0.5 - h * 0.5,
    w,
    h
  };
}

function stripRect(index, trackPosition) {
  const metrics = stripMetrics();

  return {
    x:
      metrics.centerX -
      metrics.w * 0.5 +
      index * (metrics.w + metrics.gap) -
      trackPosition,
    y: metrics.centerY - metrics.h * 0.5,
    w: metrics.w,
    h: metrics.h
  };
}

function transitionRectForPlane(index, trackPosition) {
  const from =
    index === state.activeIndex
      ? focusRect()
      : hiddenFocusRect(index);

  const to = stripRect(index, trackPosition);
  const t = state.transition;

  return {
    x: lerp(from.x, to.x, t),
    y: lerp(from.y, to.y, t),
    w: lerp(from.w, to.w, t),
    h: lerp(from.h, to.h, t)
  };
}

function nearestProjectIndex(trackPosition) {
  return clamp(
    Math.round(trackPosition / Math.max(spacing(), 1)),
    0,
    PROJECTS.length - 1
  );
}

function updateProjectTitle(index, immediate = false) {
  const project = PROJECTS[index];
  if (!project) return;

  const apply = () => {
    projectTitle.textContent = project.title;
    projectCounter.textContent = String(index + 1).padStart(2, "0");
  };

  if (immediate || reducedMotion.matches) {
    apply();
    return;
  }

  focusTitle.classList.add("is-changing");
  clearTimeout(state.titleSwapTimer);
  state.titleSwapTimer = setTimeout(() => {
    apply();
    requestAnimationFrame(() => focusTitle.classList.remove("is-changing"));
  }, 150);
}

function setActiveIndex(index, immediate = false) {
  const next = clamp(index, 0, PROJECTS.length - 1);
  if (next === state.activeIndex) return;
  state.activeIndex = next;
  updateProjectTitle(next, immediate);
}

function revealFocusChromeAfterDelay() {
  clearTimeout(state.titleRevealTimer);
  document.body.classList.add("is-entering-focus");

  state.titleRevealTimer = setTimeout(() => {
    document.body.classList.remove("is-entering-focus");
  }, reducedMotion.matches ? 0 : 540);
}

function setMode(nextMode, selectedIndex = state.activeIndex) {
  if (state.focusCycle.active) return;
  if (nextMode === state.mode && selectedIndex === state.activeIndex) return;

  const now = performance.now();

  if (nextMode === "focus") {
    setActiveIndex(selectedIndex, true);
    state.trackVelocity = 0;
    state.settleTarget = null;
    state.recenter = {
      active: true,
      from: state.trackCurrent,
      to: centeredTrackFor(selectedIndex),
      startedAt: now,
      duration: state.transitionDuration
    };
    revealFocusChromeAfterDelay();
  } else {
    state.trackCurrent = centeredTrackFor(state.activeIndex);
    state.trackVelocity = 0;
    state.settleTarget = null;
    state.recenter.active = false;
    document.body.classList.remove("is-entering-focus");
  }

  state.mode = nextMode;
  state.transitionFrom = state.transition;
  state.transitionTo = nextMode === "strip" ? 1 : 0;
  state.transitionStartedAt = now;
  document.body.dataset.mode = nextMode;

  if (reducedMotion.matches) {
    state.transition = state.transitionTo;
    if (state.recenter.active) {
      state.trackCurrent = state.recenter.to;
      state.recenter.active = false;
    }
  }
}

function cycleFocus(direction) {
  if (state.mode !== "focus" || state.transition > 0.001 || state.focusCycle.active) {
    return;
  }

  const fromIndex = state.activeIndex;
  const toIndex =
    (fromIndex + direction + PROJECTS.length) % PROJECTS.length;

  state.focusCycle = {
    active: true,
    fromIndex,
    toIndex,
    direction,
    startedAt: performance.now(),
    duration: reducedMotion.matches ? 1 : 620,
    progress: 0
  };

  state.activeIndex = toIndex;
  state.trackCurrent = centeredTrackFor(toIndex);
  state.trackVelocity = 0;
  state.settleTarget = null;

  focusTitle.classList.add("is-changing");
  clearTimeout(state.titleSwapTimer);
  state.titleSwapTimer = setTimeout(() => {
    projectTitle.textContent = PROJECTS[toIndex].title;
    projectCounter.textContent = String(toIndex + 1).padStart(2, "0");
    focusTitle.classList.remove("is-changing");
  }, reducedMotion.matches ? 0 : 230);
}

previousProject.addEventListener("click", () => cycleFocus(-1));
nextProject.addEventListener("click", () => cycleFocus(1));
openActiveProject.addEventListener("click", () => setMode("focus", state.activeIndex));

addEventListener("keydown", event => {
  if (state.route.type === "project") {
    if (event.key === "Escape") {
      event.preventDefault();
      navigateHome();
    } else if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      setProjectScrollTarget(state.route.scrollTarget + innerHeight * 0.72);
    } else if (event.key === "ArrowUp" || event.key === "PageUp") {
      event.preventDefault();
      setProjectScrollTarget(state.route.scrollTarget - innerHeight * 0.72);
    } else if (event.key === "Home") {
      event.preventDefault();
      setProjectScrollTarget(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setProjectScrollTarget(state.route.scrollMax);
    }
    return;
  }

  if (state.mode === "focus") {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      cycleFocus(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      cycleFocus(1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (state.route.type === "home") navigateToProject(state.activeIndex);
    } else if (event.key === "ArrowDown" || event.key === " ") {
      event.preventDefault();
      if (state.route.type === "home") setMode("strip");
    } else if (event.key === "Escape" && state.route.type === "project") {
      event.preventDefault();
      navigateHome();
    }
    return;
  }

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    const next = clamp(nearestProjectIndex(state.trackCurrent) + 1, 0, PROJECTS.length - 1);
    state.settleTarget = centeredTrackFor(next);
    state.trackVelocity = 0;
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    const next = clamp(nearestProjectIndex(state.trackCurrent) - 1, 0, PROJECTS.length - 1);
    state.settleTarget = centeredTrackFor(next);
    state.trackVelocity = 0;
  } else if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setMode("focus", state.activeIndex);
  } else if (event.key === "Escape") {
    setMode("focus", state.activeIndex);
  }
});

addEventListener("wheel", event => {
  if (state.route.type === "project") {
    if (state.route.swap.active || state.route.transitioning) {
      event.preventDefault();
      return;
    }

    const dominantProject =
      Math.abs(event.deltaY) >= Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;
    const projectFactor =
      event.deltaMode === 1 ? 24 : event.deltaMode === 2 ? innerHeight : 1;

    setProjectScrollTarget(
      state.route.scrollTarget + dominantProject * projectFactor * 0.95
    );
    event.preventDefault();
    return;
  }

  const dominant =
    Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ? event.deltaX
      : event.deltaY;

  if (state.mode === "focus") {
    if (dominant > 3) setMode("strip");
    event.preventDefault();
    return;
  }

  const factor = event.deltaMode === 1 ? 24 : event.deltaMode === 2 ? 600 : 1;
  const impulse = dominant * factor * 11;

  state.settleTarget = null;
  state.trackVelocity = clamp(
    state.trackVelocity + impulse,
    -3200,
    3200
  );

  event.preventDefault();
}, { passive: false });

canvas.addEventListener("pointerdown", event => {
  if (state.route.type === "project") return;
  if (event.pointerType === "mouse" && event.button !== 0) return;

  state.pointerDown = true;
  state.pointerId = event.pointerId;
  state.trackVelocity = 0;
  state.settleTarget = null;
  state.startX = event.clientX;
  state.startY = event.clientY;
  state.dragStartCurrent = state.trackCurrent;
  state.dragDistanceX = 0;
  state.dragDistanceY = 0;
  state.pointerMoved = false;
  state.pointerHistory = [{ x: event.clientX, t: performance.now() }];
  canvas.classList.add("is-grabbing");

  try {
    canvas.setPointerCapture(event.pointerId);
  } catch (_) {}
});

canvas.addEventListener("pointermove", event => {
  if (!state.pointerDown || event.pointerId !== state.pointerId) return;

  const dx = event.clientX - state.startX;
  const dy = event.clientY - state.startY;

  state.dragDistanceX = dx;
  state.dragDistanceY = dy;

  if (Math.hypot(dx, dy) > 5) {
    state.pointerMoved = true;
  }

  if (state.mode === "focus") {
    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
      setMode("strip");
      state.dragStartCurrent = state.trackCurrent;
      state.startX = event.clientX;
      state.startY = event.clientY;
      state.dragDistanceX = 0;
      state.dragDistanceY = 0;
    }
    return;
  }

  const now = performance.now();
  state.pointerHistory.push({ x: event.clientX, t: now });

  while (
    state.pointerHistory.length > 1 &&
    now - state.pointerHistory[0].t > 120
  ) {
    state.pointerHistory.shift();
  }

  const raw = state.dragStartCurrent - dx;
  const max = maxTrack();

  state.settleTarget = null;
  state.trackVelocity = 0;

  if (raw < 0) {
    const distance = -raw;
    state.trackCurrent = -150 * (1 - Math.exp(-distance / 220));
  } else if (raw > max) {
    const distance = raw - max;
    state.trackCurrent = max + 150 * (1 - Math.exp(-distance / 220));
  } else {
    state.trackCurrent = raw;
  }
});

function hitTestProject(x, y) {
  for (let i = state.renderedRects.length - 1; i >= 0; i -= 1) {
    const item = state.renderedRects[i];
    const rect = item.rect;

    if (
      item.opacity > 0.2 &&
      x >= rect.x &&
      x <= rect.x + rect.w &&
      y >= rect.y &&
      y <= rect.y + rect.h
    ) {
      return item.index;
    }
  }

  return null;
}

function finishPointer(event) {
  if (!state.pointerDown || event.pointerId !== state.pointerId) return;

  state.pointerDown = false;
  canvas.classList.remove("is-grabbing");

  try {
    canvas.releasePointerCapture(event.pointerId);
  } catch (_) {}

  if (state.mode === "focus" && !state.pointerMoved && state.route.type === "home") {
    navigateToProject(state.activeIndex);
    return;
  }

  if (state.mode !== "strip") return;

  if (!state.pointerMoved) {
    const hit = hitTestProject(event.clientX, event.clientY);

    if (hit !== null) {
      setMode("focus", hit);
    }

    return;
  }

  const now = performance.now();
  const oldest = state.pointerHistory[0] || { x: event.clientX, t: now };
  const dt = Math.max(now - oldest.t, 1);
  const vx = (event.clientX - oldest.x) / dt;

  state.settleTarget = null;
  state.trackVelocity = clamp(-vx * 1000 * 0.95, -3200, 3200);
}

canvas.addEventListener("pointerup", finishPointer);
canvas.addEventListener("pointercancel", event => {
  if (!state.pointerDown || event.pointerId !== state.pointerId) return;
  state.pointerDown = false;
  canvas.classList.remove("is-grabbing");
  state.settleTarget = null;
});

function resize() {
  const dpr = Math.min(devicePixelRatio || 1, innerWidth <= 780 ? 2 : 1.5);
  const width = Math.round(innerWidth * dpr);
  const height = Math.round(innerHeight * dpr);

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  gl.viewport(0, 0, width, height);

  if (state.route.type === "project") {
    updateProjectScrollMax();
  }

  if (state.mode === "focus") {
    state.trackCurrent = centeredTrackFor(state.activeIndex);
    state.trackVelocity = 0;
    state.settleTarget = null;
  } else {
    state.trackCurrent = clamp(state.trackCurrent, -150, maxTrack() + 150);
  }
}

addEventListener("resize", resize, { passive: true });
resize();

function drawPlane(plane, rect, opacity) {
  if (rect.w <= 1 || rect.h <= 1 || opacity <= 0.001) return;

  const dpr = canvas.width / innerWidth;
  const center = rect.x + rect.w * 0.5;
  const normalizedFromCenter =
    (center - innerWidth * 0.5) / Math.max(innerWidth, 1);

  const cropParallax =
    clamp(normalizedFromCenter * -0.18, -0.045, 0.045) * state.transition;

  const distanceToCenter = Math.abs(normalizedFromCenter);
  const dim = lerp(
    0.8,
    clamp(1 - distanceToCenter * 0.18, 0.8, 0.98),
    state.transition
  );

  gl.bindTexture(gl.TEXTURE_2D, plane.texture);
  gl.uniform2f(uniforms.viewport, canvas.width, canvas.height);
  gl.uniform4f(
    uniforms.rect,
    rect.x * dpr,
    rect.y * dpr,
    rect.w * dpr,
    rect.h * dpr
  );
  gl.uniform2f(uniforms.planeSize, rect.w * dpr, rect.h * dpr);
  gl.uniform2f(uniforms.imageSize, plane.imageWidth, plane.imageHeight);
  gl.uniform2f(uniforms.uvOffset, cropParallax, 0);
  gl.uniform1f(uniforms.textureScale, 1);
  gl.uniform1f(uniforms.dim, dim);
  gl.uniform1f(uniforms.opacity, opacity);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function drawIntroPlane(
  plane,
  rect,
  opacity = 1,
  dim = 1,
  textureScale = 1
) {
  if (rect.w <= 1 || rect.h <= 1 || opacity <= 0.001) return;

  if (
    rect.x >= innerWidth ||
    rect.x + rect.w <= 0 ||
    rect.y >= innerHeight ||
    rect.y + rect.h <= 0
  ) {
    return;
  }

  const dpr = canvas.width / innerWidth;

  gl.bindTexture(gl.TEXTURE_2D, plane.texture);
  gl.uniform2f(uniforms.viewport, canvas.width, canvas.height);
  gl.uniform4f(
    uniforms.rect,
    rect.x * dpr,
    rect.y * dpr,
    rect.w * dpr,
    rect.h * dpr
  );
  gl.uniform2f(uniforms.planeSize, rect.w * dpr, rect.h * dpr);
  gl.uniform2f(uniforms.imageSize, plane.imageWidth, plane.imageHeight);
  gl.uniform2f(uniforms.uvOffset, 0, 0);
  gl.uniform1f(uniforms.textureScale, textureScale);
  gl.uniform1f(uniforms.dim, dim);
  gl.uniform1f(uniforms.opacity, opacity);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function loaderLayout(index) {
  const w = innerWidth;
  const h = innerHeight;
  const designWidth = w <= 780 ? 375 : 1440;
  const widthScale = w / designWidth;

  let padding = 30 * widthScale;
  const cellW = (w - 4 * padding) / 4;
  const cellH = cellW * h / w;
  const cellStepY = cellH + padding;
  const cellStepX = cellW + padding;
  const halfStepY = 0.5 * cellStepY;
  const verticalBase = h + 0.5 * (5 * cellH + 4 * padding - h);
  const travelUnit = 12 * cellH;

  const finalW = w + 2;
  const finalH = h + 2;
  padding = padding * finalW / cellW;

  const finalStepY = finalH + padding;
  const finalStepX = finalW + padding;

  const column = Math.floor(index / 5) - 2;
  const oddColumn = Math.abs(column % 2) === 1;
  const row = index % 5;
  const rowFromCenter = row - 2;
  const columnDistance = Math.abs(column);

  const entryOffsetY = oddColumn
    ? -(
        verticalBase -
        halfStepY +
        (4 - row) * travelUnit +
        columnDistance * cellH +
        20
      )
    : (
        verticalBase +
        row * travelUnit +
        columnDistance * cellH +
        20
      );

  const gridX = 0.5 * (w - cellW) + column * cellStepX;
  const gridY =
    0.5 * (h - cellH) +
    rowFromCenter * cellStepY -
    (oddColumn ? halfStepY : 0);

  const finalX = 0.5 * (w - finalW) + column * finalStepX;
  const finalY =
    0.5 * (h - finalH) +
    rowFromCenter * finalStepY -
    (oddColumn ? 0.5 * finalStepY : 0);

  return {
    grid: { x: gridX, y: gridY, w: cellW, h: cellH },
    final: { x: finalX, y: finalY, w: finalW, h: finalH },
    entryOffsetY
  };
}

function thumbnailMetrics(index) {
  const w = innerWidth;
  const h = innerHeight;
  const scale =
    w / h > 16 / 9
      ? h / (w <= 780 ? 812 : 900)
      : w / (w <= 780 ? 375 : 1440);

  const thumbW = Math.max(42, Math.round(76 * scale));
  const thumbH = Math.max(24, Math.round((9 * thumbW) / 16));
  const gap = Math.max(3, Math.round(5 * scale));
  const edge = Math.max(18, Math.round(40 * scale));

  return {
    x:
      w -
      edge -
      thumbW -
      (PROJECTS.length - 1 - index) * (thumbW + gap),
    y: h - edge - thumbH,
    w: thumbW,
    h: thumbH,
    startOffsetY: edge + gap + thumbH
  };
}

function drawHomeThumbnails(now, duringIntro = false) {
  planes.forEach((plane, index) => {
    const target = thumbnailMetrics(index);
    let yOffset = state.transition * target.startOffsetY;
    let opacity = 1;

    if (duringIntro) {
      if (state.intro.startedAt === null) return;

      const elapsed = now - state.intro.startedAt;
      const local = clamp(
        (elapsed - (3700 + 50 * index)) / 1200,
        0,
        1
      );
      const eased = easeOutPower6(local);
      yOffset = lerp(target.startOffsetY, 0, eased);
      opacity = local <= 0 ? 0 : 1;
    }

    drawIntroPlane(
      plane,
      {
        x: target.x,
        y: target.y + yOffset,
        w: target.w,
        h: target.h
      },
      opacity,
      1,
      1
    );
  });
}

function renderIntro(now) {
  if (!state.intro.active) return false;

  const startedAt = state.intro.startedAt;
  if (startedAt === null) return true;

  const raw = clamp((now - startedAt) / state.intro.duration, 0, 1);
  const phaseIn = loaderEaseIn(clamp(raw / 0.65, 0, 1));
  const phaseOutBase = loaderEaseOut(clamp((raw - 0.4) / 0.6, 0, 1));
  const tailStart = 0.84;
  const tailProgress = clamp(
    (phaseOutBase - tailStart) / (1 - tailStart),
    0,
    1
  );
  const phaseOut =
    phaseOutBase <= tailStart
      ? phaseOutBase
      : lerp(
          tailStart,
          1,
          easeOutCubic(tailProgress)
        );

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(program);

  introPlanes.forEach((plane, index) => {
    const layout = loaderLayout(index);
    const grid = layout.grid;
    const final = layout.final;

    const rect = {
      x: lerp(grid.x, final.x, phaseOut),
      y:
        lerp(grid.y, final.y, phaseOut) +
        lerp(layout.entryOffsetY, 0, phaseIn),
      w: lerp(grid.w, final.w, phaseOut),
      h: lerp(grid.h, final.h, phaseOut)
    };

    const textureScale =
      index === INTRO_CENTER_INDEX
        ? 1 + lerp(0.5, 0, phaseOut)
        : 1;

    drawIntroPlane(plane, rect, 1, 1, textureScale);
  });

  drawHomeThumbnails(now, true);

  if (raw >= 1) {
    state.intro.active = false;
    state.intro.complete = true;
    document.body.dataset.intro = "false";
    state.trackCurrent = centeredTrackFor(0);
    state.trackVelocity = 0;
    state.settleTarget = null;
    state.transition = 0;
    state.transitionFrom = 0;
    state.transitionTo = 0;
    state.activeIndex = 0;
    updateProjectTitle(0, true);

    if (state.route.pendingInitialIndex !== null) {
      const pendingIndex = state.route.pendingInitialIndex;
      state.route.pendingInitialIndex = null;
      startProjectRoute(pendingIndex, { instant: true });
    }
  }

  return true;
}

function drawRoutePlane(plane, rect, uvY, textureScale, dim, opacity = 1) {
  if (!plane || opacity <= 0.001) return;

  const dpr = canvas.width / innerWidth;

  gl.bindTexture(gl.TEXTURE_2D, plane.texture);
  gl.uniform2f(uniforms.viewport, canvas.width, canvas.height);
  gl.uniform4f(
    uniforms.rect,
    rect.x * dpr,
    rect.y * dpr,
    rect.w * dpr,
    rect.h * dpr
  );
  gl.uniform2f(uniforms.planeSize, rect.w * dpr, rect.h * dpr);
  gl.uniform2f(uniforms.imageSize, plane.imageWidth, plane.imageHeight);
  gl.uniform2f(uniforms.uvOffset, 0, uvY);
  gl.uniform1f(uniforms.textureScale, textureScale);
  gl.uniform1f(uniforms.dim, dim);
  gl.uniform1f(uniforms.opacity, opacity);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function drawProjectRouteHero(now, dt) {
  if (state.route.swap.active) {
    const swap = state.route.swap;
    const raw = clamp(
      (now - swap.startedAt) / swap.duration,
      0,
      1
    );
    const eased = projectRouteEase(raw);
    swap.progress = eased;

    const fromPlane = planes[swap.fromIndex];
    const toPlane = planes[swap.toIndex];

    drawRoutePlane(
      fromPlane,
      {
        x: 0,
        y: lerp(-state.route.scrollCurrent, -(innerHeight + 2), eased),
        w: innerWidth,
        h: innerHeight
      },
      lerp(-0.014, -0.032, eased),
      lerp(1.04, 1.1, eased),
      0.9,
      1
    );

    drawRoutePlane(
      toPlane,
      {
        x: 0,
        y: lerp(innerHeight + 2, 0, eased),
        w: innerWidth,
        h: innerHeight
      },
      lerp(0.032, -0.014, eased),
      lerp(1.1, 1.04, eased),
      0.9,
      1
    );

    if (raw >= 1) {
      state.route.swap.active = false;
      state.route.index = swap.toIndex;
      state.activeIndex = swap.toIndex;
      state.trackCurrent = centeredTrackFor(swap.toIndex);
      state.route.scrollCurrent = 0;
      state.route.scrollTarget = 0;
      state.route.footerExpand = 0;
      state.route.footerAdvanceArmed = false;
      state.route.footerCommitScheduled = false;
      routeNextExpand.textContent = "0";
      document.body.classList.remove("is-footer-expanding");
      document.body.style.removeProperty("--footer-expand");
      projectScrollContent.style.transform = "translate3d(0, 0, 0)";
      projectRouteProgress.style.transform = "scaleY(0)";
      projectRouteMeta.style.removeProperty("opacity");
      projectRouteMeta.style.removeProperty("transform");
      document.body.classList.remove("is-project-swapping");
      updateProjectScrollMax();
    }

    return;
  }

  const index = state.route.index ?? state.activeIndex;
  const plane = planes[index];
  if (!plane) return;

  if (state.route.transitioning) {
    const elapsed = clamp(
      (now - state.route.startedAt) / state.route.duration,
      0,
      1
    );
    const eased = projectRouteEase(elapsed);

    state.route.progress =
      state.route.direction > 0
        ? eased
        : 1 - eased;

    if (elapsed >= 1) {
      state.route.transitioning = false;

      if (state.route.direction < 0) {
        state.route.type = "home";
        state.route.index = null;
        state.route.progress = 0;
        state.route.scrollCurrent = 0;
        state.route.scrollTarget = 0;
        state.route.exitScrollFrom = 0;
        state.route.footerExpand = 0;
        state.route.footerAdvanceArmed = false;
        state.route.footerCommitScheduled = false;
        routeNextExpand.textContent = "0";
        document.body.classList.remove("is-footer-expanding");
        document.body.style.removeProperty("--footer-expand");
        document.body.dataset.route = "home";
        document.body.classList.remove("is-project-exiting");
        projectRoute.setAttribute("aria-hidden", "true");
        projectScrollContent.style.transform = "translate3d(0, 0, 0)";
        projectRouteProgress.style.transform = "scaleY(0)";
      } else {
        state.route.progress = 1;
        updateProjectScrollMax();
      }
    }
  }

  updateProjectScrollVisuals(dt);

  const routeP = state.route.progress;
  const exitProgress =
    state.route.transitioning && state.route.direction < 0
      ? 1 - routeP
      : 0;
  const effectiveScroll =
    state.route.transitioning && state.route.direction < 0
      ? lerp(state.route.exitScrollFrom, 0, exitProgress)
      : Math.min(
          state.route.scrollCurrent,
          state.route.scrollStepMax
        );
  const scrollP = clamp(
    effectiveScroll / Math.max(innerHeight, 1),
    0,
    1
  );
  const heroY = -effectiveScroll;
  const routeUvY = lerp(0, -0.014, routeP) + lerp(0, -0.022, scrollP);
  const routeTextureScale = lerp(1, 1.04, routeP) + lerp(0, 0.035, scrollP);
  const routeDim = lerp(0.8, 0.9, routeP);

  drawRoutePlane(
    plane,
    {
      x: 0,
      y: heroY,
      w: innerWidth,
      h: innerHeight
    },
    routeUvY,
    routeTextureScale,
    routeDim,
    1
  );

  if (
    state.route.type === "project" &&
    !state.route.transitioning &&
    routeNextPreviewAnchor
  ) {
    const nextIndex = Number(routeNextProject.dataset.projectIndex);
    const nextPlane = planes[nextIndex];

    if (nextPlane) {
      const anchor = routeNextPreviewAnchor.getBoundingClientRect();
      const expand = state.route.footerExpand;
      const target = {
        x: -1,
        y: -1,
        w: innerWidth + 2,
        h: innerHeight + 2
      };

      drawRoutePlane(
        nextPlane,
        {
          x: lerp(anchor.x, target.x, expand),
          y: lerp(anchor.y, target.y, expand),
          w: lerp(anchor.width, target.w, expand),
          h: lerp(anchor.height, target.h, expand)
        },
        lerp(0, -0.014, expand),
        lerp(1.25, 1.04, expand),
        0.9,
        1
      );
    }
  }
}

function focusCycleVisual(index, now) {
  const cycle = state.focusCycle;
  if (!cycle.active) return null;

  const raw = clamp((now - cycle.startedAt) / cycle.duration, 0, 1);
  const eased = easeOutCubic(raw);
  cycle.progress = raw;

  if (index === cycle.fromIndex) {
    return {
      rect: {
        x: lerp(0, -cycle.direction * innerWidth * 0.22, eased),
        y: 0,
        w: innerWidth,
        h: innerHeight
      },
      opacity: 1 - eased
    };
  }

  if (index === cycle.toIndex) {
    return {
      rect: {
        x: lerp(cycle.direction * innerWidth * 0.22, 0, eased),
        y: 0,
        w: innerWidth,
        h: innerHeight
      },
      opacity: eased
    };
  }

  return {
    rect: hiddenFocusRect(index),
    opacity: 0
  };
}

function render(now) {
  const dt = Math.min((now - state.lastTime) / 1000, 0.05);
  state.lastTime = now;

  if (renderIntro(now)) {
    requestAnimationFrame(render);
    return;
  }

  if (state.route.type === "project" || state.route.transitioning) {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    drawProjectRouteHero(now, dt);
    requestAnimationFrame(render);
    return;
  }

  if (!reducedMotion.matches && state.transition !== state.transitionTo) {
    const elapsed = clamp(
      (now - state.transitionStartedAt) / state.transitionDuration,
      0,
      1
    );

    state.transition = lerp(
      state.transitionFrom,
      state.transitionTo,
      easeInOutQuart(elapsed)
    );

    if (elapsed === 1) {
      state.transition = state.transitionTo;
    }
  }

  if (state.recenter.active) {
    const raw = clamp(
      (now - state.recenter.startedAt) / state.recenter.duration,
      0,
      1
    );
    state.trackCurrent = lerp(
      state.recenter.from,
      state.recenter.to,
      easeInOutQuart(raw)
    );

    if (raw >= 1) {
      state.trackCurrent = state.recenter.to;
      state.recenter.active = false;
    }
  } else if (state.mode === "strip" && !state.pointerDown) {
    const max = maxTrack();

    if (reducedMotion.matches) {
      state.trackVelocity = 0;
      if (state.trackCurrent < 0) state.trackCurrent = 0;
      if (state.trackCurrent > max) state.trackCurrent = max;
    } else {
      let acceleration = 0;

      if (state.trackCurrent < 0) {
        acceleration += (0 - state.trackCurrent) * 62 - state.trackVelocity * 12;
        state.settleTarget = null;
      } else if (state.trackCurrent > max) {
        acceleration += (max - state.trackCurrent) * 62 - state.trackVelocity * 12;
        state.settleTarget = null;
      } else {
        state.trackVelocity *= Math.exp(-1.7 * dt);

        if (
          state.settleTarget === null &&
          Math.abs(state.trackVelocity) < 52
        ) {
          state.settleTarget = centeredTrackFor(
            nearestProjectIndex(state.trackCurrent)
          );
        }

        if (state.settleTarget !== null) {
          const distance = state.settleTarget - state.trackCurrent;
          acceleration += distance * 15 - state.trackVelocity * 6.4;

          if (
            Math.abs(distance) < 0.55 &&
            Math.abs(state.trackVelocity) < 5
          ) {
            state.trackCurrent = state.settleTarget;
            state.trackVelocity = 0;
            state.settleTarget = null;
          }
        }
      }

      state.trackVelocity += acceleration * dt;
      state.trackCurrent += state.trackVelocity * dt;
    }
  }

  if (state.mode === "strip") {
    const nearest = nearestProjectIndex(
      clamp(state.trackCurrent, 0, maxTrack())
    );
    if (nearest !== state.activeIndex) {
      state.activeIndex = nearest;
    }
  }

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(program);
  state.renderedRects = [];

  planes.forEach(plane => {
    let rect;
    let opacity;

    if (
      state.focusCycle.active &&
      state.mode === "focus" &&
      state.transition <= 0.001
    ) {
      const cycleVisual = focusCycleVisual(plane.index, now);
      rect = cycleVisual.rect;
      opacity = cycleVisual.opacity;
    } else {
      rect = transitionRectForPlane(plane.index, state.trackCurrent);

      const visible =
        rect.x + rect.w > -rect.w * 0.45 &&
        rect.x < innerWidth + rect.w * 0.45;

      const focusOpacity = plane.index === state.activeIndex ? 1 : 0;
      const stripOpacity = visible ? 1 : 0;
      opacity = lerp(focusOpacity, stripOpacity, state.transition);
    }

    state.renderedRects.push({
      index: plane.index,
      rect,
      opacity
    });

    drawPlane(plane, rect, opacity);
  });

  drawHomeThumbnails(now, false);

  if (state.focusCycle.active && state.focusCycle.progress >= 1) {
    state.focusCycle.active = false;
    state.focusCycle.progress = 0;
    state.trackCurrent = centeredTrackFor(state.activeIndex);
    state.trackVelocity = 0;
    state.settleTarget = null;
  }

  requestAnimationFrame(render);
}

requestAnimationFrame(render);

let projectTouchY = null;

projectRoute.addEventListener("touchstart", event => {
  if (
    state.route.type !== "project" ||
    state.route.swap.active ||
    state.route.transitioning ||
    event.touches.length !== 1
  ) return;

  projectTouchY = event.touches[0].clientY;
}, { passive: true });

projectRoute.addEventListener("touchmove", event => {
  if (
    projectTouchY === null ||
    state.route.type !== "project" ||
    state.route.swap.active ||
    state.route.transitioning ||
    event.touches.length !== 1
  ) return;

  const y = event.touches[0].clientY;
  const delta = projectTouchY - y;
  projectTouchY = y;
  setProjectScrollTarget(state.route.scrollTarget + delta);
  event.preventDefault();
}, { passive: false });

projectRoute.addEventListener("touchend", () => {
  projectTouchY = null;
}, { passive: true });

routeNextProject.addEventListener("click", () => {
  const index = Number(routeNextProject.dataset.projectIndex);
  if (Number.isInteger(index)) beginFooterAdvance(index);
});

projectBack.addEventListener("click", () => {
  if (history.state && history.state.labRoute === "project") {
    history.back();
  } else {
    navigateHome({ replace: true });
  }
});

for (const link of [homeBrand, homeLink]) {
  link.addEventListener("click", event => {
    event.preventDefault();
    if (state.route.type === "home" && !state.route.transitioning) return;
    navigateHome();
  });
}

addEventListener("popstate", () => {
  syncRouteFromLocation();
});

addEventListener("hashchange", () => {
  const projectIndex = routeIndexFromLocation();

  const alreadyTargeting =
    (
      state.route.transitioning &&
      (
        (projectIndex === null && state.route.direction < 0) ||
        (
          projectIndex !== null &&
          state.route.direction > 0 &&
          state.route.index === projectIndex
        )
      )
    ) ||
    (
      state.route.swap.active &&
      projectIndex === state.route.swap.toIndex
    );

  if (alreadyTargeting) return;

  const routeMatches =
    projectIndex !== null
      ? state.route.type === "project" && state.route.index === projectIndex
      : state.route.type === "home";

  if (!routeMatches) syncRouteFromLocation();
});

function proxyFor(source) {
  return `https://wsrv.nl/?url=${encodeURIComponent(source)}`;
}

function loadImageSource(source, sourceIndex = 0) {
  const sources = [source, proxyFor(source)];

  return new Promise((resolve, reject) => {
    if (sourceIndex >= sources.length) {
      reject(new Error(`Failed to load texture: ${source}`));
      return;
    }

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => {
      loadImageSource(source, sourceIndex + 1).then(resolve).catch(reject);
    };
    image.src = sources[sourceIndex];
  });
}

let loadedCount = 0;

Promise.all(
  introPlanes.map(async plane => {
    const image = await loadImageSource(plane.source);

    gl.bindTexture(gl.TEXTURE_2D, plane.texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      image
    );

    plane.imageWidth = image.naturalWidth || plane.imageWidth;
    plane.imageHeight = image.naturalHeight || plane.imageHeight;

    loadedCount += 1;
    loadingValue.textContent =
      `${Math.round((loadedCount / introPlanes.length) * 100)}%`;
  })
)
  .then(() => {
    const projectTextureMap = [INTRO_CENTER_INDEX, 6, 18];

    planes.forEach((plane, index) => {
      const sourcePlane = introPlanes[projectTextureMap[index]];
      plane.texture = sourcePlane.texture;
      plane.imageWidth = sourcePlane.imageWidth;
      plane.imageHeight = sourcePlane.imageHeight;
    });

    updateProjectTitle(0, true);
    loadingValue.textContent = "100%";

    setTimeout(() => {
      loading.classList.add("is-complete");

      setTimeout(() => {
        state.intro.startedAt = performance.now();
      }, reducedMotion.matches ? 0 : 260);
    }, 80);
  })
  .catch(() => {
    loading.hidden = true;
    canvas.hidden = true;
    fallback.hidden = false;
  });
