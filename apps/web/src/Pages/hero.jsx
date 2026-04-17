import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/hero.css";
import Eventscroll from "../Components/eventsscroll";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();

  const headingRef = useRef();
  const planetRef = useRef();
  const domainRef = useRef();

  const aboutRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const burstOffset = isMobile ? 90 : 300;

      // ── LEFT ──────────────────────────────────────────────────────
      gsap.fromTo(
        leftRef.current,
        { clipPath: "inset(0 50% 0 50%)", x: 0 },
        {
          clipPath: "inset(0 0% 0 0%)",
          x: -burstOffset,
          duration: 2,
          ease: "expo.out",
          delay: 1.2,
          scale: 1,
        }
      );

      // ── RIGHT ─────────────────────────────────────────────────────
      gsap.fromTo(
        rightRef.current,
        { clipPath: "inset(0 50% 0 50%)", x: 0 },
        {
          clipPath: "inset(0 0% 0 0%)",
          x: burstOffset,
          duration: 2,
          ease: "expo.out",
          delay: 1.2,
          scale: 1,
        }
      );

      gsap.fromTo(
        headingRef.current,
        {
          clipPath: "inset(0 0 100% 0)",
          opacity: 0,
        },
        {
          clipPath: "inset(0 0 0% 0)",
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        aboutRef.current.querySelector("h1"),
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      ).fromTo(
        aboutRef.current.querySelector("p"),
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.5" // 🔥 overlap for smooth flow
      );

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: planetRef.current,
          start: "top 10%",
          toggleActions: "play reverse play reverse", // 🔁 replay on scroll
        },
      });

      // Heading comes first
      t2.fromTo(
        planetRef.current.querySelector("h1"),
        {
          x: -110,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      )

        // Paragraph follows
        .fromTo(
          planetRef.current.querySelector("p"),
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5" // 🔥 smooth overlap
        );

      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: domainRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      });

      t3.fromTo(
        domainRef.current,
        {
          opacity: 0,
          filter: "blur(20px)",
          scale: 0.95,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // ⚡ Heading dramatic reveal
      t3.fromTo(
        domainRef.current.querySelector("h1"),
        {
          y: 100,
          opacity: 0,
          letterSpacing: "20px",
        },
        {
          y: 0,
          opacity: 1,
          letterSpacing: "2px",
          duration: 1,
          ease: "power4.out",
        },
        "-=0.6"
      );

      // 🧠 Text smooth fade
      t3.fromTo(
        domainRef.current.querySelector("p"),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // 🔥 Cards insane reveal (depth effect)
      t3.fromTo(
        domainRef.current.querySelectorAll(".heroes-container1 > div"),
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotateY: 30,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          filter: "blur(0px)",
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      gsap.to(".ashimage", {
        y: -100,
        scrollTrigger: {
          trigger: domainRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".techshastra-about p",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".techshastra-about",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const [text, setText] = useState(
    `Different domains, endless possibilities.
Learn, build, and innovate.
Compete with the best minds.
Discover your true potential.`
  );

  const [heading, setHeading] = useState("Explore Domains");

  const blueRef = useRef();
  const redRef = useRef();
  const heroesRef = useRef([]);

  return (
    <>
      <div className="hero-container" ref={containerRef}>
        {/* Blue Planet */}
        <div className="blue" ref={blueRef}></div>

        {/* Red Planet */}
        <div className="red" ref={redRef}></div>

        {/* Explosions */}
        <div className="explosion-left" ref={leftRef}></div>
        <div className="explosion-right" ref={rightRef}></div>

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

      <div className="hero-about" ref={aboutRef}>
        <div className="techshastra-about">
          <h1>About TechShastra</h1>
          <p>
            TechShastra is a prestigious technical fest organized by{" "}
            <span style={{ color: "yellow" }}>Netaji Subhas University</span> .
            <br></br> It serves as a platform for students to showcase their
            technical skills, creativity, ,<br></br>and innovation through
            various competitions, workshops, and events.
            <br></br>
            <span style={{ color: "yellow", fontWeight: "bold", zIndex: 7 }}>
              TechShastra aims to inspire and empower the next generation of
              engineers.
            </span>
          </p>
        </div>
      </div>

      <div className="event-details"></div>

      <Eventscroll />

      <div className="techfest-domains" ref={domainRef}>
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

      <div className="planetpurple" ref={planetRef}>
        <h1>
          Universe of <br></br>TechShastra
        </h1>

        <p>
          Embark on a cosmic journey through <br></br> the universe of
          TechShastra, where innovation and creativity collide. <br></br>{" "}
          Discover a galaxy of opportunities to learn, <br></br>build, and
          compete in various domains of technology.<br></br> Unleash your
          potential and shine among the brightest minds at TechShastra 2024.
        </p>
      </div>
    </>
  );
}
