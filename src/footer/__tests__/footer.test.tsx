import {render} from '@testing-library/react'
import Footer from '../footer'

const answer = '©NARUMI NOGAWA'
test('Showing name correctly on footer', async () => {
    render(<Footer />)
    expect(document.querySelector('.copyright')?.innerHTML).toBe(answer)
})