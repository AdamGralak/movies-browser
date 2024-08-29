import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    people: [],
};

const peopleListSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        fetchPeopleList: (state) => {
            state.loading = true;
        },
        fetchPeopleListError: (state) => {
            state.loading = true;
        },
        fetchPeopleListSuccess: (state, { payload: people }) => {
            state.people = people;
            state.loading = false;
        },
        clearPeopleState: (state) => {
            Object.assign(state, initialState);
        }
    },
});

export const {
    fetchPeopleList,
    fetchPeopleListSuccess,
    fetchPeopleListError,
    clearPeopleState,
} = peopleListSlice.actions;

export default peopleListSlice.reducer;