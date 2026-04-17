import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import Navbar from "../Components/Navbar";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Subtle, smooth page reveal
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);

    // Ensure video plays smoothly if blocked by conditional rendering initially
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Video auto-play was prevented by the browser:", err);
      });
    }

    return () => clearTimeout(timer);
  }, []);

  const text = "TECHSHASTRA";
  const letters = text.split("");

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#050505] text-white font-sans selection:bg-cyan-500 selection:text-black">
      {/* ================= MAIN PORTAL CONTENT ================= */}
      <div
        className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
          mounted
            ? "opacity-100 scale-100 blur-none"
            : "opacity-0 scale-105 blur-md"
        }`}
      >
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-screen transition-transform duration-[30s] hover:scale-110 ease-linear"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Subtle Background Overlays (Replacing the previous intense FX) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-0 pointer-events-none"></div>
        {/* Soft vignette/blur framing the center */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] z-0 pointer-events-none"></div>

        {/* --- PREMIUM NAVBAR --- */}
        <Navbar mounted={mounted} />

        {/* --- UI METRICS & HEADERS --- */}
        <div
          className={`absolute top-24 md:top-30 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center justify-between transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {/* Animated divider line */}
          <div className="hidden md:flex relative h-px flex-1 mx-16 overflow-hidden bg-white/10">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent -translate-x-full animate-[scanReveal_3s_ease-in-out_infinite]"></div>
          </div>
        </div>

        {/* --- BOTTOM SCIFI DETAILS --- */}
        <div
          className={`absolute bottom-6 md:bottom-12 left-6 right-6 z-20 flex flex-col md:flex-row justify-between items-start md:items-end text-[10px] md:text-xs text-gray-400 tracking-widest syncopate-regular gap-4 pointer-events-none transition-all duration-1000 delay-[800ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="leading-relaxed">
            <span className="text-white/50">SYS.REV:</span> 4.0.9
            <br />
            <span className="text-white/50">ENG:</span> ONLINE
          </div>
          <div className="text-left md:text-right leading-relaxed">
            SECURE LINK <br />
            <span className="text-cyan-400 animate-pulse drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">
              ESTABLISHED
            </span>
          </div>
        </div>

        {/* --- CENTER TEXT ANIMATION --- */}
        <div
          className={`relative z-20 flex h-full flex-col items-center justify-center px-4 transition-all duration-[1500ms] ease-out delay-300 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="float-pulse perspective-1000 w-full text-center">
            <h1
              className="audiowide-regular font-black uppercase leading-none tracking-[-0.05em] sm:tracking-[-0.02em] whitespace-nowrap"
              style={{
                fontSize: "clamp(1.8rem, 10vw, 13rem)",
              }}
            >
              {letters.map((char, index) => (
                <span
                  key={index}
                  className="char cursor-crosshair select-none"
                  style={{ "--char-index": index }}
                  data-char={char}
                >
                  {char}
                </span>
              ))}
            </h1>

            <p className="mt-8 md:mt-12 text-xs md:text-xl text-cyan-200 tracking-[0.5em] md:tracking-[1em] font-light uppercase opacity-100 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] syncopate-regular ml-2 md:ml-4">
              Step Into The Future
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
