import React from "react";
import App from "next/app";
import Head from "next/head";
import { LoveBucketTheme } from "../components/layout/theme";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import { LoveBucketHeader } from "../components/layout/header/LoveBucketHeader";

class MyApp extends App {
  render(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { props } = this as any;
    const { Component, pageProps } = props;

    return (
      <>
        <Head>
          <title>LoveBucket</title>
        </Head>
        <MuiThemeProvider theme={LoveBucketTheme}>
          <LoveBucketHeader />
          <Grid container>
            <Component pageContext {...pageProps} />
          </Grid>
        </MuiThemeProvider>
      </>
    );
  }
}

export default MyApp;
