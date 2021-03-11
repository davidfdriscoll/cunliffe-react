import React from "react";
import { nanoid } from "nanoid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// renders TextArray, receiving as props textArrayObj, variant, typoClass

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

export default function TextArray(props) {
  return (
    <Typography 
      key={nanoid()} 
      variant={props.variant}
      className={props.typoClass}
      component={'span'} //to avoid error of <div> inside of Typography's default <p>, https://stackoverflow.com/questions/41928567/div-cannot-appear-as-a-descendant-of-p
    >
      {props.textArrayObj.data.map(textItem =>
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