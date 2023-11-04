import { configureStore } from '@reduxjs/toolkit';
import counter from './features/User/userSlice';

export const store = configureStore({ reducer: counter });
