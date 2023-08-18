import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import Topbar from './topbar';
import { Route, Switch, useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
  content: {
    width: '100%',
    maxWidth: 1024,
    margin: '0 auto',
    height: '100%',
    maxHeight: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
}));

const Main = ({ children, isGuest }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Switch>
        <Route
          path="/:mode"
          render={({ match }) => (
            <Topbar
              mode={match.params.mode}
              setMode={(mode) => history.push(`/${mode}`)}
              isGuest={isGuest}
            />
          )}
        />
      </Switch>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default React.memo(Main);
