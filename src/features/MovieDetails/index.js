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
} from "./styled";
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section/styled";
import PeopleList from "../PeopleList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, selectMovieCredits, selectMovieDetails } from "../../core/moviesDetails/movieDetailsSlice";
import { useEffect } from "react";
import { resetMovieDetails } from "../../core/moviesDetails/movieDetailsSlice";

export const MovieDetails = () => {
    const people = ["sa", "asd"];
    const movie = useSelector(selectMovieDetails);
    const credits = useSelector(selectMovieCredits);
    const size = {
        small: "w200",
        large: "w500",
    };
    const baseURL = `${"https://image.tmdb.org/t/p/"}${size.large}`;

    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovieDetails(id));
        return () => {
            dispatch(resetMovieDetails());
        };
    }, [dispatch, id]);


    const url = `${baseURL}${movie.poster_path}`;

    return (
        <>
            <BackgroundBlack>
                <BackgroundImage bgimage={url}>
                    <HeadTitle>{movie.orilinal_title}</HeadTitle>
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
                        <Poster src={url} />
                        <Wrapper>
                            <Title>
                                {movie.orilinal_title}
                            </Title>
                            <Year>
                                {movie.release_date}
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
                        <Description> {movie.overview} </Description>
                    </MovieInfo>
                </Section>
                <Section>
                    <Header>Cast</Header>
                    <PeopleList people={credits.cast} baseurl={baseURL} renderinmoviedetails={(true)} />
                </Section>
                <Section>
                    <Header>Crew</Header>
                    <PeopleList
                        people={credits.crew}
                        baseurl={baseURL}
                        renderinmoviedetails={(true)}
                    />
                </Section>
            </Container>
        </>
    );
};

export default MovieDetails;