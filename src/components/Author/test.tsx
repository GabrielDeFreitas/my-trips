import { render, screen } from '@testing-library/react'

import Author from '.'

describe('<Author />', () => {
  it('should render the heading', () => {
    const { container } = render(<Author />)

    expect(screen.getByRole('heading', { name: /Author/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
