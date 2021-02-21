import React from 'react';
import Swiper from 'react-id-swiper';

import BannerRight from '../assets/banner-right.jpg';
import BannerLeft from '../assets/banner-left.jpg';
import Banner from '../assets/banner.jpg';

const CoverflowEffect = () => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination'
    }
  }

  return (
    // <div style={{height: '300px'}}>
    <Swiper {...params}>
      {/* <img src={Banner} className="swiper-slide" alt="banner" />
      <img src={Banner} className="swiper-slide" alt="banner" />
      <img src={Banner} className="swiper-slide" alt="banner" /> */}
      <div className="swiper-slide" style={{
        backgroundImage: `url(${Banner})`
      }} />
      <div className="swiper-slide" style={{
        backgroundImage: `url(${BannerRight})`
      }} />
      <div className="swiper-slide" style={{
        backgroundImage: `url(${BannerLeft})`
      }} />
    </Swiper>
    // </div>
  )
};
export default CoverflowEffect;