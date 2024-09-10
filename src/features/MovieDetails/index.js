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
import noMovie from "../../images/noMovie.svg";
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section/styled";
import PeopleList from "../PeopleList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, selectLoading, selectMovieCredits, selectMovieDetails } from "../../core/moviesDetails/movieDetailsSlice";
import { useEffect } from "react";
import { resetMovieDetails } from "../../core/moviesDetails/movieDetailsSlice";
import { Loading } from "../../common/Message/MessageContainer/Loading";

export const MovieDetails = () => {
    const movie = useSelector(selectMovieDetails);
    const credits = useSelector(selectMovieCredits);
    const loading = useSelector(selectLoading);
    const size = {
        small: "w200",
        large: "w500",
        original: "original",
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

    if (loading) return <Loading />;

    if (!movie || !credits) {
        return "";
    }

    const url = movie.poster_path ? `${baseURL}${movie.poster_path}` : noMovie;
    const bgUrl = movie.backdrop_path ? `${"https://image.tmdb.org/t/p/"}${size.original}${movie.backdrop_path}` : false;

    const FormatDate = (date) => {
        const day = date.split("-")[2];
        const month = date.split("-")[1];
        const year = date.split("-")[0];
        const formattedDate = day + "." + month + "." + year;
        return formattedDate
    }

    const formatNumber = (number) => {
        const rounded = number.toFixed(1);
        const formatted = rounded.replace('.', ',');
        return formatted;
    }

    return (
        <>
            <BackgroundBlack bgimage={bgUrl}>
                <BackgroundImage bgimage={bgUrl}>
                    <HeadTitle>{movie.original_title}</HeadTitle>
                    <RatingWrapper>
                        {movie.vote_average ?
                            <>
                                <HeadRatingInfo>
                                    <HeadStyledStarIcon />
                                    <HeadRates>{movie.vote_average ? formatNumber(movie.vote_average) : ""}</HeadRates>
                                    <HeadSmallerFont>/ 10</HeadSmallerFont>
                                </HeadRatingInfo>
                                <HeadVotes>{movie.vote_count} votes</HeadVotes>
                            </>
                            : <HeadVotes>No votes</HeadVotes>
                        }
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
                                {(movie.production_countries?.length !== 0) ? <><GreyText>Production:</GreyText> {movie.production_countries?.map(c => c.name).join(", ")}<br /></> : ""}
                                {movie.release_date ? <><GreyText>Release date:</GreyText> {FormatDate(movie.release_date)}</> : ""}
                            </ProductionRelease>
                            <Categories>
                                {movie.genres?.map(genre => (
                                    <Category key={genre.id}>{genre.name}</Category>
                                ))}
                            </Categories>
                            <RatingInfo>
                                {movie.vote_average ?
                                    <>
                                        <StyledStarIcon />
                                        <Rates>{movie.vote_average ? formatNumber(movie.vote_average) : ""}</Rates>
                                        <SmallerFont disabledonmobile="true">/ 10</SmallerFont>
                                        <SmallerFont>{movie.vote_count} votes</SmallerFont>
                                    </>
                                    : <SmallerFont>No votes</SmallerFont>
                                }
                            </RatingInfo>
                        </Wrapper>
                        <Description>{movie.overview}</Description>
                    </MovieInfo>
                </Section>
                {credits.cast?.length ?
                    <Section>
                        <Header>Cast</Header>
                        <PeopleList people={credits.cast || []} baseurl={baseURL} renderinmoviedetails={true} />
                    </Section>
                    : ""
                }
                {credits.crew?.length ?
                    <Section>
                        <Header>Crew</Header>
                        <PeopleList people={credits.crew || []} baseurl={baseURL} renderinmoviedetails={true} />
                    </Section>
                    : ""
                }
            </Container>
        </>
    );
};

export default MovieDetails;