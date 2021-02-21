import React from 'react';
import {
  Container,
  Typography,
  Button
} from '@material-ui/core';
import useStyles from '../styles/opener';
import { opener } from '../constants';
import { browser } from '../helpers/browser';

function Opener({ handleClick }) {
  const classes = useStyles();
  return (
    <div className={classes.openerWrapper}>
      {/* {
        browser()
          ? <video id="banner" loop autoPlay='autoplay' muted src={BannerVideo} playsInline webkit-playsInline className={classes.videoBackground}></video>
          : null
      } */}
      <Container maxWidth="md" className={classes.containerOpener}>
        <Typography className={classes.top}>
          {opener.top}
        </Typography>
        <Typography className={classes.couplesName}>
          {`${opener.bride}`}
        </Typography>
        <Typography className={classes.and}>
          {`&`}
        </Typography>
        <Typography className={classes.couplesName}>
          {`${opener.groom}`}
        </Typography>
        <Typography>
          {opener.description}
        </Typography>
        {/* <Button onClick={handleClick} className={classes.buttonOpen}>
          Buka
        </Button> */}
        <a href="#" onClick={handleClick} className={classes.btnFlip} data-back="Open" data-front="Click me!" />

        <Typography className={classes.brand}>
          {opener.brand}
        </Typography>
      </Container>
    </div>
  )
}

export default Opener;
