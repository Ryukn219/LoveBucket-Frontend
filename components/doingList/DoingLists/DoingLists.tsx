import React from "react";
import {
  makeStyles,
  Box,
  Typography,
  Theme,
  IconButton,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import DoingList from "../DoingList/DoingList";

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
    paddingBottom: "3%",
    borderRadius: "16px",
    marginLeft: "5%",
  },
  addIcon: {
    color: "white",
    marginTop: "3%",
  },
}));

type DoingListsProps = {
  doingListsIds?: string[];
};

const DoingLists: React.FC<DoingListsProps> = (
  props: DoingListsProps
): JSX.Element => {
  const classes = useStyles();
  const { doingListsIds } = props;
  return (
    <Box className={classes.box}>
      <Typography className={classes.headingText}>実行中リスト</Typography>
      {doingListsIds?.map((id) => {
        return <DoingList id={id} key={id} />;
      })}
      <IconButton className={classes.addIcon}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default DoingLists;
