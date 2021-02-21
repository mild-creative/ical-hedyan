import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import useStyles from '../styles/detail';
import { weddingDetailTop, bride, groom } from '../constants';

function WeddingDetail() {
  const classes = useStyles();
  return (
    <div id="detail" className={classes.detailContainer}>
      <div className={classes.topContainer}>
        <Typography align="center" className={classes.bismillah}>{weddingDetailTop.bismillah}</Typography>
        <Typography align="center">{weddingDetailTop.artiAyat}</Typography>
        <Typography align="center">{weddingDetailTop.surat}</Typography>
      </div>
      <Typography justify="center" align="center" className={classes.spousesName}>{bride.name}</Typography>
      <Container maxWidth="lg">
        <Grid container alignItems="center" className={classes.profileGrid} spacing={2}>
          <Grid item xs={5} md={5} className={classes.leftImage}>
            <img src={bride.img} alt="Bride" />
          </Grid>
          <Grid item xs={7} md={7} style={{maxWidth: '500px'}}>
            <Typography className={classes.profileName}>{bride.fullName}</Typography>
            <Typography className={classes.profileKeterangan}>{bride.kidPos}</Typography>
            <div className={classes.parents}>
              <Typography>{bride.pop}</Typography>
              <Typography>{`& ${bride.mom}`}</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Typography align="center" className={classes.spousesName}>{groom.name}</Typography>
      <Container maxWidth="lg">
        <Grid container alignItems="center" className={classes.profileGrid} spacing={2}>
          <Grid item xs={7} md={7} className={classes.leftProfile}>
            <div style={{maxWidth: '500px'}}>
              <Typography className={classes.profileName}>{groom.fullName}</Typography>
              <Typography className={classes.profileKeterangan}>{groom.kidPos}</Typography>
              <div className={classes.parents}>
                <Typography>{groom.pop}</Typography>
                <Typography>{`& ${groom.mom}`}</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={5} md={5}>
            <img src={groom.img} alt="Groom" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default WeddingDetail;