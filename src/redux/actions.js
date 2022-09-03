import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';
import { nanoid } from 'nanoid';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: { id: nanoid(7), ...payload },
  };
};

export const removeContact = payload => {
  return {
    type: REMOVE_CONTACT,
    payload,
  };
};

export const setFilter = payload => {
  return {
    type: SET_FILTER,
    payload,
  };
};
