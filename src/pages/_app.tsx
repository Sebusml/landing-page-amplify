import "../styles/globals.css";
import type { AppProps } from "next/app";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import AuthContext from "../context/AuthContext";
import React from "react";
import NavBar from "../components/NavBar";
Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <AuthContext>
        <NavBar />
        <Component {...pageProps} />
      </AuthContext>
    </React.Fragment>
  );
}

export default MyApp;
