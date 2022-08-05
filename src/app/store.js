import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authReducer/authReducer';

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
