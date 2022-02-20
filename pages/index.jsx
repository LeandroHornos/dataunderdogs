// NextJS

// Next Auth
import { signIn, getSession } from "next-auth/client";

import Link from "next/link";

// React Boostrap Icons
import { ArrowLeftRight, Truck } from "react-bootstrap-icons";

import {
  BlankLayout,
  GeneralLayout,
  CenteredColRow,
} from "../components/Layout";

export default function LandingPage() {
  return (
    <BlankLayout>
      <CenteredColRow
        centerColSize={6}
        breakpoint="md"
        centerColClasses="d-flex min80 flex-column justify-content-between align-items-center"
      >
        <div className="text-center">
          <h1>Data Underdogs</h1>
        </div>
        <p>
          <strong>
            <small style={{ color: "rgb(200,200,200)" }}>
              Este sitio es una comunidad de personas que se están iniciando en
              el mundo de data science y que ya han adquirido conocimientos
              básicos en la materia pero aún no tienen experiencia. <br />
              La idea del sitio es compartir ideas de proyectos, sea con datos
              reales o datasets de ejemplos, resolver esos proyectos
              individualmente o en equipos y compartir los trabajos realizados.
              <br />
              De esta manera, podrás ir ganando experiencia en proyectos de data
              science, podrás armar un portfolio de trabajos realizados para
              mostrar a tus potenciales clientes o empleadores, podrás aprender
              a trabajar en equipo y podrás aprender de los enfoques que otros
              usuarios aplican a la resolución de un determinado problema.
            </small>
          </strong>
        </p>

        <div className="d-grid gap-2 col-12 mx-auto">
          <button className="btn btn-dark" type="button" onClick={signIn}>
            Acceder
          </button>
          <Link href="/protected">Ver página protegida</Link>
        </div>
      </CenteredColRow>
    </BlankLayout>
  );
}

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
