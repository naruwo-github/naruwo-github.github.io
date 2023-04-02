import '@testing-library/jest-dom'
import { render, screen, act, fireEvent } from '@testing-library/react'
import Header from '../header/header'

const AUTHOR = 'NARUMI NOGAWA'
describe('Switch testing', () => {
  test('Initial state', async () => {
    render(<Header author={AUTHOR} />)
    const languageSwitch = screen.getByRole('switch')
    expect(languageSwitch).not.toBeChecked()
  })

  test('Click once', async () => {
    render(<Header author={AUTHOR} />)
    const languageSwitch = screen.getByRole('switch')
    act(() => {
      fireEvent.change(languageSwitch, { target: { checked: true } })
    })
    expect(languageSwitch).toBeChecked()
  })
})