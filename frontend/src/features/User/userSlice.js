import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from './userService';

export const loginUser = createAsyncThunk('user/login', async (data, { rejectWithValue }) => {
    try {
        const response = await authService.loginAUser(data);
        return response;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});

const initialState = { user: '', isError: false, isSuccess: false, isLoading: false, message: '' };

const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.user = action.error;
                state.message = 'Something went wrong';
            });
    },
});

export default userSlice.reducer;
