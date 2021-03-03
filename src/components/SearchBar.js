import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(3),
    flexGrow: 1,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const cunliffe10Words = [
  { headword: 'ἀγακλυτός' },
  { headword: 'ἀγάλλω' },
  { headword: 'ἄγαλμα' },
  { headword: '†ἄγαμαι' },
  { headword: 'ἄγαμος' },
  { headword: 'ἀγάννιφος' },
  { headword: 'ἀγανός' },
  { headword: 'ἀγανοφροσύνη' },
  { headword: 'ἀγανόφρων' },
  { headword: 'ἀγαπάζω' },
  { headword: 'ἀγαπάω' }
];

export default function SearchBar(props) {
  const classes = useStyles();

  function handleSubmit(e, newHeadword) {
    e.preventDefault();
    props.onHeadword(newHeadword);
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Cunliffe</Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <Autocomplete
            id="combo-box"
            options={cunliffe10Words}
            getOptionLabel={(option) => option.headword}
            onChange={(e,newHeadword) => {
              handleSubmit(e, newHeadword);
            }}
            renderInput={(params) => (
              <InputBase
                ref={params.InputProps.ref}
                inputProps={params.inputProps}
                autoFocus
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            )}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}