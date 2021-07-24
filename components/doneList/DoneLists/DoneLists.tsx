import React from "react";
import { makeStyles, Theme, Box, Typography } from "@material-ui/core";
import DoneList from "../DoneList/DoneList";

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

type DoneListsProps = {
  doneListsIds?: string[];
};

const DoneLists: React.FC<DoneListsProps> = (
  props: DoneListsProps
): JSX.Element => {
  const classes = useStyles();
  const { doneListsIds } = props;
  return (
    <Box className={classes.box}>
      <Typography className={classes.headingText}>やったことリスト</Typography>
      {doneListsIds?.map((id) => {
        return <DoneList id={id} key={id} />;
      })}
    </Box>
  );
};

export default DoneLists;
