const axios = require("axios");

async function sendMessage(question, artifactId) {
  const result = await axios.post(
    `${process.env.OPENBOOK_API_URL}/artifacts/${artifactId}/query`,
    {
      query: question,
      history: [],
      answer_level: "strict",
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENBOOK_API_KEY}`,
      },
    }
  );

  return result.data;
}

async function listArtifcats() {
  const result = await axios.get(`${process.env.OPENBOOK_API_URL}/artifacts`, {
    headers: {
      Authorization: `Bearer ${process.env.OPENBOOK_API_KEY}`,
    },
  });

  return result.data;
}

async function latestArtifactId() {
  const response = await listArtifcats();
  if (response.status === "success") {
    response.artifacts.sort((a, b) =>
      Date.parse(a.modifiedAt) > Date.parse(b.modifiedAt) ? 1 : -1
    );
    return response.artifacts[response.artifacts.length - 1].id;
  }
  return null;
}

module.exports = {
  sendMessage,
  listArtifcats,
  latestArtifactId,
};
