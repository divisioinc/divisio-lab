import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Alert, Text, ActivityIndicator } from 'react-native'

import styled from 'styled-components/native'

import { Header } from '@/style-guide'

const Container = styled.ScrollView`
  padding-top: 20px;
`
const List = styled.ScrollView`
  padding: 20px;
`

const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const result = await Axios.get('http://localhost:3000/products')
      setProducts(result.data)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao carregar produtos, por favor tente novamente.')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  
  return (
    <Container>
      <Header
        title="Produtos"
      />

      {isLoading && <ActivityIndicator />}

      <List>
        {products.map(({ id, title }) => (
          <Text key={id}>
            {title}
          </Text>
        ))}
      </List>
      
    </Container>
  )
}

export default Products
