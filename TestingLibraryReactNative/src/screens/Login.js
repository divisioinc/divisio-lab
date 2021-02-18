import React, { useState } from 'react'
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator
} from 'react-native'
import styled from 'styled-components/native'

import { Input, Button } from '@/style-guide'

const errorMsg = 'Login ou senha errados. O certo é Login:pass.'

const Container = styled.View`
  background-color: white;
  flex: 1;
  padding-top: 30px;
`

const KeyboardAvoiding = styled(KeyboardAvoidingView)`
  flex: 1;
`
const SafeArea = styled(SafeAreaView)`
  flex: 1;
`

const FormContent = styled.View`
  padding: 30px;
  align-items: center;
`

const InputText = styled(Input)`
  margin-bottom: 25px;
`

const Login = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onEnter = async () => {
    setLoading(true)

    if (login === 'Login' && password === 'pass') {
      navigation.navigate('Home')
    } else {
      Alert.alert(errorMsg)
    }
    setLogin('')
    setPassword('')

    setLoading(false)
  }

  const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : undefined

  return (
    <Container>
      <SafeArea>
        <KeyboardAvoiding behavior={keyboardBehavior}>
          <ScrollView keyboardShouldPersistTaps="never">
            <FormContent>
              {!isLoading ? (
                <>
                  <InputText
                    placeholder="Login"
                    value={login}
                    onChangeText={(value) => setLogin(value)}
                  />
                  <InputText
                    placeholder="Password"
                    value={password}
                    secureTextEntry
                    onChangeText={(value) => setPassword(value)}
                  />
                  <Button
                    text="Entrar"
                    color="primary"
                    fullWidth
                    onPress={onEnter}
                  />
                </>
              ) : <ActivityIndicator />}
            </FormContent>
          </ScrollView>
        </KeyboardAvoiding>
      </SafeArea>
    </Container>
  )
}

export default Login
