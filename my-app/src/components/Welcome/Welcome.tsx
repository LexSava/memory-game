import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import './Welcome.scss';
import Store from '../../store/Store';

interface IWelcome {}

const Welcome = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState<string>(Store.name);

  useEffect(() => {
    setName(Store.name);
  }, []);

  useEffect(() => {
    if (Store.name.length != 0) setOpen(true);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Welcome dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Welcome {name}.</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The game "Memory" is a field on which cards with pictures are
            located. The cards are in random order, and each of them is
            represented on the field 2 times. Initially, the cards are closed
            and can be opened by clicking the mouse. Only two cards can be
            opened at a time (not counting the pairs already found), so the
            location of the pictures must be remembered. If the open symbols
            match, the found pairs remain on the field in an open form. The goal
            of the game is to consistently open the entire field. Are you ready?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Start the game
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Welcome;
