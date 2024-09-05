import styled from 'styled-components';

export const StyledPaginator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 525px;
    height: 36px;
    margin: 40px auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        width: 232px;
        height: 24px;
        gap: 8px;
        margin: 32px auto;
    }
`;

export const BackwardForward = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        gap: 4px;
    }
`;

export const PaginatorButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
    border: none;

    &:disabled {
        cursor: not-allowed;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
            height: 24px;
            max-width: 38px;
            padding: 8px 12px;
        }
`;

export const ButtonImage = styled.img`
    width: auto;
    height: 36px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        height: 23px;
    }  
`;

export const PageInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        gap: 2px;
    }
`;

export const PageText = styled.span`
    color: ${({ theme }) => theme.color.darkerGrey};
    font-weight: 400;
    line-height: 24px;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        font-size: 10px;
    }
`;

export const PageNumber = styled.span`
    font-weight: 600;
    line-height: 24px;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        font-size: 10px;
    }
`;