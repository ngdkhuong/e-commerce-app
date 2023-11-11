import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/User/userSlice';

export const store = configureStore({ user: userReducer });
