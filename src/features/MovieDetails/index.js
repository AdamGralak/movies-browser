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
import { fetchMovieDetails, selectLoading, selectMovieCredits, selectMovieDetails } from "../../core/moviesDetails/movieDetailsSlice";
import { useEffect } from "react";
import { resetMovieDetails } from "../../core/moviesDetails/movieDetailsSlice";

export const MovieDetails = () => {
    const movie = useSelector(selectMovieDetails);
    const credits = useSelector(selectMovieCredits);
    const loading = useSelector(selectLoading);
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

    if (loading) return <p>Loading Page (spinner)</p>;

    if (!movie || !credits) {
        return <p>No data available</p>;
    }

    const url = `${baseURL}${movie.poster_path}`;
    const bgUrl = `${baseURL}${movie.backdrop_path}`;

    const FormatDate = (date) => {
        const day = date.split("-")[2];
        const month = date.split("-")[1];
        const year = date.split("-")[0];
        const formattedDate = day + "." + month + "." + year;
        return formattedDate    
    }
    
    return (
        <>
            <BackgroundBlack>
                <BackgroundImage bgimage={bgUrl}>
                    <HeadTitle>{movie.original_title}</HeadTitle>
                    <RatingWrapper>
                        <HeadRatingInfo>
                            <HeadStyledStarIcon />
                            <HeadRates>{movie.vote_average ? movie.vote_average.toFixed(1) : ""}</HeadRates>
                            <HeadSmallerFont>/ 10</HeadSmallerFont>
                        </HeadRatingInfo>
                        <HeadVotes>{movie.vote_count} votes</HeadVotes>
                    </RatingWrapper>
                </BackgroundImage>
            </BackgroundBlack>
            <Container>
                <Section>
                    <MovieInfo>
                        <Poster src={url} />
                        <Wrapper>
                            <Title>{movie.original_title}</Title>
                            <Year>{movie.release_date ? movie.release_date.split("-")[0] : ""}</Year>
                            <ProductionRelease>
                                <GreyText>Production:</GreyText> {movie.production_countries?.map(c => c.name).join(", ")}<br />
                                <GreyText>Release date:</GreyText> {movie.release_date ? FormatDate(movie.release_date) : ""}
                            </ProductionRelease>
                            <Categories>
                                {movie.genres?.map(genre => (
                                    <Category key={genre.id}>{genre.name}</Category>
                                ))}
                            </Categories>
                            <RatingInfo>
                                <StyledStarIcon />
                                <Rates>{movie.vote_average ? movie.vote_average.toFixed(1) : ""}</Rates>
                                <SmallerFont>/ 10</SmallerFont>
                                <SmallerFont>{movie.vote_count} votes</SmallerFont>
                            </RatingInfo>
                        </Wrapper>
                        <Description>{movie.overview}</Description>
                    </MovieInfo>
                </Section>
                <Section>
                    <Header>Cast</Header>
                    <PeopleList people={credits.cast || []} baseurl={baseURL} renderinmoviedetails={true} />
                </Section>
                <Section>
                    <Header>Crew</Header>
                    <PeopleList people={credits.crew || []} baseurl={baseURL} renderinmoviedetails={true} />
                </Section>
            </Container>
        </>
    );
};

export default MovieDetails;