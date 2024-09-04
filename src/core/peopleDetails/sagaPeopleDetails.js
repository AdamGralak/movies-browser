import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchPeopleDetails, fetchPeopleDetailsSucces, fetchPeopleDetailsError, fetchPeopleCreditsSucces } from "./peopleDetailsSlice"
import { getPeopleDetailsFromApi } from "./getPeopleDetailsByID";
import { getPeopleCreditsFromApi } from "./getPeopleCreditsByID";

function* fetchPeopleDetailsHandler(action) {
    try {
        const personID = action.payload;
        const peopleDetails = yield call(getPeopleDetailsFromApi, personID);
        const peopleCredits = yield call(getPeopleCreditsFromApi, personID);
        
        yield put(fetchPeopleDetailsSucces(peopleDetails));
        yield put(fetchPeopleCreditsSucces(peopleCredits));
    } catch (error) {
        yield put(fetchPeopleDetailsError());
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* peopleDetailsSaga() {
    yield takeLatest(fetchPeopleDetails.type, fetchPeopleDetailsHandler)
}