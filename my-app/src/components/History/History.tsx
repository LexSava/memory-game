import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
import Store from '../../store/Store';

interface IHistory {
  onRunTimer(text: string): void;
  onCheckHistoryGame(value: boolean): void;
  openHistoryGame: boolean;
}

const History: React.FC<IHistory> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [historyResult, setHistoryResult] = useState<Array<number>>(
    Store.histoty
  );

  useEffect(() => {
    setHistoryResult(Store.histoty.sort((a: number, b: number) => a - b));
  }, [Store.histoty]);

  useEffect(() => {
    if (props.openHistoryGame) handleClickOpen();
  }, [props.openHistoryGame]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.onCheckHistoryGame(false);
    props.onRunTimer('reset');
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
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
          {historyResult.map((value: number, index: number) => (
            <Box key={uuidv4()}>
              <ListItem>
                <ListItemText
                  primary={`${index + 1} result -  ${Math.floor(value / 60)}: ${
                    value % 60
                  }`}
                />
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </Dialog>
    </Box>
  );
};

export default History;
