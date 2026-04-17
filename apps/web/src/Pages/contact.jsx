import { useEffect } from "react";
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
          {/* Student Coordinators Card */}
          <div
            className="contact-card-block"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="contact-card-header">
              <span className="contact-card-title">STUDENT COORDINATORS</span>
            </div>
            <div className="contact-card-body">
              <div className="contact-faculty-row">
                <div className="contact-faculty-item">
                  <div className="contact-faculty-name">Rajdeep Ray</div>
                  <div className="contact-faculty-pos">
                    Student Coordinator (CSE) – TechShastra 2026
                  </div>
                  <div className="contact-faculty-phone">
                    <span className="contact-phone-icon">📞</span> +91 98353
                    40860
                  </div>
                </div>
                <div className="contact-faculty-item">
                  <div className="contact-faculty-name">Ankesh</div>
                  <div className="contact-faculty-pos">
                    Student Coordinator (Civil) – TechShastra 2026
                  </div>
                  <div className="contact-faculty-phone">
                    <span className="contact-phone-icon">📞</span> +91 87579
                    00389
                  </div>
                </div>
                <div className="contact-faculty-item">
                  <div className="contact-faculty-name">Vickey Kumar</div>
                  <div className="contact-faculty-pos">
                    Student Coordinator (Electrical) – TechShastra 2026
                  </div>
                  <div className="contact-faculty-phone">
                    <span className="contact-phone-icon">📞</span> +91 77618
                    68560
                  </div>
                </div>
                <div className="contact-faculty-item">
                  <div className="contact-faculty-name">Vishal Yadav</div>
                  <div className="contact-faculty-pos">
                    Student Coordinator (Mechanical) – TechShastra 2026
                  </div>
                  <div className="contact-faculty-phone">
                    <span className="contact-phone-icon">📞</span> +91 98613
                    68901
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email & Social Card */}
          <div
            className="contact-card-block"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="contact-card-header">
              <span className="contact-card-title">REACH US</span>
            </div>
            <div className="contact-card-body">
              <div className="contact-email-info">
                <div className="contact-email-row">
                  <span className="contact-email-icon">✉</span>
                  <span className="contact-email-addr">
                    techshastra@nsuniv.ac.in
                  </span>
                </div>
                <div className="contact-email-row">
                  <span className="contact-email-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </span>
                  <span className="contact-email-addr">@techshastra.nsu</span>
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
