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
}  from "./styled";
export const MoviesList = ({ movies, baseurl, peopledetails }) => {

    return (
        <Movies>
            {movies.map((movie) => {
                const url = `${baseurl}${movie.poster_path}`;
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
                                    {peopledetails ?
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
                );
            })}
        </Movies>
    );
};

export default MoviesList;