import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import "./Hero.css";

gsap.registerPlugin(useGSAP, SplitText);

export default function Hero() {
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
        );
    },
    { scope: heroRef }
  ); return (
    <section className="Hero" ref={heroRef}>
      <div className="content">
        <h1 id="heading">Escape Gravity.</h1>
        <p id="desc">
          Discover Tampa like never before with our unforgettable tours.
          Experience life at 0.6g on Tampa. Where floating islands meet
          vertical jungles, and the nights glow with bioluminescent wonder.
        </p>
        <div className="btn-container">
          <button>Start Your Journey</button>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}
;
