import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchPeopleList, selectLoading, selectPeopleImagePath } from '../../core/popularPeople/peopleListSlice';
import PeopleList from '../PeopleList';
import { Container } from '../../common/Container/styled';
import { Header } from '../../common/Header/styled';
import Paginator from '../../common/Paginator';
import { Loading } from '../../common/Message/MessageContainer/Loading';
import { NoResults } from '../../common/Message/MessageContainer/NoResults';
import useQueryParameter from '../../core/search/useQueryParameter';
import searchQueryParameter from '../../core/search/searchQueryParameter';

export const PeopleListPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { page: urlPage } = useParams();
    const people = useSelector(selectPeopleImagePath);
    const loading = useSelector(selectLoading);
    const baseURL = `${"https://image.tmdb.org/t/p/"}${"w500"}`;
    const actualPage = parseInt(urlPage, 10) || 1;
    const actualLocation = location.pathname.includes("movies") ? "movie" : "people";
    const query = useQueryParameter(searchQueryParameter);

    useEffect(() => {
        dispatch(fetchPeopleList({ page: actualPage, query, actualLocation }));
    }, [dispatch, actualPage, query, actualLocation]);


    useEffect(() => {
        query === ""
            ? navigate(`/people/page/${actualPage}`)
            : navigate(`/people/page/${actualPage}?search=${query}`);
    }, [navigate, actualPage, query]);

    if (!people.length && loading === false) {
        return <NoResults searchQuery={query} />
    };

    if (loading === true) {
        return <Loading />
    }

    return (
        <>
            <Container>
                <Header>
                    {query ? `Search results for "${query}"` : "Popular people"}
                </Header>
                {loading ?
                    <Loading />
                    : <PeopleList people={people} baseurl={baseURL} />
                }
            </Container>
            <Paginator />
        </>
    );
};

export default PeopleListPage;
