import { all } from "redux-saga/effects";
import { moviesSaga } from './MoviesListPage/sagaMoviesList';
import { peopleSaga } from "./PeopleListPage/sagaPeopleList";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
    ]);
}