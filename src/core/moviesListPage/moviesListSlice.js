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
    },
});

export const {
    fetchMoviesList,
    fetchMoviesListSuccess,
    fetchMoviesListError,
} = moviesListSlice.actions;

const selectMoviesState = state => state.movies;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectLoading = state => selectMoviesState(state).loading;
export const selectImagePath = state => selectMoviesState(state).movies.results || [];

export default moviesListSlice.reducer;