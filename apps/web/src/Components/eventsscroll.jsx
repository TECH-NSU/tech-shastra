import { useState, useCallback } from "react";
import "./eventsscroll.css";

const CHARACTERS = [
  { id: 1, name: "CODE RELAY ", comingSoon: false, img: "/redimg.webp" },
  { id: 2, name: "ESCAPE THE ROOM", comingSoon: false, img: "/yellowimg.webp" },
  {
    id: 3,
    name: "POSTER PRESENTATION",
    comingSoon: false,
    img: "/greenimg.webp",
  },
  { id: 4, name: "BRIDGE O MANIA ", comingSoon: false, img: "/blueimg.webp" },
  { id: 5, name: "CAD DESIGN ", comingSoon: false, img: "/greyimg.webp" },
  {
    id: 6,
    name: "CONTAPTION EVENT",
    comingSoon: false,
    img: "/img-prime.webp",
  },
];

/* Stable ember positions — no Math.random in render */
const EMBERS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 5.1) % 84)}%`,
  top: `${15 + ((i * 7.3) % 70)}%`,
  dur: `${1.8 + ((i * 0.15) % 1.6)}s`,
  delay: `${(i * 0.12) % 2.2}s`,
  tx: `${(i % 2 === 0 ? 1 : -1) * (10 + ((i * 4.1) % 30))}px`,
  color: i % 3 === 0 ? "#ff2020" : i % 3 === 1 ? "#ff7020" : "#ffcc30",
  size: `${3 + (i % 3)}px`,
}));

export default function Eventscroll() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const total = CHARACTERS.length;

  const go = useCallback((idx) => {
    setActive(idx);
    setAnimKey((k) => k + 1);
  }, []);

  const prev = useCallback(
    () => go((active - 1 + total) % total),
    [active, total, go]
  );
  const next = useCallback(() => go((active + 1) % total), [active, total, go]);

  const leftIdx = (active - 1 + total) % total;
  const rightIdx = (active + 1) % total;

  const activeCh = CHARACTERS[active];
  const leftCh = CHARACTERS[leftIdx];
  const rightCh = CHARACTERS[rightIdx];

  return (
    <>
      <section className="presale-section">
        <div className="purple-fog-top"></div>

        <div className="nebula" aria-hidden="true" />
        <div className="scanlines" aria-hidden="true" />

        <div className="presale-inner">
          {/* ── LEFT COPY ── */}
          <div className="presale-left">
            <p className="presale-label">Take a look</p>
            <h1 className="presale-title">
              PARTICIPATE <br />
              IN EVENTS
              <br />
              LIKE
            </h1>
            <p className="presale-desc">
              Get ready for an electrifying TechFest experience featuring
              cutting-edge innovations, hands-on workshops, and exciting
              competitions. Unlock new opportunities, showcase your skills, and
              connect with like-minded creators as you explore the future of
              technology.
            </p>
          </div>

          {/* ── RIGHT CAROUSEL ── */}
          <div className="carousel-wrapper">
            <div className="card-row">
              {/* Left ghost */}
              <div
                className="card card-side card-side--left"
                onClick={prev}
                role="button"
                aria-label={`Previous: ${leftCh.name}`}
              >
                <img
                  src={leftCh.img}
                  alt={leftCh.name}
                  className="card-img card-img--side"
                  draggable={false}
                />
              </div>

              {/* Active center — key re-triggers pop animation on every change */}
              <div className="card card-active" key={animKey}>
                <div className="embers" aria-hidden="true">
                  {EMBERS.map((e) => (
                    <span
                      key={e.id}
                      className="ember"
                      style={{
                        left: e.left,
                        top: e.top,
                        width: e.size,
                        height: e.size,
                        background: e.color,
                        "--dur": e.dur,
                        "--delay": e.delay,
                        "--tx": e.tx,
                      }}
                    />
                  ))}
                </div>

                <img
                  src={activeCh.img}
                  alt={activeCh.name}
                  className="card-img card-img--active"
                  draggable={false}
                />

                {activeCh.comingSoon && (
                  <div className="coming-soon-badge" aria-label="Coming Soon">
                    <span>
                      Coming
                      <br />
                      Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Right ghost */}
              <div
                className="card card-side card-side--right"
                onClick={next}
                role="button"
                aria-label={`Next: ${rightCh.name}`}
              >
                <img
                  src={rightCh.img}
                  alt={rightCh.name}
                  className="card-img card-img--side"
                  draggable={false}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="carousel-controls">
              <button className="ctrl-btn" onClick={prev} aria-label="Previous">
                &#8249;
              </button>
              <span className="card-name">{activeCh.name}</span>
              <button className="ctrl-btn" onClick={next} aria-label="Next">
                &#8250;
              </button>
            </div>

            {/* Dots */}
            <div className="carousel-dots" role="tablist">
              {CHARACTERS.map((ch, i) => (
                <button
                  key={ch.id}
                  className={`dot${i === active ? " dot--active" : ""}`}
                  onClick={() => go(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={ch.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Put the fog inside the relative section wrapper so it attaches to the bottom correctly */}
        <div className="purple-fog"></div>
      </section>
    </>
  );
}
