import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchPeopleList, selectLoading, selectPeopleImagePath, selectResponeOk } from '../../core/popularPeople/peopleListSlice';
import PeopleList from '../PeopleList';
import { Container } from '../../common/Container/styled';
import { Header } from '../../common/Header/styled';
import Paginator from '../../common/Paginator';
import { Loading } from '../../common/Message/MessageContainer/Loading';
import { NoResults } from '../../common/Message/MessageContainer/NoResults';
import useQueryParameter from '../../core/search/useQueryParameter';
import searchQueryParameter from '../../core/search/searchQueryParameter';
import { ConnectionError } from '../../common/Message/ConnectionError';

export const PeopleListPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const queryPage = useQueryParameter('page');
    const actualPage = parseInt(queryPage, 10) || 1;

    const query = useQueryParameter(searchQueryParameter);
    const responseOk = useSelector(selectResponeOk);
    const people = useSelector(selectPeopleImagePath);
    const loading = useSelector(selectLoading);
    const baseURL = `${"https://image.tmdb.org/t/p/"}${"w500"}`;
    const actualLocation = location.pathname.includes("movies") ? "movie" : "people";

    useEffect(() => {
        dispatch(fetchPeopleList({ page: actualPage, query, actualLocation }));
    }, [dispatch, actualPage, query, actualLocation]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        if (query !== "") {
            searchParams.set('search', query);
        }
        searchParams.set('page', actualPage);

        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    }, [navigate, actualPage, query, location.pathname]);

    if (!people.length && !loading) {
        return <NoResults searchQuery={query} />
    }

    if (!responseOk) {
        return <ConnectionError />
    }

    return (
        <>
            <Container>
                <Header>
                    {query ? `Search results for "${query}"` : "Popular people"}
                </Header>
                {loading ? <Loading /> : <PeopleList people={people} baseurl={baseURL} />}
            </Container>
            {!loading ? <Paginator /> : ""}
        </>
    );
};

export default PeopleListPage;
