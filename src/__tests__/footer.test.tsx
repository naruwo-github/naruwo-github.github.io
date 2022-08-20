import {render} from '@testing-library/react'
import Footer from '../footer/footer'

const ANSWER = '©NARUMI NOGAWA'
test('Showing copyright correctly on footer', async () => {
    render(<Footer />)
    expect(document.querySelector('.copyright')?.innerHTML).toBe(ANSWER)
})