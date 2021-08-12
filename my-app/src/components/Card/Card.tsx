import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core/';
import ReactCardFlip from 'react-card-flip';
import { ICardBody } from '../../common/interfaces';
import { useStyles } from './Card.Styles';
import Store from '../../store/Store';

interface ICard {
  image: ICardBody;
}

const Card: React.FC<ICard> = (props) => {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [pressedButtonId, setPressedButtonId] = useState<Array<string>>([]);
  const [inactiveClass, setInactiveClass] = useState<string>('');

  const handeClick = () => {
    setInactiveClass(classes.inactive);
    setIsFlipped(true);

    setTimeout(() => {
      setInactiveClass('');
      setIsFlipped(false);
    }, 3000);
  };

  const getId = (id: string) => {
    Store.getPressedButtonId(id);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Box
        className={`${classes.CardStyle} ${classes.cardFron} ${inactiveClass}`}
        onClick={() => {
          handeClick();
          getId(props.image.id);
        }}
        onKeyDown={() => {
          handeClick();
          getId(props.image.id);
        }}
      />

      <Box className={`${classes.CardStyle} ${classes.cardBack}`}>
        <img
          src={props.image.img}
          alt={props.image.id}
          className={classes.CardStyleImg}
        />
      </Box>
    </ReactCardFlip>
  );
};

export default Card;
