import { Movies, Content, Photo, Wrapper, Info, Title, Year, Categories, Category, Bottom, StyledStarIcon, Rates, Votes } from "./styled";
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";
import { useSelector } from "react-redux";
import { selectImagePath, selectLoading } from "./moviesListSlice";

export const MoviesList = () => {

        const movies = useSelector(selectImagePath);
        const loading = useSelector(selectLoading);
        const baseURL = "https://image.tmdb.org/t/p/";
        const size = {
            small: "w200",
            large: "w400",
        }

    if (loading===true) return <p>Loading Page (spinner)</p>;

    return (
        <Container>
            <Header>Popular movies</Header>
            <Movies>
                {movies.map((movie) => {
                    const url = `${baseURL}${size.small}${movie.poster_path}`;
                    return (
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
                                        {movie.release_date ? movie.release_date : ""}
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
                    );
                })}
            </Movies>
        </Container>
    );
};

export default MoviesList;