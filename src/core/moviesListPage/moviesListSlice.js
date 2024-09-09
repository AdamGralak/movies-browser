import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    movies: [],
    genres: [],
};


const moviesListSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchMoviesList: (state) => {
            state.loading = true;
        },
        fetchMoviesGenres: (state) => {
            state.loading = true;
        },
        fetchMoviesListError: (state) => {
            state.loading = true;
        },
        fetchMoviesGenresError: (state) => {
            state.loading = true;
        },
        fetchMoviesListSucces: (state, { payload: movies }) => {
            state.movies = movies;
            state.loading = false;
        },
        fetchMoviesGenresSucces: (state, { payload: genres }) => {
            state.genres = genres;
            state.loading = false;
        },
    },
});

export const {
    fetchMoviesList,
    fetchMoviesGenres,
    fetchMoviesListSucces,
    fetchMoviesListError,
    fetchMoviesGenresError,
    fetchMoviesGenresSucces,
} = moviesListSlice.actions;

const selectMoviesState = state => state.movies;
export const selectMoviesGenresState = state => state.movies.genres;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectLoading = state => selectMoviesState(state).loading;
export const selectMoviesTotalPages = state => selectMoviesState(state).movies.total_pages;
export const selectImagePath = state => selectMoviesState(state).movies.results || [];
export default moviesListSlice.reducer;