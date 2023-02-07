import React from "react";
import Router from "next/router";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
