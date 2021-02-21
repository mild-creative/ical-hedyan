import React from 'react';

import useStyles from '../styles/youtube-thumbnail';
import PlayButton from '../assets/youtube.svg';

function YoutubeThumb() {
  const classes = useStyles();
  const [hover, setHover] = React.useState(false);
  return (
    <a href="https://youtu.be/grFEI2l8Lio" target="_blank" rel="noopener noreferrer">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={classes.container}
      >
        <img src={PlayButton} alt="Play Button" className={classes.playButton} />
      </div>
    </a>
  );
}

export default YoutubeThumb;