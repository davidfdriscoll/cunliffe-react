import React from 'react';
import Container from '@material-ui/core/Container';
import DefinitionDisplay from "./components/DefinitionDisplay";
import SearchBar from "./components/SearchBar";
import HeadwordList from "./components/HeadwordList";

function App() {
  return (
    <Container>
      <SearchBar />
      <HeadwordList />
      <DefinitionDisplay />
    </Container>
  );
}

export default App;