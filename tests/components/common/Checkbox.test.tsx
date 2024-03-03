import { render, screen } from '@testing-library/react'
import Checkbox from '../../../src/common/Checkbox'

describe('Checkbox', () => {
  it('should render a checkbox with transparent x in it', () => {
    render(<Checkbox />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('should render an empty checkbox', () => {
    render(<Checkbox />)

    expect(screen.getByText('x')).toHaveStyle({
      color: '#00000000',
    })
  })

  it('should render a checked checkbox', () => {
    render(<Checkbox checked />)

    expect(screen.getByText('x')).toHaveStyle({
      color: '#ff0404',
    })
  })
})
