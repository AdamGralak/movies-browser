import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    peopleDetails: [],
    peopleCredits: [],
};

const peopleDetailsSlice = createSlice({
    name: 'peopleDetails',
    initialState,
    reducers: {
        fetchPeopleDetails: (state) => {
            state.loading = true;
        },
        fetchPeopleDetailsError: (state) => {
            state.loading = true;
        },
        fetchPeopleDetailsSucces: (state, { payload: peopleDetails }) => {
            state.peopleDetails = peopleDetails;
            state.loading = false;
        },
        fetchPeopleCreditsSucces: (state, { payload: peopleCredits }) => {
            state.peopleCredits = peopleCredits;
            state.loading = false;
        },
        resetPeopleDetails: (state) => {
            state.peopleDetails = [];
            state.loading = false;
        },
    },
});

export const {
    fetchPeopleDetails,
    fetchPeopleDetailsSucces,
    fetchPeopleDetailsError,
    fetchPeopleCreditsSucces,
    resetPeopleDetails,
} = peopleDetailsSlice.actions;
const selectPeopleDetailsState = state => state.peopleDetails;
export const selectPeopleDetails = state => selectPeopleDetailsState(state).peopleDetails;
export const selectLoading = state => selectPeopleDetailsState(state).loading;
export const selectPeopleCredits = state => selectPeopleDetailsState(state).peopleCredits;

export default peopleDetailsSlice.reducer;