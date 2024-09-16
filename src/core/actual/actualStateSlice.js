import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    actualPage: 1,
    query: "",
    actualLocation: "",
};

const actualState = createSlice({
    name: 'actualState',
    initialState,
    reducers: {
        goToFirstPage: (state) => {
            state.actualPage = 1;
        },
        setactualPage: (state, action) => {
            state.actualPage = action.payload;
        },
        setActualQuery: (state, action) => {
            state.query = action.payload;
        },
        setActualLocation: (state, action) => {
            state.actualLocation = action.payload;
        },
    },
});

export const {
    goToFirstPage,
    setactualPage,
    setActualQuery,
    setActualLocation,
} = actualState.actions;

export const selectactualPage = (state) => state.actualState.actualPage;
export const selectActualQuery = (state) => state.actualState.query;
export const selectActualLocation = (state) => state.actualState.actualLocation;

export default actualState.reducer;
