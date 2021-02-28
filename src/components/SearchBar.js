import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography";

export default function SearchBar() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6">R.J. Cunliffe - A Lexicon of the Homeric Dialect</Typography>
            </Toolbar>
        </AppBar>
    );
  }