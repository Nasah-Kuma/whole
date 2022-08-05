import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dry-chamber-44877.herokuapp.com/user',
  timeout: 53000,
});

// eslint-disable-next-line consistent-return
export const signIn = async (payload) => {
  try {
    const data = await axiosInstance.post('/login', payload);
    return data;
  } catch (e) {
    return e;
  }
};

export const registration = async (payload) => {
  const data = await axiosInstance.post('/', payload);
  return data;
};

export const getProfile = async (userId) => {
  const data = await axiosInstance.get(userId);
  return data;
};
