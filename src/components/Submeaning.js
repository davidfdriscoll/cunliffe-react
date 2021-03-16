import React from "react";
import { nanoid } from "nanoid";
import DefinitionItem from "./DefinitionItem";
import SubSubmeaning from "./SubSubmeaning";

// Renders submeaning based on props meaningHead & submeaningObj

export default function Submeaning(props) {
  let submeaningRender = [];

  props.submeaningObj.data.forEach(function(submeaningData, index) {
    let meaningHead = " ";
    let head = " ";
    let indentSecond = " ";
    if(index===0) {
      meaningHead = props.meaningHead;
      head = props.submeaningObj.head;
      indentSecond = "";
    }

    if(submeaningData.type === 'textArray') {
      submeaningRender.push(<DefinitionItem 
        key={nanoid()} 
        meaningHead={meaningHead}
        submeaningHead={head} 
        subSubmeaningHead={indentSecond}
        textArrayObj={submeaningData} 
      />);
    }
    else if(submeaningData.type === 'subsubmeaning') {
      submeaningRender.push(<SubSubmeaning 
        key={nanoid()} 
        meaningHead={meaningHead}
        submeaningHead={head} 
        subSubmeaningObj={submeaningData} 
      />);
    }
  }); 

  return submeaningRender;
}