import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";
import { useSelector } from "react-redux";
import { selectImagePath, selectLoading } from "./moviesListSlice";
import MoviesList from "../MoviesList";

export const MoviesListPage = () => {

    const movies = useSelector(selectImagePath);
    const loading = useSelector(selectLoading);
    const size = {
        small: "w200",
        large: "w400",
    }
    const baseURL = `${"https://image.tmdb.org/t/p/"}${size.small}`;

    if (loading === true) return <p>Loading Page (spinner)</p>;

    return (
        <Container>
            <Header>Popular movies</Header>
            <MoviesList 
                movies={movies}
                baseurl={baseURL}
            />
        </Container>
    );
};

export default MoviesListPage;