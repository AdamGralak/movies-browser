import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchPeopleList, fetchPeopleListSucces, fetchPeopleListError } from "./peopleListSlice"
import { getPeopleFromApi } from "./getPeopleList";

function* fetchPeopleListHandler(action) {
    try {
        yield delay (1000);
        const { page, query, actualLocation } = action.payload;
        const people = yield call(getPeopleFromApi, { page, query, actualLocation });
        yield put(fetchPeopleListSucces(people));
    } catch (error) {
        yield put(fetchPeopleListError());
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeopleList.type, fetchPeopleListHandler)
}