import React from 'react';
import Grid from '@material-ui/core/Grid';
import DefinitionDisplay from "./components/DefinitionDisplay";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Grid container spacing={1} justify="center">
      <Grid item xs={12} lg={8}>
        <SearchBar />
      </Grid>
      <Grid item xs={12} lg={8}>
        <DefinitionDisplay />
      </Grid>      
    </Grid>
  );
}

export default App;