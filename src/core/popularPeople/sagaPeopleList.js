import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPeopleList, fetchPeopleListSucces, fetchPeopleListError } from "./peopleListSlice"
import { getPeopleFromApi } from "./getPeopleList";

function* fetchPeopleListHandler() {
    try {
        const people = yield call(getPeopleFromApi);
        
        yield put(fetchPeopleListSucces(people));
    } catch (error) {
        yield put(fetchPeopleListError());
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeopleList.type, fetchPeopleListHandler)
}