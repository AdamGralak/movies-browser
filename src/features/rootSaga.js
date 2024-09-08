import { all } from "redux-saga/effects";
import { moviesSaga } from '../core/moviesListPage/sagaMoviesList';
import { peopleSaga } from '../core/popularPeople/sagaPeopleList';
import { peopleDetailsSaga } from "../core/peopleDetails/sagaPeopleDetails";
import { movieDetailsSaga } from "../core/moviesDetails/sagaMovieDetails";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
        peopleDetailsSaga(),
        movieDetailsSaga(),
    ]);
}