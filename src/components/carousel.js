import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
// import SliderDesktop1 from '../assets/slider-desktop-1.jpg';
// import SliderDesktop2 from '../assets/slider-desktop-2.jpg';
// import SliderMobile2 from '../assets/slider-mobile-2.jpg';
// import SliderDesktop3 from '../assets/slider-desktop-3.jpg';
// import SliderDesktop4 from '../assets/slider-desktop-4.jpg';
import BannerRight from '../assets/banner-right.jpg';
import BannerLeft from '../assets/banner-left.jpg';
import Banner from '../assets/banner.jpg';

const useStyles = makeStyles((theme) => ({
  itemSlider: {
    height: '100%',
    backgroundImage: ({ sliderImg }) => `url("${sliderImg.desktop}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    [theme.breakpoints.down('xs')]: {
      backgroundImage: ({ sliderImg }) => `url("${sliderImg.mobile}")`,
    }
  }
}));

// const items = [{
//   id: "Banner #1",
//   img: {
//     desktop: SliderDesktop1,
//     mobile: SliderDesktop1
//   }
// }, {
//   id: "Banner #2",
//   img: {
//     desktop: SliderDesktop2,
//     mobile: SliderMobile2
//   }
// }, {
//   id: "Banner #3",
//   img: {
//     desktop: SliderDesktop3,
//     mobile: SliderDesktop3
//   }
// }, {
//   id: "Banner #4",
//   img: {
//     desktop: SliderDesktop4,
//     mobile: SliderDesktop4
//   }
// }]
const items = [{
  id: "Banner #1",
  img: {
    desktop: BannerRight,
    mobile: BannerRight
  }
}, {
  id: "Banner #2",
  img: {
    desktop: Banner,
    mobile: Banner
  }
}, {
  id: "Banner #3",
  img: {
    desktop: BannerLeft,
    mobile: BannerLeft
  }
}];

function Slider() {
  // const classes = useStyles();
  return (
    <Carousel indicators={false} autoPlay={true}>
      {items.map((item, i) => <Item key={i} item={item} />)}
    </Carousel>
  );
}

function Item({ item }) {
  const classes = useStyles({
    sliderImg: item.img
  });
  return (
    <Paper>
      {/* <div className={classes.itemSlider} /> */}
      <img src={item.img.desktop} alt={item.id} width="100%" />
    </Paper>
  )
}

export default Slider;