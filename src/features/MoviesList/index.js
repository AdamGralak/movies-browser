import { Link } from "react-router-dom";
import {
    Movies,
    Content,
    Photo,
    Wrapper,
    Info,
    Title,
    Year,
    DisabledOnMobile,
    Categories,
    Category,
    Bottom,
    StyledStarIcon,
    Rates,
    Votes
} from "./styled";
import { useSelector } from "react-redux";
import { selectMoviesGenresState } from "../../core/moviesListPage/moviesListSlice";

export const MoviesList = ({ movies = [], baseurl, renderinpeopledetails }) => {
    const genresState = useSelector(selectMoviesGenresState);
    const genres = genresState.genres || []; // Pobranie tablicy genres z obiektu genresState

    if (!Array.isArray(movies) || movies.length === 0) {
        return <p>No movies data available</p>;
    }

    const getGenreNames = (genreIds) => {
        return genreIds.map(id => {
            const genre = genres.find(genre => genre.id === id);
            return genre ? genre.name : null;
        }).filter(name => name !== null);
    };

    return (
        <Movies>
            {movies.map((movie) => {
                const url = `${baseurl}${movie.poster_path}`;
                const genreNames = getGenreNames(movie.genre_ids);

                return (
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                        <Content>
                            <Photo
                                src={url}
                                alt={movie.title}
                            />
                            <Wrapper>
                                <Info>
                                    <Title>
                                        {movie.original_title}
                                    </Title>
                                    <Year>
                                        {renderinpeopledetails ?
                                            <>
                                                <DisabledOnMobile>Rola (</DisabledOnMobile>
                                                {movie.release_date ? movie.release_date : ""}
                                                <DisabledOnMobile>)</DisabledOnMobile>
                                            </>
                                            :
                                            <>{movie.release_date ? movie.release_date.split("-")[0] : ""}</>
                                        }
                                    </Year>
                                    <Categories>
                                        {genreNames.map((name, index) => (
                                            <Category key={index}>{name}</Category>
                                        ))}
                                    </Categories>
                                </Info>
                                <Bottom>
                                    <StyledStarIcon />
                                    <Rates>
                                        {movie.vote_average.toFixed(1)}
                                    </Rates>
                                    <Votes>
                                        {movie.vote_count} votes
                                    </Votes>
                                </Bottom>
                            </Wrapper>
                        </Content>
                    </Link>
                );
            })}
        </Movies>
    );
};

export default MoviesList;
