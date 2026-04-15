import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./contact.css";

/* ── Star field ──────────────────────────────────────────────────── */
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

/* ── Arrow Icon ──────────────────────────────────────────────────── */
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

      <div className="contact-nebula" />

      <div className="contact-scan-wrap">
        <div className="contact-scan-line" />
      </div>

      <Link to="/" className="contact-back">
        <ArrowLeftIcon /> BACK
      </Link>

      <section className="contact-hero-section">
        <div className="contact-hex-frame contact-hex-left">
          <div className="contact-hex-clip">
            <img src="/hero-1.webp" alt="" />
          </div>
          <div className="contact-hex-glow" />
        </div>

        <div className="contact-title-block">
          <h1 className="contact-title">
            CONTACT<span className="contact-title-accent"> US</span>
          </h1>
          <div className="contact-title-underline" />
          <p className="contact-subtitle">
            EVERYTHING YOU NEED TO REACH THE TECHSHASTRA TEAM
          </p>
        </div>

        <div className="contact-hex-frame contact-hex-right">
          <div className="contact-hex-clip">
            <img src="/hero-3.webp" alt="" />
          </div>
          <div className="contact-hex-glow" />
        </div>
      </section>

      {/* ── Content Grid ───────────────────────────────── */}
      <section className="contact-grid-section">
        {/* Left Column */}
        <div className="contact-grid-col">
          {/* Faculty Card */}
          <div
            className="contact-card-block"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="contact-card-header">
              <span className="contact-card-title">FACULTY COORDINATORS</span>
            </div>
            <div className="contact-card-body">
              <div className="contact-faculty-row">
                <div className="contact-faculty-item">
                  <div className="contact-faculty-name">Dr. xyz</div>
                  <div className="contact-faculty-pos">
                    Faculty Coordinator – TechShastra 2026
                  </div>
                  <div className="contact-faculty-phone">
                    <span className="contact-phone-icon">📞</span> +91 12345
                    67890
                  </div>
                </div>
                <div className="contact-faculty-item">
                  <div className="contact-faculty-name">Prof. abc</div>
                  <div className="contact-faculty-pos">
                    Co-Coordinator – TechShastra 2026
                  </div>
                  <div className="contact-faculty-phone">
                    <span className="contact-phone-icon">📞</span> +91 12345
                    67890
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div
            className="contact-card-block"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="contact-card-header">
              <span className="contact-card-title">REACH OUT VIA EMAIL</span>
            </div>
            <div className="contact-card-body">
              <div className="contact-email-info">
                <div className="contact-email-row">
                  <span className="contact-email-icon">✉</span>
                  <span className="contact-email-addr">
                    techshastra@nsu.ac.in
                  </span>
                </div>
                <div className="contact-email-row">
                  <span className="contact-email-icon">✉</span>
                  <span className="contact-email-addr">events@nsu.ac.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details Card */}
          <div
            className="contact-card-block"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="contact-card-header">
              <span className="contact-card-title">EVENT DETAILS</span>
            </div>
            <div className="contact-card-body">
              <div className="contact-event-grid">
                {[
                  ["EVENT", "TECHSHASTRA 2026", "#ff6a00"],
                  ["MODE", "OFFLINE", "#4ade80"],
                  ["STATUS", "REGISTRATIONS OPEN", "#f09040"],
                ].map(([label, val, color]) => (
                  <div key={label} className="contact-event-chip">
                    <div className="contact-event-chip-label">{label}</div>
                    <div
                      className="contact-event-chip-val"
                      style={{ color, textShadow: `0 0 14px ${color}` }}
                    >
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-grid-col">
          {/* Venue Card */}
          <div
            className="contact-card-block"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="contact-card-header">
              <span className="contact-card-title">EVENT VENUE</span>
            </div>
            <div className="contact-card-body">
              <div className="contact-venue-detail">
                <div className="contact-venue-name">NSU JAMSHEDPUR</div>
                <div className="contact-venue-full">
                  Netaji Subhas University
                </div>
                <div className="contact-venue-addr">
                  Pokhari, near Bhilai Pahadi, Jamshedpur - 831012, Jharkhand,
                  India
                </div>
                <div className="contact-venue-coords-row">
                  <span className="contact-coord-chip">LAT: 22.8046°N</span>
                  <span className="contact-coord-chip">LONG: 86.2030°E</span>
                  <span className="contact-coord-chip contact-coord-active">
                    STATUS: ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div
            className="contact-card-block"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="contact-card-header">
              <span className="contact-card-title">LOCATE US ON MAP</span>
            </div>
            <div className="contact-card-body">
              <div className="contact-map-container">
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
      </section>
    </div>
  );
}
