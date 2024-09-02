import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    movies: [],
    totalPages: 0,
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
        fetchMoviesListSuccess: (state, { payload }) => {
            state.movies = payload.results;
            state.totalPages = payload.total_pages;
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

const selectMoviesState = state => state.movies;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectImagePath = state => selectMoviesState(state).movies || [];
export const selectLoading = state => selectMoviesState(state).loading;
export const selectTotalPages = state => selectMoviesState(state).totalPages;

export default moviesListSlice.reducer;