import {
    PersonInfo,
    Poster,
    Wrapper,
    Info,
    Name,
    GreyText,
    Categories,
    Category,
    RatingInfo,
    StyledStarIcon,
    Rates,
    Votes,
    Movies,
    Content,
    Photo,
    Title,
    Year,
} from "./styled";
import examplePhoto from "./example.png"
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";

export const PeopleDetails = () => {

    return (
        <Container>
            <PersonInfo>
                <Photo src={examplePhoto} />
                <Info>
                    <Name>
                        Imię i nazwisko
                    </Name>
                    <div>
                        <GreyText>Date of birth:</GreyText> data urodzin<br />
                        <GreyText>Place of birth:</GreyText> miejsce urodzenia
                    </div>
                    <p>opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis </p>
                </Info>
            </PersonInfo>
            <Header>Movies - cast (ilość)</Header>
            <Movies> {/* tutaj mapowanie  */}
                <Content>
                    <Poster src={examplePhoto} />
                    <Wrapper>
                        <div>
                            <Title>tytuł</Title>
                            <Year>rola i (rok przodukcji)</Year>
                            <Categories> {/* tutaj mapowanie  */}
                                <Category>
                                    kategoria
                                </Category>
                            </Categories>
                        </div>
                        <RatingInfo>
                            <StyledStarIcon />
                            <Rates>
                                7,8
                            </Rates>
                            <Votes>
                                335 votes
                            </Votes>
                        </RatingInfo>
                    </Wrapper>
                </Content>
            </Movies>
            <Header>Movies - crew (ilość)</Header>
            <Movies> {/* tutaj mapowanie  */}
                <Content>
                    <Poster src={examplePhoto} />
                    <Wrapper>
                        <div>
                            <Title>tytuł</Title>
                            <Year>rola i (rok przodukcji)</Year>
                            <Categories> {/* tutaj mapowanie  */}
                                <Category>
                                    kategoria
                                </Category>
                            </Categories>
                        </div>
                        <RatingInfo>
                            <StyledStarIcon />
                            <Rates>
                                7,8
                            </Rates>
                            <Votes>
                                335 votes
                            </Votes>
                        </RatingInfo>
                    </Wrapper>
                </Content>
            </Movies>
        </Container>
    );
};

export default PeopleDetails;