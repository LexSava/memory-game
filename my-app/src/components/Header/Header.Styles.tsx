import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_GOLD, COLOR_ASH } from '../../common/colorApp';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundBlock: {
      backgroundColor: COLOR_GOLD,
    },
    logo: {
      fontSize: theme.spacing(3),
      fontFamily: 'Dosis',
      fontWeight: 700,
      color: COLOR_ASH,
      cursor: 'pointer',
    },
    stopwatch: {
      fontFamily: 'Josefin Sans',
      fontWeight: 700,
      fontSize: theme.spacing(2.3),
      color: COLOR_ASH,
    },
  })
);
