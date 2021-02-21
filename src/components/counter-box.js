import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../styles/reception';
import useCountdown from '../helpers/countdown';

function CounterBox({ item, keyItem}) {
  const classes = useStyles();
  const timeLeft = useCountdown(keyItem);

  return (
    <div className={classes.countDownEach}>
      <Typography className={classes.numberCounter} align="center">{timeLeft}</Typography>
      <Typography align="center">{item}</Typography>
    </div>
  );
}

export default CounterBox;