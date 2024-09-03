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
import examplePhoto from "./example.png"
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section/styled";
import MoviesList from "../MoviesList";
import { useSelector } from "react-redux";
import { selectImagePath } from "../MoviesListPage/moviesListSlice";


export const PeopleDetails = () => {
    const movies = useSelector(selectImagePath);
    const size = {
        small: "w200",
        large: "w400",
    }
    const baseURL = `${"https://image.tmdb.org/t/p/"}${size.small}`;

    return (
        <Container>
            <Section>
                <PersonInfo>
                    <Photo src={examplePhoto} />
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
                    movies={movies}
                    baseurl={baseURL}
                    peopledetails={(true)}
                />
            </Section>
            <Section>
                <Header>Movies - crew (ilość)</Header>
                <MoviesList
                    movies={movies}
                    baseurl={baseURL}
                    peopledetails={(true)}
                />
            </Section>
        </Container>
    );
};

export default PeopleDetails;