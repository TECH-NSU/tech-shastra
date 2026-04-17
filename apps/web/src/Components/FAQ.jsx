import { useState } from "react";
import "./FAQ.css";

import faqs from "../data/faqs.json";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section">
      <div className="faq-heading">
        <div className="faq-heading-row">
          <img
            src="/greyimg.webp"
            alt="Robot Left"
            className="faq-heading-robot faq-heading-robot-left"
          />
          <h2>FAQs</h2>
          <img
            src="/img-prime.webp"
            alt="Robot Right"
            className="faq-heading-robot faq-heading-robot-right"
          />
        </div>
        <div className="faq-divider" />
        <p>Everything you need to know about TechShastra</p>
      </div>

      <ul className="faq-list">
        {faqs.map((item, i) => (
          <li key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
            <button className="faq-question" onClick={() => toggle(i)}>
              <span className="faq-question-text">{item.q}</span>
              <span className="faq-icon">+</span>
            </button>
            <div
              className="faq-answer-wrapper"
              style={{
                maxHeight: openIndex === i ? "500px" : "0",
                opacity: openIndex === i ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                overflow: "hidden",
              }}
            >
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
