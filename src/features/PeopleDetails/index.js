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
import noPerson from "../../images/noPerson.svg";
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section/styled";
import MoviesList from "../MoviesList";
import { fetchPeopleDetails, resetPeopleDetails, selectLoading, selectPeopleCredits, selectPeopleDetails } from "../../core/peopleDetails/peopleDetailsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../common/Message/MessageContainer/Loading";
import { ConnectionError } from "../../common/Message/ConnectionError";

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

    if (loading) return <Loading />;

    if (people === null || credits === null) {
        return <ConnectionError />;;
    }

    const url = people.profile_path ? `${baseURL}${people.profile_path}` : noPerson;

    const formatDate = (date) => {
        const [year, month, day] = date.split("-");
        return `${day}.${month}.${year}`;
    }

    return (
        <Container>
            <Section>
                <PersonInfo>
                    <Photo src={url} />
                    <Info>
                        <Name>
                            {people.name}
                        </Name>
                        <div>
                            {people.birthday ? <><GreyText><DisabledOnMobile>Date of birth:</DisabledOnMobile><Birth>Birth:</Birth></GreyText> {formatDate(people.birthday)}<br /></> : ""}

                            {people.place_of_birth ? <><GreyText>Place of birth:</GreyText> {people.place_of_birth}</> : ""}
                        </div>
                    </Info>
                    <Description>
                        {people.place_of_birth ? <>{people.biography}</> : ""}
                    </Description>
                </PersonInfo>
            </Section>
            {credits.cast?.length ?
                <Section>
                    <Header>Movies - cast ({credits.cast?.length})</Header>
                    <MoviesList
                        movies={credits.cast}
                        baseurl={baseURL}
                        renderinpeopledetails={(true)}
                    />
                </Section>
                : ""
            }
            {credits.crew?.length ?
                <Section>
                    <Header>Movies - crew ({credits.crew?.length})</Header>
                    <MoviesList
                        movies={credits.crew}
                        baseurl={baseURL}
                        renderinpeopledetails={(true)}
                    />
                </Section>
                : ""
            }
        </Container>
    );
};

export default PeopleDetails;