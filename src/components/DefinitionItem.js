import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { nanoid } from "nanoid";
import clsx from 'clsx';
import TextArray from './TextArray';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

// this component takes an arbitrary part of a definition (branch, meaning, submeaning)
// and displays it in a Box (flex) with text

// It receives as props:
// head (string) (e.g. I, 1, a)
// text (TextArrayObj)
// nesting (integer level of nesting)

// and returns a Box

const useStyles = makeStyles((theme) => ({
    nested: {
      paddingLeft: theme.spacing(4),
    },
    doubleNested: {
      paddingLeft: theme.spacing(8),
    },
    listitem: {
      paddingTop: 0,
      paddingBottom: 0
    },
    headnumber: {
      // hacky, imperfect attempt to align number;
      // consider alternative approach at https://stackoverflow.com/questions/61954501/material-ui-grid-baseline-alignment-for-button-buttongroup-and-typography
      paddingTop: theme.spacing(.9),
      paddingRight: theme.spacing(.75),
      flexShrink: 0,
    }
  }));

export default function DefinitionItem(props) {
  const classes = useStyles();
  const defStyle = clsx('classes.listitem', {
    'classes.nested' : props.nesting===1,
    'classes.doubleNested' : props.nesting===2
  });

  return(
    <ListItem 
      align-items="flex-start" 
      className={defStyle}
    >
      <Typography key={nanoid()} variant='body2' className={classes.headnumber}>
        {props.head}
      </Typography>
      <ListItemText>
        <TextArray textArrayObj={props.textArrayObj} variant="body1" />
      </ListItemText>
    </ListItem>
  );
}