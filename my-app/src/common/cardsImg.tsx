import { v4 as uuidv4 } from 'uuid';
import { ICardBody } from './interfaces';

import Fox from '../assets/img/fox.svg';
import Mouse from '../assets/img/mouse.svg';
import Panda from '../assets/img/panda.svg';

// eslint-disable-next-line
export const ImageItems: Array<ICardBody> = [
  {
    img: Fox,
    id: uuidv4(),
  },
  {
    img: Mouse,
    id: uuidv4(),
  },
  {
    img: Panda,
    id: uuidv4(),
  },
];
