const PROJECTS = [
  {
    slug: "studentos",
    eyebrow: "01 / All-in-one academic workspace",
    title: "StudentOS",
    summary: "An AI-native academic workspace that turns courses, syllabi, assignments, schedules, and study materials into a clear daily roadmap.",
    href: "https://studentos.sentiqlabs.com/",
    image: "https://i.ibb.co/jkB9vQLr/Screenshot-2026-07-14-182748.png",
    proxy: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FjkB9vQLr%2FScreenshot-2026-07-14-182748.png"
  },
  {
    slug: "sentiq-chat",
    eyebrow: "02 / AI orchestrator",
    title: "SentIQ Chat",
    summary: "A multimodal AI orchestrator built around conversation, memory, contextual awareness, files, tools, web research, image generation, and live voice.",
    href: "https://sentiqchat.sentiqlabs.com/",
    image: "https://i.ibb.co/nsRD4K6z/Screenshot-2026-03-15-113205.png",
    proxy: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FnsRD4K6z%2FScreenshot-2026-03-15-113205.png"
  },
  {
    slug: "fieldline",
    eyebrow: "03 / AI for the field",
    title: "FieldLine",
    summary: "AI for bridging the communication gap between project leadership and field workers in large infrastructure projects, with progress tracking and anomaly detection.",
    href: "https://fieldline.sentiqlabs.com/",
    image: "https://i.ibb.co/CKyJjqjk/Screenshot-2026-10-11-185504.png",
    proxy: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FCKyJjqjk%2FScreenshot-2026-10-11-185504.png"
  }
];

const canvas = document.getElementById("experience");
const loading = document.getElementById("loading");
const loadingValue = document.getElementById("loading-value");
const fallback = document.getElementById("fallback");
const modeButton = document.getElementById("mode-button");
const modeLabel = modeButton.querySelector(".mode-button__label");
const previousProject = document.getElementById("previous-project");
const nextProject = document.getElementById("next-project");
const projectCopy = document.querySelector(".project-copy");
const projectIndex = document.getElementById("project-index");
const projectTitle = document.getElementById("project-title");
const projectSummary = document.getElementById("project-summary");
const projectLink = document.getElementById("project-link");
const projectCounter = document.getElementById("project-counter");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

document.body.dataset.mode = "focus";

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

const state = {
  mode: "focus",
  transition: 0,
  transitionFrom: 0,
  transitionTo: 0,
  transitionStartedAt: performance.now(),
  transitionDuration: 1120,
  activeIndex: 0,
  galleryCurrent: 0,
  galleryTarget: 0,
  dragOffset: 0,
  pointerDown: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  dragDistance: 0,
  pointerMoved: false,
  lastTime: performance.now(),
  renderedRects: []
};

const planes = PROJECTS.map((project, index) => ({
  project,
  index,
  texture: createPlaceholderTexture(index),
  imageWidth: 1600,
  imageHeight: 900,
  loaded: false
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

function focusRect() {
  return { x: 0, y: 0, w: innerWidth, h: innerHeight };
}

function galleryMetrics() {
  if (innerWidth <= 780) {
    const w = innerWidth * 0.72;
    const h = Math.min(innerHeight * 0.34, w * 0.72);
    return {
      w,
      h,
      gap: Math.max(22, innerWidth * 0.055),
      centerX: innerWidth * 0.5,
      centerY: 105 + h * 0.5
    };
  }

  const w = Math.min(innerWidth * 0.42, 760);
  const h = Math.min(innerHeight * 0.61, w * 0.64);

  return {
    w,
    h,
    gap: Math.max(26, innerWidth * 0.024),
    centerX: innerWidth * 0.72,
    centerY: innerHeight * 0.5
  };
}

function overviewRectFor(index, galleryPosition) {
  const metrics = galleryMetrics();
  const offset = index - galleryPosition;
  const x = metrics.centerX - metrics.w * 0.5 + offset * (metrics.w + metrics.gap);

  return {
    x,
    y: metrics.centerY - metrics.h * 0.5,
    w: metrics.w,
    h: metrics.h
  };
}

function focusHiddenRect(index) {
  const direction = index < state.activeIndex ? -1 : 1;
  const w = innerWidth * 0.24;
  const h = innerHeight * 0.45;

  return {
    x: direction < 0 ? -w - 80 : innerWidth + 80,
    y: innerHeight * 0.5 - h * 0.5,
    w,
    h
  };
}

function rectForPlane(index, galleryPosition) {
  const overview = overviewRectFor(index, galleryPosition);
  const focus = index === state.activeIndex ? focusRect() : focusHiddenRect(index);
  const t = state.transition;

  return {
    x: lerp(focus.x, overview.x, t),
    y: lerp(focus.y, overview.y, t),
    w: lerp(focus.w, overview.w, t),
    h: lerp(focus.h, overview.h, t)
  };
}

function updateProjectCopy(index, immediate = false) {
  const project = PROJECTS[index];
  if (!project) return;

  const apply = () => {
    projectIndex.textContent = project.eyebrow;
    projectTitle.textContent = project.title;
    projectSummary.textContent = project.summary;
    projectLink.href = project.href;
    projectCounter.textContent =
      `${String(index + 1).padStart(2, "0")} / ${String(PROJECTS.length).padStart(2, "0")}`;
    previousProject.disabled = index === 0;
    nextProject.disabled = index === PROJECTS.length - 1;
  };

  if (immediate || reducedMotion.matches || state.mode !== "overview") {
    apply();
    return;
  }

  projectCopy.classList.add("is-changing");
  setTimeout(() => {
    apply();
    requestAnimationFrame(() => projectCopy.classList.remove("is-changing"));
  }, 170);
}

function setActiveIndex(index) {
  const next = clamp(index, 0, PROJECTS.length - 1);
  if (next === state.activeIndex && state.galleryTarget === next) return;

  state.activeIndex = next;
  state.galleryTarget = next;
  updateProjectCopy(next);
}

function stepProject(direction) {
  if (state.mode !== "overview") {
    setMode("overview");
    return;
  }

  setActiveIndex(state.activeIndex + direction);
}

function setMode(nextMode) {
  if (nextMode === state.mode) return;

  state.mode = nextMode;
  state.transitionFrom = state.transition;
  state.transitionTo = nextMode === "overview" ? 1 : 0;
  state.transitionStartedAt = performance.now();

  if (nextMode === "overview") {
    state.galleryCurrent = state.activeIndex;
    state.galleryTarget = state.activeIndex;
  }

  document.body.dataset.mode = nextMode;
  modeButton.setAttribute("aria-pressed", String(nextMode === "overview"));
  modeLabel.textContent = nextMode === "overview" ? "Focus" : "Overview";

  if (reducedMotion.matches) {
    state.transition = state.transitionTo;
  }
}

function toggleMode() {
  setMode(state.mode === "overview" ? "focus" : "overview");
}

modeButton.addEventListener("click", toggleMode);
previousProject.addEventListener("click", () => stepProject(-1));
nextProject.addEventListener("click", () => stepProject(1));

addEventListener("keydown", event => {
  if (state.mode === "focus") {
    if (["ArrowDown", "ArrowRight", " "].includes(event.key)) {
      event.preventDefault();
      setMode("overview");
    }
    return;
  }

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    stepProject(1);
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    stepProject(-1);
  } else if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setMode("focus");
  } else if (event.key === "Escape") {
    setMode("focus");
  }
});

let wheelAccumulator = 0;
let wheelResetTimer = 0;
let wheelLocked = false;

addEventListener("wheel", event => {
  const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
    ? event.deltaX
    : event.deltaY;

  clearTimeout(wheelResetTimer);
  wheelResetTimer = setTimeout(() => {
    wheelAccumulator = 0;
    wheelLocked = false;
  }, 150);

  wheelAccumulator += delta;

  if (!wheelLocked && Math.abs(wheelAccumulator) > 34) {
    if (state.mode === "focus") {
      if (wheelAccumulator > 0) setMode("overview");
    } else {
      stepProject(wheelAccumulator > 0 ? 1 : -1);
    }

    wheelAccumulator = 0;
    wheelLocked = true;
  }

  event.preventDefault();
}, { passive: false });

canvas.addEventListener("pointerdown", event => {
  if (event.pointerType === "mouse" && event.button !== 0) return;

  state.pointerDown = true;
  state.pointerId = event.pointerId;
  state.startX = event.clientX;
  state.startY = event.clientY;
  state.dragDistance = 0;
  state.pointerMoved = false;
  state.dragOffset = 0;
  canvas.classList.add("is-grabbing");

  try {
    canvas.setPointerCapture(event.pointerId);
  } catch (_) {}
});

canvas.addEventListener("pointermove", event => {
  if (!state.pointerDown || event.pointerId !== state.pointerId) return;

  const dx = event.clientX - state.startX;
  const dy = event.clientY - state.startY;
  state.dragDistance = Math.abs(dx) >= Math.abs(dy) ? dx : dy;

  if (Math.hypot(dx, dy) > 5) {
    state.pointerMoved = true;
  }

  if (state.mode === "overview") {
    const metrics = galleryMetrics();
    state.dragOffset = -dx / Math.max(metrics.w + metrics.gap, 1);
  }
});

function hitTestProject(x, y) {
  let best = null;

  for (const item of state.renderedRects) {
    const rect = item.rect;
    if (
      x >= rect.x &&
      x <= rect.x + rect.w &&
      y >= rect.y &&
      y <= rect.y + rect.h &&
      item.opacity > 0.25
    ) {
      best = item.index;
    }
  }

  return best;
}

function endPointer(event) {
  if (!state.pointerDown || event.pointerId !== state.pointerId) return;

  state.pointerDown = false;
  canvas.classList.remove("is-grabbing");

  try {
    canvas.releasePointerCapture(event.pointerId);
  } catch (_) {}

  if (!state.pointerMoved) {
    if (state.mode === "overview") {
      const hit = hitTestProject(event.clientX, event.clientY);
      if (hit !== null) {
        if (hit === state.activeIndex) {
          setMode("focus");
        } else {
          setActiveIndex(hit);
        }
      }
    }
    state.dragOffset = 0;
    return;
  }

  if (state.mode === "focus") {
    if (Math.abs(state.dragDistance) > 30) {
      setMode("overview");
    }
    state.dragOffset = 0;
    return;
  }

  if (Math.abs(state.dragDistance) > 42) {
    stepProject(state.dragDistance < 0 ? 1 : -1);
  }

  state.dragOffset = 0;
}

canvas.addEventListener("pointerup", endPointer);
canvas.addEventListener("pointercancel", event => {
  if (!state.pointerDown || event.pointerId !== state.pointerId) return;
  state.pointerDown = false;
  state.dragOffset = 0;
  canvas.classList.remove("is-grabbing");
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
}

addEventListener("resize", resize, { passive: true });
resize();

function drawPlane(plane, rect, opacity, galleryPosition) {
  if (rect.w <= 1 || rect.h <= 1 || opacity <= 0.001) return;

  const dpr = canvas.width / innerWidth;
  const offsetFromCenter = plane.index - galleryPosition;
  const parallaxX = clamp(offsetFromCenter * -0.028, -0.055, 0.055);
  const activeBoost = plane.index === state.activeIndex ? 1 : 0.82;

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
  gl.uniform2f(uniforms.uvOffset, parallaxX, 0);
  gl.uniform1f(uniforms.dim, lerp(0.76, activeBoost, state.transition));
  gl.uniform1f(uniforms.opacity, opacity);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function render(now) {
  const dt = Math.min((now - state.lastTime) / 1000, 0.05);
  state.lastTime = now;

  if (!reducedMotion.matches && state.transition !== state.transitionTo) {
    const elapsed = clamp(
      (now - state.transitionStartedAt) / state.transitionDuration,
      0,
      1
    );
    const eased = easeInOutQuart(elapsed);
    state.transition = lerp(state.transitionFrom, state.transitionTo, eased);

    if (elapsed === 1) {
      state.transition = state.transitionTo;
    }
  }

  if (reducedMotion.matches) {
    state.galleryCurrent = state.galleryTarget;
  } else if (!state.pointerDown || state.mode !== "overview") {
    state.galleryCurrent = damp(
      state.galleryCurrent,
      state.galleryTarget,
      10.5,
      dt
    );
  }

  const galleryPosition =
    state.galleryCurrent + (state.mode === "overview" ? state.dragOffset : 0);

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(program);

  state.renderedRects = [];

  planes.forEach(plane => {
    const rect = rectForPlane(plane.index, galleryPosition);
    const distance = Math.abs(plane.index - galleryPosition);
    const overviewOpacity = clamp(1 - Math.max(0, distance - 1.15) * 0.55, 0.18, 1);
    const focusOpacity = plane.index === state.activeIndex ? 1 : 0;
    const opacity = lerp(focusOpacity, overviewOpacity, state.transition);

    state.renderedRects.push({
      index: plane.index,
      rect,
      opacity
    });

    drawPlane(plane, rect, opacity, galleryPosition);
  });

  requestAnimationFrame(render);
}

requestAnimationFrame(render);

function loadImageFrom(project, sourceIndex = 0) {
  const sources = [project.image, project.proxy];

  return new Promise((resolve, reject) => {
    if (sourceIndex >= sources.length) {
      reject(new Error(`Failed to load texture for ${project.title}`));
      return;
    }

    const image = new Image();
    image.crossOrigin = "anonymous";

    image.onload = () => resolve(image);
    image.onerror = () => {
      loadImageFrom(project, sourceIndex + 1).then(resolve).catch(reject);
    };

    image.src = sources[sourceIndex];
  });
}

let loadedCount = 0;

Promise.all(
  planes.map(async plane => {
    const image = await loadImageFrom(plane.project);

    gl.bindTexture(gl.TEXTURE_2D, plane.texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
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
    plane.loaded = true;

    loadedCount += 1;
    loadingValue.textContent =
      `${Math.round((loadedCount / planes.length) * 100)}%`;
  })
)
  .then(() => {
    updateProjectCopy(0, true);
    setTimeout(() => loading.classList.add("is-complete"), 180);
  })
  .catch(() => {
    loading.hidden = true;
    canvas.hidden = true;
    fallback.hidden = false;
  });
