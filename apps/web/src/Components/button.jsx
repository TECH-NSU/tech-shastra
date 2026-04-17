import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <div className="button-wrapper">
        <button className="spiderverse-button">
          ENTER
          <div className="glitch-layers">
            <div className="glitch-layer layer-1">ENTER</div>
            <div className="glitch-layer layer-2">ENTER THE UNIVERSE</div>
          </div>
          <div className="noise" />
          <div className="glitch-slice" />
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button-wrapper {
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.2s ease;
    padding: 40px;
  }

  .spiderverse-button {
    position: relative;
    padding: 15px 30px;
    font-size: 24px;
    font-weight: 900;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    background: #fff;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 3px;
    transform-style: preserve-3d;
    transition: all 0.15s ease;
    font-family: Arial, sans-serif;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  .glitch-text {
    position: relative;
    display: inline-block;
  }

  .glitch-layers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch-layer {
    position: absolute;
    content: "CLICK ME";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50px;
    opacity: 0;
    transition: all 0.15s ease;
  }

  .layer-1 {
    color: #0ff;
    transform-origin: center;
  }

  .layer-2 {
    color: #f0f;
    transform-origin: center;
  }

  .button-wrapper:hover .layer-1 {
    opacity: 1;
    animation: glitchLayer1 0.4s steps(2) infinite;
  }

  .button-wrapper:hover .layer-2 {
    opacity: 1;
    animation: glitchLayer2 0.4s steps(2) infinite;
  }

  .button-wrapper:hover .spiderverse-button {
    animation: buttonGlitch 0.3s steps(2) infinite;
    box-shadow:
      0 0 20px rgba(255, 255, 255, 0.5),
      0 0 30px rgba(0, 255, 255, 0.5),
      0 0 40px rgba(255, 0, 255, 0.5);
  }

  .noise {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: repeating-radial-gradient(
      circle at 50% 50%,
      transparent 0,
      rgba(0, 0, 0, 0.1) 1px,
      transparent 2px
    );
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
    animation: noise 0.2s steps(2) infinite;
  }

  .button-wrapper:hover .noise {
    opacity: 1;
  }

  @keyframes buttonGlitch {
    0% {
      transform: translate(0) scale(1.1);
    }
    25% {
      transform: translate(-10px, 5px) scale(1.15) skew(-5deg);
    }
    50% {
      transform: translate(10px, -5px) scale(1.1) skew(5deg);
    }
    75% {
      transform: translate(-15px, -5px) scale(1.05) skew(-3deg);
    }
    100% {
      transform: translate(0) scale(1.1);
    }
  }

  @keyframes glitchLayer1 {
    0% {
      transform: translate(-20px, -10px) scale(1.1) skew(-10deg);
      clip-path: polygon(0 20%, 100% 20%, 100% 50%, 0 50%);
    }
    25% {
      transform: translate(20px, 10px) scale(1.2) skew(10deg);
      clip-path: polygon(0 30%, 100% 30%, 100% 60%, 0 60%);
    }
    50% {
      transform: translate(-15px, 5px) scale(0.9) skew(-5deg);
      clip-path: polygon(0 10%, 100% 10%, 100% 40%, 0 40%);
    }
    75% {
      transform: translate(15px, -5px) scale(1.3) skew(5deg);
      clip-path: polygon(0 40%, 100% 40%, 100% 70%, 0 70%);
    }
    100% {
      transform: translate(-20px, -10px) scale(1.1) skew(-10deg);
      clip-path: polygon(0 20%, 100% 20%, 100% 50%, 0 50%);
    }
  }

  @keyframes glitchLayer2 {
    0% {
      transform: translate(20px, 10px) scale(1.1) skew(10deg);
      clip-path: polygon(0 50%, 100% 50%, 100% 80%, 0 80%);
    }
    25% {
      transform: translate(-20px, -10px) scale(1.2) skew(-10deg);
      clip-path: polygon(0 60%, 100% 60%, 100% 90%, 0 90%);
    }
    50% {
      transform: translate(15px, -5px) scale(0.9) skew(5deg);
      clip-path: polygon(0 40%, 100% 40%, 100% 70%, 0 70%);
    }
    75% {
      transform: translate(-15px, 5px) scale(1.3) skew(-5deg);
      clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%);
    }
    100% {
      transform: translate(20px, 10px) scale(1.1) skew(10deg);
      clip-path: polygon(0 50%, 100% 50%, 100% 80%, 0 80%);
    }
  }

  @keyframes noise {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -5%);
    }
    20% {
      transform: translate(10%, 5%);
    }
    30% {
      transform: translate(-5%, 10%);
    }
    40% {
      transform: translate(15%, -5%);
    }
    50% {
      transform: translate(-10%, 15%);
    }
    60% {
      transform: translate(5%, -10%);
    }
    70% {
      transform: translate(-15%, 5%);
    }
    80% {
      transform: translate(10%, 10%);
    }
    90% {
      transform: translate(-5%, 15%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  .glitch-slice {
    position: absolute;
    width: 120%;
    height: 5px;
    background: #fff;
    opacity: 0;
    animation: slice 3s linear infinite;
  }

  @keyframes slice {
    0% {
      top: -10%;
      opacity: 0;
    }
    1% {
      opacity: 0.5;
    }
    3% {
      opacity: 0;
    }
    50% {
      top: 110%;
    }
    100% {
      top: 110%;
    }
  }
`;

export default Button;
