import { StyledPaginator, PaginatorButton, PageInfo, PageText, PageNumber, BackwardForward } from "./styled";
import FirstPageIcon from './First.svg';
import PreviousPageIcon from './Previous.svg';
import NextPageIcon from './Next.svg';
import LastPageIcon from './Last.svg';


const Paginator = ({ totalPages, currentPage, onPageChange }) => {

    const handleFirstPage = () => {
        onPageChange(1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handleLastPage = () => {
        onPageChange(totalPages);
    };

    return (
        <StyledPaginator>
            <BackwardForward>
                <PaginatorButton onClick={handleFirstPage} disabled={currentPage === 1}>
                    <img src={FirstPageIcon} alt="First page" />
                </PaginatorButton>
                <PaginatorButton onClick={handlePreviousPage} disabled={currentPage === 1}>
                    <img src={PreviousPageIcon} alt="Previous page" />
                </PaginatorButton>
            </BackwardForward>
            <PageInfo>
                <PageText>Page</PageText>
                <PageNumber>{currentPage}</PageNumber>
                <PageText>of</PageText>
                <PageNumber>{totalPages}</PageNumber>
            </PageInfo>
            <BackwardForward>
                <PaginatorButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                    <img src={NextPageIcon} alt="Next page" />
                </PaginatorButton>
                <PaginatorButton onClick={handleLastPage} disabled={currentPage === totalPages}>
                    <img src={LastPageIcon} alt="Last page" />
                </PaginatorButton>
            </BackwardForward>
        </StyledPaginator>
    );
};

export default Paginator;