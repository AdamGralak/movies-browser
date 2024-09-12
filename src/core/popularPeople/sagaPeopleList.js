import { call, put, select, takeLatest } from "redux-saga/effects";
import { fetchPeopleList, fetchPeopleListSucces, fetchPeopleListError } from "./peopleListSlice"
import { getPeopleFromApi } from "./getPeopleList";
import { selectactualPage } from "../actual/actualStateSlice";

function* fetchPeopleListHandler() {
    try {
        
        const page = yield select(selectactualPage);
        const people = yield call(getPeopleFromApi, {page});
        yield put(fetchPeopleListSucces(people));
    } catch (error) {
        yield put(fetchPeopleListError());
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeopleList.type, fetchPeopleListHandler)
}