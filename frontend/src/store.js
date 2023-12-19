import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './features/User/userSlice';
import tutorialReducer from './features/Tutorials/tutorialSlice';

export function makeStore() {
    return configureStore({
        reducer: combineReducers({
            user: userReducer,
            tutorial: tutorialReducer,
        }),
        devTools: true,
    });
}

export const store = makeStore();
