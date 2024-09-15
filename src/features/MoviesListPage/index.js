import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMoviesList, selectImagePath, selectLoading } from '../../core/moviesListPage/moviesListSlice';
import MoviesList from '../MoviesList';
import { Header } from '../../common/Header/styled';
import Paginator from '../../common/Paginator';
import { resetQuery, selectactualPage, setactualPage } from '../../core/actual/actualStateSlice';
import { Container } from "../../common/Container/styled";
import { Loading } from "../../common/Message/MessageContainer/Loading";

export const MoviesListPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { page: urlPage } = useParams();
    const page = useSelector(selectactualPage);
    const movies = useSelector(selectImagePath);
    const loading = useSelector(selectLoading);
    const baseURL = `${"https://image.tmdb.org/t/p/"}${"w500"}`;
    const actualPage = parseInt(urlPage, 10) || 1;

    useEffect(() => {
        if (actualPage !== page) {
            dispatch(setactualPage(actualPage));
        }
    }, [actualPage, page, dispatch]);

    useEffect(() => {
        dispatch(fetchMoviesList());
        return () => {
            dispatch(resetQuery());
        };
    }, [dispatch, actualPage]);

    useEffect(() => {
        if (page !== actualPage) {
            navigate(`/movies/page/${page}`);
        }
    }, [page, navigate, actualPage]);
   
  if (loading === true) return <Loading />;

    return (
        <>
            <Container>
                <Header>Popular movies</Header>
                <MoviesList
                    movies={movies}
                    baseurl={baseURL}
                />
            </Container>
            <Paginator />
        </>
    );
};

export default MoviesListPage;
