import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DefinitionDisplay from "./components/DefinitionDisplay";
import SearchBar from "./components/SearchBar";

const useStyles = makeStyles((theme) => ({
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <SearchBar /> 
      <Container className={classes.container} disableGutters maxWidth="md">
        <DefinitionDisplay />
      </Container>
    </div>
  );
}

export default App;