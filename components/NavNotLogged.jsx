import React from "react";

import { signIn } from "next-auth/client";

const NavNotLogged = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <img
            src="dog.svg"
            alt="doglogo"
            srcset=""
            height="24px"
            className="mr-3"
          />
          <a
            className="navbar-brand ml-5"
            href="/"
            style={{ color: "rgb(255, 136,0)" }}
          >
            Data Underdogs
          </a>
          {/*           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/dashboard">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/post">
                <a className="nav-link active" aria-current="page">
                  Post
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/new-entry">
                <a className="nav-link active" aria-current="page">
                  Nuevo post
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/todos-example">
                <a
                  className="nav-link disabled"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </Link>
            </li>
          </ul> */}
        </div>
        <div>
          <button className="btn btn-info" onClick={signIn}>
            Acceder
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavNotLogged;
