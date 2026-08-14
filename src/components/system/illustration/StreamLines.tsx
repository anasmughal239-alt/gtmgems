import { cn } from "@/lib/utils";

/**
 * The fanning green "stream" lines behind Mintlify's feature-card illustrations.
 *
 * Extracted from mintlify.com/startups, where these are real SVG (the homepage
 * paints the same motif into a <canvas>, which is why it can't be lifted from
 * there). Doing it in SVG is strictly better: crisp at any size, themeable,
 * no requestAnimationFrame, and it renders on the server.
 *
 * Fidelity notes, all verified against the live markup:
 *  - viewBox 0 0 925 577 with preserveAspectRatio="none" — the lines are meant
 *    to stretch, not letterbox.
 *  - stroke-width 1 plus vector-effect="non-scaling-stroke", so the stretch
 *    never thickens the strokes.
 *  - 8 lines whose colours are an exact linear interpolation from #18E299 to
 *    #BAFF24. (Checked: the live stops are rgb(24,226,153), (47,230,136),
 *    (70,234,120), (93,238,103), (117,243,86), (140,247,69), (163,251,53),
 *    (186,255,36) — a clean 7-step lerp.)
 *
 * The curves themselves are generated rather than hardcoded: the originals are
 * ~6KB of path data each (48KB total). These are rebuilt from the four anchor
 * points the eye actually reads — origin, an early sag, a midpoint, and the
 * sweep-out — sampled off the live paths.
 */

const FROM = [24, 226, 153] as const;
const TO = [186, 255, 36] as const;

/** Anchor points [x, y] for the first and last line, read off the live paths. */
const FIRST_ANCHORS = [
  [0, 303.5],
  [190, 339.5],
  [462, 279.2],
  [925, 136.0],
] as const;

const LAST_ANCHORS = [
  [0, 298.1],
  [190, 304.5],
  [462, 246.0],
  [925, 109.3],
] as const;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Catmull-Rom through the anchors, emitted as cubic beziers. */
function smoothPath(points: [number, number][]) {
  if (points.length < 2) return "";
  let d = `M${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? 0 : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;

    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;

    d += `C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }

  return d;
}

export function StreamLines({
  count = 8,
  className,
  opacity = 1,
}: {
  /** Number of lines in the fan. The live cards use 8. */
  count?: number;
  className?: string;
  opacity?: number;
}) {
  const lines = Array.from({ length: count }, (_, i) => {
    const t = count === 1 ? 0 : i / (count - 1);

    const points = FIRST_ANCHORS.map((anchor, a) => [
      anchor[0],
      lerp(anchor[1], LAST_ANCHORS[a][1], t),
    ]) as [number, number][];

    const stroke = `rgb(${Math.round(lerp(FROM[0], TO[0], t))},${Math.round(
      lerp(FROM[1], TO[1], t),
    )},${Math.round(lerp(FROM[2], TO[2], t))})`;

    return { d: smoothPath(points), stroke };
  });

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 925 577"
      preserveAspectRatio="none"
      fill="none"
      style={{ opacity }}
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full select-none",
        className,
      )}
    >
      {lines.map((line) => (
        <path
          key={line.stroke}
          d={line.d}
          stroke={line.stroke}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
