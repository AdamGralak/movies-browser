import {
    BackgroundBlack,
    BackgroundImage,
    SmallerFont,
    MovieInfo,
    Poster,
    Wrapper,
    Info,
    Title,
    Year,
    GreyText,
    Categories,
    Category,
    RatingInfo,
    StyledStarIcon,
    Rates,
    Votes,
    People,
    Content,
    Photo,
    Name,
    Role,
} from "./styled";
import examplePhoto from "./example.png"
import exampleBackground from "./exampleBackground.jpg"
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";

export const MovieDetails = () => {

    return (
        <>
            <BackgroundBlack>
                <BackgroundImage bgImage={exampleBackground}>
                    <Header>Tytuł</Header>
                    <RatingInfo>
                        <StyledStarIcon />
                        <Rates>7,8 <SmallerFont>/ 10</SmallerFont></Rates>
                        <Votes>335 votes</Votes>
                    </RatingInfo>
                </BackgroundImage>
            </BackgroundBlack>
            <Container>
                <MovieInfo>
                    <Poster src={examplePhoto} />
                    <Wrapper>
                        <Info>
                            <Title>
                                Tytuł
                            </Title>
                            <Year>
                                Rok produkcji
                            </Year>
                            <GreyText>Production:</GreyText> miejsce produkcji<br />
                            <GreyText>Release date:</GreyText> data premiery
                            <Categories> {/* tutaj mapowanie  */}
                                <Category>
                                    kategoria
                                </Category>
                            </Categories>
                        </Info>
                        <RatingInfo>
                            <StyledStarIcon />
                            <Rates>
                                7,8 <SmallerFont>/ 10</SmallerFont>
                            </Rates>
                            <Votes>
                                335 votes
                            </Votes>
                        </RatingInfo>
                        <p>opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis </p>
                    </Wrapper>
                </MovieInfo>
                <Header>Cast</Header>
                <People> {/* tutaj mapowanie  */}
                    <Content>
                        <Photo src={examplePhoto} />
                        <Name>Imię i nazwisko</Name>
                        <Role>Rola</Role>
                    </Content>
                </People>
                <Header>Crew</Header>
                <People> {/* tutaj mapowanie  */}
                    <Content>
                        <Photo src={examplePhoto} />
                        <Name>Imię i nazwisko</Name>
                        <Role>Rola</Role>
                    </Content>
                </People>
            </Container>
        </>
    );
};

export default MovieDetails;