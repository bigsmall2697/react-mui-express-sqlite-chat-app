import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    marginBottom: 24,
    '&.question': {
      marginLeft: 'auto',
    },
  },
  message: {
    border: `1px solid ${theme.palette.primary.main}`,
    background: '#f9ddd529',
    padding: theme.spacing(2),
    color: 'black',
    marginBottom: 10,
    width: 'fit-content',
    minWidth: 200,
    maxWidth: 500,
    borderRadius: theme.spacing(2),
    borderBottomLeftRadius: 0,

    '&.question': {
      border: 'none',
      background: '#f5f6f8',
      borderRadius: theme.spacing(2),
      borderBottomRightRadius: 0,
    },
  },
  options: {
    display: 'flex',
    '& > div': {
      cursor: 'pointer',
    },
  },
  valid: {
    color: 'green',
  },
  invalid: {
    color: 'red',
  },
}));

const MessageItem = ({ message, isQuestion, isValid, setIsValid }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, isQuestion && 'question')}>
      <div className={clsx(classes.message, isQuestion && 'question')}>
        {message}
      </div>
      {!isQuestion &&
        (typeof isValid !== 'boolean' ? (
          <div className={classes.options}>
            <div className={classes.valid} onClick={() => setIsValid(true)}>
              Valid
            </div>
            &nbsp;or&nbsp;
            <div className={classes.invalid} onClick={() => setIsValid(false)}>
              Invalid
            </div>
          </div>
        ) : isValid === true ? (
          <div className={classes.valid}>Valid</div>
        ) : (
          <div className={classes.invalid}>Invalid</div>
        ))}
    </div>
  );
};

export default MessageItem;
