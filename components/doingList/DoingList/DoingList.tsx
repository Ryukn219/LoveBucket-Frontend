import React from "react";
import {
  ListItemText,
  ListItemIcon,
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";
import { Inbox as InboxIcon } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  list: {
    backgroundColor: "white",
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
  },
}));

type DoingListProps = {
  id?: string;
};

const DoingList: React.FC<DoingListProps> = (
  props: DoingListProps
): JSX.Element => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = props;
  return (
    <List className={classes.list}>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="一緒に住む" />
      </ListItem>
    </List>
  );
};

export default DoingList;
