import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from '../styles/grid-gallery';
import { galleryImgs } from '../constants';

function Comment() {
  const classes = useStyles();
  const [showImage, setShowImg] = useState(false);

  const handleScrollTrigger = () => {
    const scrollYPos = window.scrollY;
    if (scrollYPos > 2500) {
      setShowImg(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollTrigger);
    return () => window.removeEventListener('scroll', handleScrollTrigger);
  }, [])

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography className={classes.guestBook}>Gallery</Typography>
      <Grid container className={classes.galleryContainer} spacing={2}>
        {showImage && galleryImgs.map((gal, index) => (
          <Grid item xs={6} md={6} className={classes.eachGallery}>
            <img alt={`gallery${index}`} src={gal} />
          </Grid>
        ))}
        {!showImage && [1, 2, 3, 4, 5, 6, 7, 8].map(skltn => (
          <Grid item xs={12} md={6} className={classes.eachGallery}>
            <Skeleton key={skltn} variant="rect" animation="wave" className={classes.imageLoader} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Comment;