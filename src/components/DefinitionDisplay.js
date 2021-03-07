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
  const EtymList = props.word.etym.map(etym => {
    let etymId = nanoid();
    return (<Typography key={etymId} variant="subtitle1">{etym}</Typography>);
  });
  const FormList = props.word.forms.map(form => {
    let formId = nanoid();
    return (<Typography key={formId} variant="body2">{form}</Typography>);
  });
  const DefList = props.word.defs.map(def => {
    let defId1 = nanoid();
    let defId2 = nanoid();
    return (
      <ListItem>
        <ListItemText 
          key={defId1} 
          disableTypography
          primary={<Typography key={defId2} variant="body1">{def}</Typography>} 
        />      
      </ListItem>
    );
  });
  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">{props.word.headword}</Typography>
      {EtymList}
      {FormList}
      <List dense={true}>
        <Divider />
        {DefList}
      </List>
    </Paper>
  );
}