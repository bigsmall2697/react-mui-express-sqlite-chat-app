const testController = require('../controllers').tests;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Openbook Test API!',
  }));

  app.post('/api/question', testController.askQuestion);
  app.post('/api/question/:id/answerValid', testController.setAnswerValid);
  app.get('/api/tests', testController.getTests);
  app.post('/api/test', testController.getTestAnswer);
};
