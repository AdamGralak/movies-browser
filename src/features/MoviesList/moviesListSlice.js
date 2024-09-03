import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    movies: [],
    totalPages: 0,
    isEmpty: false,
};

const moviesListSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchMoviesList: (state) => {
            state.loading = true;
        },
        fetchMoviesListError: (state) => {
            state.loading = false;
        },
        fetchMoviesListSuccess: (state, { payload }) => {
            state.loading = false;
            state.movies = payload.results || [];
            state.totalPages = payload.total_pages || 0;
            state.isEmpty = payload.isEmpty;
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
export const selectIsEmpty = state => selectMoviesState(state).isEmpty;

export default moviesListSlice.reducer;