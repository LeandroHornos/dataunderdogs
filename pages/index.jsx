import { useState, useRef } from "react";

import { getSession, signIn } from "next-auth/client";

//Layout
import { BlankLayout, CenteredColRow } from "../components/Layout";

//Components
import NavNotLogged from "../components/NavNotLogged";

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
      <NavNotLogged />
      <CenteredColRow centerColSize={10}>
        {" "}
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <img
                src="dog.svg"
                alt="doglogo"
                srcset=""
                height="200px"
                className="mr-3"
              />
              <h1 className="text-center mb-5">Data Underdogs</h1>
            </div>
            <div className="card p-5 m-5 text-center">
              <blockquote
                className="blockquote"
                style={{ fontSize: "0.8em", fontStyle: "italic" }}
              >
                "Aquí están los locos. Los inadaptados. Los rebeldes. Los
                alborotadores. Las clavijas redondas en los agujeros cuadrados.
                Los que ven las cosas de manera diferente. No les gustan las
                reglas y no tienen respeto por el estatus quo"
                <br />
                <br />
                Steve Jobs
              </blockquote>
            </div>
            <p className="text-center">
              Este sitio es una comunidad de personas que se están iniciando en
              el mundo de data science y que ya han adquirido conocimientos
              básicos en la materia pero aún están buscando insertarse
              laboralmente en este campo. La idea del sitio es compartir ideas
              de proyectos, sea con datos reales o datasets de ejemplo, resolver
              esos proyectos individualmente o en equipos y compartir los
              trabajos realizados, de forma tal de ganar experiencia, aprender
              de otros y construir un portfolio atractivo.
            </p>
            <div className="d-grid gap-2 col-3 mx-auto mb-5">
              <button
                className="btn btn-outline-info mt-3 mb-3"
                type="button"
                onClick={signIn}
              >
                Acceder
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-center mb-5">¿Qué es Data Underdogs?</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div
              className="sticky-visual text-center"
              style={{ backgroundColor: "red" }}
            >
              <h1>{currentNumber}</h1>
            </div>
          </div>
          <div className="col-md-8" ref={ScrollerContainerRef}>
            <section className="scroll-section">
              <h3>Sección 1</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis modi iure corporis sit, voluptatem placeat, adipisci eum
                et voluptate, magnam nisi laborum? Eum reiciendis sint rerum?
                Velit iusto quisquam ipsum?
              </p>
            </section>
            <section className="scroll-section">
              <h3>Sección 2</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis modi iure corporis sit, voluptatem placeat, adipisci eum
                et voluptate, magnam nisi laborum? Eum reiciendis sint rerum?
                Velit iusto quisquam ipsum?
              </p>
            </section>
            <section className="scroll-section">
              <h3>Sección 3</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis modi iure corporis sit, voluptatem placeat, adipisci eum
                et voluptate, magnam nisi laborum? Eum reiciendis sint rerum?
                Velit iusto quisquam ipsum?
              </p>
            </section>
            <section className="scroll-section">
              <h3>Sección 4</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis modi iure corporis sit, voluptatem placeat, adipisci eum
                et voluptate, magnam nisi laborum? Eum reiciendis sint rerum?
                Velit iusto quisquam ipsum?
              </p>
            </section>
          </div>
        </div>
      </CenteredColRow>
    </BlankLayout>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return { props: { msg: "No session" } };
}
export default newlanding;
