import React from 'react'

import styled from 'styled-components/native'

import {
  Header,
  Button
} from '@/style-guide'

const Container = styled.ScrollView`
  padding-top: 20px;
`

const Home = ({ navigation }) => (
  <Container>
    <Header
      title="Bem vindo, ze mané"
      subTitle="Agora pede pra sair:"
    />
    <Button
      text="Sair"
      color="primary"
      fullWidth
      onPress={() => navigation.navigate('Login')}
    />
  </Container>
)

export default Home
