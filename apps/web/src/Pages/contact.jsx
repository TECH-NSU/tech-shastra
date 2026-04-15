import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./contact.css";

/* ── Star field (same generator as timeline) ──────────────────────── */
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

/* ── Faculty Data ─────────────────────────────────────────────────── */
const FACULTIES = [
  {
    name: "Dr. Rajesh Kumar",
    position: "Faculty Coordinator – TechShastra 2026",
    phone: "+91 98765 43210",
    planet: "/planets/earth.jpg",
    glow: "#60b0f0",
  },
  {
    name: "Prof. Anita Sharma",
    position: "Co-Coordinator – TechShastra 2026",
    phone: "+91 87654 32109",
    planet: "/planets/venus.png",
    glow: "#f09040",
  },
];

/* ── SVG Icons ────────────────────────────────────────────────────── */
function PhoneIcon({ color = "#60b0f0" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function LocationIcon({ color = "#ffcc00" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-root">
      {/* Stars */}
      <div className="contact-stars">
        {STARS.map((s) => (
          <div
            key={s.id}
            className="contact-star"
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
      <div className="contact-nebula" />

      {/* Scan line */}
      <div className="contact-scan-wrap">
        <div className="contact-scan-line" />
      </div>

      {/* Back link */}
      <Link to="/" className="contact-back">
        <ArrowLeftIcon /> BACK
      </Link>

      {/* Header */}
      <header className="contact-header">
        <div className="contact-header-center">
          <div className="contact-user-badge">
            <div className="contact-user-dot" />
            <span className="contact-user-name">
              TECHFEST <span>2026</span>
            </span>
            <span className="contact-user-mastery">
              NSU · <span>Jamshedpur</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="contact-main">
        {/* Title */}
        <div className="contact-title-section">
          <div className="contact-title-tag">— TRANSMISSION OPEN —</div>
          <h1 className="contact-title">
            CONTACT <span className="contact-title-accent">US</span>
          </h1>
          <div className="contact-subtitle">
            REACH OUT TO THE MISSION CONTROL TEAM
          </div>
        </div>

        {/* Grid: Faculty + Venue */}
        <div className="contact-grid">
          {/* Faculty Section */}
          <div className="contact-faculty-section">
            <div className="contact-section-label">⬡ FACULTY COORDINATORS</div>
            <div className="contact-cards">
              {FACULTIES.map((f, idx) => (
                <div className="contact-card" key={idx}>
                  {/* Decorative planet */}
                  <div
                    className="contact-card-planet"
                    style={{ animationDelay: `${idx * 0.8}s` }}
                  >
                    <img src={f.planet} alt="" />
                  </div>

                  <div className="contact-card-name">{f.name}</div>
                  <div className="contact-card-position">{f.position}</div>

                  <div className="contact-card-divider" />

                  {/* Phone */}
                  <div className="contact-card-info">
                    <div className="contact-card-icon">
                      <PhoneIcon color={f.glow} />
                    </div>
                    <div>
                      <div className="contact-card-info-label">PHONE</div>
                      <div className="contact-card-info-value">{f.phone}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Venue Section */}
          <div className="contact-venue-section">
            <div className="contact-section-label">⬡ EVENT VENUE</div>
            <div className="contact-venue-card">
              <div className="contact-venue-info">
                <div className="contact-venue-title">NSU JAMSHEDPUR</div>
                <div className="contact-venue-full">
                  Netaji Subhas University
                </div>
                <div className="contact-venue-address">
                  Pokhari, near Bhilai Pahadi, Jamshedpur - 831012,
                  <br />
                  Jharkhand, India
                </div>

                <div className="contact-venue-coords">
                  <div className="contact-venue-coord">
                    <div>
                      <div className="contact-venue-coord-label">LAT</div>
                      <div className="contact-venue-coord-val">22.8046°N</div>
                    </div>
                  </div>
                  <div className="contact-venue-coord">
                    <div>
                      <div className="contact-venue-coord-label">LONG</div>
                      <div className="contact-venue-coord-val">86.2030°E</div>
                    </div>
                  </div>
                  <div className="contact-venue-coord">
                    <div>
                      <div className="contact-venue-coord-label">STATUS</div>
                      <div
                        className="contact-venue-coord-val"
                        style={{ color: "#4ade80" }}
                      >
                        ACTIVE
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="contact-map-wrap">
                <iframe
                  title="NSU Jamshedpur Location"
                  src="https://www.google.com/maps?q=Netaji+Subhas+University,+Pokhari,+Jamshedpur&z=15&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="contact-map-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="contact-bottom-bar">
        {[
          ["EVENT", "TECHSHASTRA 2026", "#d8a830"],
          ["VENUE", "NSU JAMSHEDPUR", "#60b0f0"],
          ["MODE", "OFFLINE", "#4ade80"],
          ["STATUS", "REGISTRATIONS OPEN", "#f09040"],
        ].map(([label, val, color]) => (
          <div key={label} className="contact-stat-card">
            <div className="contact-stat-label">{label}</div>
            <div
              className="contact-stat-val"
              style={{
                color,
                textShadow: `0 0 16px ${color}, 0 0 32px ${color}`,
              }}
            >
              {val}
            </div>
          </div>
        ))}
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
          className="contact-corner"
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
