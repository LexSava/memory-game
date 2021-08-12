import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  COLOR_PAIN,
  COLOR_GOLD,
  COLOR_ASH,
} from '../../common/colorApp';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    CardStyle: {
      border: `2px solid ${COLOR_ASH}`,
      borderRadius: '3px',
      padding: '10px',
      margin: '10px',
      width: '200px',
      height: '150px',
      cursor: 'pointer',
    },
    cardFron: {
      backgroundColor: COLOR_PAIN,
    },
    cardBack: {
      backgroundColor: COLOR_GOLD,
    },
    CardStyleImg: {
      width: '100%',
      height: '100%',
    },
    inactive: {
      pointerEvents: 'none',
      opacity: '0.5',
    },
  })
);
