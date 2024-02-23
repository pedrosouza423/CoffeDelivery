import styled from "styled-components";


export const CounterContainer = styled.div`
    width: 4.5rem;
    height: 2rem;
    background-color: ${ props => props.theme['base-button']};

    display: flex;
    align-items: center;
    padding: 0.5rem;
    justify-content: space-between;
    border-radius: 6px;

    svg{
        color: ${ props => props.theme['purple']};
    }
`