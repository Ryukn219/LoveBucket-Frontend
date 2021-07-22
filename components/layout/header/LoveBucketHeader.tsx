import React from "react";
import { Typography, makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontWeight: 700,
      padding: theme.spacing(2),
    },
  })
);

type LoveBuckerHeaderProps = {
  login?: boolean;
};

export const LoveBucketHeader: React.FC<LoveBuckerHeaderProps> = (
  props: LoveBuckerHeaderProps
): JSX.Element => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { login } = props;
  return (
    <>
      <Typography className={classes.text}>Test</Typography>
    </>
  );
};

export default LoveBucketHeader;
