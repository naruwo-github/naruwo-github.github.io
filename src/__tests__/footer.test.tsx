import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Footer from '../footer/footer'

const AUTHOR = 'NARUMI NOGAWA'
const EXPECTED = `©${AUTHOR}`
test('Showing copyright correctly on footer', async () => {
    render(<Footer author={AUTHOR} />)
    expect(document.querySelector('.copyright')).toHaveTextContent(EXPECTED)
})