import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextArray from "./TextArray";
import Definition from "./Definition";

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
      <Typography variant="h5">{props.word.headword}</Typography>
      {props.word.etym.map(etym => <TextArray textArrayObj={etym} variant="body1" />)}
      {props.word.forms.map(form => <TextArray textArrayObj={form} variant="body2" />)}
      <Divider />
      <Definition definitionObj={props.word.defs} />
    </Paper>
  );
}