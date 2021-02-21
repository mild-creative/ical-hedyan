import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../styles/reception';
//icons
import Clock from '../assets/clock-white.svg';
import Calendar from '../assets/calendar-white.svg';
import Pin from '../assets/map-location-white.svg';
import { EVENT_INFO } from '../constants';

function AkadNikah({ akad }) {
  const classes = useStyles();
  return (
    <div className={classes.infoIconsTextWrapper}>
      <Typography className={classes.akadNikah}>
        <span>
          {akad && 'Akad Nikah'}
          {!akad && 'Resepsi'}
        </span>
      </Typography>
      <Typography>
        <img src={Calendar} alt="map" width="40px" />
        <span>
          {akad && EVENT_INFO.AKAD.date}
          {!akad && EVENT_INFO.RESEPSI.date}
        </span>
      </Typography>
      <Typography>
        <img src={Clock} alt="clock" width="40px" />
        <span>
          {akad && EVENT_INFO.AKAD.time}
          {!akad && EVENT_INFO.RESEPSI.time}
        </span>
      </Typography>
      <Typography className={classes.placeInfo}>
        <img src={Pin} alt="calendar" width="40px" />
        <a
          href={EVENT_INFO.MAP_URL}
          target="blank"
          className={classes.placeInfoLink}
        >
          <span>{akad ? EVENT_INFO.AKAD.venue : EVENT_INFO.RESEPSI.venue}</span>
        </a>
      </Typography>
    </div>
  );
}

export default AkadNikah;