export const getContacts = ({ contacts }) => contacts;

export const getFilter = ({ filter }) => filter;

export const getVisibleFilter = ({ contacts, filter }) => {
  return contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
};
