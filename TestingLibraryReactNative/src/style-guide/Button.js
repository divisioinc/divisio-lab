import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

import { green, white, graySemiDark } from '@/style-guide/colors'

const BUTTON_PADDING = {
  small: '9px 6px',
  large: '17px 19px'
}

const BUTTON_FONT_SIZE = {
  small: '13.5737px',
  large: '20px'
}

const BUTTON_LINE_HEIGHT = {
  small: '16px',
  large: '23px'
}

const BUTTON_BACKGROUND_COLOR = {
  default: white,
  primary: green
}

const BUTTON_TEXT_COLOR = {
  default: graySemiDark,
  primary: white
}

const getMaxWidth = (fullWidth) => fullWidth ? '100%' : '200px'
const getOpacity = (isDisabled) => isDisabled ? 0.6 : 1

const getCustomStyle = ({ size, color, fullWidth, isDisabled }) => ({
  color: BUTTON_TEXT_COLOR[color],
  backgroundColor: BUTTON_BACKGROUND_COLOR[color],
  padding: BUTTON_PADDING[size],
  fontSize: BUTTON_FONT_SIZE[size],
  lineHeight: BUTTON_LINE_HEIGHT[size],
  maxWidth: getMaxWidth(fullWidth),
  opacity: getOpacity(isDisabled)
})

const Container = styled.TouchableOpacity`
  background-color: ${(p) => p.customStyle.backgroundColor};
  border-radius: 8px;
  padding: ${(p) => p.customStyle.padding};
  width: 100%;
  max-width: ${(p) => p.customStyle.maxWidth};
  opacity: ${(p) => p.customStyle.opacity};
`

const Text = styled.Text`
  font-weight: bold;
  font-size: ${(p) => p.customStyle.fontSize};
  line-height: ${(p) => p.customStyle.lineHeight};
  text-align: center;
  color: ${(p) => p.customStyle.color};
`

const Button = ({
  text,
  fullWidth,
  isLoading,
  disabled,
  onPress,
  style,
  size = 'large',
  color = 'default'
}) => {
  const isDisabled = disabled || isLoading
  const customStyle = getCustomStyle({ size, color, fullWidth, isDisabled })
  const handlePress = isDisabled ? () => {} : onPress

  const renderContent = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          color={customStyle.color}
        />
      )
    }

    return (
      <Text customStyle={customStyle}>
        {text}
      </Text>
    )
  }

  return (
    <Container
      onPress={handlePress}
      customStyle={customStyle}
      style={style}
    >
      {renderContent()}
    </Container>
  )
}

export default Button
