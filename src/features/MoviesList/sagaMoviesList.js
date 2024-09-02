import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchMoviesList, fetchMoviesListSuccess, fetchMoviesListError } from "./moviesListSlice";
import { getMoviesFromApi } from "./getMoviesList";

function* fetchMoviesListHandler(action) {
    try {
        yield delay(600);
        const movies = yield call(getMoviesFromApi, action.payload);
        yield put(fetchMoviesListSuccess(movies));
    } catch (error) {
        yield put(fetchMoviesListError());
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMoviesList.type, fetchMoviesListHandler)
}