// NextJS

// Next Auth
import { getSession, signOut } from "next-auth/client";

import Link from "next/link";

import EntriesList from "../components/EntriesList";

const sample_data = require("../sampledb/user-posts.json");

import { GeneralLayout, CenteredColRow } from "../components/Layout";
export default function Dashboard() {
  return (
    <GeneralLayout>
      <div className="row">
        <div className="col-md-3 bg-softdark pt-5">
          <div class="d-grid">
            <button
              className={`btn btn-dark me-2`}
              type="button"
            >
              Nueva entrada
            </button>
          </div>
        </div>
        <div className="col-md-9 pt-5">
          <div className="min80 d-flex flex-column justify-content-between align-items-center">
            <h1 className="text-center">Últimas entradas</h1>
            <EntriesList entries={sample_data.splice(0, 10)} />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

// Ruta protegida: sólo se puede acceder estando logueado, si no estás logueado
// te redirecciona al login

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
