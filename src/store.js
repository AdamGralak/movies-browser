import { configureStore } from '@reduxjs/toolkit';
import moviesListReducer from './features/MoviesListPage/moviesListSlice';
import peopleListReducer from './features/PeopleListPage/peopleListSlice';
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
