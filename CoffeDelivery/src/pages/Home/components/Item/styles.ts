import styled from "styled-components";


export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    
`

interface IconContainerProps {
    color: 'yellow' | 'yellowDark' | 'black' | 'purple'
}

const IconColors = {
    'yellow': 'yellow',
    'yellowDark': 'yellow-dark',
    'black': 'base-text',
    'purple': 'purple'
}

export const IconContainer = styled.div<IconContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${props => props.theme[IconColors[props.color]]};

    svg{
        color: ${props => props.theme.white};
    }
`