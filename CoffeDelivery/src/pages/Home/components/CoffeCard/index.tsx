import React from 'react'
import { ActionsContainer, BuyContainer, CoffeCardContainer, DescriptionCoffe, NameCoffe, ShoppingButtonContainer, TagContainer } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { Counter } from './components/Counter'
import expresso from './assets/expresso.svg'

export const CoffeCard = () => {
  return (
    <CoffeCardContainer>
      <img src={expresso} alt="" />
      <TagContainer>TRADICIONAL</TagContainer>
      <NameCoffe>Expresso Tradicional</NameCoffe>
      <DescriptionCoffe>O tradicional café feito com água quente e grãos moídos</DescriptionCoffe>
      <BuyContainer>
        <p>R$ <strong>9,90</strong></p>
        <ActionsContainer>
          <Counter />
          <ShoppingButtonContainer>
           <ShoppingCart weight='fill' size={22} />
          </ShoppingButtonContainer>
        </ActionsContainer>
      </BuyContainer>
    </CoffeCardContainer>
  )
}
