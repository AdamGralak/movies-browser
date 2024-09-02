import {
    BackgroundBlack,
    BackgroundImage,
    HeadTitle,
    RatingWrapper,
    HeadRatingInfo,
    HeadStyledStarIcon,
    HeadRates,
    HeadVotes,
    HeadSmallerFont,
    MovieInfo,
    Poster,
    Wrapper,
    Title,
    Year,
    ProductionRelease,
    GreyText,
    Categories,
    Category,
    RatingInfo,
    StyledStarIcon,
    Rates,
    SmallerFont,
    Description,
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
import { Section } from "../../common/Section/styled";

export const MovieDetails = () => {

    return (
        <>
            <BackgroundBlack>
                <BackgroundImage bgimage={exampleBackground}>
                    <HeadTitle>Tytuł long long long long</HeadTitle>
                    <RatingWrapper>
                        <HeadRatingInfo>
                            <HeadStyledStarIcon />
                            <HeadRates>7,8</HeadRates>
                            <HeadSmallerFont>/ 10</HeadSmallerFont>
                        </HeadRatingInfo>
                        <HeadVotes>335 votes</HeadVotes>
                    </RatingWrapper>
                </BackgroundImage>
            </BackgroundBlack>
            <Container>
                <Section>
                    <MovieInfo>
                        <Poster src={examplePhoto} />
                        <Wrapper>
                            <Title>
                                Tytuł long long long long
                            </Title>
                            <Year>
                                Rok produkcji
                            </Year>
                            <ProductionRelease>
                                <GreyText>Production:</GreyText> miejsce produkcji<br />
                                <GreyText>Release date:</GreyText> data premiery
                            </ProductionRelease>
                            <Categories> {/* tutaj mapowanie  */}
                                <Category>
                                    kategoria
                                </Category>
                            </Categories>
                            <RatingInfo>
                                <StyledStarIcon />
                                <Rates>7,8</Rates><SmallerFont disabledonmobile="true">/ 10</SmallerFont>
                                <SmallerFont>335 votes</SmallerFont>
                            </RatingInfo>
                        </Wrapper>
                        <Description>A young Chinese maiden disguises herself as a male warrior in order to save her father.
                            Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.</Description>
                    </MovieInfo>
                </Section>
                <Section>
                    <Header>Cast</Header>
                    <People> {/* tutaj mapowanie  */}
                        <Content>
                            <Photo src={examplePhoto} />
                            <Name>Imię i nazwisko</Name>
                            <Role>Rola</Role>
                        </Content>
                    </People>
                </Section>
                <Section>
                    <Header>Crew</Header>
                    <People> {/* tutaj mapowanie  */}
                        <Content>
                            <Photo src={examplePhoto} />
                            <Name>Imię i nazwisko</Name>
                            <Role>Rola</Role>
                        </Content>
                    </People>
                </Section>
            </Container>
        </>
    );
};

export default MovieDetails;