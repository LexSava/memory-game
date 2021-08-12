import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core/';
import { ImageItems } from '../../common/cardsImg';
import { ICardBody } from '../../common/interfaces';
import Card from '../Card/Card';
import { useStyles } from './Main.Styles';

interface IMain {}

const Main: React.FC<IMain> = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.mainBlock} mx="auto" p={4}>
      {ImageItems.map((item: ICardBody) => (
        <Card project={item} key={item.id} />
      ))}
    </Box>
  );
};

export default Main;
