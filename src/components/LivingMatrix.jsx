import React from "https://esm.sh/react@18";

export default function LivingMatrix({ d = 1, mu = 1, s = 1, tau = 1, k = 1 }) {
  const style = { '--d': d, '--mu': mu, '--s': s, '--tau': tau, '--k': k };
  return React.createElement(
    "svg",
    { viewBox: "0 0 400 400", className: "matrix-svg", style },
    React.createElement("rect", { width: 400, height: 400, fill: "#f8fafc" }),
    React.createElement(
      "g",
      { id: "outer-field" },
      React.createElement("circle", { cx: 200, cy: 200, r: 180, fill: "none", stroke: "#326FB7", strokeWidth: 2, opacity: 0.8 })
    ),
    React.createElement(
      "g",
      { id: "petals", opacity: 0.6 },
      React.createElement("circle", { cx: 200, cy: 200, r: 120, fill: "none", stroke: "#aeb4b9", strokeWidth: 1.5 }),
      React.createElement("circle", { cx: 200, cy: 200, r: 100, fill: "none", stroke: "#aeb4b9", strokeWidth: 1.5 })
    ),
    React.createElement(
      "g",
      { id: "orbit-fast" },
      React.createElement("ellipse", { cx: 200, cy: 200, rx: 160, ry: 100, fill: "none", stroke: "#111", strokeWidth: 2.5 }),
      React.createElement("circle", { id: "traveller-fast", cx: 360, cy: 200, r: 6, fill: "#111" })
    ),
    React.createElement(
      "g",
      { id: "orbit-slow" },
      React.createElement("ellipse", { cx: 200, cy: 200, rx: 80, ry: 140, fill: "none", stroke: "#666", strokeWidth: 2 }),
      React.createElement("circle", { id: "traveller-slow", cx: 280, cy: 200, r: 5, fill: "#666" })
    ),
    React.createElement(
      "g",
      { id: "core" },
      React.createElement("circle", { cx: 200, cy: 200, r: 30, fill: "#222", opacity: 0.85 }),
      React.createElement("circle", { cx: 200, cy: 200, r: 45, fill: "none", stroke: "#326FB7", strokeWidth: 2, opacity: 0.9 })
    )
  );
}
