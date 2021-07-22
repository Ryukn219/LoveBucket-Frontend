import React from "react";
import {
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Button,
  IconButton,
} from "@material-ui/core";
import { AccountCircle as AccountCircleIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontWeight: 500,
      fontSize: "32px",
      padding: theme.spacing(2),
    },
    header: {
      marginTop: theme.spacing(3),
      textAlign: "center",
      alignItems: "center",
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
      <Grid container className={classes.header}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Typography className={classes.text} color="textSecondary">
            Love Bucket
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary" fullWidth>
            <Typography color="textPrimary">カップル名</Typography>
          </Button>
        </Grid>
        <Grid item xs={2}>
          {/* TODO enlarge iconButton*/}
          <IconButton>
            <AccountCircleIcon color="secondary" />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default LoveBucketHeader;
