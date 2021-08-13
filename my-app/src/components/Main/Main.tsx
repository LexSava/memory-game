import React, { useState, useEffect } from 'react';

import { Box } from '@material-ui/core/';
import { ImageItems } from '../../common/cardsImg';
import { ICardBody } from '../../common/interfaces';
import { useStyles } from './Main.Styles';
import './Main.scss';

interface IMain {}

const Main: React.FC<IMain> = (props) => {
  const classes = useStyles();
  // eslint-disable-next-line
  const [openedCard, setOpenedCard] = useState<any>([]);
  // eslint-disable-next-line
  const [matched, setMatched] = useState<any>([]);

  // eslint-disable-next-line
  const flipCard = (index: any) => {
    // eslint-disable-next-line
    setOpenedCard((opened: any): any => [...opened, index]);

    console.log(openedCard);
  };

  useEffect(() => {
    if (openedCard < 2) return;
    const pairOfCards = ImageItems;

    const firstMatched = pairOfCards[openedCard[0]];
    const secondMatched = pairOfCards[openedCard[1]];

    if (secondMatched && firstMatched.img === secondMatched.img) {
      setMatched([...matched, firstMatched.img]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);

  return (
    <Box
      mx="auto"
      p={4}
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      className={`${classes.mainBlock}`}
    >
      {ImageItems.map((elem: ICardBody, index: number) => {
        let isFlipped = false;
        if (openedCard.includes(index)) isFlipped = true;
        if (matched.includes(elem.img)) isFlipped = true;
        return (
          <Box
            mb={2}
            className={`animal-card ${isFlipped ? 'flipped' : ''} `}
            key={elem.id}
            onClick={() => flipCard(index)}
            onKeyDown={() => flipCard(index)}
          >
            <Box className="inner">
              <Box className="front">
                <img src={elem.img} alt="elem-name" width="100" />
              </Box>
              <Box className="back" />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Main;
