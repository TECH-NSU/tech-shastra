import React, { useState } from "react";

export default function Navbar({ mounted = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`absolute top-6 md:top-10 left-6 md:left-10 right-6 md:right-10 z-[60] flex items-center justify-between gap-6 md:gap-10 transition-all duration-1000 delay-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        {/* LOGO AREA */}
        <div className="flex items-center space-x-3 cursor-pointer group z-[60]">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12 h-8 md:w-24 md:h-24 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
          />
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-12 text-[10px] md:text-xs tracking-[0.2em] syncopate-regular text-gray-400">
          {["Events", "Our Team", "Partners", "Timeline", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative uppercase hover:text-white transition-colors duration-300 group py-2"
              >
                {item}
                {/* Glow underline effect on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(0,255,255,0.8)]"></span>
              </a>
            )
          )}
        </div>

        {/* ACTION BUTTON & MOBILE MENU TOGGLE */}
        <div className="flex items-center space-x-6 z-[60]">
          <button className="hidden sm:block text-[10px] md:text-xs uppercase tracking-[0.2em] px-6 py-2 md:px-8 md:py-3 border border-white/20 rounded-full hover:bg-white hover:border-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-500 backdrop-blur-md syncopate-regular font-bold cursor-pointer">
            Register
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="lg:hidden flex flex-col p-2 group cursor-pointer relative w-8 h-8 justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`absolute h-px bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "w-6 rotate-45 group-hover:shadow-[0_0_8px_rgba(0,255,255,0.8)] group-hover:bg-cyan-400" : "w-6 -translate-y-2"}`}
            ></span>
            <span
              className={`absolute h-px bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "w-0 opacity-0" : "w-4 translate-x-1 group-hover:w-6 group-hover:translate-x-0 group-hover:shadow-[0_0_8px_rgba(0,255,255,0.8)] group-hover:bg-cyan-400"}`}
            ></span>
            <span
              className={`absolute h-px bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "w-6 -rotate-45 group-hover:shadow-[0_0_8px_rgba(0,255,255,0.8)] group-hover:bg-cyan-400" : "w-6 translate-y-2"}`}
            ></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU FULLSCREEN OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-[#020202]/95 backdrop-blur-xl transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col items-center justify-center ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none delay-300"
        }`}
        style={{
          clipPath: isMenuOpen
            ? "circle(150% at calc(100% - 3rem) 3rem)"
            : "circle(0% at calc(100% - 3rem) 3rem)",
        }}
      >
        {/* Subtle Overlay FX */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none z-0"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] pointer-events-none z-0"></div>

        <div className="flex flex-col space-y-8 text-center z-10 w-full px-6">
          {["Events", "Our Team", "Timeline", "Contact"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg min-[360px]:text-xl sm:text-4xl tracking-[0.15em] sm:tracking-[0.3em] syncopate-regular uppercase text-transparent bg-clip-text bg-white hover:text-cyan-300 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${isMenuOpen ? 200 + i * 100 : 0}ms` }}
            >
              {item}
            </a>
          ))}

          <div
            className={`mt-12 transition-all duration-700 transform ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isMenuOpen
                ? "translate-y-0 opacity-100 delay-500"
                : "translate-y-12 opacity-0"
            }`}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="sm:hidden text-[10px] md:text-xs uppercase tracking-[0.3em] px-8 py-3 my-4 border border-cyan-500/50 text-cyan-200 rounded-full hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300 syncopate-regular font-bold w-full max-w-[200px] mx-auto"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
