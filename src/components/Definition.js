import React from 'react';
import List from '@material-ui/core/List';
import Branch from './Branch';
import { nanoid } from "nanoid";

//render Definition list from props.definitionObj

export default function Definition(props) {
  return(
    <List key={nanoid()}>
      {props.definitionObj.data.map(branchObj => 
        <Branch key={nanoid()} branchObj={branchObj} />)
      }
    </List>
  );
}