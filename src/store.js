import { configureStore } from '@reduxjs/toolkit';
import moviesListReducer from './features/MoviesList/moviesListSlice';
import peopleListReducer from './features/PeopleList/peopleListSlice';
import rootSaga from './features/rootSaga';
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesListReducer,
        people: peopleListReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
    });
    
    sagaMiddleware.run(rootSaga);
    
export default store;
