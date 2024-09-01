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
const selectPeopleState = state => state.people;
export const selectPeople = state => selectPeopleState(state).people;
export const selectLoading = state => selectPeopleState(state).loading;
export const selectPeopleImagePath = state => selectPeopleState(state).people.results || [];

export default peopleListSlice.reducer;