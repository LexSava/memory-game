import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import './Registration.scss';
import Store from '../../store/Store';

interface IRegistration {
  onCheckSwitchModalWindow(text: string): void;
}

const Registration: React.FC<IRegistration> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(Store.name);

  useEffect(() => {
    if (Store.name.length === 0) setOpen(true);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const createUser = () => {
    Store.getName(inputText);
    props.onCheckSwitchModalWindow(inputText);
    setOpen(false);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      createUser();
      event.preventDefault();
    }
  };

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Registration dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Registration new User.</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your name or nickname.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name or Nickname"
            type="text"
            fullWidth
            className="modal-window"
            onInput={changeInput}
            onKeyPress={keyPressHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={createUser} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Registration;
