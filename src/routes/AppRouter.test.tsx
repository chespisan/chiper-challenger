/* eslint-disable testing-library/render-result-naming-convention */
import { render } from '@testing-library/react'
import { AppRouter } from './AppRouter'

describe('Test AppRouter:', () => {
  test('App Router:', () => {
    const appRouter = render(<AppRouter />)
    expect(appRouter).not.toBeUndefined()
  })
})
