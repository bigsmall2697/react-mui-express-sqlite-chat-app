import axios from 'axios';

export const postQuestion = async (question) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/question`,
    { question }
  );
  return response.data;
};

export const postValidAnswer = async (id, isValid) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/question/${id}/answerValid`,
    { isValid }
  );
  return response.data;
};

export const getTests = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/tests`);
  return response.data;
};

export const getTestAnswer = async (query) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/test`, {
    question: query.question,
    artifactId: query.artifact_id,
  });
  return response.data;
};
