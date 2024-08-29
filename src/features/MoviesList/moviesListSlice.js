import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    movies: [],
};


const moviesListSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchMoviesList: (state) => {
            state.loading = true;
        },
        fetchMoviesListError: (state) => {
            state.loading = true;
        },
        fetchMoviesListSuccess: (state, { payload: movies }) => {
            state.movies = movies;
            state.loading = false;
        },
        clearMoviesListState: (state) => {
            Object.assign(state, initialState);
        }
    },
});

export const {
    fetchMoviesList,
    fetchMoviesListSuccess,
    fetchMoviesListError,
    clearMoviesListState,
} = moviesListSlice.actions;

export default moviesListSlice.reducer;