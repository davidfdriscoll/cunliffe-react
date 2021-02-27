import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default function SearchBar() {
    return (
        <Box>
            <Box>
                <Typography variant="h5">R.J. Cunliffe</Typography>
                <Typography variant="h4">A Lexicon of the Homeric Dialect</Typography>
            </Box>
            <TextField variant="outlined"></TextField>
        </Box>
    );
  }