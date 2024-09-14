import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectactualPage, setactualPage } from '../../core/actual/actualStateSlice';
import { useTheme } from 'styled-components';
import {
    StyledPaginator,
    PaginatorButton,
    PageInfo,
    PageText,
    PageNumber,
    BackwardForward,
    ArrowIcon
} from './styled';

import { ReactComponent as BackVectorIcon } from './back.svg';
import { ReactComponent as ForthVectorIcon } from './forth.svg';

export const Paginator = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const actualPage = useSelector(selectactualPage);

    const mobileMax2 = theme.breakpoint.mobileMax2;
    const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileMax2);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= mobileMax2);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobileMax2]);

    const handlePageChange = (newPage) => {
        dispatch(setactualPage(newPage));
        const basePath = location.pathname.includes("movies") ? "/movies" : "/people";
        navigate(`${basePath}/page/${newPage}`);
    };

    return (
        <StyledPaginator>
            <BackwardForward>
                <PaginatorButton onClick={() => handlePageChange(1)} disabled={actualPage === 1}>
                    <ArrowIcon as={BackVectorIcon} disabled={actualPage === 1} />
                    <span>First</span>
                </PaginatorButton>
                <PaginatorButton onClick={() => handlePageChange(actualPage - 1)} disabled={actualPage === 1}>
                    <ArrowIcon as={BackVectorIcon} disabled={actualPage === 1} />
                    <span>Previous</span>
                </PaginatorButton>
            </BackwardForward>
            <PageInfo>
                <PageText>Page</PageText>
                <PageNumber>{actualPage}</PageNumber>
                <PageText>of</PageText>
                <PageNumber>500</PageNumber>
            </PageInfo>
            <BackwardForward>
                <PaginatorButton onClick={() => handlePageChange(actualPage + 1)} disabled={actualPage === 500}>
                    <span>Next</span>
                    <ArrowIcon as={ForthVectorIcon} disabled={actualPage === 500} />
                </PaginatorButton>
                <PaginatorButton onClick={() => handlePageChange(500)} disabled={actualPage === 500}>
                    <span>Last</span>
                    <ArrowIcon as={ForthVectorIcon} disabled={actualPage === 500} />
                </PaginatorButton>
            </BackwardForward>
        </StyledPaginator>
    );
};

export default Paginator;