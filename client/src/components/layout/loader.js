import React, { memo } from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    minHeight: '140px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Loader = () => {
  const classess = useStyles();
  return (
    <div className={classess.root}>
      <CircularProgress />
    </div>
  );
};

export default memo(Loader);
