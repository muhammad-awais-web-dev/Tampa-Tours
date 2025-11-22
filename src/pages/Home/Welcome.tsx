import "./Welcome.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function Welcome() {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const stats = welcomeRef.current?.querySelectorAll(".stat");

  stats?.forEach(stat => {
    stat.addEventListener("mouseenter", () => {
      gsap.to(stat, {
        backgroundColor: "var(--text-secondary)",
        color: "var(--bg-primary)",
        y: -2,
        duration: 0.1,
      });
      gsap.to(stat.querySelectorAll("p"), {
        textShadow: "0 0 10px var(--bg-primary)",
        color: "var(--bg-primary)",
        duration: 0.1,
      });
    });

    stat.addEventListener("mouseleave", () => {
      gsap.to(stat, {
        backgroundColor: "transparent",
        color: "var(--text-main)",
        y: 0,
        duration: 0.1,
      });
      gsap.to(stat.querySelectorAll("p"), {
        textShadow: "none",
        color: "var(--text-secondary)",
        duration: 0.1,
      });
    });
  })

  useGSAP(
    () => {
      const split = new SplitText(welcomeRef.current!.querySelector("h2")!, {
        type: "chars",
      });
      const splitDesc = new SplitText(welcomeRef.current!.querySelector("p")!, {
        type: "chars,words",
      });

      // Create timeline
      tlRef.current = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: welcomeRef.current,
          start: "top 80%",
        },
      });

      tlRef.current.
      from(split.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.05,
      })
      .from(
        splitDesc.words,
        {
          opacity: 0.1,
          rotateX: -90,
          duration: 1,
          stagger: 0.05,
        },
        "-=1"
      )
      .from(
        welcomeRef.current!.querySelectorAll(".stat"),
        {
          opacity: 0,
          x: 30,
          duration: 0.8,
          stagger: 0.2,
        },
        "-=1"
      );
    },
    { scope: welcomeRef }
  );

  return (
    <section className="welcome-section" ref={welcomeRef}>
      <h2>
        Welcome to <span>Tempa</span>
      </h2>
      <p>
        A super-oxygenated tropical paradise where the laws of physics create an
        experience unlike anywhere else in the universe.
      </p>
      <div>
        <div className="stat">
          <h3 className="stat-name">Gravity</h3>
          <p className="stat-desc">0.6g</p>
          <p className="stat-sub-desc">40% lighter than Earth</p>
        </div>
        <div className="stat">
          <h3 className="stat-name">Atmosphere</h3>
          <p className="stat-desc">28% O2 (Hyper-oxygenated)</p>
          <p className="stat-sub-desc">Mild euphoric effects</p>
        </div>
        <div className="stat">
          <h3 className="stat-name">Star System</h3>
          <p className="stat-desc">Binary Star System</p>
          <p className="stat-sub-desc">Two Moons</p>
        </div>
        <div className="stat">
          <h3 className="stat-name">Average Temperature</h3>
          <p className="stat-desc">21 °C</p>
          <p className="stat-sub-desc">All year long</p>
        </div>
      </div>
    </section>
  );
}
