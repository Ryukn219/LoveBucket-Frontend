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

type DoneListProps = {
  id?: string;
};

const DoneList: React.FC<DoneListProps> = (
  props: DoneListProps
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
        <ListItemText primary="旅行に行く" />
      </ListItem>
    </List>
  );
};

export default DoneList;
