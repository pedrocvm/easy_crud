/* eslint-disable */
import axios from 'axios';

const LOCAL_API_URL = 'http://localhost:3067/api/registration';
const API_URL = 'https://easy-crud.herokuapp.com/api/registration';

const LOCAL_API_URL_SKILLS = 'http://localhost:3067/api/skills';
const API_URL_SKILLS = 'https://easy-crud.herokuapp.com/api/skills';

//SKILLS
const getSkills = async () => {
  const response = await axios.get(API_URL_SKILLS);
  return response.data;
};

const getOneSkill = async (id) => {
  const response = await axios.get(`${API_URL_SKILLS}/${id}`);
  return response.data;
};

const insertSkill = async () => {
  const response = await axios.post(`${API_URL_SKILLS}`);
  return response.data;
};

const updateSkill = async (id, talent) => {
  const response = await axios.put(`${API_URL_SKILLS}/${id}`, talent);
  return response.data;
};

const deleteSkill = async (id) => {
  const response = await axios.delete(`${API_URL_SKILLS}/${id}`);
  return response.data;
};

//TALENTS
const getTalents = async () => {
  const res = await axios.get(API_URL);

  if (res.data !== 'No registers found.') {
    const talents = res.data.map((talent) => {
      const { _id, name, email, city, state } = talent;
      return {
        _id,
        name,
        email,
        city,
        state,
      };
    });
    return talents;
  } else {
    return null;
  }
};

const getOneTalent = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

const getByName = async (name) => {
  const res = await axios.get(`${API_URL}?name=${name}`);
  return res.data;
};

const insertTalent = async (talent) => {
  const res = await axios.post(API_URL, talent);
  return res.data;
};

const updateTalent = async (id, talent) => {
  const res = await axios.patch(`${API_URL}/${id}`, talent);
  return res.data;
};

const deleteTalent = async (talent) => {
  const res = await axios.delete(`${API_URL}/${talent._id}`);
  return res.data;
};

const deleteAllTalents = async () => {
  const res = await axios.delete(API_URL);
  return res.data;
};

export {
  getTalents,
  getOneTalent,
  getByName,
  insertTalent,
  updateTalent,
  deleteTalent,
  getSkills,
  getOneSkill,
  insertSkill,
  updateSkill,
  deleteSkill,
  deleteAllTalents,
};
