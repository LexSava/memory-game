import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core/';
import { arrImages } from '../../common/cardsImg';
import { ICardBody } from '../../common/interfaces';
import Card from '../Card/Card';

import './Main.scss';

interface IMain {
  onStopTimer(text: string): void;
  restertGame: boolean;
  onRunRestertGame(value: boolean): void;
  onCheckHistoryGame(value: boolean): void;
}

const Main: React.FC<IMain> = (props) => {
  const [flipped, setFlipped] = useState<string[]>([]);
  const [values, setValues] = useState<ICardBody[]>([]);
  const [counter, setCounter] = useState(0);
  const [lastChoice, setLastChoice] = useState<ICardBody | null>(null);
  const [currentChoice, setCurrentChoice] = useState<ICardBody | null>(null);
  const [currentlyFlipped, setCurrentlyFlipped] = useState<number>(0);
  const makeRandomArr = () => Math.random() - 0.5;

  useEffect(() => {
    setValues([...arrImages].sort(makeRandomArr));
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (props.restertGame) {
      timer = setTimeout(() => {
        setFlipped([]);
        setLastChoice(null);
        setCurrentChoice(null);
        setCurrentlyFlipped(0);
        props.onRunRestertGame(false);
        setValues([...arrImages].sort(makeRandomArr));
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [props.restertGame]);

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
            props.onStopTimer('stop');
            props.onCheckHistoryGame(true);
            timer = setTimeout(() => {
              setFlipped([]);
              setLastChoice(null);
              setCurrentChoice(null);
              setCurrentlyFlipped(0);
              setValues([...arrImages].sort(makeRandomArr));
              props.onRunRestertGame(false);
              props.onCheckHistoryGame(false);
            }, 500);
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
