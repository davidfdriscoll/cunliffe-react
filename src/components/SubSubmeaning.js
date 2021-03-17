import React from "react";
import { nanoid } from "nanoid";
import DefinitionItem from "./DefinitionItem";

// Renders subsubmeaning based on props meaningHead, submeaningHead & subSubmeaningObj
// <SubSubmeaning key={nanoid()} submeaningHead={head} subSubmeaningObj={meaningData} />

export default function SubSubmeaning(props) {
  let subSubmeaningRender = [];

  props.subSubmeaningObj.data.forEach(function(subSubmeaningData, index) {
    let meaningHead = " ";
    let submeaningHead = " ";
    let head = " ";
    let indentSecond = " ";
    if(index===0) {
      head = props.subSubmeaningObj.head;
      meaningHead = props.meaningHead;
      submeaningHead = props.submeaningHead;
      indentSecond = "";
    }

    if(subSubmeaningData.type === 'textArray') {
      subSubmeaningRender.push(<DefinitionItem 
        key={nanoid()} 
        meaningHead={meaningHead}
        submeaningHead={submeaningHead} 
        subSubmeaningHead={head} 
        indentSubSubmeaning={indentSecond}
        textArrayObj={subSubmeaningData} 
      />);
    }
    else {
      console.log("Non textarray data in subsubmeaning");
    }
  }); 

  return subSubmeaningRender;
}