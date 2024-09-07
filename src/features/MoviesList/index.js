import { useSelector } from "react-redux";
import { selectMovies, selectLoading } from "./moviesListSlice";
import { Movies, Content, Photo, Wrapper, Info, Title, Year, Categories, Category, Bottom, StyledStarIcon, Rates, Votes } from "./styled";
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";

export const MoviesList = () => {

    // const dispatch = useDispatch();
    const movies = useSelector(selectMovies);
    const loading = useSelector(selectLoading);
    // const totalPages = useSelector(selectTotalPages);
    // const isEmpty = useSelector(selectIsEmpty);
    const baseURL = "https://image.tmdb.org/t/p/";
    const size = {
        small: "w200",
        large: "w400",
    }
    {/*const [currentPage, setCurrentPage] = useState(1);
    const [previousPage, setPreviousPage] = useState(1);

    const handlePageChange = (newPage) => {
        setPreviousPage(currentPage);
        setCurrentPage(newPage);
        dispatch(fetchMoviesList(newPage));
    };

    useEffect(() => {
        if (isEmpty && currentPage !== previousPage) {
            setCurrentPage(previousPage);
            dispatch(fetchMoviesList(previousPage));
        }
    }, [isEmpty, currentPage, previousPage]);*/}


    if (loading === true) return <p>Loading Page (spinner)</p>;

    return (
        <Container>
            <Header>Popular movies</Header>
            <Movies>
                {movies.map((movie) => {
                    const url = `${baseURL}${size.small}${movie.poster_path}`;
                    return (
                        <Content
                            key={movie.id}
                        >
                            <Photo
                                key={movie.id}
                                src={url}
                                alt={movie.title}
                            />
                            <Wrapper>
                                <Info>
                                    <Title>
                                        {movie.original_title}
                                    </Title>
                                    <Year>
                                        {movie.release_date ? movie.release_date : ""}
                                    </Year>
                                    <Categories>
                                        {movie.genre_ids ? (movie.genre_ids.map((item) => {
                                            return (
                                                <Category>
                                                    {item}
                                                </Category>
                                            )
                                        })) : ""}
                                    </Categories>
                                </Info>
                                <Bottom>
                                    <StyledStarIcon />
                                    <Rates>
                                        {movie.vote_average}
                                    </Rates>
                                    <Votes>
                                        {movie.vote_count} votes
                                    </Votes>
                                </Bottom>
                            </Wrapper>
                        </Content>
                    );
                })}
            </Movies>
           {/* <Paginator
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            /> */}
        </Container>
    );
};

export default MoviesList;