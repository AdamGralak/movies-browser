import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchPeopleList, selectLoading, selectPeopleImagePath } from '../../core/popularPeople/peopleListSlice';
import PeopleList from '../PeopleList';
import { Container } from '../../common/Container/styled';
import { Header } from '../../common/Header/styled';
import Paginator from '../../common/Paginator';
import { selectactualPage, selectActualQuery, setActualLocation, setactualPage } from '../../core/actual/actualStateSlice';
import { Loading } from '../../common/Message/MessageContainer/Loading';

export const PeopleListPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { page: urlPage } = useParams();
    const page = useSelector(selectactualPage);
    const people = useSelector(selectPeopleImagePath);
    const loading = useSelector(selectLoading);
    const baseURL = `${"https://image.tmdb.org/t/p/"}${"w500"}`;
    const actualPage = parseInt(urlPage, 10) || 1;
    const query = useSelector(selectActualQuery);
    const actualLocation = location.pathname.includes("movies") ? "movie" : "people";

    useEffect(() => {
        dispatch(setActualLocation(actualLocation));
        if (actualPage !== page) {
            dispatch(setactualPage(actualPage));
        }
    }, [actualPage, page, dispatch, actualLocation]);

    useEffect(() => {
        if (actualPage !== page) {
            dispatch(setactualPage(actualPage));
        }
    }, [actualPage, page, dispatch]);

    useEffect(() => {
        dispatch(fetchPeopleList({ page: actualPage, query, actualLocation }));
    }, [dispatch, actualPage, query, actualLocation]);

    // Zaktualizuj URL w razie zmiany numeru strony
    useEffect(() => {
        if (page !== actualPage) {
            navigate(`/people/page/${page}`);
        }
    }, [page, navigate, actualPage]);

  if (loading === true) return <Loading />;

    return (
        <>
            <Container>
                <Header>Popular people</Header>
                <PeopleList
                    people={people}
                    baseurl={baseURL}
                />
            </Container>
            <Paginator />
        </>
    )
};

export default PeopleListPage;
