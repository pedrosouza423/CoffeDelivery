import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../Header/assets/Logo.svg'
import { ActionsContainer, CartContainer, HeaderContainer, LocationContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
        <img src={Logo} alt="" />
        <ActionsContainer>
          <LocationContainer>
            <MapPin weight='fill' size={22} />
            Porto Alegre, RS
          </LocationContainer>
          <CartContainer>
           <ShoppingCart weight='fill' size={22} />
          </CartContainer>
        </ActionsContainer>
    </HeaderContainer>
  )
}
