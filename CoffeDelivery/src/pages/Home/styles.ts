import styled from "styled-components";


export const HomeContainer = styled.div`
`

export const TitleWrapper = styled.div`
    width: 36.75rem;
    
    h1{
        font-family: 'Baloo 2', sans-serif;
        font-size: 3rem;
        line-height: 1.6;
        margin: 0;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        line-height: 1.3;
    }

`

export const ItensWrapper = styled.div`
    display: flex;
    gap: 2.5rem;
    margin-top: 4rem;
`

export const ColumnItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`

export const IntroSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
`

export const CoffeListSection = styled.div`
    flex-direction: column;
    display: flex;
    margin-top: 5rem;

`

export const CoffeeListTitle = styled.h3`
  width: 1120px; 
  display: flex;
  margin: 0 auto;
  margin-bottom: 2rem; 

`;

export const CoffeList = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
`