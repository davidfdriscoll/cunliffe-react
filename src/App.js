import React, { Component } from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import DefinitionDisplay from "./components/pages/DefinitionDisplay";
import SearchBar from "./components/pages/SearchBar";
import cunliffeLexicon from "./cunliffe.json";

const headwords = cunliffeLexicon.map(word => {
  return {'headword': word.headword,
  'headwordMatch': word.headword + ' ' + word.transliteration};
});

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

  render() {
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <SearchBar words={headwords} /> 
          <Container disableGutters maxWidth="md">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/ἆ" />
                </Route>
                <Route exact path="/undefined">
                  <Redirect to="/ἆ" />
                </Route>
                <Route path="/:URLWord">
                  <DefinitionDisplay />
                </Route>
              </Switch>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;