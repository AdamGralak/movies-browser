import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPeopleList, selectLoading, selectPeopleImagePath } from '../../core/popularPeople/peopleListSlice';
import PeopleList from '../PeopleList';
import { Container } from '../../common/Container/styled';
import { Header } from '../../common/Header/styled';
import Paginator from '../../common/Paginator';
import { selectactualPage, setactualPage } from '../../core/actual/actualStateSlice';
import { Loading } from '../../common/Message/MessageContainer/Loading';

export const PeopleListPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { page: urlPage } = useParams();
    const page = useSelector(selectactualPage);
    const people = useSelector(selectPeopleImagePath);
    const loading = useSelector(selectLoading);
    const baseURL = `${"https://image.tmdb.org/t/p/"}${"w500"}`;
    const actualPage = parseInt(urlPage, 10) || 1;

    // Synchronizuj numer strony z Redux
    useEffect(() => {
        if (actualPage !== page) {
            dispatch(setactualPage(actualPage));
        }
    }, [actualPage, page, dispatch]);

    // Załaduj dane dla odpowiedniej strony
    useEffect(() => {
        dispatch(fetchPeopleList());
    }, [dispatch, actualPage]);

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
