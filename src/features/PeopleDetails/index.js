import {
    PersonInfo,
    Poster,
    Wrapper,
    Info,
    Name,
    GreyText,
    Birth,
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
    DisabledOnMobile,
    Description,
} from "./styled";
import examplePhoto from "./example.png"
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section/styled";


export const PeopleDetails = () => {

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
                <Movies> {/* tutaj mapowanie  */}
                    <Content>
                        <Poster src={examplePhoto} />
                        <Wrapper>
                            <div>
                                <Title>tytuł</Title>
                                <Year><DisabledOnMobile>rola i (</DisabledOnMobile>rok przodukcji<DisabledOnMobile>)</DisabledOnMobile></Year>
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
            </Section>
            <Section>
                <Header>Movies - crew (ilość)</Header>
                <Movies> {/* tutaj mapowanie  */}
                    <Content>
                        <Poster src={examplePhoto} />
                        <Wrapper>
                            <div>
                                <Title>tytuł</Title>
                                <Year><DisabledOnMobile>rola i (</DisabledOnMobile>rok przodukcji<DisabledOnMobile>)</DisabledOnMobile></Year>
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
            </Section>
        </Container>
    );
};

export default PeopleDetails;