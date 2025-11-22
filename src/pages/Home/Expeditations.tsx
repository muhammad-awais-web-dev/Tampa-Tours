import "./Expeditations.css"
import { TOUR_SPOTS } from "../../data/data";
import type { TourSpot } from "../../data/data";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Expeditations() {

    const expeditationsRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const [selectedSpot, setSelectedSpot] = useState<TourSpot | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
        // Create timeline
        tlRef.current = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: expeditationsRef.current,
              start: "top 80%",
            },
          });
        tlRef.current.from(expeditationsRef.current!.querySelectorAll("h2, p, .Expeditation_card"), {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
          });
        },
        { scope: expeditationsRef }
  );

  const openModal = (spot: TourSpot) => {
    setSelectedSpot(spot);
  };

  const closeModal = () => {
    setSelectedSpot(null);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <section id="Expeditations" ref={expeditationsRef}>
        <h2>Featured <span>Expeditations</span></h2>
        <p>From floating archipelagos to bioluminescent bays, discover Tampa's most breathtaking destinations.</p>
        <div>
            {TOUR_SPOTS.map((spot) => {
                return (
                    <div className="Expeditation_card" id={spot.id} key={spot.id} onClick={() => openModal(spot)}>
                        <div className="Overlay"></div>
                        <div className="spotimage" style={{ backgroundImage: `url(${spot.heroImage})` }}></div>
                        <h3 className="spotName">{spot.name}</h3>
                        <p className="spotDescription">{spot.description}</p>
                    </div>
                )
            })}
        </div>

        {/* Modal Popup */}
        {selectedSpot && (
          <div className="modal-overlay" ref={modalRef} onClick={handleOutsideClick}>
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <div className="modal-header">
                <h2>{selectedSpot.name}</h2>
                <span className="modal-region">{selectedSpot.region}</span>
              </div>
              <div className="modal-image" style={{ backgroundImage: `url(${selectedSpot.heroImage})` }}></div>
              <div className="modal-body">
                <p className="modal-description">{selectedSpot.description}</p>
                <div className="modal-details">
                  <div className="detail-item">
                    <strong>Rating:</strong> <span>{selectedSpot.rating}/5</span>
                  </div>
                  <div className="detail-item">
                    <strong>Difficulty:</strong> <span>{selectedSpot.difficulty}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Available Activities:</strong>
                    <ul>
                      {selectedSpot.availableActivities.map((actId) => (
                        <li key={actId}>{actId}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  )
}


// export interface TourSpot {
//   id: string;
//   name: string;
//   region: string;
//   description: string;
//   heroImage: string;
//   availableActivities: string[]; // Activity IDs
//   rating: number;
//   difficulty: DifficultyLevel;
// }