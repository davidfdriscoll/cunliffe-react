import React from "react";
import { nanoid } from "nanoid";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";

// renders TextArray, receiving as props textArrayObj, variant, typoClass

const fontWeightDict = new Map([
  ['text', 'fontWeightMedium'],
  ['gloss', 'fontWeightBold'],
  ['quote', 'fontWeightLight'],
  ['bibl', 'fontWeightLight'],
  ['term', 'fontWeightMedium'],
  ['small_text', 'fontWeightLight'],
  ['formHead', 'fontWeightBold'],
  ['ref', 'fontWeightMedium'],
]);

const fontStyleDict = new Map([
  ['text', 'normal'],
  ['gloss', 'italic'],
  ['quote', 'italic'],
  ['bibl', 'italic'],
  ['term', 'normal'],
  ['small_text', 'italic'],
  ['formHead', 'italic'],
  ['ref', 'normal'],
]);

const fontSizeDict = new Map([
  ['text', 'fontSize'],
  ['gloss', 'fontSize'],
  ['quote', 'caption.fontSize'],
  ['bibl', 'caption.fontSize'],
  ['term', 'fontSize'],
  ['small_text', 'caption.fontSize'],
  ['formHead', 'fontSize'],
  ['ref', 'fontSize'],
]);

export default function TextArray(props) {
  return (
    <Typography 
      key={nanoid()} 
      variant={props.variant}
      className={props.typoClass}
      display={props.display ? props.display : 'block'} // with component = 'span' makes display inline.
      component={'span'} //to avoid error of <div> inside of Typography's default <p>, https://stackoverflow.com/questions/41928567/div-cannot-appear-as-a-descendant-of-p
    >
      {props.textArrayObj.data.map(function(textItem, index) {        
        return(<Box 
          key={nanoid()} 
          display="inline"
          fontWeight={index < 8 ? fontWeightDict.get(textItem.textType) : 'fontWeightLight'}
          fontStyle={index < 8 ? fontStyleDict.get(textItem.textType) : 'italic'}
          fontSize={index < 8 ? fontSizeDict.get(textItem.textType) : 'caption.fontSize'}
        >
          {
            (textItem.textType !== 'ref') ? textItem.text :
            <Link 
              to={"/" + textItem.target}
            >
              {textItem.text}
            </Link>
          }
        </Box>
      )})}
    </Typography>
  );
}