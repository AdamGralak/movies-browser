import { call, put, delay, takeLatest } from "redux-saga/effects";
import { getMovieDetailsFromApi } from "./getMovieDetailsByID";
import { getMovieCreditsFromApi } from "./getMovieCreditsByID";
import { fetchMovieCreditsSucces, fetchMovieDetails, fetchMovieDetailsError, fetchMovieDetailsSucces } from "./movieDetailsSlice";

function* fetchMovieDetailsHandler(action) {
    try {
        const personID = action.payload;
        const movieDetails = yield call(getMovieDetailsFromApi, personID);
        const movieCredits = yield call(getMovieCreditsFromApi, personID);
        yield delay(2000);
        yield put(fetchMovieDetailsSucces(movieDetails));
        yield put(fetchMovieCreditsSucces(movieCredits));
    } catch (error) {
        yield put(fetchMovieDetailsError());
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* movieDetailsSaga() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler)
}