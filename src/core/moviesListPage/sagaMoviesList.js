import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesList, fetchMoviesListSucces, fetchMoviesListError, fetchMoviesGenresSucces, fetchMoviesGenresError, fetchMoviesGenres } from "./moviesListSlice";
import { getMoviesFromApi } from "./getMoviesList";
import { getMoviesGenresFromApi } from "./getMoviesGenres";

function* fetchMoviesListHandler(action) {
    try {
        yield delay(1000);
        const { page, query, actualLocation } = action.payload;
        const movies = yield call(getMoviesFromApi, { page, query, actualLocation });
        if (movies === null) {
            yield put(fetchMoviesListError());
        } else {
            yield put(fetchMoviesListSucces(movies));
        }
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