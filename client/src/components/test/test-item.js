import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Box, CircularProgress } from '@material-ui/core';
import { CheckCircle, Error, RemoveCircle } from '@material-ui/icons';
import { getTestAnswer } from 'data/api';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.primary.main}`,
    background: '#f9ddd529',
    borderRadius: theme.spacing(1),
  },

  question: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
  },

  valid: {
    marginLeft: theme.spacing(1),
  },

  answer: {
    marginBottom: theme.spacing(2),
  },

  newAnswer: {
    color: theme.palette.primary.main,
    '&.invalid': {
      color: theme.palette.error.main,
    },
  },
}));

const TestItem = ({ query, completedCounts, onCloseRunning }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [newAnswer, setNewAnswer] = useState('');
  const { question, answer, is_valid: isValid } = query;

  const getNewAnswer = async () => {
    try {
      setIsLoading(true);
      const result = await getTestAnswer(query);
      setNewAnswer(result);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      onCloseRunning();
    }
  };

  useEffect(() => {
    if (!completedCounts) {
      getNewAnswer();
    }
  }, [completedCounts]);

  return (
    <div className={classes.root}>
      <div className={classes.question}>
        <div>{question}</div>
        <div className={classes.valid}>
          {isLoading ? (
            <CircularProgress color="primary" size={16} />
          ) : isValid ? (
            <CheckCircle color="primary" fontSize="small" />
          ) : isValid === false ? (
            <Error color="error" fontSize="small" />
          ) : (
            <RemoveCircle color="secondary" fontSize="small" />
          )}
        </div>
      </div>
      <div className={classes.answer}>{answer}</div>
      {!isLoading && newAnswer && (
        <>
          <div
            className={clsx(
              classes.newAnswer,
              answer !== newAnswer && 'invalid'
            )}
          >
            {newAnswer}
          </div>
          <Box mt={1} />
          <div
            className={clsx(
              classes.newAnswer,
              answer !== newAnswer && 'invalid'
            )}
            style={{ fontWeight: 'bold' }}
          >
            {answer === newAnswer ? 'SAME' : 'DIFFERENT'}
          </div>
        </>
      )}
    </div>
  );
};

export default TestItem;
