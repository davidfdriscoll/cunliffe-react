import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import DefinitionDisplay from "./components/DefinitionDisplay";
import SearchBar from "./components/SearchBar";

function App(props) {
  const [currentWord, setCurrentWord] = useState(props.words[0]);

  function onHeadword(newWord) {
    setCurrentWord(newWord);
  }
  return (
    <div>
      <CssBaseline />
      <SearchBar words={props.words} onHeadword={onHeadword} /> 
      <Container disableGutters maxWidth="md">
        <DefinitionDisplay word={currentWord} />
      </Container>
    </div>
  );
}

export default App;