import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchMoviesList, fetchMoviesListSuccess, fetchMoviesListError } from "./moviesListSlice";
import { getMoviesFromApi } from "./getMoviesList";

function* fetchMoviesListHandler(action) {
    try {
        yield delay(600);
        const movies = yield call(getMoviesFromApi, action.payload);

        if (movies && movies.results && movies.results.length > 0) {
            yield put(fetchMoviesListSuccess({
                results: movies.results,
                total_pages: movies.total_pages,
                isEmpty: false,
            }));
        } else {
            yield put(fetchMoviesListSuccess({ results: [], total_pages: 0, isEmpty: true }));
            yield call(alert, "There are no movies on this page");
        }
    } catch (error) {
        yield put(fetchMoviesListError());
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMoviesList.type, fetchMoviesListHandler)
}