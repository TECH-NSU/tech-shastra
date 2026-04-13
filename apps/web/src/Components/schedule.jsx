import { useState, useRef } from "react";
import "./schedule.css";

const MILESTONES = [
  {
    label: "Q1",
    year: "2024",
    title: "Foundation Build",
    desc: "Core architecture established and dev environment configured.",
  },
  {
    label: "Q2",
    year: "2024",
    title: "Core Integration",
    desc: "APIs integrated, primary data pipelines operational.",
  },
  {
    label: "Q3",
    year: "2024",
    title: "Alpha Deployment",
    desc: "Internal alpha shipped to early testers for feedback.",
  },
  {
    label: "Q4",
    year: "2024",
    title: "Beta Launch",
    desc: "Public beta released with core feature set live.",
  },
  {
    label: "JAN",
    year: "2025",
    title: "Expanding Horizons",
    desc: "Platform scaling begins, new regions onboarded.",
  },
  {
    label: "FEB",
    year: "2025",
    title: "System Optimisation",
    desc: "Performance tuning and latency improvements rolled out.",
  },
  {
    label: "MAR",
    year: "2025",
    title: "Scale Infrastructure",
    desc: "Infrastructure upgraded to support 10× load capacity.",
  },
  {
    label: "APR",
    year: "2025",
    title: "Global Rollout",
    desc: "Full global release across all supported markets.",
  },
  {
    label: "MAY",
    year: "2025",
    title: "Performance Upgrade",
    desc: "Next-gen engine integrated with real-time analytics.",
  },
  {
    label: "JUN",
    year: "2025",
    title: "Feature Expansion",
    desc: "Major feature drop including AI-powered recommendations.",
  },
  {
    label: "Q3",
    year: "2025",
    title: "Next Horizon",
    desc: "Strategic pivot toward autonomous systems begins.",
  },
];

// Elliptical orbit parameters
const CX = 650; // ellipse center x (in SVG viewBox 0 0 1000 560)
const CY = 880; // ellipse center y — pushed far below so only top arc is visible
const RX = 850; // horizontal radius
const RY = 740; // vertical radius

// Map milestone index to angle on the ellipse (top arc only, left to right)
// Angles go from ~200° (bottom-left) to ~340° (bottom-right) of the ellipse
// but since CY is way below, the visible arc appears as a gentle upward curve
function getMilestoneAngle(index, total) {
  const startAngle = 195;
  const endAngle = 345;
  const t = index / (total - 1);
  return startAngle + t * (endAngle - startAngle);
}

function polarToXY(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = CX + RX * Math.cos(rad);
  const y = CY + RY * Math.sin(rad);
  return { x, y };
}

function hexPoints(cx, cy, r) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 30);
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
}

export default function JourneyAhead() {
  const [focusIdx, setFocusIdx] = useState(4);
  const [animKey, setAnimKey] = useState(0);
  const svgRef = useRef(null);

  const total = MILESTONES.length;

  // Compute all node positions
  const nodes = MILESTONES.map((m, i) => {
    const angle = getMilestoneAngle(i, total);
    const { x, y } = polarToXY(angle);
    return {
      ...m,
      x,
      y,
      angle,
      past: i < focusIdx,
      current: i === focusIdx,
      future: i > focusIdx,
    };
  });

  // Build ellipse arc path (partial — only the visible top portion)
  const startAngle = getMilestoneAngle(0, total);
  const endAngle = getMilestoneAngle(total - 1, total);
  const startPt = polarToXY(startAngle);
  const endPt = polarToXY(endAngle);

  // SVG arc: large-arc-flag=0, sweep=1 for clockwise
  const arcPath = `M ${startPt.x.toFixed(1)} ${startPt.y.toFixed(1)} A ${RX} ${RY} 0 0 1 ${endPt.x.toFixed(1)} ${endPt.y.toFixed(1)}`;

  // Tangent at end for arrowhead direction
  const endRad = (endAngle * Math.PI) / 180;
  const tx = -RX * Math.sin(endRad);
  const ty = RY * Math.cos(endRad);
  const tLen = Math.sqrt(tx * tx + ty * ty);

  function navigate(dir) {
    setFocusIdx((prev) => {
      const next = Math.max(0, Math.min(total - 1, prev + dir));
      return next;
    });
    setAnimKey((k) => k + 1);
  }

  const current = MILESTONES[focusIdx];

  return (
    <section className="ja-wrap">
      {/* Backgrounds */}
      <div className="ja-bg" />
      <div className="ja-planet" />
      <div className="ja-overlay" />

      {/* Header */}
      <div className="ja-header">
        <h1>JOURNEY AHEAD</h1>
        <p>
          Embark on the journey of EV2 – an epic fusion of progress and
          ambition. Discover our achievements and set sights on future
          milestones.
        </p>
      </div>

      {/* Nav arrows */}
      <button
        className="ja-nav ja-nav--prev"
        onClick={() => navigate(-1)}
        disabled={focusIdx === 0}
        aria-label="Previous milestone"
      >
        &#8592;
      </button>
      <button
        className="ja-nav ja-nav--next"
        onClick={() => navigate(1)}
        disabled={focusIdx === total - 1}
        aria-label="Next milestone"
      >
        &#8594;
      </button>

      {/* SVG Orbital Timeline */}
      <svg
        ref={svgRef}
        className="ja-svg"
        viewBox="0 0 1000 560"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id="orb-arrow"
            viewBox="0 0 12 12"
            refX="10"
            refY="6"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M1 1L11 6L1 11"
              fill="none"
              stroke="rgba(210,225,255,0.75)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>

          {/* Glow filter for current node */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbital arc */}
        <path
          d={arcPath}
          fill="none"
          stroke="rgba(210,225,255,0.35)"
          strokeWidth="1.8"
          strokeLinecap="round"
          markerEnd="url(#orb-arrow)"
        />

        {/* Milestone nodes */}
        {nodes.map((n, i) => {
          const r = n.current ? 18 : 11;
          const lblOffset = 26;

          // Put label above the arc for right-side nodes, below for left-side
          const labelAbove = i >= 4;
          const lblY = labelAbove
            ? n.y - r - lblOffset + 4
            : n.y + r + lblOffset - 4;
          const yrY = labelAbove ? lblY - 13 : lblY + 13;

          return (
            <g
              key={n.label + n.year}
              className={`ja-node ${n.current ? "is-current" : ""} ${n.past ? "is-past" : ""} ${n.future ? "is-future" : ""}`}
              onClick={() => {
                setFocusIdx(i);
                setAnimKey((k) => k + 1);
              }}
            >
              {/* Pulse ring for current */}
              {n.current && (
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={r + 6}
                  fill="none"
                  stroke="rgba(230,90,50,0.35)"
                  strokeWidth="1"
                  className="ja-pulse"
                />
              )}

              {/* Hex shape */}
              <polygon
                points={hexPoints(n.x, n.y, r)}
                className="ja-hex"
                filter={n.current ? "url(#glow)" : undefined}
              />

              {/* Center dot */}
              <circle
                cx={n.x}
                cy={n.y}
                r={n.current ? 6 : 3.5}
                className="ja-dot"
              />

              {/* Label */}
              <text
                x={n.x}
                y={labelAbove ? yrY : lblY}
                textAnchor="middle"
                className="ja-lbl-year"
              >
                {n.year}
              </text>
              <text
                x={n.x}
                y={labelAbove ? lblY : yrY + 2}
                textAnchor="middle"
                className={`ja-lbl-main ${n.current ? "ja-lbl-main--current" : ""}`}
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Detail panel */}
      <div className="ja-panel" key={animKey}>
        <div className="ja-panel-hex">
          <svg viewBox="0 0 30 30" width="30" height="30">
            <polygon
              points="15,2 27,8.5 27,21.5 15,28 3,21.5 3,8.5"
              className="ja-panel-hexshape"
            />
            <circle cx="15" cy="15" r="4" className="ja-panel-dot" />
          </svg>
        </div>
        <div className="ja-panel-text">
          <div className="ja-panel-label">
            {current.label} {current.year}
          </div>
          <div className="ja-panel-sub">
            {focusIdx === 4
              ? "Current milestone"
              : focusIdx < 4
                ? "Completed"
                : "Upcoming"}
          </div>
          <div className="ja-panel-title">{current.title}</div>
        </div>
      </div>
    </section>
  );
}
