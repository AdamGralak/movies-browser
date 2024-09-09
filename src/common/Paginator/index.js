import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import {
    StyledPaginator,
    PaginatorButton,
    ButtonImage,
    PageInfo,
    PageText,
    PageNumber,
    BackwardForward
} from "./styled";
import FirstPageIcon from './First.svg';
import PreviousPageIcon from './Previous.svg';
import NextPageIcon from './Next.svg';
import LastPageIcon from './Last.svg';
import MobileFirstPageIcon from './MobileFirst.svg';
import MobilePreviousPageIcon from './MobilePrevious.svg';
import MobileNextPageIcon from './MobileNext.svg';
import MobileLastPageIcon from './MobileLast.svg';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCurrentPage, goToFirstPage, goToLastPage, incrementCurrentPage, selectCurrentPage } from '../../core/actual/actualStateSlice';

const Paginator = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const currentPage = useSelector(selectCurrentPage);

    const mobileMax2 = theme.breakpoint.mobileMax2;
    const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileMax2);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= mobileMax2);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobileMax2]);

    return (
        <StyledPaginator>
            <BackwardForward>
                <PaginatorButton onClick={() => dispatch(goToFirstPage())} disabled={currentPage === 1}>
                    <ButtonImage src={isMobile ? MobileFirstPageIcon : FirstPageIcon} alt="First page" />
                </PaginatorButton>
                <PaginatorButton onClick={() => dispatch(decrementCurrentPage())} disabled={currentPage === 1}>
                    <ButtonImage src={isMobile ? MobilePreviousPageIcon : PreviousPageIcon} alt="Previous page" />
                </PaginatorButton>
            </BackwardForward>
            <PageInfo>
                <PageText>Page</PageText>
                <PageNumber>{currentPage}</PageNumber>
                <PageText>of</PageText>
                <PageNumber>500</PageNumber>
            </PageInfo>
            <BackwardForward>
                <PaginatorButton onClick={() => dispatch(incrementCurrentPage())} disabled={currentPage === 500}>
                    <ButtonImage src={isMobile ? MobileNextPageIcon : NextPageIcon} alt="Next page" />
                </PaginatorButton>
                <PaginatorButton onClick={() => dispatch(goToLastPage())} disabled={currentPage === 500}>
                    <ButtonImage src={isMobile ? MobileLastPageIcon : LastPageIcon} alt="Last page" />
                </PaginatorButton>
            </BackwardForward>
        </StyledPaginator >
    );
};

export default Paginator;
