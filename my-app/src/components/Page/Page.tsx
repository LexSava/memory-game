import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Registration from '../Registration/Registration';
import Welcome from '../Welcome/Welcome';
import Store from '../../store/Store';

interface IPage {}

const Page: React.FC<IPage> = (props) => {
  // eslint-disable-next-line
  const [modalWindow, setModalWindow] = useState<any>([]);
  const [name, setName] = useState<string>(Store.name);
  const [switchModalWindow, getSwitchModalWindow] = useState<string>('');

  const checkSwitchModalWindow = (text: string) => {
    getSwitchModalWindow(text);
  };

  useEffect(() => {
    if (Store.name.length !== 0) {
      setModalWindow(<Welcome />);
    } else {
      setModalWindow(
        <Registration onCheckSwitchModalWindow={checkSwitchModalWindow} />
      );
    }
  }, [switchModalWindow]);

  return (
    <Box maxWidth="1920px" mx="auto">
      <Header />
      <Main />
      {modalWindow}
    </Box>
  );
};
export default Page;
