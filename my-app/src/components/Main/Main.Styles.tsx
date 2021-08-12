import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { COLOR_OATMEAL } from '../../common/colorApp';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainBlock: {
      backgroundColor: COLOR_OATMEAL,
    },
  })
);
