import '@testing-library/jest-dom'
import { render, screen, act, fireEvent } from '@testing-library/react'
import Header from '../header/header'

describe('Switch testing', () => {
  test('Initial state', async () => {
    render(<Header />)
    const languageSwitch = screen.getByRole('switch')
    expect(languageSwitch).toBeChecked()
  })

  test('Click once', async () => {
    render(<Header />)
    const languageSwitch = screen.getByRole('switch')
    act(() => {
      fireEvent.change(languageSwitch, { target: { checked: false } })
    })
    expect(languageSwitch).not.toBeChecked()
  })
})