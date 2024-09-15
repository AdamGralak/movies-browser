import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchMoviesList, fetchMoviesListSucces, fetchMoviesListError, fetchMoviesGenresSucces, fetchMoviesGenresError, fetchMoviesGenres } from "./moviesListSlice";
import { getMoviesFromApi } from "./getMoviesList";
import { getMoviesGenresFromApi } from "./getMoviesGenres";
import { selectActualLocation, selectactualPage, selectActualQuery } from "../actual/actualStateSlice";

function* fetchMoviesListHandler() {
    try {
        yield delay (1000);
        const page = yield select(selectactualPage);
        const query = yield select(selectActualQuery);
        const actualLocation = yield select(selectActualLocation);
        const movies = yield call(getMoviesFromApi, {page, query, actualLocation});
        yield put(fetchMoviesListSucces(movies));
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