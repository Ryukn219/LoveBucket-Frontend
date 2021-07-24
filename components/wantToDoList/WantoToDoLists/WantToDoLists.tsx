import React from "react";
import { makeStyles, Box, Typography, Theme } from "@material-ui/core";
import WantToDoList from "../WantToDoList/WantToDoList";

const useStyles = makeStyles((theme: Theme) => ({
  headingText: {
    paddingTop: "5%",
    paddingBottom: "5%",
    fontWeight: 500,
    fontSize: "20px",
    color: theme.palette.text.primary,
  },
  box: {
    marginTop: "5%",
    width: "90%",
    backgroundColor: theme.palette.primary.main,
    textAlign: "center",
    paddingBottom: "10%",
    borderRadius: "16px",
    marginLeft: "5%",
  },
}));

type WantToDoListsProps = {
  wantToDoListsIds?: string[];
};

const WantToDoLists: React.FC<WantToDoListsProps> = (
  props: WantToDoListsProps
): JSX.Element => {
  const classes = useStyles();
  const { wantToDoListsIds } = props;
  return (
    <Box className={classes.box}>
      <Typography className={classes.headingText}>
        やりたいことリスト
      </Typography>
      {wantToDoListsIds?.map((id) => {
        return <WantToDoList id={id} key={id} />;
      })}
    </Box>
  );
};

export default WantToDoLists;
