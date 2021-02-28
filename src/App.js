import React from 'react';
import Grid from '@material-ui/core/Grid';
import DefinitionDisplay from "./components/DefinitionDisplay";
import SearchBar from "./components/SearchBar";
import HeadwordList from "./components/HeadwordList";

function App() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
      <Grid item xs={12} sm={2}>
        <HeadwordList />
      </Grid>
      <Grid item xs={12} sm={10}>
        <DefinitionDisplay />
      </Grid>      
    </Grid>
  );
}

export default App;