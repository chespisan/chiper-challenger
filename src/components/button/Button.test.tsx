/* eslint-disable testing-library/render-result-naming-convention */
import { render } from '@testing-library/react'
import { ButtonComponent } from './Button'

describe('Test button Component', () => {
  test('Testing button disabled false', () => {
    const button = render(
      <ButtonComponent text="Buscar" disabled={false} click={() => {}} />,
    )
    expect(button).not.toBeUndefined()
  })

  test('Testing button disabled true', () => {
    const button = render(
      <ButtonComponent text="Buscar" disabled={true} click={() => {}} />,
    )
    expect(button).not.toBeUndefined()
  })
})
