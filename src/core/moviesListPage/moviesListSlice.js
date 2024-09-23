import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    genresLoading: false,
    responseOk: true,
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
            state.genresLoading = true;
        },
        fetchMoviesListError: (state) => {
            state.loading = false;
            state.responseOk = false;
        },
        fetchMoviesGenresError: (state) => {
            state.genresLoading = false;
        },
        fetchMoviesListSucces: (state, { payload: movies }) => {
            state.movies = movies;
            state.loading = false;
            state.responseOk = true;
        },
        fetchMoviesGenresSucces: (state, { payload: genres }) => {
            state.genres = genres;
            state.genresLoading = false;
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
export const selectMoviesTotalPages = state => selectMoviesState(state).movies.total_pages;
export const selectLoading = state => selectMoviesState(state).loading;
export const selectImagePath = state => (state.movies.movies && state.movies.movies.results) || [];
export const selectResponeOk = state => selectMoviesState(state).responseOk;

export default moviesListSlice.reducer;