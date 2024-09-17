import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
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
    const { page: urlPage } = useParams();
    const movies = useSelector(selectImagePath);
    const loading = useSelector(selectLoading);
    const baseURL = `${"https://image.tmdb.org/t/p/"}${"w500"}`;
    const actualPage = parseInt(urlPage, 10) || 1;
    const actualLocation = location.pathname.includes("movies") ? "movie" : "people";
    const query = useQueryParameter(searchQueryParameter);
    useEffect(() => {
        dispatch(fetchMoviesList({ page: actualPage, query, actualLocation }));
    }, [dispatch, actualPage, query, actualLocation]);

    useEffect(() => {
        query === ""
            ? navigate(`/movies/page/${actualPage}`)
            : navigate(`/movies/page/${actualPage}?search=${query}`);
    }, [navigate, actualPage, query]);

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
            <Paginator />
        </>
    );
};

export default MoviesListPage;
