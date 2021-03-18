import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import DefinitionDisplay from "./components/pages/DefinitionDisplay";
import SearchBar from "./components/pages/SearchBar";
import cunliffeLexicon from "./cunliffe.json";

const headwords = cunliffeLexicon.map(word => word.headword);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bcbcbc',
      dark: '#ffffff',
      main: '#eeeeee',
    }
  }
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentWord: cunliffeLexicon[0]
    }

    // https://reactjs.org/docs/handling-events.html
    this.onHeadword = this.onHeadword.bind(this);
  }

  onHeadword(newHeadword) {
    if(newHeadword) {
      let newWord = cunliffeLexicon.filter(newWords => newWords.headword === newHeadword)[0];
      this.setState({ currentWord : newWord });
    }
    else {
      this.setState({ currentWord : cunliffeLexicon[0] });
    }
  }

  render() {
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchBar words={headwords} onHeadword={this.onHeadword} /> 
        <Container disableGutters maxWidth="md">
          <DefinitionDisplay word={this.state.currentWord} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;