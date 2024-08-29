import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchMoviesList, fetchMoviesListSuccess, fetchMoviesListError } from "./moviesListSlice";
import { getMoviesFromApi } from "./getMoviesList";

function* fetchMoviesListHandler() {
    try {
        const movies = yield call(getMoviesFromApi);
        yield delay(2000);
        yield put(fetchMoviesListSuccess(movies));
    } catch (error) {
        yield put(fetchMoviesListError());
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMoviesList.type, fetchMoviesListHandler)
}