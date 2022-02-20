// NextJS

// Next Auth
import { getSession, signOut } from "next-auth/client";

import Link from "next/link";

import { CenteredColRow } from "../components/Layout";

const EntriesList = ({ entries }) => {
  return (
    <div className="row width100">
      <div className="col-12">
        <div className="card text-center">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    </div>
  );
};

export default EntriesList;
