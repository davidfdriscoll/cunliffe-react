import React from "react";
import { nanoid } from "nanoid";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useParams } from 'react-router-dom';

import TextArray from "../atoms/TextArray";
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
  loadingPaper: {
    margin: theme.spacing(0),
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  loadingIcon: {
    margin: theme.spacing(5),
  },
}));

export default function DefinitionDisplay(props) {
  const classes = useStyles();
  const {URLWord} = useParams();
  const word = props?.cunliffeLexicon?.filter(newWords => newWords.headword === URLWord)[0];

  return (
    props.isLoading 
      ? 
        <Paper className={classes.loadingPaper} alignItems="center">
          <CircularProgress className={classes.loadingIcon} />
        </Paper>
      :
        <Paper className={classes.paper}>
          <Typography variant="h5">{word.displayHeadword}</Typography>
          {word.etym.map(etym => <TextArray key={nanoid()} textArrayObj={etym} variant="body1" />)}
          {word.forms.map(form => <TextArray key={nanoid()} textArrayObj={form} variant="body2" />)}
          <Divider />
          <Definition definitionObj={word.defs} />
        </Paper>
  );
}