import styled from "styled-components";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);

export default function Home() {
    useEffect(() => {
        const tl = gsap.timeline();
        const split = SplitText.create("#heading");
        tl.from(split.chars, {
            duration: 2,
            opacity: 0,
            y: 50,
            ease: "back.out",
            stagger: 0.05,
        });

        return () => {
            split.revert();
        };
    }, []);

  return (
    <StyledWrapper>
        <div className="wrapper">
            <div className="content">
                <h1 id="heading">Escape Gravity</h1>
            </div>
        </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.section`
    .wrapper{
        height: 100vh;
        background-color: var(--bg-primary);
        /* background-image: var(--background-image-hero); */
        background-image: linear-gradient(0deg, var(--bg-primary) 0%, #e0f2fe00 100%), var(--background-image-hero);
        color: var(--text-main);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;
        background-size: cover;
        background-position: center;
        position: relative;
    }

    .content h1 {
        font-size: 4rem;
        text-align: center;
        padding: 0 1rem;
    }

    @media (max-width: 768px) {
        .content h1 {
            font-size: 3rem;
        }
    }

    @media (max-width: 480px) {
        .content h1 {
            font-size: 2.5rem;
        }
        
        .wrapper {
            font-size: 1.5rem;
        }
    }

`;