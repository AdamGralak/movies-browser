import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    actualPage: 1,
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
    },
});

export const {
    goToFirstPage,
    setactualPage,
} = actualState.actions;

export const selectactualPage = (state) => state.actualState.actualPage;

export default actualState.reducer;
