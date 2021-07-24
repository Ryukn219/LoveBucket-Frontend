import React from "react";
import { NextPage } from "next";
import { Grid, createStyles, makeStyles } from "@material-ui/core";
import WantToDoLists from "../components/wantToDoList/WantoToDoLists/WantToDoLists";
import DoingLists from "../components/doingList/DoingLists/DoingLists";
import DoneLists from "../components/doneList/DoneLists/DoneLists";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginLeft: "3%",
      marginRight: "3%",
    },
  })
);

const wantToDoListsIds = ["0000001"];
const doingListsIds = ["0000001"];
const doneListsIds = ["0000001"];

export const IndexPage: NextPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={4}>
          <WantToDoLists wantToDoListsIds={wantToDoListsIds} />
        </Grid>
        <Grid item xs={4}>
          <DoingLists doingListsIds={doingListsIds} />
        </Grid>
        <Grid item xs={4}>
          <DoneLists doneListsIds={doneListsIds} />
        </Grid>
      </Grid>
    </>
  );
};

IndexPage.getInitialProps = async () => {
  return {};
};

export default IndexPage;
