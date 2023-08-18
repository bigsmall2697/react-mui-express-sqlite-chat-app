import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Box, Button } from '@material-ui/core';
import Logo from 'assets/images/logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    background: 'white',
    borderBottom: '1px solid #ededed',
  },
  logo: {
    color: 'black',
    display: 'flex',
    alignItems: 'center',

    '& span': {
      marginLeft: theme.spacing(1),
      fontSize: '22px',
      fontWeight: 'light',
    },
  },
  flexGrow: {
    flexGrow: 1,
  },
  buttons: {
    display: 'flex',
    padding: theme.spacing(0.5),
    border: '1px solid #ededed',
    borderRadius: 4,

    '& button': {
      boxShadow: 'unset',
      textTransform: 'none',
    },
  },
}));

const Topbar = ({ className, mode, setMode, isGuest, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/">
          <div className={classes.logo}>
            <img alt="OpenBook" src={Logo} style={{ height: 24 }} />
            <span>Testing</span>
          </div>
        </RouterLink>
        <div className={classes.flexGrow} />
        {!isGuest && (
          <Box display="flex" p={0.5} className={classes.buttons}>
            <Button
              variant={mode === 'test' ? 'contained' : 'static'}
              color={mode === 'test' ? 'primary' : ''}
              onClick={() => setMode('test')}
            >
              Test
            </Button>
            <Button
              variant={mode === 'debug' ? 'contained' : 'static'}
              color={mode === 'debug' ? 'primary' : ''}
              onClick={() => setMode('debug')}
            >
              Debug
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;
