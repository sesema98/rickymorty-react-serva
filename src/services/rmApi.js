import { api } from './api';

export const getCharacters = async (page = 1) => {
  const { data } = await api.get(`/character?page=${page}`);
  return data;
};