import React from 'react';
import { Box } from '@material-ui/core';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Registration from '../Registration/Registration';

interface IPage {}

const Page: React.FC<IPage> = (props) => (
  <Box maxWidth="1920px" mx="auto">
    <Header />
    <Main />
    <Registration />
  </Box>
);
export default Page;
