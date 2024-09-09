import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1
};

const actualState = createSlice({
    name: 'actualState',
    initialState,
    reducers: {
        goToFirstPage: (state) => {
            state.currentPage = 1;
        },
        goToLastPage: (state) => {
            state.currentPage = 500;
        },
        incrementCurrentPage: (state) => {
            state.currentPage++;
        },
        decrementCurrentPage: (state) => {
            state.currentPage--;
        },
    }
});

export const {
    incrementCurrentPage,
    decrementCurrentPage,
    goToFirstPage,
    goToLastPage,
} = actualState.actions;

export const selectCurrentPage = state => state.actualState.currentPage;

export default actualState.reducer;