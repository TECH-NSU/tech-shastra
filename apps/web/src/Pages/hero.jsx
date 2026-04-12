import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useState } from "react";
import "../Styles/hero.css";
import Schedule from "../Components/schedule";
import Eventscroll from "../Components/eventsscroll";

export default function Hero() {
  const [text, setText] = useState(
    `Different domains, endless possibilities.
Learn, build, and innovate.
Compete with the best minds.
Discover your true potential.`
  );

  const [heading, setHeading] = useState("Explore Domains");

  const containerRef = useRef();
  const headingRef = useRef();
  const blueRef = useRef();
  const redRef = useRef();
  const heroesRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Heading
      tl.from(headingRef.current, {
        y: -20,

        opacity: 1,
        duration: 1,
      });

      // Hero images
      tl.from(heroesRef.current, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="hero-container" ref={containerRef}>
        {/* Blue Planet */}
        <div className="blue" ref={blueRef}></div>

        {/* Video Layer */}

        {/* Red Planet */}
        <div className="red" ref={redRef}></div>

        {/* Explosions */}
        <div className="explosion-left"></div>
        <div className="explosion-right"></div>

        <div className="planets-texture"></div>

        {/* Content */}
        <h1 ref={headingRef}>TechShastra</h1>

        <div className="heroes-container">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className={`hero-image${i + 1}`}
              ref={(el) => (heroesRef.current[i] = el)}
            ></div>
          ))}
        </div>

        <div className="surface-texture"></div>
      </div>

      <div className="hero-about">
        <div className="techshastra-about">
          <h1>About TechShastra</h1>
          <p>
            TechShastra is a prestigious technical fest organized by{" "}
            <span style={{ color: "yellow" }}>Netaji Subhas University</span> .
            <br></br> It serves as a platform for students to showcase their
            technical skills, creativity, ,<br></br>and innovation through
            various competitions, workshops, and events.
            <br></br> With a wide range of activities spanning multiple domains
            of technology,
            <br></br>
            <span style={{ color: "yellow", fontWeight: "bold", zIndex: 7 }}>
              TechShastra aims to inspire and empower the next generation of
              engineers.
            </span>
          </p>
        </div>
      </div>

      <div className="hero-video"></div>

      <div className="event-details"></div>

      <Eventscroll />

      <div class="techfest-domains">
        <h1>{heading}</h1>
        <p>{text}</p>

        <div className="ashimage"></div>

        <div className="heroes-container1">
          <div
            className="hero1-image1"
            onMouseEnter={() => {
              setHeading("Computer Science");
              setText(`Build intelligent systems and innovative applications.
Explore coding, AI, and software development.
Shape the future through technology.`);
            }}
            onMouseLeave={() => {
              setHeading("Explore Domains");
              setText(`Different domains, endless possibilities.
Learn, build, and innovate.
Compete with the best minds.
Discover your true potential.`);
            }}
          ></div>
          <div
            className="hero1-image2"
            onMouseEnter={() => {
              setHeading("Mechanical Engineering");
              setText(`Design machines and bring ideas to life.
Work with motion, energy, and real-world systems.
Turn concepts into powerful creations.`);
            }}
            onMouseLeave={() => {
              setHeading("Explore Domains");
              setText(`Different domains, endless possibilities.
Learn, build, and innovate.
Compete with the best minds.
Discover your true potential.`);
            }}
          ></div>

          <div
            className="hero1-image3"
            onMouseEnter={() => {
              setHeading("Civil Engineering");
              setText(`Create structures that shape the world around us.
From bridges to cities, build lasting impact.
Engineer the foundation of modern life.`);
            }}
            onMouseLeave={() => {
              setHeading("Explore Domains");
              setText(`Different domains, endless possibilities.
Learn, build, and innovate.
Compete with the best minds.
Discover your true potential.`);
            }}
          ></div>
          <div
            className="hero1-image4"
            onMouseEnter={() => {
              setHeading("ELECTRICAL");
              setText(`Work with circuits, signals, and smart devices.
Power communication and modern technology.
Drive innovation in the digital world.`);
            }}
            onMouseLeave={() => {
              setHeading("Explore Domains");
              setText(`Different domains, endless possibilities.
Learn, build, and innovate.
Compete with the best minds.
Discover your true potential.`);
            }}
          ></div>
        </div>
      </div>

      <div className="planetpurple"></div>

      <div className="planetseacond"></div>
    </>
  );
}
