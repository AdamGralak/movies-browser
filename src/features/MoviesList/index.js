import {
    Movies,
    StyledLink,
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
import noMovie from "../../images/noMovie.svg";
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
                const url = movie.poster_path ? `${baseurl}${movie.poster_path}` : noMovie;
                const genreNames = getGenreNames(movie.genre_ids);
                const role = `${movie.character ? movie.character : movie.department}`;
                return (
                    <StyledLink to={`/movies/${movie.id}`} key={movie.id}>
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
                                            <DisabledOnMobile>{role} (</DisabledOnMobile>
                                            {movie.release_date ? movie.release_date.split("-")[0] : ""}
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
                    </StyledLink>
                );
            })}
        </Movies>
    );
};

export default MoviesList;
