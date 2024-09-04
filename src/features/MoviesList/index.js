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
export const MoviesList = ({ movies =[], baseurl, renderinpeopledetails }) => {

    if (!Array.isArray(movies)) {
        return <p>No people data available</p>;
    }

    return (
        <Movies>
            {movies.map((movie) => {
                const url = `${baseurl}${movie.poster_path}`;
                return (
                    <Link to={`/movies/${movie.id}`}>
                        <Content
                            key={movie.id}
                        >
                            <Photo
                                key={movie.id}
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
                                            <><DisabledOnMobile>Rola (</DisabledOnMobile>{movie.release_date ? movie.release_date : ""}<DisabledOnMobile>)</DisabledOnMobile></>
                                            :
                                            <>{movie.release_date ? movie.release_date : ""}</>
                                        }
                                    </Year>
                                    <Categories>
                                        {movie.genre_ids ? (movie.genre_ids.map((item) => {
                                            return (
                                                <Category>
                                                    {item}
                                                </Category>
                                            )
                                        })) : ""}
                                    </Categories>
                                </Info>
                                <Bottom>
                                    <StyledStarIcon />
                                    <Rates>
                                        {movie.vote_average}
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