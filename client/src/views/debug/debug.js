import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import MessageList from 'components/chat/message-list';
import { postQuestion, postValidAnswer } from 'data/api';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    borderLeft: '1px solid #ededed',
    borderRight: '1px solid #ededed',
  },
  messages: {
    width: '100%',
    height: 'calc(100% - 90px)',
    overflowY: 'auto',
    padding: theme.spacing(2),
  },
  chat: {
    width: '100%',
    padding: theme.spacing(2),
    borderTop: '1px solid #ededed',

    '& input': {
      background: 'white',
    },
  },
}));

const Debug = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState('');

  const handleValidAnswer = (messageId, isValid) => {
    postValidAnswer(messageId, isValid);
    const index = messages.findIndex((item) => item.id === messageId);
    if (index !== -1) {
      messages[index].isValid = isValid;
    }
    setMessages([...messages]);
  };

  const handleAskQuestion = async () => {
    const newMessage = {
      id: 'new',
      question,
      answer: null,
    };
    setMessages([...messages, newMessage]);

    const result = await postQuestion(question);
    newMessage.id = result.id;
    newMessage.answer = result.answer;
    setMessages((msgs) => [...msgs]);
    setQuestion('');
  };

  return (
    <div className={classes.root}>
      <div className={classes.messages}>
        <MessageList messages={messages} setValidAnswer={handleValidAnswer} />
      </div>
      <div className={classes.chat}>
        <TextField
          variant="outlined"
          label=""
          fullWidth
          placeholder="Ask your book a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAskQuestion();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Debug;
