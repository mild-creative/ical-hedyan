import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import Desktop from './reception-desktop';
import Mobile from './reception-mobile';

function Reception() {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <div style={{marginBottom: '3.5rem'}}>
      {isMobile ?
        <Mobile />
        :
        <Desktop />}
    </div>
  );
}

export default Reception;