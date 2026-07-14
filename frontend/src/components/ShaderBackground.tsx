import { useEffect, useRef } from 'react';

/**
 * Fundo em WebGL: grid synthwave em perspectiva + sol de horizonte + estrelas,
 * tudo pixelado. Reage ao mouse (parallax + glow) e ao scroll (paleta desliza
 * do ciano para o rosa, o sol se põe e o grid acelera).
 */

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform vec2  u_res;
uniform float u_time;
uniform vec2  u_mouse;   // 0..1 (origem: canto inferior esquerdo)
uniform float u_scroll;  // 0..1 progresso da página

const vec3 CYAN = vec3(0.30, 0.89, 1.00);
const vec3 PINK = vec3(1.00, 0.18, 0.53);
const vec3 DUSK = vec3(0.55, 0.10, 0.45);

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  // Pixelização: quantiza em blocos para o look retrô
  float px = max(3.0, u_res.y / 240.0);
  vec2 frag = floor(gl_FragCoord.xy / px) * px + px * 0.5;
  vec2 uv = frag / u_res;
  vec2 p = (frag - 0.5 * u_res) / u_res.y;

  // Parallax do mouse
  vec2 m = u_mouse - 0.5;
  p -= m * 0.05;

  vec3 col = mix(vec3(0.016, 0.010, 0.050), vec3(0.045, 0.008, 0.040), u_scroll);

  float horizon = -0.06 - u_scroll * 0.10;

  // ---- sol synthwave (se põe com o scroll) ----
  vec2 sunPos = vec2(m.x * 0.12, horizon + 0.34 - u_scroll * 0.30);
  float sd = length(p - sunPos);
  float sun = smoothstep(0.235, 0.225, sd);
  float stripe = step(0.55, fract((p.y - sunPos.y) * 26.0 - u_time * 0.45));
  sun *= 1.0 - stripe * step(p.y, sunPos.y + 0.05) * 0.95;
  vec3 sunCol = mix(mix(PINK, vec3(1.0, 0.55, 0.30), 0.35), DUSK, u_scroll * 0.6);
  col += sun * sunCol;
  col += smoothstep(0.55, 0.0, sd) * mix(PINK, CYAN, u_scroll) * 0.10;

  if (p.y > horizon) {
    // ---- céu: estrelas piscando ----
    vec2 cell = floor(frag / (px * 2.0));
    float h = hash(cell);
    float tw = step(0.996, h) * (0.35 + 0.65 * sin(u_time * 2.2 + h * 63.0));
    col += max(tw, 0.0) * mix(CYAN, PINK, hash(cell + 1.7));
  } else {
    // ---- chão: grid em perspectiva ----
    float depth = horizon - p.y;
    float z = 1.0 / max(depth, 1e-4);
    vec2 gp = vec2(p.x * z * 0.9, z * 0.5 + u_time * (1.1 + u_scroll * 1.6));
    vec2 g = abs(fract(gp) - 0.5);
    float line = smoothstep(0.44, 0.5, max(g.x, g.y));
    float fade = smoothstep(0.0, 0.30, depth);
    vec3 gridCol = mix(CYAN, PINK, clamp(0.25 + uv.x * 0.35 + u_scroll * 0.55, 0.0, 1.0));
    col += line * gridCol * fade;
    col += (1.0 - fade) * 0.30 * mix(PINK, CYAN, u_scroll);
  }

  // ---- glow acompanhando o mouse ----
  vec2 mp = (u_mouse * u_res - 0.5 * u_res) / u_res.y;
  col += mix(CYAN, PINK, u_scroll) * 0.10 * smoothstep(0.5, 0.0, length(p - mp));

  // ---- CRT: scanlines + vinheta ----
  col *= 0.90 + 0.10 * step(0.5, fract(gl_FragCoord.y / (px * 1.0) * 0.5));
  vec2 v = uv - 0.5;
  col *= 1.0 - dot(v, v) * 0.9;

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    // Log só quando há mensagem real (erro de sintaxe); log vazio = contexto
    // instável durante o carregamento, que o retry abaixo resolve.
    const log = gl.getShaderInfoLog(shader);
    if (log) console.error('Shader:', log);
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let retryTimer = 0;
    let cleanup: (() => void) | null = null;

    const tryInit = (attempt: number) => {
      if (disposed) return;
      cleanup = init(canvas);
      if (!cleanup && attempt < 6) {
        // Alguns browsers demoram a estabilizar o contexto WebGL no load;
        // tenta de novo com backoff antes de desistir.
        retryTimer = window.setTimeout(() => tryInit(attempt + 1), 250 * attempt);
      }
    };
    tryInit(1);

    return () => {
      disposed = true;
      window.clearTimeout(retryTimer);
      cleanup?.();
    };
  }, []);

  const init = (canvas: HTMLCanvasElement): (() => void) | null => {
    const gl = canvas.getContext('webgl', { antialias: false, depth: false });
    if (!gl || gl.isContextLost()) return null; // sem WebGL: fica só o fundo escuro do CSS

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return null;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      const log = gl.getProgramInfoLog(prog);
      if (log) console.error('Program:', log);
      return null;
    }
    gl.useProgram(prog);

    // Triângulo que cobre a tela inteira
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uScroll = gl.getUniformLocation(prog, 'u_scroll');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let mouseX = 0.5;
    let mouseY = 0.5;
    let curX = 0.5;
    let curY = 0.5;
    let scroll = 0;
    let curScroll = 0;
    let raf = 0;

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = 1 - e.clientY / window.innerHeight;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll = max > 0 ? window.scrollY / max : 0;
    };

    resize();
    onScroll();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const start = performance.now();
    const frame = () => {
      // suaviza mouse e scroll para o movimento ficar orgânico
      curX += (mouseX - curX) * 0.06;
      curY += (mouseY - curY) * 0.06;
      curScroll += (scroll - curScroll) * 0.08;

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, reduced ? 0 : (performance.now() - start) / 1000);
      gl.uniform2f(uMouse, curX, curY);
      gl.uniform1f(uScroll, curScroll);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      // Não perder o contexto aqui: o StrictMode remonta o efeito e o canvas
      // reutiliza o mesmo contexto WebGL — perdê-lo quebraria a remontagem.
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('scroll', onScroll);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  };

  return <canvas ref={canvasRef} className="shader-bg" aria-hidden="true" />;
}
