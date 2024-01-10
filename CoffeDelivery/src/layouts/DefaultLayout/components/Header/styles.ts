import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    padding: 2rem 10rem;
    justify-content: space-between;
    color: ${({ theme }) => theme['purple-dark']};
`

export const ActionsContainer = styled.div`
    display: flex;
    gap: 0.75rem;
`

export const LocationContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 6px;

    background-color: ${({ theme }) => theme['purple-light']};
    padding: 0.5rem;
    gap: 0.25rem;

    svg{
        color: ${({ theme }) => theme['purple-dark']};
    }

`

export const CartContainer = styled.div`
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    border-radius: 6px;

    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    justify-content: center;
    svg{
        color: ${({ theme }) => theme['yellow-dark']};
    }

`