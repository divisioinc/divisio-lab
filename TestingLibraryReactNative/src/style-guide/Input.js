import React from 'react'
import styled from 'styled-components/native'

import {
  red,
  graySemiDark,
  lightGray
} from '@/style-guide/colors'
import Text from '@/style-guide/Text'

const getBackgroundColor = ({ backgroundColor }) => {
  switch (backgroundColor) {
    case 'primary':
      return '#E2F5F6'
    case 'default':
      return lightGray
    default:
      return lightGray
  }
}

const getColor = (color) => {
  switch (color) {
    case 'primary':
      return '#0C838B'
    case 'default':
      return graySemiDark
    default:
      return graySemiDark
  }
}

const Container = styled.View`
  width: 100%;
`

const InputError = styled(Text)`
  margin-top: 2px;
  margin-left: 1px;
`

const TextInput = styled.TextInput`
  background-color: ${getBackgroundColor};
  padding: 17px 24px 16px;
  border-radius: 8px;
  font-size: 18px;
  line-height: 21px;
`

const Input = ({
  placeholder,
  error,
  inputRef,
  style,
  value,
  onChangeText,
  autoCapitalize,
  secureTextEntry = false,
  keyboardType = 'default',
  color = 'default',
}) => (
  <Container style={style}>
    <TextInput
      ref={inputRef}
      hasError={!!error}
      underlineColorAndroid="transparent"
      autoCorrect={false}
      color={error ? red : getColor(color)}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
      backgroundColor={color}
    />
    {!!error && (
      <InputError
        size={10}
        color={red}
      >
        {error}
      </InputError>
    )}
  </Container>
)

export default Input
