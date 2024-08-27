import { configureStore } from '@reduxjs/toolkit';
import moviesListReducer from './features/moviesListSlice';

const store = configureStore({
    reducer: {
        movies: moviesListReducer,
    },
});

export default store;
