import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    movieDetails: [],
    movieCredits: [],
};

const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {
        fetchMovieDetails: (state) => {
            state.loading = true;
        },
        fetchMovieDetailsError: (state) => {
            state.loading = true;
        },
        fetchMovieDetailsSucces: (state, { payload: movieDetails }) => {
            state.movieDetails = movieDetails;
            state.loading = false;
        },
        fetchMovieCreditsSucces: (state, { payload: movieCredits }) => {
            state.movieCredits = movieCredits;
            state.loading = false;
        },
        resetMovieDetails: (state) => {
            state.movieDetails = [];
            state.loading = false;
        },
    },
});

export const {
    fetchMovieDetails,
    fetchMovieDetailsSucces,
    fetchMovieDetailsError,
    fetchMovieCreditsSucces,
    resetMovieDetails,
} = movieDetailsSlice.actions;
const selectMovieDetailsState = state => state.movieDetails;
export const selectMovieDetails = state => selectMovieDetailsState(state).movieDetails;
export const selectLoading = state => selectMovieDetailsState(state).loading;
export const selectMovieCredits = state => selectMovieDetailsState(state).movieCredits;

export default movieDetailsSlice.reducer;