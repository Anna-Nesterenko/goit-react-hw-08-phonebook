import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/authApi';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getSignUp(data);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getLogIn(data);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getLogOut();
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);
