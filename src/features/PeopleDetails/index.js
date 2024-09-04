import {
    PersonInfo,
    Info,
    Name,
    GreyText,
    Birth,
    Photo,
    DisabledOnMobile,
    Description,
} from "./styled";
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section/styled";
import MoviesList from "../MoviesList";
import { fetchPeopleDetails, resetPeopleDetails, selectLoading, selectPeopleCredits, selectPeopleDetails } from "../../core/peopleDetails/peopleDetailsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const PeopleDetails = () => {
    const people = useSelector(selectPeopleDetails);
    const credits = useSelector(selectPeopleCredits);
    const loading = useSelector(selectLoading);
    const size = {
        small: "w200",
        large: "w500",
    };
    const baseURL = `${"https://image.tmdb.org/t/p/"}${size.large}`;

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeopleDetails(id));
        return () => {
            dispatch(resetPeopleDetails());
        };
    }, [dispatch, id]);

    if (loading) return <p>Loading Page (spinner)</p>;

    if (!people || !credits) {
        return <p>No data available</p>;
    }

    const url = `${baseURL}${people.profile_path}`;

    return (
        <Container>
            <Section>
                <PersonInfo>
                    <Photo src={url} />
                    <Info>
                        <Name>
                            Imię i nazwisko
                        </Name>
                        <div>
                            <GreyText><DisabledOnMobile>Date of birth:</DisabledOnMobile><Birth>Birth:</Birth></GreyText> data urodzin<br />
                            <GreyText>Place of birth:</GreyText> miejsce urodzenia
                        </div>
                    </Info>
                    <Description>
                        Liu Yifei was born in Wuhan, Hubei,
                        Province of China on August 25th, 1987. She
                        began modeling at the age of 8 and was trained
                        in singing, dancing and the piano. Moving to
                        the United States at 10 with her mother,
                        Liu lived there for four years.
                    </Description>
                </PersonInfo>
            </Section>
            <Section>
                <Header>Movies - cast (ilość)</Header>
                <MoviesList
                    movies={credits.cast}
                    baseurl={baseURL}
                    renderinpeopledetails={(true)}
                />
            </Section>
            <Section>
                <Header>Movies - crew (ilość)</Header>
                <MoviesList
                    movies={credits.crew}
                    baseurl={baseURL}
                    renderinpeopledetails={(true)}
                />
            </Section>
        </Container>
    );
};

export default PeopleDetails;