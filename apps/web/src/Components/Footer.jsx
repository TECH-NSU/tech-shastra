import "./Footer.css";
import footerData from "../data/footer.json";

export default function Footer() {
  const { brand, navigation, contact, footerBottom } = footerData;

  return (
    <>
      {/* ── SEE YOU AT TECHSHASTRA banner ── */}
      <div className="footer-banner">
        <h2>
          SEE YOU AT <span>TECHSHASTRA</span>
        </h2>
        <p className="footer-banner-sub">
          Netaji Subhas University · A Techno Cultural Festival
        </p>
      </div>

      <div className="footer-divider-line" />

      {/* ── Footer main ── */}
      <footer className="footer-main">
        <div className="footer-grid">
          {/* LEFT — Brand */}
          <div className="footer-brand">
            <div className="footer-logo-container">
              <img src={brand.logo} alt={brand.name} className="footer-logo" />
            </div>
            <p className="footer-brand-desc">{brand.description}</p>
          </div>

          {/* CENTER — Navigate */}
          <div>
            <h4 className="footer-col-title">Navigate</h4>
            <ul className="footer-nav-list">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a href={item.links}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Contact */}
          <div>
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon">📍</span>
                <span>
                  {contact.address.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <span className="contact-icon">📧</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span className="contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="contact-svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </span>
                <a
                  href={`https://instagram.com/${contact.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contact.instagram}
                </a>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>
                  {contact.contactDetail.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i !== contact.contactDetail.split("\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <span className="contact-icon">🌐</span>
                <a href={contact.website} target="_blank" rel="noreferrer">
                  {contact.website.replace(/^https?:\/\//, "")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>{footerBottom.copyright}</p>
          <p>
            Built with ❤️ by the{" "}
            <a href={footerBottom.builtByLink}>{footerBottom.builtBy}</a>
          </p>
        </div>
      </footer>
    </>
  );
}
