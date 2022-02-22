import { useState, useRef } from "react";

//Layout
import { BlankLayout } from "../components/Layout";

// Custom Hooks
import { useIntersection } from "../utils/useIntersection";

const newlanding = () => {
  const ScrollerContainerRef = useRef(null);
  const [currentNumber, setCurrentNumber] = useState(1);

  useIntersection(
    ScrollerContainerRef,
    "h3",
    (entry, idx) => {
      if (entry.intersectionRatio === 1) {
        setCurrentNumber(idx + 1);
      }
    },
    { threshold: 1, rootMargin: "32px 0px -80% 0px" }
  );

  return (
    <BlankLayout>
      <div className="row">
        <div className="col-12">
          <h1>Nuevo Landing Page!</h1>
          <div style={{ minHeight: "30vh" }}></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div
            className="sticky-visual text-center"
            style={{ backgroundColor: "red" }}
          >
            <h1>{currentNumber}</h1>
          </div>
        </div>
        <div className="col-md-9" ref={ScrollerContainerRef}>
          <section className="scroll-section">
            <h3>Sección 1</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              modi iure corporis sit, voluptatem placeat, adipisci eum et
              voluptate, magnam nisi laborum? Eum reiciendis sint rerum? Velit
              iusto quisquam ipsum?
            </p>
          </section>
          <section className="scroll-section">
            <h3>Sección 2</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              modi iure corporis sit, voluptatem placeat, adipisci eum et
              voluptate, magnam nisi laborum? Eum reiciendis sint rerum? Velit
              iusto quisquam ipsum?
            </p>
          </section>
          <section className="scroll-section">
            <h3>Sección 3</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              modi iure corporis sit, voluptatem placeat, adipisci eum et
              voluptate, magnam nisi laborum? Eum reiciendis sint rerum? Velit
              iusto quisquam ipsum?
            </p>
          </section>
          <section className="scroll-section">
            <h3>Sección 4</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              modi iure corporis sit, voluptatem placeat, adipisci eum et
              voluptate, magnam nisi laborum? Eum reiciendis sint rerum? Velit
              iusto quisquam ipsum?
            </p>
          </section>
        </div>
      </div>
    </BlankLayout>
  );
};

export default newlanding;
