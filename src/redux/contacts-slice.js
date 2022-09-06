import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contactsList',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        //   const sortArr = [...store, payload].sort((a, b) =>
        //     a.name.localeCompare(b.name)
        //   );
        console.log(store, payload);
        store.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(7),
          },
        };
      },
    },

    removeContact: (store, { payload }) =>
      store.filter(item => item.id !== payload),
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
