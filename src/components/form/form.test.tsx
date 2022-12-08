import { render, screen } from '@testing-library/react'
import { InputDefault } from './Input'

test('default input ', () => {
  render(
    <InputDefault
      placeholder="example@example.com"
      type="text"
      label="hello"
      name="helloInput"
    />,
  )
  expect(screen.getByText('hello')).toBeInTheDocument()
})
