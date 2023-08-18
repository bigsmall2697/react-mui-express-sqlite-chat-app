import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core';
import { getTests } from 'data/api';
import Loader from 'components/layout/loader';
import TestItem from 'components/test/test-item';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    borderLeft: '1px solid #ededed',
    borderRight: '1px solid #ededed',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(4),
    height: theme.spacing(10),
  },
  run: {
    marginLeft: theme.spacing(4),
  },
  list: {
    height: `calc(100% - ${theme.spacing(10)}px)`,
    overflowY: 'auto',
    padding: theme.spacing(4),
    width: '100%',
  },
}));

const Test = () => {
  const classes = useStyles();
  const [completedCounts, setCompletedCounts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [queries, setQueries] = useState([]);

  const getQueries = async () => {
    try {
      setIsLoading(true);
      const result = await getTests();
      setQueries(result);
      setCompletedCounts(result.length);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getQueries();
  }, []);

  const handleRunTests = () => {
    setCompletedCounts(0);
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h3">Tests</Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={
            isLoading || !queries?.length || completedCounts !== queries.length
          }
          onClick={handleRunTests}
          className={classes.run}
        >
          Run
        </Button>
      </div>
      <div className={classes.list}>
        {isLoading ? (
          <Loader />
        ) : (
          queries.map((query) => (
            <TestItem
              query={query}
              key={query.id}
              completedCounts={completedCounts}
              onCloseRunning={() => setCompletedCounts((prev) => prev + 1)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Test;
