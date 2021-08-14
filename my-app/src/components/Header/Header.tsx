import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@material-ui/core/';
import { useStopwatch } from 'react-timer-hook';

import './Header.scss';

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      pl={4}
      pr={4}
      pt={2}
      pb={2}
      className="header-block"
    >
      <Typography className="logo">Memory game</Typography>
      <Box display="flex" alignItems="center" className="stopwatch">
        {minutes} : {seconds}
      </Box>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          start();
        }}
      >
        Start
      </Button>
    </Box>
  );
};

export default Header;
