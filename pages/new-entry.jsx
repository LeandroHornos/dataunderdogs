import React from "react";
import {
  GeneralLayout,
  BlankLayout,
  CenteredColRow,
} from "../components/Layout";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

const newEntry = () => {
  const [session, loading] = useSession();
  // Si no se inició se sesión se muestra un mensaje de error
  if (typeof window !== "undefinded" && loading) {
    return null;
  }
  if (!session) {
    return (
      <BlankLayout>
        <CenteredColRow centerColSize="6" breakpoint="md">
          <div>
            <h1>No estas logueado!</h1>
            <Link href="/">
              <a>Ir al inicio</a>
            </Link>
          </div>
        </CenteredColRow>
      </BlankLayout>
    );
  } else {
    return (
      <GeneralLayout>
        <CenteredColRow>
          <div className="col-12 min80 pt-5">
            <h1>Nueva publicación</h1>
            <form action="">
              <div className="form-group">
                <label htmlFor="title">Título:</label>
                <input
                  type="text"
                  name="title"
                  id="1"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Pitch:</label>
                <textarea className="form-control"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="title">Texto:</label>
                <textarea className="form-control"></textarea>
              </div>
              <div className="form-group">
                <input className="btn btn-info mt-3" type="submit" value="Enviar" />
              </div>
            </form>
          </div>
        </CenteredColRow>
      </GeneralLayout>
    );
  }
};

export default newEntry;
