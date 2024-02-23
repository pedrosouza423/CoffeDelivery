import React from 'react'
import { ActionsContainer, BuyContainer, CoffeCardContainer, ShoppingButtonContainer } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { Counter } from './components/Counter'
import expresso from './assets/expresso.svg'

export const CoffeCard = () => {
  return (
    <CoffeCardContainer>
      <img src={expresso} alt="" />
      <h2>TAG compponent</h2>
      <p>Name</p>
      <p>Description</p>
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
