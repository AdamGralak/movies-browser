import React, { useEffect } from "react";
import { fetchPeopleList, selectLoading, selectPeopleImagePath } from "../../core/popularPeople/peopleListSlice";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";
import PeopleList from "../PeopleList";
import Paginator from "../../common/Paginator";
import { selectCurrentPage } from "../../core/actual/actualStateSlice";

export const PeopleListPage = () => {
    const people = useSelector(selectPeopleImagePath);
    const loading = useSelector(selectLoading);
    const page = useSelector(selectCurrentPage);
    const size = {
        small: "w200",
        large: "w400",
    };
    const baseURL = `${"https://image.tmdb.org/t/p/"}${size.small}`;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeopleList());
    }, [dispatch, page]);

    if (loading === true) return <p>Loading Page (spinner)</p>;

    return (
        <Container>
            <Header>Popular people</Header>
            <PeopleList
                people={people}
                baseurl={baseURL}
            />
            <Paginator />
        </Container>
    )
};

export default PeopleListPage;