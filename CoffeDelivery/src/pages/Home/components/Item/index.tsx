import React from 'react'
import { IconContainer, ItemContainer } from './styles';

interface ItemProps {
  color?: 'yellow' | 'yellowDark' | 'black' | 'purple';
  icon: JSX.Element;
  title: string;
}


export const Item = ({color = 'yellowDark', icon, title}: ItemProps) => {
  return (
    <ItemContainer>
      <IconContainer color={color}>
        {icon}
      </IconContainer>
      {title}
    </ItemContainer>
  )
}
