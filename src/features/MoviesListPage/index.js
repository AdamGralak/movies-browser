import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchMoviesList, selectImagePath, selectLoading } from '../../core/moviesListPage/moviesListSlice';
import MoviesList from '../MoviesList';
import { Header } from '../../common/Header/styled';
import Paginator from '../../common/Paginator';
import { Container } from "../../common/Container/styled";
import { Loading } from "../../common/Message/MessageContainer/Loading";
import { NoResults } from '../../common/Message/MessageContainer/NoResults';
import useQueryParameter from '../../core/search/useQueryParameter';
import searchQueryParameter from '../../core/search/searchQueryParameter';

export const MoviesListPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const queryPage = useQueryParameter('page');
    const actualPage = parseInt(queryPage, 10) || 1; 

    const query = useQueryParameter(searchQueryParameter);

    const movies = useSelector(selectImagePath);
    const loading = useSelector(selectLoading);
    const baseURL = `${"https://image.tmdb.org/t/p/"}${"w500"}`;
    const actualLocation = location.pathname.includes("movies") ? "movie" : "people";

    useEffect(() => {
        dispatch(fetchMoviesList({ page: actualPage, query, actualLocation }));
    }, [dispatch, actualPage, query, actualLocation]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (query !== "") {
            params.set('search', query);
        }
        params.set('page', actualPage);
        
        navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }, [navigate, actualPage, query, location.pathname]);

    if (!movies.length && !loading) {
        return <NoResults searchQuery={query} />
    }

    return (
        <>
            <Container>
                <Header>
                    {query ? `Search results for "${query}"` : "Popular movies"}
                </Header>
                {loading ? <Loading /> : <MoviesList movies={movies} baseurl={baseURL} />}
            </Container>
            {!loading ? <Paginator /> : ""}
            
        </>
    );
};

export default MoviesListPage;