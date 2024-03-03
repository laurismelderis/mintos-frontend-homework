import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Currency from '../../src/components/Currency'

const mockHandleCurrency = jest.fn()

const props = {
  currency: 'TEST',
  handleCurrency: mockHandleCurrency,
}

describe('Currency', () => {
  it('should render currency with text "TEST"', () => {
    render(<Currency {...props} checked />)

    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  it('should handle currency on click', () => {
    render(<Currency {...props} />)

    const currencyElement = screen.getByText('TEST')

    fireEvent.click(currencyElement)

    expect(mockHandleCurrency).toHaveBeenCalledTimes(1)
  })

  it('should render the currency in upper case', () => {
    render(<Currency {...props} currency='test' />)

    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
