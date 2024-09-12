import { call, put, select, takeLatest } from "redux-saga/effects";
import { fetchMoviesList, fetchMoviesListSucces, fetchMoviesListError, fetchMoviesGenresSucces, fetchMoviesGenresError, fetchMoviesGenres } from "./moviesListSlice";
import { getMoviesFromApi } from "./getMoviesList";
import { getMoviesGenresFromApi } from "./getMoviesGenres";
import { selectactualPage } from "../actual/actualStateSlice";

function* fetchMoviesListHandler() {
    try {
        const page = yield select(selectactualPage);
        const movies = yield call(getMoviesFromApi, {page});
        const genres = yield call(getMoviesGenresFromApi);
        yield put(fetchMoviesListSucces(movies));
        yield put(fetchMoviesGenresSucces(genres));
    } catch (error) {
        yield put(fetchMoviesListError());
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMoviesList.type, fetchMoviesListHandler)
}

function* fetchMoviesGenresHandler() {
    try {
        const genres = yield call(getMoviesGenresFromApi);
        yield put(fetchMoviesGenresSucces(genres));
    } catch (error) {
        yield put(fetchMoviesGenresError());
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* genresSaga() {
    yield takeLatest(fetchMoviesGenres.type, fetchMoviesGenresHandler)
}