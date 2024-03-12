import styled from "styled-components";


export const CheckoutContainer = styled.div`
    margin: 0 auto;
    max-width: 70rem;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
 
`

export const CoffeCardContainer = styled.div`
    width: 28rem;
    height: 33.5rem;

    h3{
        font-family: 'Baloo 2', sans-serif;
        color: ${ props => props.theme['base-subtitle']};
        font-size: 1.125rem;
        line-height: 1.3;

    }

`

export const CoffeCard = styled.div`
    width: 28rem;
    height: 31.12rem;

    background-color: ${props => props.theme['base-card']};
    border-radius: 6px 44px 6px 44px;


    
`