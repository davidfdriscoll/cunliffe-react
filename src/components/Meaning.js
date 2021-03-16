import React from "react";
import { nanoid } from "nanoid";
import DefinitionItem from "./DefinitionItem";
import Submeaning from "./Submeaning";

// renders Meaning (div of ListItems) based on props props.meaningObj and props.typoClass

export default function Meaning(props) {
  let meaningRender = [];

  props.meaningObj.data.forEach(function(meaningData, index) {
    let head = " ";
    let indentSecond = " ";
    if(index===0) {
      head = props.meaningObj.head;
      indentSecond = "";
    }

    if(meaningData.type === 'textArray') {
      meaningRender.push(<DefinitionItem 
        key={nanoid()} 
        meaningHead={head} 
        submeaningHead={indentSecond}
        textArrayObj={meaningData} 
      />);
    }
    else if(meaningData.type === 'submeaning') {
      meaningRender.push(<Submeaning 
        key={nanoid()} 
        meaningHead={head} 
        submeaningObj={meaningData} 
      />);
    } 
  });

  return meaningRender;
}