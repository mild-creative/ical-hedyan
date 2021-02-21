import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from '../styles/reception';

import AkadNikah from './akad-nikah-info';
import CounterBox from './counter-box';

function Reception({ counter = 0 }) {
  const classes = useStyles();
  
  return (
    <div className={classes.receptionContainer}>
      <Typography align="center" className={classes.saveTheDate}>Save The Date</Typography>
      <Grid container alignItems="center">
        <Grid item justify="center" alignItems="center" container sm={4} md={3}>
          <Grid item md={4} lg={3}>
            <CounterBox item="Hari" keyItem="days" counter={counter.days} />
          </Grid>
          <Grid item md={4} lg={3}>
            <CounterBox item="Jam" keyItem="hours" counter={counter.hours} />
          </Grid>
        </Grid>
        <Grid container item justify="center" sm={4} md={6}>
          <Grid item sm={12} md={12} className={classes.infoWithIcons}>
            <AkadNikah akad={true} />
          </Grid>
          {/* <Grid item sm={4} md={6} className={classes.infoWithIcons}>
            <AkadNikah akad={true} />
          </Grid> */}
          {/* <Grid item sm={4} md={6} className={classes.infoWithIcons}>
            <AkadNikah />
          </Grid> */}
        </Grid>
        <Grid item justify="center" alignItems="center" container sm={4} md={3}>
          <Grid item md={4} lg={3}>
            <CounterBox item="Menit" keyItem="mins" counter={counter.mins} />
          </Grid>
          <Grid item md={4} lg={3}>
            <CounterBox item="Detik" keyItem="sec" counter={counter.sec} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default React.memo(Reception);