import React, { useState } from 'react';
import { Container, useMediaQuery } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import ReactAudioPlayer from 'react-audio-player';
import useStyles from '../styles/content';

import Navbar from './navbar';
import Quote from './quote';
import Gallery from './gallery';
import Comment from './comment';
import DetailReception from './detail-reception';
import Footer from './footer';
import Carousel from './carousel';
import QuoteCarousel from './quote-carousel';
import GridGallery from './grid-gallery';
import EffectGallery from './effect-gallery';
// import Streaming from './streaming';
// import FloatingButton from './floating-menu';

// import Backsound from '../assets/mr-backsound.mp3';
import BannerRight from '../assets/banner-right.jpg';
import BannerLeft from '../assets/banner-left.jpg';
import Banner from '../assets/banner.jpg';

// const fotoToShow = 'https://images.pexels.com/photos/752831/pexels-photo-752831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

function Content({ open }) {
  const matches = useMediaQuery(theme => theme.breakpoints.up('md'));
  // const [mute, setMute] = useState(false);
  const [bannerLoaded, setLoaded] = useState(false);
  const classes = useStyles({ bannerLoaded });

  const handleImageLoader = () => {
    setLoaded(true);
  }

  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      {/* <QuoteCarousel /> */}
      {/* <ReactAudioPlayer
        src={Backsound}
        autoPlay
        loop
        muted={mute}
      />
      <FloatingButton
        mute={mute}
        setMute={setMute}
      /> */}
      <img
        src={Banner}
        alt="banner"
        width="100%"
        onLoad={handleImageLoader}
        className={classes.banner}
      />
      {!bannerLoaded && <Skeleton variant="rect" animation="wave" className={classes.bannerLoader} />}
      <Container className={classes.outerQuoteContainer} maxWidth={matches ? 'lg' : false}>
        <Quote
          preWord="Good Intention"
          highlightWord="Sincere"
          quote="Heart"
          img={BannerLeft}
          foto={BannerLeft}
        />
        <Quote
          reverse={true}
          preWord="Everything comes to you"
          highlightWord="The Best"
          quote="Time"
          img={BannerRight}
          foto={BannerRight}
        />
      </Container>
      <DetailReception />
      {/* <Streaming /> */}
      <GridGallery />
      <EffectGallery />
      <Comment />
      <Gallery />
      <Footer />
    </>
  );
}

export default Content;