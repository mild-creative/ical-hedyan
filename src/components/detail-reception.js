import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Detail from './wedding-detail';
import Reception from './reception';

function DetailReception() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Detail />
      <Reception />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    '& p, a': {
      color: '#FFFFFF'
    },
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
    // backgroundImage: 'linear-gradient(to bottom, rgb(211, 175, 164), rgb(211, 175, 164))'
    backgroundColor: 'rgb(11, 17, 58)'
  }
}));

export default DetailReception;