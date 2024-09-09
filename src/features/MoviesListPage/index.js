import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMoviesList, selectImagePath, selectLoading } from '../../core/moviesListPage/moviesListSlice';
import MoviesList from '../MoviesList';
import { Container } from '../../common/Container/styled';
import { Header } from '../../common/Header/styled';
import Paginator from '../../common/Paginator';
import { selectCurrentPage, setCurrentPage } from '../../core/actual/actualStateSlice';

export const MoviesListPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { page: urlPage } = useParams();
    const page = useSelector(selectCurrentPage);
    const movies = useSelector(selectImagePath);
    const loading = useSelector(selectLoading);

    const currentPage = parseInt(urlPage, 10) || 1;

    useEffect(() => {
        if (currentPage !== page) {
            dispatch(setCurrentPage(currentPage));
        }
    }, [currentPage, page, dispatch]);

    useEffect(() => {
        dispatch(fetchMoviesList());
    }, [dispatch, currentPage]);

    useEffect(() => {
        if (page !== currentPage) {
            navigate(`/movies/page/${page}`);
        }
    }, [page, navigate, currentPage]);

    if (loading) return <p>Loading Page (spinner)</p>;

    return (
        <Container>
            <Header>Popular movies</Header>
            <MoviesList
                movies={movies}
                baseurl="https://image.tmdb.org/t/p/w400"
            />
            <Paginator />
        </Container>
    );
};

export default MoviesListPage;
