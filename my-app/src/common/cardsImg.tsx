import { v4 as uuidv4 } from 'uuid';
import { ICardBody } from './interfaces';

import Fox from '../assets/img/fox.svg';
import Mouse from '../assets/img/mouse.svg';
import Panda from '../assets/img/panda.svg';
import Penguin from '../assets/img/penguin.svg';

// eslint-disable-next-line
export const arrImages: Array<ICardBody> = [
  {
    label: 'Fox',
    img: Fox,
    id: uuidv4(),
  },
  {
    label: 'Fox',
    img: Fox,
    id: uuidv4(),
  },
  {
    label: 'Mouse',
    img: Mouse,
    id: uuidv4(),
  },
  {
    label: 'Mouse',
    img: Mouse,
    id: uuidv4(),
  },
  {
    label: 'Panda',
    img: Panda,
    id: uuidv4(),
  },
  {
    label: 'Panda',
    img: Panda,
    id: uuidv4(),
  },
  // {
  //   img: Penguin,
  //   id: uuidv4(),
  // },
  // {
  //   img: Penguin,
  //   id: uuidv4(),
  // },
];

// export const makeRandomArr = () => Math.random() - 0.5;

// export const ImageItems = [...arrImages].sort(makeRandomArr);
