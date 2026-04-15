import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./timeline.css";

gsap.registerPlugin(ScrollTrigger);

const IMG = {
  mercury: "/planets/mercury.png",
  venus: "/planets/venus.png",
  earth: "/planets/earth.jpg",
  mars: "/planets/mars.jpg",
  jupiter: "/planets/jupiter.jpg",
  saturn: "/planets/saturn.png",
  uranus: "/planets/uranus.png",
  neptune: "/planets/neptune.png",
};

const MILESTONES = [
  {
    id: 1,
    key: "mercury",
    name: "REGISTRATION",
    subtitle: "Opens Now!",
    phase: "Phase 1",
    date: "May 1 – May 20",
    status: "completed",
    glow: "#c8b8a0",
    description:
      "Register your team and secure your spot in TechShastra 2026. Early birds get exclusive merch!",
    dateLabel: "MAY 1",
  },
  {
    id: 2,
    key: "venus",
    name: "SUBMISSION",
    subtitle: "Project Deadline",
    phase: "Phase 2",
    date: "May 20 – Jun 5",
    status: "completed",
    glow: "#f09040",
    description:
      "Submit your project abstracts, prototypes, and presentations before the deadline.",
    dateLabel: "JUN 5",
  },
  {
    id: 3,
    key: "earth",
    name: "WORKSHOPS",
    subtitle: "Skill Building",
    phase: "Phase 3",
    date: "Jun 10 – Jun 15",
    status: "completed",
    glow: "#60b0f0",
    description:
      "Attend expert-led workshops on AI, Web3, Robotics, and Cybersecurity.",
    dateLabel: "JUN 10",
  },
  {
    id: 4,
    key: "mars",
    name: "HACKATHON",
    subtitle: "48hr Build Sprint",
    phase: "Phase 4",
    date: "Jun 18 – Jun 20",
    status: "active",
    glow: "#ff6040",
    description:
      "The 48-hour hackathon begins! Build, innovate, and push boundaries.",
    dateLabel: "JUN 18",
  },
  {
    id: 5,
    key: "jupiter",
    name: "SEMIFINALS",
    subtitle: "Top 50 Teams",
    phase: "Phase 5",
    date: "Jun 22",
    status: "active",
    glow: "#e8c880",
    description:
      "Top 50 teams present their solutions to the panel of industry judges.",
    dateLabel: "JUN 22",
  },
  {
    id: 6,
    key: "saturn",
    name: "FINALS",
    subtitle: "Grand Showdown",
    phase: "Phase 6",
    date: "Jun 25",
    status: "active",
    glow: "#e0cc80",
    hasSaturnRing: true,
    description:
      "The final 10 teams battle it out on stage for the championship title.",
    dateLabel: "JUN 25",
  },
  {
    id: 7,
    key: "uranus",
    name: "EXPO DAY",
    subtitle: "Innovation Fair",
    phase: "Phase 7",
    date: "Jun 26",
    status: "active",
    glow: "#80e8f8",
    description:
      "Showcase your projects to industry leaders, sponsors, and the public.",
    dateLabel: "JUN 26",
  },
  {
    id: 8,
    key: "neptune",
    name: "CEREMONY",
    subtitle: "Awards Night",
    phase: "Phase 8",
    date: "Jun 27",
    status: "active",
    glow: "#5070ff",
    description:
      "The grand closing ceremony with awards, prizes, and celebrations!",
    dateLabel: "JUN 27",
  },
];

/* Per-planet zoom so the photo fills the sphere with zero gaps */
const PLANET_SCALE = {
  mercury: 1.05,
  venus: 1.05,
  earth: 1.45,
  mars: 1.55,
  jupiter: 1.45,
  saturn: 1.05,
  uranus: 1.75,
  neptune: 1.65,
};

const STARS = Array.from({ length: 220 }, (_, i) => {
  const s = Math.random();
  return {
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: s * 2 + 0.3,
    op: s * 0.65 + 0.15,
    delay: Math.random() * 5,
    dur: 2 + Math.random() * 3,
  };
});

function PlanetBall({ planet, size, isActive, isLocked }) {
  const scale = PLANET_SCALE[planet.key] || 1;
  const imgSize = scale * 100;
  const imgOffset = -(imgSize - 100) / 2;
  return (
    <div
      className="timeline-planet-ball"
      style={{
        width: size,
        height: size,
        boxShadow: isActive
          ? `0 0 60px ${planet.glow}99,0 0 120px ${planet.glow}30,0 30px 80px rgba(0,0,0,.9)`
          : isLocked
            ? "0 12px 40px rgba(0,0,0,.96),inset 0 0 28px rgba(0,0,0,.6)"
            : `0 0 22px ${planet.glow}55,0 16px 45px rgba(0,0,0,.8)`,
      }}
    >
      <img
        src={IMG[planet.key]}
        alt={planet.name}
        className="timeline-planet-img"
        style={{
          width: `${imgSize}%`,
          height: `${imgSize}%`,
          top: `${imgOffset}%`,
          left: `${imgOffset}%`,
          filter: isLocked
            ? "brightness(.2) saturate(.12)"
            : isActive
              ? "brightness(1.18) saturate(1.3) contrast(1.06)"
              : "brightness(.78) saturate(.85)",
        }}
      />
      {/* Dark-side shading — simulates directional light from upper-left */}
      <div
        className="timeline-planet-shade"
        style={{
          background: isLocked
            ? "radial-gradient(circle at 36% 36%,rgba(0,0,0,0) 0%,rgba(0,0,0,.12) 36%,rgba(0,0,0,.97) 70%)"
            : "radial-gradient(circle at 32% 32%,rgba(0,0,0,0) 0%,rgba(0,0,0,.06) 30%,rgba(0,0,0,.55) 62%,rgba(0,0,0,.88) 80%)",
        }}
      />
      {/* Atmosphere / color-tinted rim glow */}
      {!isLocked && (
        <div
          className="timeline-planet-atmosphere"
          style={{
            boxShadow: `inset 0 0 ${isActive ? 20 : 10}px ${planet.glow}${isActive ? "44" : "22"},
                            inset -${Math.round(size * 0.08)}px -${Math.round(size * 0.08)}px ${Math.round(size * 0.22)}px ${planet.glow}${isActive ? "38" : "18"}`,
          }}
        />
      )}
      {/* Specular highlight — glossy spot upper-left */}
      {!isLocked && <div className="timeline-planet-specular" />}
      {/* Secondary broad highlight for extra 3D depth */}
      {!isLocked && <div className="timeline-planet-specular2" />}
      {/* Rim/edge light */}
      {!isLocked && (
        <div
          className="timeline-planet-rim"
          style={{
            boxShadow: `inset 0 0 ${isActive ? 26 : 10}px ${planet.glow}${isActive ? "58" : "20"}`,
            border: `1px solid ${planet.glow}${isActive ? "42" : "16"}`,
          }}
        />
      )}
      {isLocked && (
        <div className="timeline-planet-lock-icon">
          <svg
            width={size * 0.32}
            height={size * 0.38}
            viewBox="0 0 24 28"
            fill="none"
          >
            <rect
              x="3"
              y="12"
              width="18"
              height="14"
              rx="2"
              fill="rgba(255,255,255,.09)"
              stroke="rgba(255,255,255,.16)"
              strokeWidth="1.2"
            />
            <path
              d="M8 12V8a4 4 0 0 1 8 0v4"
              stroke="rgba(255,255,255,.16)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="18" r="1.5" fill="rgba(255,255,255,.2)" />
          </svg>
        </div>
      )}
    </div>
  );
}

function SaturnRings({ size, isActive, glow }) {
  return (
    <div
      className="timeline-saturn-rings"
      style={{
        width: size * 2.4,
        height: size * 2.4,
        top: 18 + size / 2,
      }}
    >
      <div
        className="timeline-saturn-ring-outer"
        style={{
          width: size * 2,
          height: size * 2,
          border: `${isActive ? 8 : 4}px solid ${glow}88`,
          boxShadow: `0 0 ${isActive ? 32 : 12}px ${glow}55,inset 0 0 ${isActive ? 20 : 8}px ${glow}30`,
          margin: "auto",
          marginTop: (size * 2.4 - size * 2) / 2,
        }}
      >
        <div
          className="timeline-saturn-ring-inner"
          style={{
            border: `${isActive ? 4 : 2}px solid ${glow}44`,
            boxShadow: `0 0 ${isActive ? 16 : 6}px ${glow}28`,
          }}
        />
      </div>
    </div>
  );
}

function Planet({ planet, isActive, onClick, winW }) {
  const locked = planet.status === "locked";

  let scale = 1;
  if (winW <= 480) scale = 0.55;
  else if (winW <= 768) scale = 0.7;
  else if (winW <= 1024) scale = 0.85;

  const sz = isActive ? Math.round(160 * scale) : Math.round(68 * scale);
  return (
    <div
      onClick={() => !locked && onClick(planet.id)}
      className={`timeline-planet-wrap ${isActive ? "timeline-planet-wrap--active" : "timeline-planet-wrap--inactive"} ${locked ? "timeline-planet-wrap--locked" : "timeline-planet-wrap--unlocked"}`}
    >
      {isActive && (
        <div
          className="timeline-aura"
          style={{
            background: `radial-gradient(circle,${planet.glow}20 0%,${planet.glow}09 42%,transparent 72%)`,
          }}
        />
      )}

      {planet.hasSaturnRing && (
        <SaturnRings size={sz} isActive={isActive} glow={planet.glow} />
      )}

      <PlanetBall
        planet={planet}
        size={sz}
        isActive={isActive}
        isLocked={locked}
      />

      <div
        className="timeline-planet-label"
        style={{ marginTop: isActive ? 26 : 18 }}
      >
        <div
          className="timeline-planet-marker"
          style={{
            borderColor: isActive
              ? `${planet.glow}88`
              : "rgba(255,255,255,0.16)",
            boxShadow: isActive ? `0 0 16px ${planet.glow}88` : "none",
            background: locked
              ? "rgba(255,255,255,0.1)"
              : isActive
                ? planet.glow
                : "rgba(255,255,255,0.62)",
          }}
        />
        {isActive && (
          <div
            className="timeline-planet-tag"
            style={{
              color: planet.glow,
              fontSize: Math.round(11 * scale),
              fontWeight: "bold",
            }}
          >
            {planet.phase}
          </div>
        )}
        <div
          className="timeline-planet-name"
          style={{
            fontSize: isActive
              ? Math.round(16 * scale)
              : Math.round(11 * scale),
            fontWeight: isActive ? 700 : 500,
            color: locked ? "#30353d" : isActive ? "#ffffff" : "#8d99a6",
            letterSpacing: isActive ? 3.2 : 1.8,
            textShadow: isActive ? `0 0 22px ${planet.glow}` : "none",
          }}
        >
          {planet.name}
        </div>
        <div
          className="timeline-planet-subtitle"
          style={{
            color: isActive ? "#ffffff" : "#687887",
            fontSize: isActive
              ? Math.round(14 * scale)
              : Math.round(11 * scale),
            textShadow: isActive ? `0 0 12px rgba(255,255,255,0.4)` : "none",
          }}
        >
          {planet.subtitle}
        </div>
        <div
          className="timeline-planet-mission"
          style={{
            fontSize: isActive ? Math.round(11 * scale) : Math.round(9 * scale),
            color: locked ? "#2b3037" : isActive ? planet.glow : "#4c5660",
            marginTop: isActive ? 6 : 4,
          }}
        >
          {locked ? "COMING SOON" : planet.dateLabel}
        </div>
      </div>

      {isActive && (
        <div
          className="timeline-blink-dot"
          style={{
            background: planet.glow,
            boxShadow: `0 0 10px ${planet.glow}`,
          }}
        />
      )}
    </div>
  );
}

function Line({ fromActive, glow }) {
  return (
    <div className="timeline-line">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="timeline-line-seg"
          style={{
            background: fromActive
              ? `linear-gradient(90deg,${glow}70,${glow}12)`
              : "#12182a",
          }}
        />
      ))}
    </div>
  );
}

export default function Timeline() {
  const [activeId, setActiveId] = useState(4);
  const [vis, setVis] = useState(true);
  const [winW, setWinW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const scrollRef = useRef(null);
  const active = MILESTONES.find((p) => p.id === activeId);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const planets = gsap.utils.toArray(".timeline-planet-img");
      planets.forEach((p) => {
        gsap.to(p, {
          rotation: 360,
          duration: 25,
          repeat: -1,
          ease: "none",
        });
      });

      const rings = gsap.utils.toArray(".timeline-saturn-ring-outer");
      rings.forEach((r) => {
        gsap.set(r, { rotationX: 74 });
        gsap.to(r, {
          rotationZ: 360,
          duration: 35,
          repeat: -1,
          ease: "none",
        });
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleResize = () => setWinW(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pick = (id) => {
    if (id === activeId) return;
    setActiveId(id);
  };

  const scrollToActive = (id) => {
    const c = scrollRef.current;
    if (!c) return;
    const el = c.querySelector(`[data-pid="${id}"]`);
    if (el) {
      const cr = c.getBoundingClientRect(),
        er = el.getBoundingClientRect();
      c.scrollBy({
        left: er.left + er.width / 2 - cr.left - cr.width / 2,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToActive(activeId);
  }, [activeId]);

  const goLeft = () => {
    const idx = MILESTONES.findIndex((p) => p.id === activeId);
    if (idx > 0) {
      const prev = MILESTONES[idx - 1];
      if (prev.status !== "locked") pick(prev.id);
    }
  };
  const goRight = () => {
    const idx = MILESTONES.findIndex((p) => p.id === activeId);
    if (idx < MILESTONES.length - 1) {
      const next = MILESTONES[idx + 1];
      if (next.status !== "locked") pick(next.id);
    }
  };

  return (
    <div className="timeline-root">
      {/* Stars */}
      <div className="timeline-stars">
        {STARS.map((s) => (
          <div
            key={s.id}
            className="timeline-star"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              "--op": s.op,
              opacity: s.op,
              animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Nebula */}
      <div className="timeline-nebula" />

      {/* Scan line */}
      <div className="timeline-scan-wrap">
        <div className="timeline-scan-line" />
      </div>

      {/* Main */}
      <div className="timeline-main">
        {/* Active milestone info */}
        <div className="timeline-info timeline-info--visible">
          <div
            className="timeline-info__distance"
            style={{
              color: active.glow,
              textShadow: `0 0 12px ${active.glow}80`,
            }}
          >
            {active.date}
          </div>
          <div
            className="timeline-info__name"
            style={{
              textShadow: `0 0 38px ${active.glow}72,0 0 76px ${active.glow}24`,
            }}
          >
            {active.name}
          </div>
          <div className="timeline-info__desc">{active.description}</div>
        </div>

        {/* Scroll area with arrows */}
        <div className="timeline-scroll-area">
          <button
            className="timeline-arrow timeline-arrow--left"
            onClick={goLeft}
          >
            &#9664;
          </button>

          <div ref={scrollRef} className="timeline-scroll">
            <div className="timeline-track">
              {MILESTONES.map((planet, i) => (
                <div key={planet.id} className="timeline-track-item">
                  <div data-pid={planet.id}>
                    <Planet
                      planet={planet}
                      isActive={planet.id === activeId}
                      onClick={pick}
                      winW={winW}
                    />
                  </div>
                  {i < MILESTONES.length - 1 && (
                    <Line
                      fromActive={planet.id === activeId}
                      glow={planet.glow}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            className="timeline-arrow timeline-arrow--right"
            onClick={goRight}
          >
            &#9654;
          </button>
        </div>

        {/* Bottom bar */}
        <div className="timeline-bottom-bar">
          {active.status !== "locked" ? (
            <>
              {[
                ["PHASE", active.phase],
                ["DATE", active.date],
                [
                  "STATUS",
                  active.status === "completed" ? "COMPLETED" : "UPCOMING",
                ],
                ["CATEGORY", active.subtitle],
              ].map(([label, val]) => (
                <div key={label} className="timeline-stat-card">
                  <div className="timeline-stat-label">{label}</div>
                  <div
                    className="timeline-stat-val"
                    style={{
                      color: active.glow,
                      textShadow: `0 0 16px ${active.glow}, 0 0 32px ${active.glow}`,
                    }}
                  >
                    {val}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="timeline-locked-msg">
              &mdash; COMING SOON &mdash; STAY TUNED FOR UPDATES &mdash;
            </div>
          )}
        </div>
      </div>

      {/* Corner brackets */}
      {[
        { top: 58, left: 0, bt: true, bl: true },
        { top: 58, right: 0, bt: true, br: true },
        { bottom: 0, left: 0, bb: true, bl: true },
        { bottom: 0, right: 0, bb: true, br: true },
      ].map((pos, i) => (
        <div
          key={i}
          className="timeline-corner"
          style={{
            top: pos.top,
            bottom: pos.bottom,
            left: pos.left,
            right: pos.right,
            borderTop: pos.bt ? "1px solid #0e1820" : "none",
            borderBottom: pos.bb ? "1px solid #0e1820" : "none",
            borderLeft: pos.bl ? "1px solid #0e1820" : "none",
            borderRight: pos.br ? "1px solid #0e1820" : "none",
          }}
        />
      ))}
    </div>
  );
}
