import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Footer from '../footer/footer'

const ANSWER = '©NARUMI NOGAWA'
test('Showing copyright correctly on footer', async () => {
    render(<Footer />)
    expect(screen.getByTestId('copyright')).toHaveTextContent(ANSWER)
})