import React from 'react';
import { Container, QuantityText } from './styled';

export function ShowQuantity({icon, quantity}) {
  return (
    <Container>
      {icon}
      <QuantityText>{quantity}</QuantityText>
    </Container>
  )
}