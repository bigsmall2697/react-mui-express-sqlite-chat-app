const { sendMessage, latestArtifactId } = require("../utils/openbook");
const Test = require("../models").Test;

module.exports = {
  async askQuestion(req, res) {
    let { artifactId, question } = req.body;

    try {
      if (!artifactId) {
        artifactId = await latestArtifactId();
      }
      const result = await sendMessage(question, artifactId);
      const newQuery = await Test.create({
        id: result.result.query_id,
        question,
        answer: result.result.answer,
        artifact_id: artifactId,
      });

      res.status(201).send(newQuery);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  async setAnswerValid(req, res) {
    const { id } = req.params;
    const { isValid } = req.body;

    const result = await Test.update({ is_valid: isValid }, { where: { id } });

    res.status(201).send(result);
  },
  async getTests(req, res) {
    const result = await Test.findAll();

    res.status(201).send(result);
  },
  async getTestAnswer(req, res) {
    let { artifactId, question } = req.body;

    if (!artifactId) {
      artifactId = await latestArtifactId();
    }

    try {
      const { result } = await sendMessage(question, artifactId);
      res.status(201).send(result.answer);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  getMessages(req, res) {
    const { img, address, name } = req.body;

    return Test.create({ img, address, name })
      .then((item) => res.status(201).send(item))
      .catch((error) => res.status(400).send(error));
  },
};
