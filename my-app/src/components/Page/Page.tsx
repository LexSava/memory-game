import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Registration from '../Registration/Registration';
import Welcome from '../Welcome/Welcome';
import History from '../History/History';
import Store from '../../store/Store';

interface IPage {}

const Page: React.FC<IPage> = (props) => {
  // eslint-disable-next-line
  const [modalWindow, setModalWindow] = useState<any>([]);
  const [switchModalWindow, getSwitchModalWindow] = useState<string>('');
  const [timer, seTimer] = useState<string>('pause');
  const [restertGame, setRestertGame] = useState<boolean>(false);

  const checkSwitchModalWindow = (text: string) => {
    getSwitchModalWindow(text);
  };

  const runTimer = (text: string) => {
    seTimer(text);
  };
  const runRestertGame = (value: boolean) => {
    setRestertGame(value);
  };

  useEffect(() => {
    if (Store.name.length !== 0) {
      setModalWindow(<Welcome onRunTimer={runTimer} />);
    } else {
      setModalWindow(
        <Registration onCheckSwitchModalWindow={checkSwitchModalWindow} />
      );
    }
  }, [switchModalWindow]);

  return (
    <Box maxWidth="1920px" mx="auto">
      <Header getTimer={timer} onRunRestertGame={runRestertGame} />
      <Main
        onStopTimer={runTimer}
        restertGame={restertGame}
        onRunRestertGame={runRestertGame}
      />
      {modalWindow}
      <History />
    </Box>
  );
};
export default Page;
