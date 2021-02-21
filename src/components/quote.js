import React from 'react';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from '../styles/content';

function Quote({ preWord, highlightWord, reverse, quote, img, children, foto }) {
  const [quoteLoaded, setQuoteLoaded] = React.useState(false);
  const classes = useStyles({ reverse, img, quoteLoaded });

  const handleQuoteImgLoader = () => {
    setQuoteLoaded(true);
  }
  
  return (
    <Grid container direction={reverse && 'row-reverse'} className={classes.quoteContainer}>
      <Grid item container sm={12} md={6} justify="center" alignItems="center">
        <Grid item className={classes.wordContainer}>
          <Typography>{preWord}</Typography>
          <Typography>
            {quote === "Time" && <span>{`At `}</span> }
            <span className={classes.highlightedWord}>{highlightWord}</span>
            <span>{` ${quote}`}</span>
          </Typography>
        </Grid>
      </Grid>
      <Grid item sm={12} md={6} className={clsx(classes.contentCenterer, reverse && classes.imageContainer)}>
        <img onLoad={handleQuoteImgLoader} width='100%' src={foto} alt="Quotes" />
        {!quoteLoaded && <Skeleton variant="rect" animation="wave" className={classes.quoteLoader} />}
      </Grid>
    </Grid>
  )
}

export default Quote;
