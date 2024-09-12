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
    const genres = genresState.genres || [];

    if (!movies.length) {
        return <p>No movies data available</p>;
    }

    const getGenreName = (genreId) => {
        const genre = genres.find(genre => genre.id === genreId);
        return genre ? genre.name : null;
    };

    const formatNumber = (number) => {
        const rounded = number.toFixed(1);
        const formatted = rounded.replace('.', ',');
        return formatted;
    }

    return (
        <Movies>
            {movies.map((movie) => {
                const url = movie.poster_path ? `${baseurl}${movie.poster_path}` : noMovie;
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
                                            <DisabledOnMobile>{role !== "undefined" ? role : "Unknown"} </DisabledOnMobile>
                                            {movie.release_date ?
                                                <><DisabledOnMobile>(</DisabledOnMobile>
                                                    {movie.release_date.split("-")[0]}
                                                    <DisabledOnMobile>)</DisabledOnMobile></>
                                                : ""
                                            }
                                        </>
                                        :
                                        <>{movie.release_date ? movie.release_date.split("-")[0] : ""}</>
                                    }
                                </Year>
                                <Categories>
                                    {movie.genre_ids ?
                                        <>
                                            {
                                                movie.genre_ids.map((genre_id) => (
                                                    <Category key={genre_id}>{getGenreName(genre_id)}</Category>
                                                ))
                                            }
                                        </>
                                        : ""
                                    }
                                </Categories>
                            </Info>
                            <Bottom>
                                {movie.vote_average ?
                                    <>
                                        <StyledStarIcon />
                                        <Rates>
                                            {movie.vote_average ? formatNumber(movie.vote_average) : ""}
                                        </Rates>
                                        <Votes>
                                            {movie.vote_count} votes
                                        </Votes>
                                    </>
                                    : <Votes>No votes</Votes>
                                }
                            </Bottom>
                        </Wrapper>
                    </StyledLink>
                );
            })}
        </Movies>
    );
};

export default MoviesList;
