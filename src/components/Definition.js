import React from 'react';
import List from '@material-ui/core/List';
import Meaning from './Meaning';

//render Definition list from props.definitionObj

export default function Definition(props) {
  return(
    <List dense={true}>
      {props.definitionObj.data.map(meaningObj => <Meaning meaningObj={meaningObj} typoClass="body1" />)}
    </List>
  );
}