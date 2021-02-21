import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from '../styles/streaming';
import Thumbnail from './youtube-thumbnail';

function Streaming() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <div style={{textAlign:'center'}}>
      <Typography className={classes.profileName}>Live Streaming</Typography>
      </div>
      <br></br>
      <Thumbnail />
    </Container>
  );
}
export default Streaming;