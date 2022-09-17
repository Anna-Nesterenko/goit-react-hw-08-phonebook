import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn } from './authThunk';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signUp.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [signUp.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [logIn.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logIn.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [logIn.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
