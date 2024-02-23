import styled from "styled-components";


export const CoffeCardContainer = styled.div`
 background-color: ${props => props.theme['base-card']};
 width: 16rem;
height: 19rem;
border-radius: 6px 36px 6px 36px;

display: flex;
flex-direction: column;
align-items: center;

`

export const TagContainer = styled.div`
 

display: flex;
flex-direction: column;
align-items: center;

`

export const BuyContainer = styled.div`
 display: flex;
 align-items: center;

 width: 13rem;
justify-content: space-between;
p{
    color: ${ props => props.theme['base-text']};
    strong{
        font-family: 'Baloo 2', sans-serif;

    }
}

`

export const ActionsContainer = styled.div`
 display: flex;
align-items: center;
gap: 0.5rem;
`

export const ShoppingButtonContainer = styled.button`
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    background-color: ${ props => props.theme['purple-dark']};

    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    svg {
        color: ${ props => props.theme['white']};
    }
`

