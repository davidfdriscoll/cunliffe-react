import React from "react";
import { nanoid } from "nanoid";
import DefinitionItem from "./DefinitionItem";
import SubSubmeaning from "./SubSubmeaning";

// Renders submeaning based on props meaningHead & submeaningObj

export default function Submeaning(props) {
  let submeaningRender = [];

  props.submeaningObj.data.forEach(function(submeaningData, index) {
    let head = "";
    if(index===0) head = props.meaningHead + ' ' + props.submeaningObj.head;

    if(submeaningData.type === 'textArray') {
      submeaningRender.push(<DefinitionItem key={nanoid()} head={head} textArrayObj={submeaningData} nesting={index===0 ? 1 : 2} />);
    }
    else if(submeaningData.type === 'subsubmeaning') {
      submeaningRender.push(<SubSubmeaning key={nanoid()} submeaningHead={head} subSubmeaningObj={submeaningData} />);
    }
  }); 

  return submeaningRender;
}