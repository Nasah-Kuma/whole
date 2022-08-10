import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { registration, signIn, getProfile } from '../../services/authService';

export const createUser = createAsyncThunk('register',
  async (payload) => {
    const data = await registration(payload);
    return data;
  });

export const login = createAsyncThunk('logInUser',
  async (payload) => {
    const data = await signIn(payload);
    return data;
  });

export const getUserDetails = createAsyncThunk('userDetails',
  async (userId) => {
    const data = await getProfile(userId);
    return data;
  });

const initialState = { isLoading: false, isError: false, isAuthenticated: false };

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  isLoading: false,
  reducers: {
    isLoading(state) {
      return { ...state, isLoading: true };
    },
    stopLoading(state) {
      return { ...state, isLoading: false };
    },
    setUserDetails(state, action) {
      return { ...state, isLoading: false, data: action.payload };
    },
  },
  extraReducers: {
    [createUser.pending]: (state) => ({ ...state, isLoading: true }),
    // eslint-disable-next-line max-len
    [createUser.fulfilled]: (state, action) => ({ ...state, isLoading: false, data: action.payload.data }),
    [login.pending]: (state) => ({ ...state, isLoading: true, isAuthenticated: false }),
    [login.fulfilled]: (state, action) => {
      sessionStorage.setItem('accessToken', action.payload.data.accessToken);
      return {
        ...state, isLoading: false, isAuthenticated: true, ...action.payload,
      };
    },
    [login.rejected]: (state, action) => ({
      ...state, isLoading: false, isError: true, isAuthenticated: false, data: action.payload,
    }),
    [getUserDetails.pending]: (state) => ({ ...state, isLoading: true }),
    [getUserDetails.fulfilled]: (state, action) => (
      { ...state, isLoading: false, ...action.payload }),
  },
});

export const { isLoading, stopLoading, setUserDetails } = authSlice.actions;
export default authSlice.reducer;
