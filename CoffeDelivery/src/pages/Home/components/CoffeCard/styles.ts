import styled from "styled-components";


export const CoffeCardContainer = styled.div`
 background-color: ${props => props.theme['base-card']};
 width: 16rem;
height: 19rem;
border-radius: 6px 36px 6px 36px;
 margin-bottom: 0.5rem;
display: flex;
flex-direction: column;
align-items: center;

 img{
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
 }

`

export const TagContainer = styled.div`
 width: 5rem;
 height: 1.25rem;

 background-color: ${ props => props.theme['yellow-light']};
 color: ${ props => props.theme['yellow-dark']};
 font-size: 0.7rem;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 4px 8px;
 border-radius: 100px;
 margin-top: 0.75rem;
`

export const NameCoffe = styled.p`
    margin-top: 1rem;
    margin-bottom: 0rem;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
    font-size: 1.25rem;
`

export const DescriptionCoffe = styled.p`
    margin-top: 0.5rem;
    text-align: center;
    width: 13.5rem;
    color: ${ props => props.theme['base-label']};
`

export const BuyContainer = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 1.5rem;
  

 width: 13rem;
justify-content: space-between;
p{
    color: ${ props => props.theme['base-text']};
    font-size: 1.25rem;
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

