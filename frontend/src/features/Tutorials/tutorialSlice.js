import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { tutorialService } from './tutorialService';

export const addCategory = createAsyncThunk('tutorial/category', async (data, { rejectWithValue }) => {
    try {
        const response = await tutorialService.addTutCategory(data);
        return response;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const resetState = createAction('Reset_all');

const initialState = {
    tutorials: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

const tutorialSlice = createSlice({
    name: 'tutorials',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.category = action.payload;
            })
            .addCase(addCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.user = action.error;
                state.message = 'Something went wrong';
            })

            .addCase(resetState, (state) => {
                state.user = null;
            });
    },
});

export default tutorialSlice.reducer;
