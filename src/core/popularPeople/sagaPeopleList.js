import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchPeopleList, fetchPeopleListSuccess, fetchPeopleListError } from "./peopleListSlice"
import { getPeopleFromApi } from "./getPeopleList";

function* fetchPeopleListHandler() {
    try {
        const people = yield call(getPeopleFromApi);
        
        yield put(fetchPeopleListSuccess(people));
    } catch (error) {
        yield put(fetchPeopleListError());
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeopleList.type, fetchPeopleListHandler)
}