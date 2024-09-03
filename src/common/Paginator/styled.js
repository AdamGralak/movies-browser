import styled from 'styled-components';

export const StyledPaginator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 525px;
    height: 36px;
    margin: 40px auto;
`;

export const BackwardForward = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

export const PaginatorButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    border: none;
    
    &:disabled {
        cursor: not-allowed;
    }
`;

export const PageInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    gap: 8px;
`;

export const PageText = styled.span`
    color: ${({ theme }) => theme.color.darkerGrey};
    font-weight: 400;
    line-height: 24px;
    font-size: 16px;
`;

export const PageNumber = styled.span`
    font-weight: 600;
`;