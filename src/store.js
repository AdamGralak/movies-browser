import { configureStore } from '@reduxjs/toolkit';
import moviesListReducer from './core/moviesListPage/moviesListSlice';
import peopleListReducer from './core/popularPeople/peopleListSlice';
import peopleDetailsReducer from './core/peopleDetails/peopleDetailsSlice';
import movieDetailsReducer from './core/moviesDetails/movieDetailsSlice';
import actualStateReducer from './core/actual/actualStateSlice';
import rootSaga from './features/rootSaga';
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesListReducer,
        people: peopleListReducer,
        peopleDetails: peopleDetailsReducer,
        movieDetails: movieDetailsReducer,
        actualState: actualStateReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
    });
    
    sagaMiddleware.run(rootSaga);
    
export default store;
