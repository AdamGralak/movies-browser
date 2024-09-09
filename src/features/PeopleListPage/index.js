import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPeopleList, selectLoading, selectPeopleImagePath } from '../../core/popularPeople/peopleListSlice';
import PeopleList from '../PeopleList';
import { Container } from '../../common/Container/styled';
import { Header } from '../../common/Header/styled';
import Paginator from '../../common/Paginator';
import { selectCurrentPage, setCurrentPage } from '../../core/actual/actualStateSlice';

export const PeopleListPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { page: urlPage } = useParams();
    const page = useSelector(selectCurrentPage);
    const people = useSelector(selectPeopleImagePath);
    const loading = useSelector(selectLoading);

    const currentPage = parseInt(urlPage, 10) || 1;

    // Synchronizuj numer strony z Redux
    useEffect(() => {
        if (currentPage !== page) {
            dispatch(setCurrentPage(currentPage));
        }
    }, [currentPage, page, dispatch]);

    // Załaduj dane dla odpowiedniej strony
    useEffect(() => {
        dispatch(fetchPeopleList());
    }, [dispatch, currentPage]);

    // Zaktualizuj URL w razie zmiany numeru strony
    useEffect(() => {
        if (page !== currentPage) {
            navigate(`/people/page/${page}`);
        }
    }, [page, navigate, currentPage]);

    if (loading) return <p>Loading Page (spinner)</p>;

    return (
        <Container>
            <Header>Popular people</Header>
            <PeopleList
                people={people}
                baseurl="https://image.tmdb.org/t/p/w200"
            />
            <Paginator />
        </Container>
    );
};

export default PeopleListPage;
