import React from 'react';
import { Box } from '@material-ui/core/';
import './Card.scss';

import { ICardBody } from '../../common/interfaces';

interface IProps {
  isFlipped: boolean;
  // eslint-disable-next-line
  onClick: any;
  value: ICardBody;
}

const Card: React.FC<IProps> = ({ isFlipped, onClick, value }) => {
  const flippedClass = isFlipped ? ' flipped' : '';
  return (
    <Box mt={2} mx={1} className="animal-card" onClick={onClick}>
      <Box className={`card-inner${flippedClass}`}>
        <Box className="card-front" />
        <Box className="card-back">
          <img src={value.img} alt="elem-name" width="100" />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
