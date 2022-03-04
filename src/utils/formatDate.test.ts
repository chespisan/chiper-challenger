import { formatDate } from './formatDate'

describe('Test formatDate method', () => {
  test('Method with data', () => {
    const newData = formatDate(6263536467)
    expect(newData).toEqual('Sat Jun 25 2168')
    expect(newData).not.toBeUndefined()
  })

  test('Method with empty data', () => {
    const newData = formatDate(null)
    expect(newData).toEqual(undefined)
    expect(newData).toBeUndefined()
  })
})
