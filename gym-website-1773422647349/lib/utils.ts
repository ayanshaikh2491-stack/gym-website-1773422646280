export const API_URL = 'http://localhost:3000/api';

export const fetchJson = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};