import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';

const initialStore = {
  contacts: [],
  filter: '',
};

export const reducer = (store = initialStore, { type, payload }) => {
  //   console.log(payload);
	switch (type) {
	  
    case ADD_CONTACT:
      const sortArr = [...store.contacts, payload].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return { ...store, contacts: sortArr };

    case REMOVE_CONTACT:
      const newContacts = store.contacts.filter(({ id }) => id !== payload);
      return { ...store, contacts: newContacts };

    case SET_FILTER:
      return { ...store, filter: payload };

    default:
      return store;
  }
};
