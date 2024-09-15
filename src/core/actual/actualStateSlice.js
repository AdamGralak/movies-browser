import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    actualPage: 1,
    query: "",
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
    },
});

export const {
    goToFirstPage,
    setactualPage,
    setActualQuery,
} = actualState.actions;

export const selectactualPage = (state) => state.actualState.actualPage;
export const selectActualQuery = (state) => state.actualState.query;

export default actualState.reducer;
