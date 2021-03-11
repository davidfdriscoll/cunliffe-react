import React from "react";
import { nanoid } from "nanoid";
import DefinitionItem from "./DefinitionItem";
import Submeaning from "./Submeaning";

// renders Meaning (div of ListItems) based on props props.meaningObj and props.typoClass

export default function Meaning(props) {
  let meaningRender = [];

  props.meaningObj.data.forEach(function(meaningData, index) {
    let head = "";
    if(index===0) head = props.meaningObj.head;

    if(meaningData.type === 'textArray') {
      meaningRender.push(<DefinitionItem key={nanoid()} head={head} textArrayObj={meaningData} nesting={index===0 ? 0 : 1} />);
    }
    else if(meaningData.type === 'submeaning') {
      meaningRender.push(<Submeaning key={nanoid()} meaningHead={head} submeaningObj={meaningData} />);
    } 
  });

  return meaningRender;
}