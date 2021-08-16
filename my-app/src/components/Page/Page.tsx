import React, { useState, useEffect } from 'react';
import { Box, Link } from '@material-ui/core';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Registration from '../Registration/Registration';
import Welcome from '../Welcome/Welcome';
import History from '../History/History';
import Store from '../../store/Store';
import './Page.scss';

interface IPage {}

const Page: React.FC<IPage> = (props) => {
  // eslint-disable-next-line
  const [modalWindow, setModalWindow] = useState<any>([]);
  // eslint-disable-next-line
  const [historyGame, setHistoryGame] = useState<any>([]);
  const [switchModalWindow, getSwitchModalWindow] = useState<string>('');
  const [timer, seTimer] = useState<string>('pause');
  const [restertGame, setRestertGame] = useState<boolean>(false);
  const [openHistoryGame, setOpenHistoryGame] = useState<boolean>(false);

  useEffect(() => {
    if (Store.name.length !== 0) {
      setModalWindow(<Welcome onRunTimer={runTimer} />);
    } else {
      setModalWindow(
        <Registration onCheckSwitchModalWindow={checkSwitchModalWindow} />
      );
    }
  }, [switchModalWindow]);

  useEffect(() => {
    setHistoryGame(
      <History
        onRunTimer={runTimer}
        onCheckHistoryGame={checkHistoryGame}
        openHistoryGame={openHistoryGame}
      />
    );
  }, [openHistoryGame]);

  const checkSwitchModalWindow = (text: string) => {
    getSwitchModalWindow(text);
  };

  const checkHistoryGame = (value: boolean) => {
    setOpenHistoryGame(value);
  };

  const runTimer = (text: string) => {
    seTimer(text);
  };
  const runRestertGame = (value: boolean) => {
    setRestertGame(value);
  };

  return (
    <Box maxWidth="1920px" mx="auto">
      <Header getTimer={timer} onRunRestertGame={runRestertGame} />
      <Main
        onStopTimer={runTimer}
        restertGame={restertGame}
        onRunRestertGame={runRestertGame}
        onCheckHistoryGame={checkHistoryGame}
      />
      {modalWindow}
      <Box
        className="header-block "
        pl={4}
        pr={4}
        pt={2}
        pb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link
          href="https://github.com/LexSava/memory-game"
          color="inherit"
          target="_blank"
        >
          App GitHub
        </Link>
        {historyGame}
      </Box>
    </Box>
  );
};
export default Page;
