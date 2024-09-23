import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    people: [],
    responseOk: true,
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
            state.responseOk = false;
        },
        fetchPeopleListSucces: (state, { payload: people }) => {
            state.people = people;
            state.loading = false;
            state.responseOk = true;
        },
    },
});

export const {
    fetchPeopleList,
    fetchPeopleListSucces,
    fetchPeopleListError,
} = peopleListSlice.actions;
const selectPeopleState = state => state.people;
export const selectPeople = state => selectPeopleState(state).people;
export const selectPeopleTotalPages = state => (state.people.people && state.people.people.total_pages) || 0;
export const selectLoading = state => selectPeopleState(state).loading;
export const selectResponeOk = state => selectPeopleState(state).responseOk;
export const selectPeopleImagePath = state => (state.people.people && state.people.people.results) || [];

export default peopleListSlice.reducer;