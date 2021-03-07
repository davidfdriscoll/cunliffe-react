import React from "react";
import { nanoid } from "nanoid";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0),
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
    }
  },
}));

export default function DefinitionDisplay(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">{props.word.headword}</Typography>

      {/* Etymology */}
      {props.word.etym.map(etym => (
        <Typography key={nanoid()} variant="subtitle1">{etym}</Typography>
      ))}

      {/* Forms */}
      {props.word.forms.map(form => (
        <Typography key={nanoid()} variant="body2">{form}</Typography>
      ))}

      {/* Definitions */}
      <List dense={true}>
        <Divider />
        {props.word.defs.map(def => (
          <ListItem>
            <ListItemText 
              key={nanoid()} 
              disableTypography
              primary={<Typography key={nanoid()} variant="body1">{def}</Typography>} 
            />      
          </ListItem>
        ))}
      </List>

    </Paper>
  );
}