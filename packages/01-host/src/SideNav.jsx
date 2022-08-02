import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
  })
);

export default function SideNav() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/page1">
          <ListItemText primary="App 2 (Dialog)" />
        </ListItem>
        <ListItem button component={Link} to="/page2">
          <ListItemText primary="App 3 (Styled Components)" />
        </ListItem>
      </List>
    </Drawer>
  );
}
