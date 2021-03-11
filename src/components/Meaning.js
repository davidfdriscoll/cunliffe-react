import React from "react";
import { nanoid } from "nanoid";
import { makeStyles } from '@material-ui/core/styles';
import TextArray from "./TextArray";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// renders Meaning (one ListItem) based on props props.meaningObj and props.typoClass

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(3),
  },
  doubleNested: {
    paddingLeft: theme.spacing(6),
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
  }
}));

export default function Meaning(props) {
  const classes = useStyles();

  let secondaryText = [];

  // Set first item in meaningObj data as primaryText, assuming that it's a textArray
  let primaryText = <TextArray textArrayObj={props.meaningObj.data[0]} variant={props.typoClass} />;

  // Iterate over the remaining objects in meaningObj.data
  for(let i = 1; i < props.meaningObj.data.length; i++) {
    const unknownObj = props.meaningObj.data[i];

    // If the object is a textArray, it's a minor submeaning. Push to secondaryText
    if(unknownObj.type === 'textArray') {
      secondaryText.push(<TextArray textArrayObj={unknownObj} variant={props.typoClass} typoClass={classes.nested} />);
    }

    // If the object is a submeaning, more is needed.
    else if(unknownObj.type === 'submeaning') {
      let submeaning = unknownObj;
      let prefix = [{type: 'prefix', text: submeaning.head + ' '}];
      if(submeaning.data[0].type === 'textArray') {
        let newTextArray = prefix.concat(submeaning.data[0].data);
        let newTextArrayObj = {type: 'textarray', data: newTextArray};
        secondaryText.push(<TextArray textArrayObj={newTextArrayObj} variant={props.typoClass} typoClass={classes.nested} />);
      }
      else if(submeaning.data[0].type === 'subsubmeaning') {
        let ssmItem = submeaning.data[0];
        let ssmItemPrefix = [{type: 'prefix', text: ssmItem.head + ' '}];

        let newTextArray = prefix.concat(ssmItemPrefix, ssmItem.data[0].data);
        let newTextArrayObj = {type: 'textarray', data: newTextArray};
        console.log(ssmItem);
        console.log(newTextArray);
        console.log(newTextArrayObj);
        secondaryText.push(<TextArray textArrayObj={newTextArrayObj} variant={props.typoClass} typoClass={classes.nested} />);
        for(let i=1; i< ssmItem.data.length; i++) {
          secondaryText.push(<TextArray textArrayObj={ssmItem.data[i]} variant={props.typoClass} typoClass={classes.nested} />);
        }        
      }
      for(let i=1; i < submeaning.data.length; i++) {
        let smItem = submeaning.data[i];
        if(smItem.type === 'textArray') {
          secondaryText.push(<TextArray textArrayObj={smItem} variant={props.typoClass} typoClass={classes.doubleNested} />);
        }
        else if(smItem.type === 'subsubmeaning') {
          smItem.data.forEach(ssmItem => {
            if(ssmItem.type === 'textArray') {
              secondaryText.push(<TextArray textArrayObj={ssmItem} variant={props.typoClass} typoClass={classes.doubleNested} />);              
            }
          });
        }
      }
    }
  }
  const secondaryTextDiv = (<div>{secondaryText}</div>);

  return (
    <ListItem dense alignItems='flex-start' className={classes.listitem}>
      <Typography key={nanoid()} variant='body2' className={classes.headnumber}>{props.meaningObj.head}</Typography>
      <ListItemText 
        key={nanoid()} 
        disableTypography
        primary={primaryText}
        secondary={secondaryTextDiv}
      />  
    </ListItem> 
  );
}