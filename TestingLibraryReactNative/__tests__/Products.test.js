import Axios from 'axios'
import { products } from '../mock/db.json'
import jestFetchMock from 'jest-fetch-mock'

global.fetch = jestFetchMock

beforeEach(() => {
  fetch.resetMocks()
})

it('Fetch works correctly', async () => {
  const mockReturn = products[0]

  fetch.mockResponseOnce(JSON.stringify([mockReturn]))

  const onResponse = jest.fn()
  const onError = jest.fn()

  return Axios.get('http://localhost:3000/products')
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled()
      expect(onError).not.toHaveBeenCalled()

      expect(onResponse.mock.calls[0][0].data[0]).toEqual(mockReturn)
    })
})
