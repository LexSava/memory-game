import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@material-ui/core/';
import { useStopwatch } from 'react-timer-hook';

import './Header.scss';

interface IHeader {
  getTimer: string;
  onRunRestertGame(value: boolean): void;
}

const Header: React.FC<IHeader> = (props) => {
  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    if (props.getTimer === 'start') start();
    if (props.getTimer === 'stop') pause();
    if (props.getTimer === 'reset') reset();
  }, [props.getTimer]);

  const restertGame = () => {
    props.onRunRestertGame(true);
    reset();
  };

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
          restertGame();
        }}
      >
        Restart
      </Button>
    </Box>
  );
};

export default Header;
