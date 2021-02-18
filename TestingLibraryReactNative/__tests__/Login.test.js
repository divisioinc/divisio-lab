import { Alert } from 'react-native'
import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { useNavigation } from '@react-navigation/native'
import Login from '@/screens/Login'

jest.spyOn(Alert, 'alert')

jest.mock('@react-navigation/native', () => ({
  createNavigatorFactory: jest.fn(),
  useNavigation: jest.fn(),
}))

beforeEach(() => {
  useNavigation.mockReset()
})

it('Login works correctly with right credentials', async () => {
  const mockNavigate = jest.fn()

  useNavigation.mockImplementation(() => ({ navigate: mockNavigate }))

  const username = 'Login'
  const password = 'pass'
  const { getByText, getByPlaceholderText } = render(<Login />)
  const button = getByText(/Entrar/i)

  fireEvent.changeText(getByPlaceholderText(/Login/i), username)
  fireEvent.changeText(getByPlaceholderText(/Password/i), password)
  fireEvent.press(button)

  await waitFor(() => expect(mockNavigate).toHaveBeenCalledTimes(1))
  expect(mockNavigate).toHaveBeenCalledWith('Home')
})

it('Login works correctly with wrong credentials', async () => {
  const mockNavigate = jest.fn()

  useNavigation.mockImplementation(() => ({ navigate: mockNavigate }))

  const username = 'wrong'
  const password = ''
  const { getByText, getByPlaceholderText } = render(<Login />)
  const button = getByText(/Entrar/i)

  fireEvent.changeText(getByPlaceholderText(/Login/i), username)
  fireEvent.changeText(getByPlaceholderText(/Password/i), password)
  fireEvent.press(button)

  expect(Alert.alert).toHaveBeenCalledWith('Login ou senha errados. O certo é Login:pass.')
})
