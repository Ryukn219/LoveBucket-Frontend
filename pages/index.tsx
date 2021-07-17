import React from "react";
import { NextPage } from "next";
import { Typography } from "@material-ui/core";

export const IndexPage: NextPage = (): JSX.Element => {
  return (
    <>
      <Typography>Hello World!!</Typography>
    </>
  );
};

IndexPage.getInitialProps = async () => {
  return {};
};

export default IndexPage;
