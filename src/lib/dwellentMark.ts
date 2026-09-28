// Geometry for the dotted "D" mark (logo concept #1).
// A stem of dot columns on the left, and three concentric rings of dots
// forming the bowl. Dots grow and darken from left to right.

export type Dot = { x: number; y: number; r: number; color: string; order: number };

const S = 10; // dot spacing
const ROWS = 4; // rows above/below the center line
const STEM_COLS = 4;
const RINGS = [4, 3, 2]; // bowl ring radii, in spacing units
const CX = 5 * S; // center of the bowl
const CY = ROWS * S;
const WIDTH = CX + RINGS[0] * S;

const LIGHT = [59, 130, 246]; // #3b82f6
const DARK = [12, 30, 128]; // #0c1e80

function mix(t: number) {
  const c = LIGHT.map((l, i) => Math.round(l + (DARK[i] - l) * t));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}

function dot(x: number, y: number): Omit<Dot, "order"> {
  const t = Math.min(1, Math.max(0, x / WIDTH));
  return { x, y, r: S * (0.16 + 0.3 * Math.pow(t, 1.3)), color: mix(Math.pow(t, 0.9)) };
}

function build(): Dot[] {
  const dots: Omit<Dot, "order">[] = [];

  for (let c = 0; c < STEM_COLS; c++) {
    for (let k = -ROWS; k <= ROWS; k++) dots.push(dot(c * S, CY + k * S));
  }

  for (const ring of RINGS) {
    const rho = ring * S;
    for (let x = STEM_COLS * S; x < CX - S * 0.4; x += S) {
      dots.push(dot(x, CY - rho), dot(x, CY + rho));
    }
    const n = Math.round((Math.PI * rho) / S);
    for (let i = 0; i <= n; i++) {
      const a = -Math.PI / 2 + (Math.PI * i) / n;
      dots.push(dot(CX + rho * Math.cos(a), CY + rho * Math.sin(a)));
    }
  }

  return dots
    .sort((a, b) => a.x - b.x || a.y - b.y)
    .map((d, order) => ({ ...d, order }));
}

export const MARK_DOTS = build();
const PAD = S * 0.6;
export const MARK_VIEWBOX = `${-PAD} ${-PAD} ${WIDTH + PAD * 2} ${CY * 2 + PAD * 2}`;
