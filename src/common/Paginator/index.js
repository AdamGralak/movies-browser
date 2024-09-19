import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import {
    StyledPaginator,
    PaginatorButton,
    PageInfo,
    PageText,
    PageNumber,
    BackwardForward,
    ArrowIcon,
    ButtonText
} from './styled';

import { ReactComponent as ArrowVectorIcon } from './arrow.svg';
import useQueryParameter from '../../core/search/useQueryParameter';
import searchQueryParameter from '../../core/search/searchQueryParameter';
import { selectMoviesTotalPages } from '../../core/moviesListPage/moviesListSlice';
import { selectPeopleTotalPages } from '../../core/popularPeople/peopleListSlice';

export const Paginator = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const query = useQueryParameter(searchQueryParameter);
    const page = useQueryParameter('page');
    const actualPage = parseInt(page, 10) || 1;
    const moviesTotalPages = useSelector(selectMoviesTotalPages);
    const peopleTotalPages = useSelector(selectPeopleTotalPages);

    const mobileMax2 = theme.breakpoint.mobileMax2;
    const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileMax2);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= mobileMax2);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobileMax2]);

    const basePath = location.pathname.includes("movies") ? "/movies" : "/people";
    const totalPages = basePath === "/movies" ? moviesTotalPages : peopleTotalPages;
    const lastPage = totalPages > 500 ? 500 : totalPages;

    const handlePageChange = (newPage) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('page', newPage);
        
        if (query !== "") {
            searchParams.set('search', query);
        }

        navigate(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <StyledPaginator>
            <BackwardForward>
                <PaginatorButton onClick={() => handlePageChange(1)} disabled={actualPage === 1}>
                    {isMobile ? (
                        <>
                            <ArrowIcon as={ArrowVectorIcon} disabled={actualPage === 1} />
                            <ArrowIcon as={ArrowVectorIcon} disabled={actualPage === 1} />
                        </>
                    ) : (
                        <ArrowIcon as={ArrowVectorIcon} disabled={actualPage === 1} />
                    )}
                    <ButtonText>First</ButtonText>
                </PaginatorButton>
                <PaginatorButton onClick={() => handlePageChange(actualPage - 1)} disabled={actualPage === 1}>
                    <ArrowIcon as={ArrowVectorIcon} disabled={actualPage === 1} />
                    <ButtonText>Previous</ButtonText>
                </PaginatorButton>
            </BackwardForward>
            <PageInfo>
                <PageText>Page</PageText>
                <PageNumber>{actualPage}</PageNumber>
                <PageText>of</PageText>
                <PageNumber>{lastPage}</PageNumber>
            </PageInfo>
            <BackwardForward>
                <PaginatorButton onClick={() => handlePageChange(actualPage + 1)} disabled={actualPage >= lastPage}>
                    <ButtonText>Next</ButtonText>
                    <ArrowIcon as={ArrowVectorIcon} rotate disabled={actualPage >= lastPage} />
                </PaginatorButton>
                <PaginatorButton onClick={() => handlePageChange(lastPage)} disabled={actualPage >= lastPage}>
                    <ButtonText>Last</ButtonText>
                    {isMobile ? (
                        <>
                            <ArrowIcon as={ArrowVectorIcon} rotate disabled={actualPage >= lastPage} />
                            <ArrowIcon as={ArrowVectorIcon} rotate disabled={actualPage >= lastPage} />
                        </>
                    ) : (
                        <ArrowIcon as={ArrowVectorIcon} rotate disabled={actualPage >= lastPage} />
                    )}
                </PaginatorButton>
            </BackwardForward>
        </StyledPaginator>
    );
};

export default Paginator;