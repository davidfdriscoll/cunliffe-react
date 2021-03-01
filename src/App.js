import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DefinitionDisplay from "./components/DefinitionDisplay";
import SearchBar from "./components/SearchBar";

const useStyles = makeStyles((theme) => ({

}));

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
        <SearchBar />
        <DefinitionDisplay />
    </Container>
  );
}

export default App;