import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialStore = {
  contacts: [],
  filter: '',
};

const ContactsSlice = createSlice({
  name: 'contactsList',
  initialStore,
  reducers: {
    addContact: (store, action) => {
console.log(store, action);
   const sortArr = [...store.contacts, action.payload].sort((a, b) =>
     a.name.localeCompare(b.name)
   );
   return { ...store, contacts: sortArr };
 },
 removeContact: (store, action) => {
   const newContacts = store.contacts.filter(
     ({ id }) => id !== action.payload
   );
   console.log(newContacts);
   return { ...store, contacts: newContacts };
 },

 setFilter: (store, action) => {
   return { ...store, filter: action.payload };
 },
  },
});
export const { addContact, removeContact, setFilter } = ContactsSlice.actions;
export default ContactsSlice.reducer;
