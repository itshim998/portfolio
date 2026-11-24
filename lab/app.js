const IMAGE_URLS = [
  "https://i.ibb.co/jkB9vQLr/Screenshot-2026-07-14-182748.png",
  "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FjkB9vQLr%2FScreenshot-2026-07-14-182748.png"
];

const canvas = document.getElementById("experience");
const loading = document.getElementById("loading");
const loadingValue = document.getElementById("loading-value");
const fallback = document.getElementById("fallback");
const modeButton = document.getElementById("mode-button");
const modeLabel = modeButton.querySelector(".mode-button__label");
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
  color.rgb *= uDim;
  gl_FragColor = color;
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
  dim: gl.getUniformLocation(program, "uDim")
};

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

gl.texImage2D(
  gl.TEXTURE_2D,
  0,
  gl.RGBA,
  1,
  1,
  0,
  gl.RGBA,
  gl.UNSIGNED_BYTE,
  new Uint8Array([18, 18, 16, 255])
);

gl.clearColor(0.035, 0.035, 0.031, 1);

const state = {
  mode: "focus",
  transition: 1,
  from: 1,
  to: 1,
  startedAt: performance.now(),
  duration: 1120,
  imageWidth: 1912,
  imageHeight: 874,
  pointerDown: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  dragDistance: 0
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (a, b, t) => a + (b - a) * t;

function easeInOutQuart(t) {
  return t < 0.5
    ? 8 * t * t * t * t
    : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

function focusRect() {
  return {
    x: 0,
    y: 0,
    w: innerWidth,
    h: innerHeight
  };
}

function overviewRect() {
  if (innerWidth <= 780) {
    const w = innerWidth - 36;
    const h = Math.min(innerHeight * 0.39, w * 0.66);
    return {
      x: 18,
      y: 88,
      w,
      h
    };
  }

  const w = Math.min(innerWidth * 0.52, 930);
  const h = Math.min(innerHeight * 0.64, w * 0.63);

  return {
    x: innerWidth - w - Math.max(46, innerWidth * 0.045),
    y: (innerHeight - h) * 0.5,
    w,
    h
  };
}

function currentRect() {
  const a = focusRect();
  const b = overviewRect();
  const t = state.transition;

  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
    w: lerp(a.w, b.w, t),
    h: lerp(a.h, b.h, t)
  };
}

function setMode(nextMode) {
  if (nextMode === state.mode) return;

  state.mode = nextMode;
  state.from = state.transition;
  state.to = nextMode === "overview" ? 1 : 0;
  state.startedAt = performance.now();

  document.body.dataset.mode = nextMode;
  modeButton.setAttribute("aria-pressed", String(nextMode === "overview"));
  modeLabel.textContent = nextMode === "overview" ? "Focus" : "Overview";

  if (reducedMotion.matches) {
    state.transition = state.to;
  }
}

function toggleMode() {
  setMode(state.mode === "overview" ? "focus" : "overview");
}

modeButton.addEventListener("click", toggleMode);

addEventListener("keydown", event => {
  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    setMode("overview");
  }
  if (event.key === "ArrowUp" || event.key === "ArrowLeft" || event.key === "Escape") {
    setMode("focus");
  }
});

let wheelAccumulator = 0;
let wheelResetTimer = 0;

addEventListener("wheel", event => {
  wheelAccumulator += Math.abs(event.deltaY) >= Math.abs(event.deltaX)
    ? event.deltaY
    : event.deltaX;

  clearTimeout(wheelResetTimer);
  wheelResetTimer = setTimeout(() => {
    wheelAccumulator = 0;
  }, 140);

  if (wheelAccumulator > 38) {
    setMode("overview");
    wheelAccumulator = 0;
  } else if (wheelAccumulator < -38) {
    setMode("focus");
    wheelAccumulator = 0;
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
  canvas.classList.add("is-grabbing");

  try {
    canvas.setPointerCapture(event.pointerId);
  } catch (_) {}
});

canvas.addEventListener("pointermove", event => {
  if (!state.pointerDown || event.pointerId !== state.pointerId) return;

  const dx = event.clientX - state.startX;
  const dy = event.clientY - state.startY;
  state.dragDistance = Math.abs(dx) > Math.abs(dy) ? dx : dy;
});

function endPointer(event) {
  if (!state.pointerDown || event.pointerId !== state.pointerId) return;

  state.pointerDown = false;
  canvas.classList.remove("is-grabbing");

  try {
    canvas.releasePointerCapture(event.pointerId);
  } catch (_) {}

  if (Math.abs(state.dragDistance) > 32) {
    if (state.dragDistance < 0) {
      setMode("overview");
    } else {
      setMode("focus");
    }
  }
}

canvas.addEventListener("pointerup", endPointer);
canvas.addEventListener("pointercancel", endPointer);

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

function render(now) {
  if (!reducedMotion.matches && state.transition !== state.to) {
    const elapsed = clamp((now - state.startedAt) / state.duration, 0, 1);
    const eased = easeInOutQuart(elapsed);
    state.transition = lerp(state.from, state.to, eased);

    if (elapsed === 1) {
      state.transition = state.to;
    }
  }

  const rect = currentRect();
  const dpr = canvas.width / innerWidth;

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(program);

  gl.uniform2f(uniforms.viewport, canvas.width, canvas.height);
  gl.uniform4f(
    uniforms.rect,
    rect.x * dpr,
    rect.y * dpr,
    rect.w * dpr,
    rect.h * dpr
  );
  gl.uniform2f(uniforms.planeSize, rect.w * dpr, rect.h * dpr);
  gl.uniform2f(uniforms.imageSize, state.imageWidth, state.imageHeight);

  const parallax = (state.transition - 0.5) * 0.025;
  gl.uniform2f(uniforms.uvOffset, parallax, 0);
  gl.uniform1f(uniforms.dim, lerp(0.78, 0.96, state.transition));

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  requestAnimationFrame(render);
}

requestAnimationFrame(render);

let displayedProgress = 0;
const progressTimer = setInterval(() => {
  displayedProgress = Math.min(
    displayedProgress + Math.max(1, Math.ceil((92 - displayedProgress) * 0.13)),
    92
  );
  loadingValue.textContent = `${displayedProgress}%`;
}, 55);

function showFallback() {
  clearInterval(progressTimer);
  loading.hidden = true;
  canvas.hidden = true;
  fallback.hidden = false;
}

function commitTexture(image) {
  state.imageWidth = image.naturalWidth || state.imageWidth;
  state.imageHeight = image.naturalHeight || state.imageHeight;

  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    image
  );

  clearInterval(progressTimer);
  loadingValue.textContent = "100%";

  setTimeout(() => {
    loading.classList.add("is-complete");
    state.transition = 0;
    state.from = 0;
    state.to = 0;
    state.mode = "focus";
    state.startedAt = performance.now();
  }, 180);
}

function loadTexture(index = 0) {
  if (index >= IMAGE_URLS.length) {
    showFallback();
    return;
  }

  const image = new Image();
  image.crossOrigin = "anonymous";

  image.onload = () => {
    try {
      commitTexture(image);
    } catch (_) {
      loadTexture(index + 1);
    }
  };

  image.onerror = () => {
    loadTexture(index + 1);
  };

  image.src = IMAGE_URLS[index];
}

loadTexture();
