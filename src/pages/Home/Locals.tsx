import "./Expeditations.css"
import { SPECIES } from "../../data/data";
import type { Species } from "../../data/data";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Locals() {

    const localsRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
        // Create timeline
        tlRef.current = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: localsRef.current,
              start: "top 80%",
            },
          });
        tlRef.current.from(localsRef.current!.querySelectorAll("h2, p, .Expeditation_card"), {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
          });
        },
        { scope: localsRef }
  );

  const openModal = (species: Species) => {
    setSelectedSpecies(species);
  };

  const closeModal = () => {
    setSelectedSpecies(null);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <section id="Expeditations" ref={localsRef}>
        <h2>Meet The <span>Locals</span></h2>
        <p>Tampa is home to diverse and fascinating life forms, from intelligent Vellara to playful Bounce-Hoppers and majestic Sky-Rays.</p>
        <div>
            {SPECIES.map((species) => {
                return (
                    <div className="Expeditation_card" id={species.id} key={species.id} onClick={() => openModal(species)}>
                        <div className="Overlay"></div>
                        <div className="spotimage" style={{ backgroundImage: `url(${species.imageUrl})` }}></div>
                        <h3 className="spotName">{species.name}</h3>
                        <p className="spotDescription">{species.description}</p>
                    </div>
                )
            })}
        </div>

        {/* Modal Popup */}
        {selectedSpecies && (
          <div className="modal-overlay" ref={modalRef} onClick={handleOutsideClick}>
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <div className="modal-header">
                <h2>{selectedSpecies.name}</h2>
                <span className="modal-region">{selectedSpecies.dangerLevel}</span>
              </div>
              <div className="modal-image" style={{ backgroundImage: `url(${selectedSpecies.imageUrl})` }}></div>
              <div className="modal-body">
                <p className="modal-description">{selectedSpecies.description}</p>
                <div className="modal-details">
                  <div className="detail-item">
                    <strong>Classification:</strong> <span>{selectedSpecies.classification}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Height:</strong> <span>{selectedSpecies.height}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  )
}


// export interface Species {
//   id: string;
//   name: string;
//   classification: 'Intelligent' | 'Mammal' | 'Avian' | 'Aquatic' | 'Insect' | 'Flora';
//   description: string;
//   height: string;
//   dangerLevel: 'Safe' | 'Caution' | 'Deadly';
//   imageUrl: string;
// }