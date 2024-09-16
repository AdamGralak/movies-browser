import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchPeopleList, fetchPeopleListSucces, fetchPeopleListError } from "./peopleListSlice"
import { getPeopleFromApi } from "./getPeopleList";
import { selectActualLocation, selectactualPage, selectActualQuery } from "../actual/actualStateSlice";

function* fetchPeopleListHandler() {
    try {
        yield delay (1000);
        const page = yield select(selectactualPage);
        const query = yield select(selectActualQuery);
        const actualLocation = yield select(selectActualLocation);
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