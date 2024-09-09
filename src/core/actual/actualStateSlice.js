import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
};

const actualState = createSlice({
    name: 'actualState',
    initialState,
    reducers: {
        goToFirstPage: (state) => {
            state.currentPage = 1;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const {
    goToFirstPage,
    setCurrentPage,
} = actualState.actions;

export const selectCurrentPage = (state) => state.actualState.currentPage;

export default actualState.reducer;
