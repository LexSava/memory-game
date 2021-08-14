import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core/';
import { ImageItems, arrImages } from '../../common/cardsImg';
import { ICardBody } from '../../common/interfaces';
import { useStyles } from './Main.Styles';
import './Main.scss';
import Card from '../Card/Card';

interface IMain {}

const Main: React.FC<IMain> = (props) => {
  const classes = useStyles();
  const [flipped, setFlipped] = useState<string[]>([]);
  const [values, setValues] = useState<ICardBody[]>([]);
  const [counter, setCounter] = useState(0);
  const [lastChoice, setLastChoice] = useState<ICardBody | null>(null);
  const [currentChoice, setCurrentChoice] = useState<ICardBody | null>(null);
  const [currentlyFlipped, setCurrentlyFlipped] = useState(0);

  useEffect(() => {
    setValues(ImageItems);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((_counter) => _counter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (flipped.length) {
      if (lastChoice !== null) {
        setCurrentlyFlipped((flip) => flip + 1);
        if (lastChoice.label === currentChoice?.label) {
          if (flipped.length === arrImages.length) {
            console.log('History');
          }
          setLastChoice(null);
          setCurrentChoice(null);
          setCurrentlyFlipped(0);
        } else {
          timer = setTimeout(() => {
            setFlipped(
              flipped.filter(
                (f) => f !== currentChoice?.id && f !== lastChoice?.id
              )
            );
            setLastChoice(null);
            setCurrentChoice(null);
            setCurrentlyFlipped(0);
          }, 1000);
        }
      } else {
        setLastChoice(currentChoice);
        setCurrentlyFlipped((flip) => flip + 1);
      }
    }
    return () => clearTimeout(timer);
  }, [flipped]);

  const handleOnCardClick = (value: ICardBody) => {
    if (currentlyFlipped >= 2 || flipped.includes(value.id)) {
      return null;
    }
    setCurrentChoice(value);
    return setFlipped(() => [...flipped, value.id]);
  };

  return (
    <Box
      mx="auto"
      p={4}
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      className={`${classes.mainBlock} cards`}
    >
      {values.map((value) => {
        // eslint-disable-next-line
        let time: any;
        return (
          <Card
            key={value.id}
            value={value}
            onClick={() => handleOnCardClick(value)}
            isFlipped={flipped.includes(value.id)}
          />
        );
      })}
    </Box>
  );

  // const classes = useStyles();
  // // eslint-disable-next-line
  // const [openedCard, setOpenedCard] = useState<any>([]);
  // // eslint-disable-next-line
  // const [matched, setMatched] = useState<any>([]);

  // // eslint-disable-next-line
  // const flipCard = (index: any) => {
  //   // eslint-disable-next-line
  //   setOpenedCard((opened: any): any => [...opened, index]);
  // };

  // useEffect(() => {
  //   if (openedCard < 2) return;
  //   const pairOfCards = ImageItems;

  //   const firstMatched = pairOfCards[openedCard[0]];
  //   const secondMatched = pairOfCards[openedCard[1]];

  //   if (secondMatched && firstMatched.img === secondMatched.img) {
  //     setMatched([...matched, firstMatched.img]);
  //   }

  //   if (openedCard.length === 2) {
  //     setTimeout(() => setOpenedCard([]), 1000);
  //   }
  // }, [openedCard]);

  // return (
  //   <Box
  //     mx="auto"
  //     p={4}
  //     display="flex"
  //     flexWrap="wrap"
  //     justifyContent="space-around"
  //     className={`${classes.mainBlock}`}
  //   >
  //     {ImageItems.map((elem: ICardBody, index: number) => {
  //       let isFlipped = false;
  //       if (openedCard.includes(index)) isFlipped = true;
  //       if (matched.includes(elem.img)) isFlipped = true;
  //       return (
  //         <Box
  //           mb={2}
  //           className={`animal-card ${isFlipped ? 'flipped' : ''} `}
  //           key={elem.id}
  //           onClick={() => flipCard(index)}
  //           onKeyDown={() => flipCard(index)}
  //         >
  //           <Box className="inner">
  //             <Box className="front">
  //               <img src={elem.img} alt="elem-name" width="100" />
  //             </Box>
  //             <Box className="back" />
  //           </Box>
  //         </Box>
  //       );
  //     })}
  //   </Box>
  // );
};

export default Main;
