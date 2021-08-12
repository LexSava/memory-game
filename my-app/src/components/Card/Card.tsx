import React, { useState } from 'react';
import { Box } from '@material-ui/core/';
import ReactCardFlip from 'react-card-flip';

import { useStyles } from './Card.Styles';
// eslint-disable-next-line
const Card = ({ project }: any) => {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handeClick = () => {
    setIsFlipped(true);
    setTimeout(() => {
      setIsFlipped(false);
    }, 3000);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Box
        className={`${classes.CardStyle} ${classes.cardFron}`}
        onClick={() => handeClick()}
        onKeyDown={() => handeClick()}
      />

      <Box className={`${classes.CardStyle} ${classes.cardBack}`}>
        <img
          src={project.img}
          alt={project.id}
          className={classes.CardStyleImg}
        />
      </Box>
    </ReactCardFlip>
  );
};

export default Card;
