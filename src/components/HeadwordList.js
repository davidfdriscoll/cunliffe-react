import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function HeadwordTable() {
    return (
        <List>
          <ListItem selected={true}>
            <ListItemText primary="ἀγείρω" />
          </ListItem>
          <ListItem>
            <ListItemText primary="ἀγείρω" />
          </ListItem>
          <ListItem>
            <ListItemText primary="ἀγείρω" />
          </ListItem>
        </List>
    );
  }