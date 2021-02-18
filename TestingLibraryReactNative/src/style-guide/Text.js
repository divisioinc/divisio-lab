import React from 'react'
import styled from 'styled-components/native'

import { black } from '@/style-guide/colors'

const Container = styled.Text`
  font-weight: ${(p) => p.weight};
  color: ${(p) => p.color};
  font-size: ${(p) => p.size}px;
`

const Text = ({
  style,
  weight = 'normal',
  color = black,
  size = 14,
  children = null
}) => (
  <Container
    weight={weight}
    color={color}
    size={size}
    style={style}
  >
    {children}
  </Container>
)

export default Text
