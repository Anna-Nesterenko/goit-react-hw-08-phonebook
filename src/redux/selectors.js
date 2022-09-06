export const getContacts = ({ contacts }) => contacts;

export const getFilter = ({ filter }) => filter;

export const getVisibleFilter = ({ contacts = [], filter }) => {
  if (!filter) {
    return contacts;
  }

  return contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
};
