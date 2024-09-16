import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchMoviesList, selectImagePath, selectLoading } from '../../core/moviesListPage/moviesListSlice';
import MoviesList from '../MoviesList';
import { Header } from '../../common/Header/styled';
import Paginator from '../../common/Paginator';
import { selectactualPage, selectActualQuery, setActualLocation, setactualPage } from '../../core/actual/actualStateSlice';
import { Container } from "../../common/Container/styled";
import { Loading } from "../../common/Message/MessageContainer/Loading";
import { NoResults } from '../../common/Message/MessageContainer/NoResults';

export const MoviesListPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { page: urlPage } = useParams();
    const page = useSelector(selectactualPage);
    const movies = useSelector(selectImagePath);
    const loading = useSelector(selectLoading);
    const baseURL = `${"https://image.tmdb.org/t/p/"}${"w500"}`;
    const actualPage = parseInt(urlPage, 10) || 1;
    const query = useSelector(selectActualQuery);
    const actualLocation = location.pathname.includes("movies") ? "movie" : "people";

    useEffect(() => {
        dispatch(setActualLocation(actualLocation)); // Ustawienie actualLocation przy montowaniu
        if (actualPage !== page) {
            dispatch(setactualPage(actualPage));
        }
    }, [actualPage, page, dispatch, actualLocation]);

    useEffect(() => {
        dispatch(fetchMoviesList({ page: actualPage, query, actualLocation }));
    }, [dispatch, actualPage, query, actualLocation]);

    useEffect(() => {
        if (page !== actualPage) {
            navigate(`/movies/page/${page}`);
        }
    }, [page, navigate, actualPage]);

    if (!movies.length && loading === false) {
        return <NoResults searchQuery={query} />
    };

    if (loading === true) {
        return <Loading />
    }

    return (
        <>
            <Container>
                <Header>
                    {query ? `Search results for "${query}"` : "Popular movies"}
                </Header>
                {loading ?
                    <Loading />
                    : <MoviesList movies={movies} baseurl={baseURL} />
                }
            </Container>
            {(!query && !loading) ? <Paginator /> : ""}
        </>
    );
};

export default MoviesListPage;
