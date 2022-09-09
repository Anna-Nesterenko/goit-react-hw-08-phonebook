// import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './contactsThunk';
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contactsList',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [addContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      console.log(store, { payload });
      store.loading = true;
      return [...store, payload].items.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [removeContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [removeContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    //  addContact: {
    //    reducer: (store, { payload }) => {
    //      const sortArr = w.sort((a, b) =>
    //        a.name.localeCompare(b.name)
    //      );
    //      return sortArr;
    //    },
    //    prepare: data => {
    //      return {
    //        payload: {
    //          ...data,
    //          id: nanoid(7),
    //        },
    //      };
    //    },
    //  },
    //  removeContact: (store, { payload }) =>
    //    store.filter(item => item.id !== payload),
  },
});

// export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
