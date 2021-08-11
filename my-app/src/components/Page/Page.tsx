import React from 'react';
import { Box } from '@material-ui/core';
import Header from '../Header/Header';

interface IPage {}

const Page: React.FC<IPage> = (props) => (
  <Box maxWidth="1920px" mx="auto">
    <Header />
  </Box>
);
export default Page;
