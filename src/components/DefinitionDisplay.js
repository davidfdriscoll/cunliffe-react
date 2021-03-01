import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(2),
    },
  }));

export default function DefinitionDisplay() {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Typography variant="body1">TYPOGRAPHY DEFINITION</Typography>
    </Paper>

  );
  }