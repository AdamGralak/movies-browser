import { all } from "redux-saga/effects";
import { moviesSaga } from './MoviesList/sagaMoviesList';
import { peopleSaga } from "./PeopleList/sagaPeopleList";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
    ]);
}