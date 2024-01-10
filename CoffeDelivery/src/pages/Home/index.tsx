import { ColumnItem, HomeContainer, IntroSection, ItensWrapper, TitleWrapper } from './styles'
import CoffeDeliveryImage from '../Home/assets/Imagem.svg'
import { Item } from './components/Item'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export const Home = () => {
  return (
    <HomeContainer>
      <IntroSection>
        <div>
          <TitleWrapper>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </TitleWrapper>
          <ItensWrapper>
            <ColumnItem> 
              <Item color='yellowDark' title='Compra simples e segura' icon={<ShoppingCart weight='fill' size={16} />} />
              <Item color='yellow' title='Entrega rápida e rastreada' icon={<Timer weight='fill' size={16} />} />
              
            </ColumnItem>
            <ColumnItem>
              <Item color='black' title='Compra simples e segura' icon={<Package weight='fill' size={16} />} />
              <Item color='purple' title='Compra simples e segura' icon={<Coffee weight='fill' size={16} />} />
            </ColumnItem>
          </ItensWrapper>
        </div>
      <img src={CoffeDeliveryImage} alt="" />
      </IntroSection>
    </HomeContainer>
  )
}
