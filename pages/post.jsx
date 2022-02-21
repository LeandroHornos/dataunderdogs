/* 
POST
This page presents the full view of a post
It shows the post content, written in markdown,
using react-showdown to display it.
*/

// Next Auth
import { getSession } from "next-auth/client";

// Next
import Link from "next/link";

// Components
import { GeneralLayout, CenteredColRow } from "../components/Layout";

import MarkdownView from "react-showdown";

// Sample Data
const sample_data = require("../sampledb/user-posts.json");

const post = () => {
  const { title, pitch, text, username } = sample_data[0];
  const comments = sample_data.slice(0, 10);

  const markdown = `
# Welcome to React Showdown :+1:

To get started, edit the markdown in \`example/src/App.tsx\`.

| Column 1 | Column 2 |
|----------|----------|
| A1       | B1       |
| A2       | B2       |
`;

  return (
    <GeneralLayout>
      <CenteredColRow centerColSize="8" breakpoint="md">
        <h1 className="mt-5">{title}</h1>
        <h3 className="mt-2">{username}</h3>
        <p className="mt-2">{pitch}</p>
        <div className="mt-5">
          <MarkdownView
            markdown={markdown}
            options={{ tables: true, emoji: true }}
          />
        </div>
      </CenteredColRow>
      <CenteredColRow centerColSize="8" breakpoint="md">
        <h2 className="mt-5">Comentarios</h2>
        <form action="" className="mb-5">
          <div className="form-group">
            <label htmlFor="comment">Escribe un comentario:</label>
            <textarea
              className="form-control"
              name="comment"
              id="comment"
              cols="30"
              rows="6"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-info">
              Enviar
            </button>
          </div>
        </form>
        <div>
          {comments.map((comment) => {
            return (
              <div className="card">
                <div className="card-header">{comment["username"]}</div>
                <div className="card-body">{comment["pitch"]}</div>
                <div className="card-footer">{comment["category"]}</div>
              </div>
            );
          })}
        </div>
      </CenteredColRow>
    </GeneralLayout>
  );
};

export default post;
