import React from "react";
import { nanoid } from "nanoid";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0),
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
    }
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
  avatar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  listitem: {
    paddingTop: 0,
    paddingBottom: 0
  }
}));

const fontWeightDict = new Map([
  ['text', 'fontWeightMedium'],
  ['gloss', 'fontWeightBold'],
  ['quote', 'fontWeightRegular'],
  ['bibl', 'fontWeightLight'],
  ['term', 'fontWeightMedium'],
  ['small_text', 'fontWeightLight'],
]);

const fontStyleDict = new Map([
  ['text', 'normal'],
  ['gloss', 'italic'],
  ['quote', 'normal'],
  ['bibl', 'italic'],
  ['term', 'normal'],
  ['small_text', 'italic'],
]);

const fontSizeDict = new Map([
  ['text', 'fontSize'],
  ['gloss', 'fontSize'],
  ['quote', 'caption.fontSize'],
  ['bibl', 'caption.fontSize'],
  ['term', 'fontSize'],
  ['small_text', 'caption.fontSize'],
]);

export default function DefinitionDisplay(props) {
  const classes = useStyles();

  function renderText(textArrayObj, variant, typoClass) {
    return (
      <Typography 
        key={nanoid()} 
        variant={variant}
        className={typoClass}
      >
        {textArrayObj.textArray.map(textItem =>
          <Box 
            key={nanoid()} 
            display="inline"
            fontWeight={fontWeightDict.get(textItem.textType)}
            fontStyle={fontStyleDict.get(textItem.textType)}
            fontSize={fontSizeDict.get(textItem.textType)}
          >
            {textItem.text}
          </Box>
        )}
      </Typography>
    );
  }

  function renderDefs(defArray) {
    let firstNestedDef = 1;
    let primaryText;
    let secondaryText = [];
    let avatar;
    if(defArray[0].textType && defArray[0].textType === 'headNumber') {
      avatar = (
        <ListItemAvatar>
          <ListItemText key={nanoid()} primary={defArray[0].text} />
        </ListItemAvatar>
      );
      primaryText = renderText(defArray[1], "body1");
      firstNestedDef = 2;
    }
    else {
      primaryText = renderText(defArray[0], "body1");
    }
    for(let i = firstNestedDef; i < defArray.length; i++) {
      secondaryText.push(renderText(defArray[i], "body1", classes.nested));
    }
    const secondaryTextDiv = (<div>{secondaryText}</div>);
  
    return (
      <ListItem dense className={classes.listitem}>
        {avatar}
        <ListItemText 
          key={nanoid()} 
          disableTypography
          primary={primaryText} 
          secondary={secondaryTextDiv}
        />  
      </ListItem> 
    );
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">{props.word.headword}</Typography>

      {props.word.etym.map(etym => (renderText(etym, "body1")))}

      {props.word.forms.map(form => (renderText(form, "body2")))}

      <Divider />
      <List dense={true}>
        {props.word.defs.map(def => renderDefs(def))}
      </List>

    </Paper>
  );
}