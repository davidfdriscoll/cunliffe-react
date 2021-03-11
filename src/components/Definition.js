import React from 'react';
import List from '@material-ui/core/List';
import Meaning from './Meaning';
import { nanoid } from "nanoid";

//render Definition list from props.definitionObj

export default function Definition(props) {
  return(
    <List key={nanoid()}>
      {props.definitionObj.data.map(meaningObj => <Meaning key={nanoid()} meaningObj={meaningObj} typoClass="body1" />)}
    </List>
  );
}