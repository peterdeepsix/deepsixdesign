import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    whiteSpace: 'nowrap',
  },
}));

const DailyLogo = () => {
  const styles = useStyles();
  return (
    <Typography variant="h6" className={styles.root}>
      Deep Six Design
    </Typography>
  );
};

export default DailyLogo;
