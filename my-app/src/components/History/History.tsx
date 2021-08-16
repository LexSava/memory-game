import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';

import './History.scss';

interface IHistory {}

const History: React.FC<IHistory> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar className="app-bar ">
          <Toolbar className="header-block">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              className="color-text-headr"
            >
              <CloseIcon className="color-text-headr" />
            </IconButton>
            <Typography variant="h6" className="title">
              Results table
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </Box>
  );
};

export default History;
