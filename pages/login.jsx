import React, { useEffect } from "react";
import { BlankLayout, CenteredColRow } from "../components/Layout";

import Link from "next/link";

import { signIn, signOut, providers, getSession } from "next-auth/client";

import Router from "next/router";

import { Google, Github, Twitter, Envelope } from "react-bootstrap-icons";

// REACT HOOK FORM
import { useForm } from "react-hook-form";

const Login = ({ providers, session }) => {
  const { register, handleSubmit, reset } = useForm();

  const icons = {
    google: <Google />,
    github: <Github />,
    twitter: <Twitter />,
  };

  const provs = Object.values(providers);
  useEffect(() => {
    if (session) {
      return Router.push("/dashboard");
    }
  }, [session]);

  const onSubmit = async ({ email }) => {
    await signIn("email", { email });
  };

  return (
    <BlankLayout>
      <CenteredColRow
        breakpoint="md"
        centerColSize={6}
        centerColClasses="min80 d-flex flex-column align-items-center justify-content-between"
      >
        <h1 className="mt-5">Ingresar</h1>
        <img
          src="dog.svg"
          alt="doglogo"
          srcset=""
          height="200px"
          className="mr-3"
        />
        <div className="width100 mb-5">
          <div className="d-grid gap-2 col-8 mx-auto">
            <p>Utiliza tu servicio favorito para autenticarte</p>
          </div>
          {provs.map((provider) => {
            // El login con Email es tratado aparte
            if (provider.id == "email") {
              return;
            }
            // Login con OAuth de terceros
            return (
              <div key={provider.name} className="d-grid gap-2 col-8 mx-auto">
                <button
                  className="btn btn-dark"
                  onClick={() => signIn(provider.id)}
                >
                  {icons[provider.id]} Ingresar con {provider.name}
                </button>
              </div>
            );
          })}
          <div className="d-grid gap-2 col-8 mx-auto">
            <hr />
            <p>O ingresa con un Magic Link en tu Email</p>
            <p style={{ fontSize: "0.8em" }}>
              El enlace mágico es una forma segura de acceder sin contraseña.
              Recibirás en tu correo electrónico un enlace que tendrá validez
              durante 24horas con el que podrás acceder a la plataforma de forma
              segura y sin contraseña.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  {...register("email")}
                  placeholder="name@domain.com"
                />
              </div>
              <button
                type="submit"
                className="form-control btn btn-outline-dark"
              >
                {<Envelope />} Enviar enlace a mi Email
              </button>
            </form>
            <Link href="/">
              <a className="nav-link active text-center mt-5 " aria-current="page">
                Ir a la página principal
              </a>
            </Link>
          </div>
        </div>
      </CenteredColRow>
    </BlankLayout>
  );
};

Login.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
    session: await getSession(context),
  };
};

export default Login;
