import "../styles/globals.css";
import type { AppProps } from "next/app";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import AuthContext from "../context/AuthContext";
import React from "react";
import Header from "../components/Header";
Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <AuthContext>
        <Header />
        <Component {...pageProps} />
      </AuthContext>
    </React.Fragment>
  );
}

export default MyApp;
