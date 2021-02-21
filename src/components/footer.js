import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#FFFFFF',
    backgroundColor: '#000000',
    padding: '.5rem 0',
    // [theme.breakpoints.down('xs')]: {
    //   marginBottom: '4rem'
    // }
    '& p': {
      fontSize: 12,
    },
    '& a': {
      textDecoration: 'none',
      color: '#FFFFFF'
    }
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* TO DO */}
      {/* <Typography align="center">
        <a href="https://www.youtube.com/watch?v=shctRA9vM24" target="blank">Music credit: Since I Found You - Christian Bautista (Desmond Amos ft. DA Entertainment)</a>
      </Typography> */}
      <Typography>Copyright © {new Date().getFullYear()}. Powered by Mhd Creative</Typography>
    </div>
  );
}

export default Footer;