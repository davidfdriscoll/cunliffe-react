import React from 'react';
import axios from 'axios';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import DefinitionDisplay from "./components/pages/DefinitionDisplay";
import SearchBar from "./components/pages/SearchBar";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bcbcbc',
      dark: '#ffffff',
      main: '#eeeeee',
    }
  }
});

function App() {
  const [cunliffeLexicon, setCunliffeLexicon] = React.useState();
  const [headwords, setHeadwords] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchCunliffe() {
      const cunRes = await axios.get("cunliffe.json");
      console.log(cunRes);
      setCunliffeLexicon(cunRes.data);
      setHeadwords(cunRes.data.map(word => {
        return {'headword': word.headword,
        'headwordMatch': word.headword + ' ' + word.transliteration};
      }));
      setIsLoading(false);
    }
    fetchCunliffe();
  }, []);

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <SearchBar words={headwords} isLoading={isLoading} /> 
        <Container disableGutters maxWidth="md">
          <Switch>
            <Route exact path="/">
              <Redirect to="/ἆ" />
            </Route>
            <Route exact path="/undefined">
              <Redirect to="/ἆ" />
            </Route>
            <Route path="/:URLWord">
              <DefinitionDisplay cunliffeLexicon={cunliffeLexicon} isLoading={isLoading} />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;