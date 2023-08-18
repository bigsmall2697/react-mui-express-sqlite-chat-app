import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MessageItem from './message-item';
import Typing from 'assets/images/typing.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  typing: {
    height: theme.spacing(6),
    borderRadius: theme.spacing(2),
  },
}));

const MessageList = ({ messages, setValidAnswer }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {messages.map(({ id, question, answer, isValid }) => (
        <>
          <MessageItem message={question} isQuestion />
          {answer ? (
            <MessageItem
              message={answer}
              isQuestion={false}
              isValid={isValid}
              setIsValid={(newIsValid) => setValidAnswer(id, newIsValid)}
            />
          ) : (
            <img src={Typing} alt="Typing..." className={classes.typing} />
          )}
        </>
      ))}
    </div>
  );
};

export default MessageList;
