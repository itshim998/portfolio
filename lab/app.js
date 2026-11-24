const PROJECTS = [
  {
    slug: "studentos",
    eyebrow: "01 / All-in-one academic workspace",
    title: "StudentOS",
    href: "https://studentos.sentiqlabs.com/",
    image: "https://i.ibb.co/jkB9vQLr/Screenshot-2026-07-14-182748.png",
    proxy: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FjkB9vQLr%2FScreenshot-2026-07-14-182748.png"
  },
  {
    slug: "sentiq-chat",
    eyebrow: "02 / AI orchestrator",
    title: "SentIQ Chat",
    href: "https://sentiqchat.sentiqlabs.com/",
    image: "https://i.ibb.co/nsRD4K6z/Screenshot-2026-03-15-113205.png",
    proxy: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FnsRD4K6z%2FScreenshot-2026-03-15-113205.png"
  },
  {
    slug: "fieldline",
    eyebrow: "03 / AI for the field",
    title: "FieldLine",
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
const projectLabel = document.querySelector(".project-label");
const projectIndex = document.getElementById("project-index");
const projectTitle = document.getElementById("project-title");
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
  transitionDuration: 1050,
  activeIndex: 0,
  trackCurrent: 0,
  trackTarget: 0,
  pointerDown: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  dragStartTarget: 0,
  dragDistanceX: 0,
  dragDistanceY: 0,
  pointerMoved: false,
  pointerHistory: [],
  lastTime: performance.now(),
  renderedRects: []
};

const planes = PROJECTS.map((project, index) => ({
  project,
  index,
  texture: createPlaceholderTexture(index),
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
    const w = Math.min(innerWidth * 0.66, innerHeight * 0.38);
    const h = Math.min(innerHeight * 0.53, w * 1.48);
    return {
      w,
      h,
      gap: Math.max(24, innerWidth * 0.055),
      centerX: innerWidth * 0.5,
      centerY: innerHeight * 0.46
    };
  }

  const vmin = Math.min(innerWidth, innerHeight) / 100;
  const w = 40 * vmin;
  const h = 56 * vmin;

  return {
    w,
    h,
    gap: 4 * vmin,
    centerX: innerWidth * 0.5,
    centerY: innerHeight * 0.5
  };
}

function maxTrack() {
  const metrics = stripMetrics();
  return Math.max(0, (PROJECTS.length - 1) * (metrics.w + metrics.gap));
}

function focusRect() {
  return { x: 0, y: 0, w: innerWidth, h: innerHeight };
}

function hiddenFocusRect(index) {
  const direction = index < state.activeIndex ? -1 : 1;
  const w = innerWidth * 0.28;
  const h = innerHeight * 0.5;

  return {
    x: direction < 0 ? -w - 100 : innerWidth + 100,
    y: innerHeight * 0.5 - h * 0.5,
    w,
    h
  };
}

function stripRect(index, trackPosition) {
  const metrics = stripMetrics();
  const spacing = metrics.w + metrics.gap;
  const x =
    metrics.centerX -
    metrics.w * 0.5 +
    index * spacing -
    trackPosition;

  return {
    x,
    y: metrics.centerY - metrics.h * 0.5,
    w: metrics.w,
    h: metrics.h
  };
}

function rectForPlane(index, trackPosition) {
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

function setTrackTarget(value) {
  state.trackTarget = clamp(value, 0, maxTrack());
}

function nearestProjectIndex(trackPosition) {
  const metrics = stripMetrics();
  const spacing = metrics.w + metrics.gap;
  return clamp(Math.round(trackPosition / Math.max(spacing, 1)), 0, PROJECTS.length - 1);
}

function updateProjectLabel(index, immediate = false) {
  const project = PROJECTS[index];
  if (!project) return;

  const apply = () => {
    projectIndex.textContent = project.eyebrow;
    projectTitle.textContent = project.title;
    projectLink.href = project.href;
    projectCounter.textContent =
      `${String(index + 1).padStart(2, "0")} / ${String(PROJECTS.length).padStart(2, "0")}`;
  };

  if (immediate || reducedMotion.matches) {
    apply();
    return;
  }

  projectLabel.classList.add("is-changing");
  setTimeout(() => {
    apply();
    requestAnimationFrame(() => projectLabel.classList.remove("is-changing"));
  }, 135);
}

function setActiveIndex(index, immediate = false) {
  const next = clamp(index, 0, PROJECTS.length - 1);
  if (next === state.activeIndex) return;

  state.activeIndex = next;
  updateProjectLabel(next, immediate);
}

function setMode(nextMode, selectedIndex = state.activeIndex) {
  if (nextMode === state.mode && selectedIndex === state.activeIndex) return;

  if (nextMode === "focus") {
    setActiveIndex(selectedIndex);
    const metrics = stripMetrics();
    const spacing = metrics.w + metrics.gap;
    state.trackCurrent = selectedIndex * spacing;
    state.trackTarget = state.trackCurrent;
  }

  state.mode = nextMode;
  state.transitionFrom = state.transition;
  state.transitionTo = nextMode === "strip" ? 1 : 0;
  state.transitionStartedAt = performance.now();

  if (nextMode === "strip") {
    const metrics = stripMetrics();
    const spacing = metrics.w + metrics.gap;
    state.trackCurrent = state.activeIndex * spacing;
    state.trackTarget = state.trackCurrent;
  }

  document.body.dataset.mode = nextMode;
  modeButton.setAttribute("aria-pressed", String(nextMode === "strip"));
  modeLabel.textContent = nextMode === "strip" ? "Close" : "View all";

  if (reducedMotion.matches) {
    state.transition = state.transitionTo;
  }
}

modeButton.addEventListener("click", () => {
  setMode(state.mode === "strip" ? "focus" : "strip");
});

addEventListener("keydown", event => {
  if (state.mode === "focus") {
    if (["ArrowDown", "ArrowRight", " "].includes(event.key)) {
      event.preventDefault();
      setMode("strip");
    }
    return;
  }

  const metrics = stripMetrics();
  const spacing = metrics.w + metrics.gap;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    setTrackTarget(state.trackTarget + spacing * 0.72);
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    setTrackTarget(state.trackTarget - spacing * 0.72);
  } else if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setMode("focus", state.activeIndex);
  } else if (event.key === "Escape") {
    setMode("focus", state.activeIndex);
  }
});

let wheelVelocity = 0;
let wheelIdleTimer = 0;

addEventListener("wheel", event => {
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
  wheelVelocity = dominant * factor;
  setTrackTarget(state.trackTarget + wheelVelocity * 0.9);

  clearTimeout(wheelIdleTimer);
  wheelIdleTimer = setTimeout(() => {
    wheelVelocity = 0;
  }, 90);

  event.preventDefault();
}, { passive: false });

canvas.addEventListener("pointerdown", event => {
  if (event.pointerType === "mouse" && event.button !== 0) return;

  state.pointerDown = true;
  state.pointerId = event.pointerId;
  state.startX = event.clientX;
  state.startY = event.clientY;
  state.dragStartTarget = state.trackTarget;
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
    if (Math.abs(dx) > 18 || Math.abs(dy) > 18) {
      setMode("strip");
      state.dragStartTarget = state.trackTarget;
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

  const raw = state.dragStartTarget - dx;
  const max = maxTrack();

  if (raw < 0) {
    state.trackTarget = raw * 0.28;
  } else if (raw > max) {
    state.trackTarget = max + (raw - max) * 0.28;
  } else {
    state.trackTarget = raw;
  }

  state.trackCurrent = state.trackTarget;
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

  state.trackTarget = clamp(
    state.trackTarget - vx * 260,
    0,
    maxTrack()
  );
}

canvas.addEventListener("pointerup", finishPointer);
canvas.addEventListener("pointercancel", event => {
  if (!state.pointerDown || event.pointerId !== state.pointerId) return;
  state.pointerDown = false;
  canvas.classList.remove("is-grabbing");
  state.trackTarget = clamp(state.trackTarget, 0, maxTrack());
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

  if (state.mode === "strip") {
    state.trackTarget = clamp(state.trackTarget, 0, maxTrack());
    state.trackCurrent = clamp(state.trackCurrent, 0, maxTrack());
  } else {
    const metrics = stripMetrics();
    const spacing = metrics.w + metrics.gap;
    state.trackTarget = state.activeIndex * spacing;
    state.trackCurrent = state.trackTarget;
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
    clamp(normalizedFromCenter * -0.22, -0.11, 0.11) * state.transition;

  const distanceToCenter = Math.abs(normalizedFromCenter);
  const dim = lerp(
    0.78,
    clamp(1 - distanceToCenter * 0.25, 0.76, 0.96),
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
  gl.uniform1f(uniforms.dim, dim);
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
    state.transition = lerp(
      state.transitionFrom,
      state.transitionTo,
      easeInOutQuart(elapsed)
    );

    if (elapsed === 1) {
      state.transition = state.transitionTo;
    }
  }

  if (state.mode === "strip" && !state.pointerDown) {
    const target = clamp(state.trackTarget, 0, maxTrack());
    state.trackTarget = target;
    state.trackCurrent = reducedMotion.matches
      ? target
      : damp(state.trackCurrent, target, 8.5, dt);
  }

  if (state.mode === "strip") {
    const nearest = nearestProjectIndex(state.trackCurrent);
    if (nearest !== state.activeIndex) {
      setActiveIndex(nearest);
    }
  }

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(program);

  state.renderedRects = [];

  planes.forEach(plane => {
    const rect = rectForPlane(plane.index, state.trackCurrent);
    const visible =
      rect.x + rect.w > -rect.w * 0.4 &&
      rect.x < innerWidth + rect.w * 0.4;

    const focusOpacity = plane.index === state.activeIndex ? 1 : 0;
    const stripOpacity = visible ? 1 : 0;
    const opacity = lerp(focusOpacity, stripOpacity, state.transition);

    state.renderedRects.push({
      index: plane.index,
      rect,
      opacity
    });

    drawPlane(plane, rect, opacity);
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

    loadedCount += 1;
    loadingValue.textContent =
      `${Math.round((loadedCount / planes.length) * 100)}%`;
  })
)
  .then(() => {
    updateProjectLabel(0, true);
    setTimeout(() => loading.classList.add("is-complete"), 180);
  })
  .catch(() => {
    loading.hidden = true;
    canvas.hidden = true;
    fallback.hidden = false;
  });
