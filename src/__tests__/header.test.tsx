import {render, screen} from '@testing-library/react'
import Header from '../header/header'

test('Switch on/off', async () => {
    render(<Header/>)
    expect(screen.getByRole('switch')).toBe(true)
})
