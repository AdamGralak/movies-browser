import { StyledPaginator, Button, PageInfo } from "./styled";

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
            <Button onClick={handleFirstPage} disabled={currentPage === 1}>Przejdź do pierwszej strony</Button>
            <Button onClick={handlePreviousPage} disabled={currentPage === 1}>Poprzednia strona</Button>
            <PageInfo>
                Page {currentPage} of {totalPages}
            </PageInfo>
            <Button onClick={handleNextPage} disabled={currentPage === totalPages}>Następna strona</Button>
            <Button onClick={handleLastPage} disabled={currentPage === totalPages}>Przejdź do ostatniej strony</Button>
        </StyledPaginator>
    );
};

export default Paginator;