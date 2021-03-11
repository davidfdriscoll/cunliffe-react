import React from "react";
import { nanoid } from "nanoid";
import DefinitionItem from "./DefinitionItem";

// Renders subsubmeaning based on props submeaningHead & subSubmeaningObj
// <SubSubmeaning key={nanoid()} submeaningHead={head} subSubmeaningObj={meaningData} />

export default function SubSubmeaning(props) {
  let subSubmeaningRender = [];

  props.subSubmeaningObj.data.forEach(function(subSubmeaningData, index) {
    let head = "";
    if(index===0) head = props.submeaningHead + ' ' + props.subSubmeaningObj.head;

    if(subSubmeaningData.type === 'textArray') {
      subSubmeaningRender.push(<DefinitionItem key={nanoid()} head={head} textArrayObj={subSubmeaningData} nesting={2} />);
    }
    else {
      console.log("Non textarray data in subsubmeaning");
    }
  }); 

  return subSubmeaningRender;
}