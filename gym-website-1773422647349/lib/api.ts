import { API_URL } from './utils';
import { fetchJson } from './utils';

const memberships = [
  { name: 'Basic' },
  { name: 'Premium' },
  { name: 'Elite' },
];

const services = [
  { name: 'Personal Training' },
  { name: 'Group Fitness' },
  { name: 'Nutrition Planning' },
];

const coaches = [
  { name: 'Coach 1' },
  { name: 'Coach 2' },
  { name: 'Coach 3' },
];

export const getMemberships = async () => {
  return memberships;
};

export const getServices = async () => {
  return services;
};

export const getCoaches = async () => {
  return coaches;
};