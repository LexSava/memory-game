import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core/';
import { ImageItems, arrImages } from '../../common/cardsImg';
import { ICardBody } from '../../common/interfaces';
import Card from '../Card/Card';

import './Main.scss';

interface IMain {}

const Main: React.FC<IMain> = (props) => {
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
      className="main-block cards"
    >
      {values.map((value) => (
        <Card
          key={value.id}
          value={value}
          onClick={() => handleOnCardClick(value)}
          isFlipped={flipped.includes(value.id)}
        />
      ))}
    </Box>
  );
};

export default Main;
