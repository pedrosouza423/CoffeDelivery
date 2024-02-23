import { CounterContainer } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

export const Counter = () => {
  return (
    <CounterContainer>
        <Minus size={22} />
        <p>1</p>
        <Plus size={22} />
    </CounterContainer>
  )
}
