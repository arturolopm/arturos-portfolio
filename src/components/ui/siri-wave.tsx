'use client';

/**
 * SiriWave - Siri-style GLSL shaders on a raw WebGL canvas.
 *
 *   variant="wave"        an iOS-style voice waveform with chromatic aberration
 *   variant="fluid-dots"  a metaball orb whose dots merge, scatter and gather
 *
 * Dependency-free: no three.js, no react-three-fiber, no Spline. Raw WebGL1 so
 * it runs anywhere, with a static CSS fallback when WebGL is unavailable.
 *
 * The public API (variant / size / className) mirrors the 21st.dev "siri-wave"
 * component so that registry version can be dropped in later without touching
 * call sites. The shaders here are our own, written to take an explicit accent
 * colour so the canvas stays inside the site's palette instead of importing a
 * stock blue-violet.
 */

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export type SiriWaveVariant = 'wave' | 'fluid-dots';

interface SiriWaveProps {
  variant?: SiriWaveVariant;
  /** Rendered size in CSS pixels. Ignored when `fill` is set. */
  size?: number;
  /** Stretch to the parent box instead of using `size`. */
  fill?: boolean;
  /** Accent colour as a CSS hex string. Defaults to the site's signal amber. */
  color?: string;
  /** Overall motion rate. 1 = default. */
  speed?: number;
  className?: string;
}

const VERT = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

/* Voice waveform: stacked travelling sines with an edge envelope, sampled at
   three slightly offset phases to split the accent into RGB fringes. */
const FRAG_WAVE = `
// highp is optional in WebGL1 fragment shaders; fall back rather than fail to compile.
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2  uRes;
uniform float uTime;
uniform vec3  uColor;

// Gentle amplitude taper toward the frame edges. Kept shallow: a steep taper
// collapses the whole wave into a blob in the middle of the canvas.
float envelope(float x) {
  return pow(max(0.0, 1.0 - abs(x) * 0.85), 0.7);
}

// Signed distance from p.y to one travelling wave line.
float waveLine(vec2 p, float freq, float speed, float phase, float amp) {
  float y = sin(p.x * freq + uTime * speed + phase)
          * 0.55
          + sin(p.x * freq * 1.7 - uTime * speed * 0.8 + phase) * 0.45;
  return p.y - y * amp * envelope(p.x);
}

// Soft glow band around a line.
float band(float d, float thickness) {
  return thickness / (abs(d) + thickness);
}

// Total field brightness at p, for one chromatic offset.
float field(vec2 p, float shift) {
  vec2 q = vec2(p.x + shift, p.y);
  float a = band(waveLine(q, 3.1, 1.15, 0.0, 0.46), 0.055);
  float b = band(waveLine(q, 4.7, -0.85, 1.7, 0.34), 0.040);
  float c = band(waveLine(q, 2.2, 0.65, 3.4, 0.56), 0.032);
  float d = band(waveLine(q, 6.3, 1.55, 5.1, 0.24), 0.024);
  return a * 0.70 + b * 0.55 + c * 0.45 + d * 0.34;
}

void main() {
  // -1..1 on both axes so the wave spans the full width.
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / (0.5 * uRes);

  // Chromatic aberration: each channel reads the field at a different phase.
  float r = field(p, -0.020);
  float g = field(p,  0.0);
  float b = field(p,  0.020);

  vec3 col = uColor * vec3(r, g, b) * 1.15;

  // Warm core where the bands overlap, so peaks read as light not just colour.
  float core = pow(max(max(r, g), b), 2.6) * 0.28;
  col += vec3(core);

  // Soft vignette only at the very edges - the amplitude taper above already
  // shapes the wave, so this just prevents a hard cut at the frame.
  col *= smoothstep(1.02, 0.72, abs(p.x));

  float alpha = clamp(max(max(col.r, col.g), col.b), 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
}
`;

/* Metaball orb: dots orbit a centre and their radius from it breathes through
   a gather -> scatter -> merge cycle. Summed inverse-square fields threshold
   into a single fluid blob. */
const FRAG_DOTS = `
// highp is optional in WebGL1 fragment shaders; fall back rather than fail to compile.
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2  uRes;
uniform float uTime;
uniform vec3  uColor;

const int COUNT = 11;

float hash(float n) {
  return fract(sin(n * 43758.5453123) * 12345.6789);
}

void main() {
  // Aspect-correct coords, roughly -1..1 on the short axis.
  float m = min(uRes.x, uRes.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / m * 2.0;

  // 0 = fully gathered at the centre, 1 = fully scattered.
  float cycle = 0.5 + 0.5 * sin(uTime * 0.32);
  float spread = mix(0.06, 0.62, smoothstep(0.0, 1.0, cycle));

  float acc = 0.0;
  for (int i = 0; i < COUNT; i++) {
    float fi = float(i);
    float seed = hash(fi + 1.0);

    // Each dot keeps its own orbit radius, rate and direction.
    float ang = fi * 2.399963 + uTime * (0.35 + seed * 0.55) * (seed > 0.5 ? 1.0 : -1.0);
    float rad = spread * (0.55 + 0.45 * seed);
    vec2 c = vec2(cos(ang), sin(ang)) * rad;

    // Gentle secondary wobble so the blob never looks mechanical.
    c += vec2(sin(uTime * 0.9 + fi), cos(uTime * 0.7 + fi * 1.3)) * 0.035;

    float r = 0.030 + 0.022 * seed;
    float d = length(p - c);
    acc += r / (d * d + 0.0015);
  }

  // Threshold the field into a body with a soft rim.
  float body = smoothstep(0.85, 1.35, acc);
  float rim = smoothstep(0.45, 0.95, acc) - body;
  float halo = smoothstep(0.10, 0.60, acc) * 0.22;

  vec3 col = uColor * (body * 0.92 + rim * 0.75 + halo);
  col += vec3(pow(body, 3.0) * 0.30);

  float alpha = clamp(body * 0.95 + rim * 0.70 + halo * 0.7, 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.trim().replace('#', '');
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  const int = parseInt(h, 16);
  if (Number.isNaN(int) || h.length !== 6) return [1, 1, 1];
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

function compile(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[SiriWave] shader compile failed:', gl.getShaderInfoLog(shader));
    }
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function SiriWave({
  variant = 'wave',
  size = 360,
  fill = false,
  color = '#e9a13b',
  speed = 1,
  className,
}: SiriWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [failed, setFailed] = useState(false);
  // Bumped when the browser reports the context restored, to re-run setup.
  const [generation, setGeneration] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false,
      antialias: true,
      depth: false,
      stencil: false,
    }) as WebGLRenderingContext | null;

    if (!gl || gl.isContextLost()) {
      // A canvas hands back the *same* context object on every getContext call,
      // so once it is lost it stays lost. Show the fallback instead of trying to
      // compile against a dead context (which fails with a null info log).
      setFailed(true);
      return;
    }

    let raf = 0;

    // Without preventDefault the browser will not attempt to restore.
    const onLost = (e: Event) => {
      e.preventDefault();
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };
    const onRestored = () => setGeneration((g) => g + 1);
    canvas.addEventListener('webglcontextlost', onLost);
    canvas.addEventListener('webglcontextrestored', onRestored);

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, variant === 'wave' ? FRAG_WAVE : FRAG_DOTS);
    const program = gl.createProgram();

    if (!vs || !fs || !program) {
      setFailed(true);
      return;
    }

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[SiriWave] program link failed:', gl.getProgramInfoLog(program));
      }
      setFailed(true);
      return;
    }
    gl.useProgram(program);

    // Fullscreen quad as a triangle strip.
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(program, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, 'uRes');
    const uTime = gl.getUniformLocation(program, 'uTime');
    const uColor = gl.getUniformLocation(program, 'uColor');

    const [r, g, b] = hexToRgb(color);
    gl.uniform3f(uColor, r, g, b);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const reduceMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const start = performance.now();

    const draw = (now: number) => {
      const t = ((now - start) / 1000) * speed;
      gl.uniform1f(uTime, t);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(draw);
    };

    if (reduceMotion) {
      // Hold a single representative frame rather than animating.
      gl.uniform1f(uTime, 2.2);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      observer.disconnect();
      canvas.removeEventListener('webglcontextlost', onLost);
      canvas.removeEventListener('webglcontextrestored', onRestored);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      // Deliberately NOT calling WEBGL_lose_context.loseContext() here.
      // A canvas returns the same context object from every getContext call, and
      // a force-lost context never recovers. Under React StrictMode the dev-only
      // mount -> unmount -> mount cycle would then re-enter setup holding a dead
      // context: every compileShader fails and getShaderInfoLog returns null.
      // Deleting the GL objects above is sufficient cleanup.
    };
  }, [variant, color, speed, generation]);

  const style = fill ? undefined : { width: size, height: size };

  if (failed) {
    // No WebGL: a quiet static mark rather than an empty hole.
    return (
      <div
        aria-hidden='true'
        style={style}
        className={cn(
          'flex items-center justify-center',
          fill && 'h-full w-full',
          className
        )}
      >
        <div
          className='rounded-full'
          style={{
            width: '38%',
            height: '38%',
            border: `1px solid ${color}`,
            boxShadow: `0 0 60px -10px ${color}`,
          }}
        />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      style={style}
      className={cn('block', fill && 'h-full w-full', className)}
    />
  );
}

export default SiriWave;
