import styled from "styled-components";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, SplitText);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const split = new SplitText("#heading", { type: "chars" });
      const splitDesc = new SplitText("#desc", { type: "chars,words" });

      // Create timeline
      tlRef.current = gsap.timeline({ defaults: { ease: "power3.out" } });

      tlRef.current
        .from(split.chars, {
          y: 100,
          opacity: 0,
          rotateX: -90,
          stagger: 0.05,
          duration: 1,
        })
        .from(
          splitDesc.words,
          {
            opacity: 0.1,
            // y: 50,
            rotateX: -90,
            duration: 1,
            stagger: 0.05,
          },
          "-=0.5"
        )
        .from(
          ".btn-container",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from("#right .stat", {
          opacity: 0,
          x: 30,
          duration: 0.8,
          stagger: 0.2,
        });
    },
    { scope: heroRef }
  );

  const handleRestart = () => {
    tlRef.current?.restart();
  };

  const handleReverse = () => {
    tlRef.current?.reverse();
  };

  const handlePause = () => {
    tlRef.current?.paused() ? tlRef.current?.play() : tlRef.current?.pause();
  };

  return (
    <StyledWrapper>
      <div className="wrapper" ref={heroRef}>
        <div className="content">
          <h1 id="heading">Escape Gravity.</h1>
          <p id="desc">
            Discover Tampa like never before with our unforgettable tours.
            Experience life at 0.6g on Tampa. Where floating islands meet
            vertical jungles, and the nights glow with bioluminescent wonder.
          </p>
          <div className="btn-container">
            <button onClick={handleRestart}>Restart</button>
            <button onClick={handleReverse}>Reverse</button>
            <button onClick={handlePause}>Play/Pause</button>
            <button>Start Your Journey</button>
            <button>Learn More</button>
          </div>
        </div>
        <div id="right">
          <div className="stat">
            <h2>0.6 G</h2>
            <p>Gravity</p>
          </div>
          <div className="stat">
            <h2>20% O2</h2>
            <p>Oxygen Level</p>
          </div>
          <div className="stat">
            <h2>2</h2>
            <p>Moons</p>
          </div>
          <div className="stat">
            <h2>21C</h2>
            <p>Average Temperature</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.section`
  #right {
    display: flex;
    width: 50%;
    height: calc(100vh - 280px);
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    padding-left: 20px;
    z-index: 50;
  }
  .stat {
    color: var(--text-primary);
    width: 100%;
    height: calc((100vh - 280px) / 4 - 20px);
    background-color: var(--bg-primary-10);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    border: 1px solid var(--text-main);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.5rem;
  }
    .stat p{
        font-size: 1rem;
        margin-top: 10px;
    }
  .wrapper {
    height: 100vh;
    background-color: var(--bg-primary);
    // background-image: var(--background-image-hero);
    background-image: linear-gradient(
        0deg,
        var(--bg-primary) 0%,
        #e0f2fe00 100%
      ),
      var(--background-image-hero);
    color: var(--text-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 0 100px;
  }
  .content span {
    font-size: 2rem;
  }
  p {
    font-size: 2.2rem;
    color: var(--text-main);
    font-weight: 500;
    margin-top: 20px;
  }
  .btn-container {
    display: flex;
    gap: 15px;
    margin-top: 30px;
  }
  button {
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    border: 2px solid var(--text-main);
    background: transparent;
    color: var(--text-main);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  button:hover {
    background: var(--text-secondary);
    color: var(--bg-primary);
    transform: translateY(-2px);
  }
`;
