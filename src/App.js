import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import DefinitionDisplay from "./components/DefinitionDisplay";
import SearchBar from "./components/SearchBar";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      words: props.words,
      currentWord: props.words[0]
    }

    // https://reactjs.org/docs/handling-events.html
    this.onHeadword = this.onHeadword.bind(this);
  }

  onHeadword(newWord) {
    this.setState({ currentWord : newWord });
  }

  render() {
    return(
      <div>
        <CssBaseline />
        <SearchBar words={this.state.words} onHeadword={this.onHeadword} /> 
        <Container disableGutters maxWidth="md">
          <DefinitionDisplay word={this.state.currentWord} />
        </Container>
      </div>
    );
  }
}

export default App;