import React from 'react';
import { Box } from '@material-ui/core';
import Header from '../Header/Header';
import Main from '../Main/Main';

interface IPage {}

const Page: React.FC<IPage> = (props) => (
  <Box maxWidth="1920px" mx="auto">
    <Header />
    <Main />
  </Box>
);
export default Page;
