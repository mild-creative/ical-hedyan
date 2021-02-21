import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../styles/opener';
import { navbar } from '../constants';

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar color="default" position="static" className={classes.appbar}>
      <Typography align="center" className={classes.theWedding}>{navbar.topWords}</Typography>
      <Toolbar variant="dense">
        <NavLink to="/" className={classes.brandName}>
          <Typography align="center">{navbar.topName}</Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;