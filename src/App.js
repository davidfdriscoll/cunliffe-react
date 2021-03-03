import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import DefinitionDisplay from "./components/DefinitionDisplay";
import SearchBar from "./components/SearchBar";

function App() {
  function onHeadword(newHeadword) {
    alert(newHeadword.headword);
    console.log(newHeadword);
  }

  return (
    <div>
      <CssBaseline />
      <SearchBar onHeadword={onHeadword} /> 
      <Container disableGutters maxWidth="md">
        <DefinitionDisplay />
      </Container>
    </div>
  );
}

export default App;