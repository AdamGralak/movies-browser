import { movies } from "./MoviesBaseTest";

import { Movies, Content, Photo, Wrapper, Info, Title, Year, Categories, Category, Bottom, StyledStarIcon, Rates, Votes } from "./styled";
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";

export const MoviesList = () => {

    return (
        <Container>
        <Header>Popular movies</Header>
        <Movies>
            {movies.map((item) => {
                return (
                    <Content
                        key={item.id}
                    >
                        <Photo src={item.photo} />
                        <Wrapper>
                            <Info>
                                <Title>
                                    {item.title}
                                </Title>
                                <Year>
                                    {item.year ? item.year : ""}
                                </Year>
                                <Categories>
                                    {item.category ? (item.category.map((item) => {
                                        return (
                                            <Category>
                                                {item}
                                            </Category>
                                        )
                                    })): ""}
                                </Categories>
                            </Info>
                            <Bottom>
                                <StyledStarIcon />
                                <Rates>
                                    {item.rates}
                                </Rates>
                                <Votes>
                                    {item.votes} votes
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