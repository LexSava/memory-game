import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@material-ui/core/';
import { ImageItems } from '../../common/cardsImg';
import { ICardBody } from '../../common/interfaces';
import Card from '../Card/Card';
import Store from '../../store/Store';
import { useStyles } from './Main.Styles';

interface IMain {}

const Main: React.FC<IMain> = (props) => {
  const classes = useStyles();
  const [inactiveClass, setInactiveClass] = useState<string>('');
  const [pressedButtonId, setPressedButtonId] = useState<Array<string>>([]);

  useEffect(() => {
    setPressedButtonId(Store.pressedButtonId);
  }, [Store.pressedButtonId]);

  useEffect(() => {
    console.log(pressedButtonId);
  }, [pressedButtonId]);

  return (
    <Box
      className={classes.mainBlock}
      mx="auto"
      p={4}
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
    >
      {ImageItems.map((item: ICardBody) => (
        <Box key={uuidv4()}>
          <Card image={item} />
        </Box>
      ))}
    </Box>
  );
};

export default Main;
