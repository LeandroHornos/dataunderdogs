/* This component shows a list of cards containg basic info about 
a post a user has made*/

import { useState, useEffect, Fragment } from "react";

import { ArrowRight } from "react-bootstrap-icons";
import { ArrowLeft } from "react-bootstrap-icons";

const EntriesList = ({ entries }) => {
  const [firstEntry, setFirstEntry] = useState(0);
  const [lastEntry, setLastEntry] = useState(10);
  const [loading, setLoading] = useState(false);

  return (
    <div className="row width100">
      <div className="col-12">
        {loading ? (
          <p className="text-center">Cargando...</p>
        ) : (
          <Fragment>
            <EntriesNavButtons firstEntry={firstEntry} lastEntry={lastEntry} />
            {entries.map((entry) => {
              return <EntryListCard entry={entry} />;
            })}
            <EntriesNavButtons firstEntry={firstEntry} lastEntry={lastEntry} />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export const EntriesNavButtons = ({ firstEntry, lastEntry }) => {
  return (
    <div class="d-grid gap-2 d-flex justify-content-between pt-3 pb-3">
      <button
        className={`btn btn-outline-dark me-md-2 ${
          firstEntry === 0 ? "disabled" : ""
        }`}
        type="button"
      >
        <ArrowLeft /> Anterior
      </button>
      <button className="btn btn-outline-dark" type="button">
        Siguiente <ArrowRight />
      </button>
    </div>
  );
};

export const EntryListCard = ({ entry }) => {
  const { id, username, title, pitch, category } = entry;
  return (
    <div className="card shadow-sm" key={id}>
      <div className="card-header bg-dark text-white">
        <small>
          <span>
            <strong> Usuario: </strong>
          </span>
          {username}
          {" - "}
          <span>
            <strong>Categoría: </strong>
          </span>{" "}
          {category}
        </small>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{pitch}</p>
        <a href="#" className="btn btn-info">
          Ver Entrada
        </a>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
};

export default EntriesList;
