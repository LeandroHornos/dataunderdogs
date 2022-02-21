import React from "react";
import {
  GeneralLayout,
  BlankLayout,
  CenteredColRow,
} from "../components/Layout";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

const newEntry = () => {
  const [session, loading] = useSession();
  const [value, setValue] = useState("**Hello world!!!**");
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
        <CenteredColRow centerColSize="10" breakpoint="md">
          {" "}
          <div className="min80 pt-5">
            <h1>Nueva publicación</h1>
            <form action="">
              <div className="form-group mt-3">
                <label htmlFor="title">Título:</label>
                <input
                  type="text"
                  name="title"
                  id="1"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="title">Pitch:</label>
                <textarea className="form-control"></textarea>
              </div>
              <div className="mt-3">
                <MDEditor value={value} onChange={setValue} />
              </div>
              <div className="form-group">
                <input
                  className="btn btn-info mt-3"
                  type="submit"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </CenteredColRow>
      </GeneralLayout>
    );
  }
};

export default newEntry;
