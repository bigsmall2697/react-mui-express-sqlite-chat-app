
import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
  },
  icon: {
    display: 'flex',
    width: '60px',
    minHeight: '60px',
    background: 'rgba(63, 81, 181, 0.1)',
    borderRadius: '30px',
    marginBottom: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.purple,
  },
  regular: {
    marginLeft: '8px',
    color: '#757575',
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '22px', 
  },
}));

const EmptyTable = ({ title, renderIcon = () => null }) => {
  const classes = useStyles();
  return (
    <Box
      mt={3}
      className={classes.root}
    >
      <span
        className={classes.icon}
      >{renderIcon()}</span>
      <Typography
        classes={{ root: classes.regular }}
        align="center"
      >
        {title}
      </Typography>
    </Box>
  )
  ;
};

export default EmptyTable;