import "../styles/globals.css";
import type { AppProps } from "next/app";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import AuthContext from "../context/AuthContext";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import subscribeToNewsLetter from "./api/subscriptions/subscribeToNewsLetter";
Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <AuthContext>
        <NavBar />
        <Component {...pageProps} />
        <Footer subscribeToNewsLetter={subscribeToNewsLetter}></Footer>
      </AuthContext>
    </React.Fragment>
  );
}

export default MyApp;
