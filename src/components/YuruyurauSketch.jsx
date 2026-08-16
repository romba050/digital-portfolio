import { useEffect, useRef } from "react";

/**
 * Port of @yuruyurau's tweet-sized p5.js sketch to raw canvas 2D.
 * Original coordinate space is 400x400; `size` scales it uniformly.
 * Shows an eel-like animation, twirling from top to bottom of the canvas.
 */
export default function YuruyurauSketch({ size = 400, points = 10000 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });

    const dpr = window.devicePixelRatio || 1;
    const scale = (size / 400) * dpr;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const { cos, sin, hypot, PI } = Math;
    let t = 0;
    let frameId;

    const draw = () => {
      ctx.fillStyle = "rgb(9, 9, 9)";
      ctx.fillRect(0, 0, 400, 400);
      ctx.fillStyle = "rgba(255, 255, 255, 0.376)";

      t += PI / 60;

      for (let i = points; i--; ) {
        const y = i / 295;
        const k = 4 * cos(i / 29);
        const e = y / 5 - 13;
        const d = hypot(k, e) - 4;
        const c = d - t / 3;

        const px = (d * d / 0.7 - k * k * 2 + y) * cos(c) + 200;
        const py =
          3 * sin(k * 2) +
          cos(y) / k +
          (y / 9) * k * (3 + sin(e * 9 - d * 3 + t)) +
          79 * sin(c / 3) +
          200 +
          (d ** 2 / 3) * cos(t - d * d / 9);

        ctx.fillRect(px, py, 1, 1);
      }

      if (!reduceMotion) frameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frameId);
  }, [size, points]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", maxWidth: size, height: "auto", aspectRatio: "1 / 1", display: "block" }}
      role="img"
      aria-label="Animated particle sketch"
    />
  );
}
