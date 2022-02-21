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

// AXIOS
import axios from "axios";

// REACT TOASTIFY
import { toast } from "react-toastify";

const newEntry = () => {
  const [session, loading] = useSession();
  const [content, setContent] = useState("**Hello world!!!**");
  const [pitch, setPitch] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("idea");

  const cleanForm = () => {
    setContent("");
    setPitch("");
    setTitle("");
  };

  const onSubmit = async () => {
    const data = { pitch, title, content, category };
    console.log(data);
    try {
      console.log("Salvando...");
      const res = await axios.post("/api/post", { post: data });
      toast.success(res.data.msg);
      cleanForm();
      return;
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

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
            <div className="form-group mt-3">
              <label htmlFor="category">Categoria:</label>
              <select
                className="form-control"
                name="category"
                id="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="idea">Idea</option>
                <option value="real-project">Proyecto real</option>
                <option value="resource">Recurso</option>
                <option value="debate">Discusión</option>
                <option value="education">Educación</option>
                <option value="general">General</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="title">Título:</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                id="title"
                className="form-control"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="pitch">Pitch:</label>
              <textarea
                name="pitch"
                id="pitch"
                className="form-control"
                value={pitch}
                onChange={(e) => {
                  setPitch(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="mt-3">
              <MDEditor value={content} onChange={setContent} />
            </div>
            <div className="form-group">
              <button
                className="btn btn-info"
                onClick={() => {
                  onSubmit();
                }}
              >
                Enviar
              </button>
            </div>
          </div>
        </CenteredColRow>
      </GeneralLayout>
    );
  }
};

export default newEntry;
