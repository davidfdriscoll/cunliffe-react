import React from "react";
import { nanoid } from "nanoid";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { useParams } from 'react-router-dom';

import TextArray from "../atoms/TextArray";
import Definition from "./Definition";

import cunliffeLexicon from "../../cunliffe.json";

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
  const {URLWord} = useParams();
  let word = cunliffeLexicon.filter(newWords => newWords.headword === URLWord)[0];

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">{word.headword}</Typography>
      {word.etym.map(etym => <TextArray key={nanoid()} textArrayObj={etym} variant="body1" />)}
      {word.forms.map(form => <TextArray key={nanoid()} textArrayObj={form} variant="body2" />)}
      <Divider />
      <Definition definitionObj={word.defs} />
    </Paper>
  );
}