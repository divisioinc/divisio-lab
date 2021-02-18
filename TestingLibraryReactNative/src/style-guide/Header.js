import React from 'react'
import styled from 'styled-components/native'
import { Platform } from 'react-native'

import { green } from '@/style-guide/colors'

const Container = styled.View`
  padding: ${Platform.OS === 'ios' ? 30 : 15}px 15px 15px;
`
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
`
const SubTitle = styled.Text`
  font-size: 13px;
  color: ${green};
`

const Header = ({ title, subTitle }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <SubTitle>
      {subTitle}
    </SubTitle>
  </Container>
)

export default Header
