import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SelectedCurrency from '../../src/components/SelectedCurrency'

const mockRemoveCurrency = jest.fn()

const props = {
  currency: 'TEST',
  removeCurrency: mockRemoveCurrency,
}

describe('Currency', () => {
  it('should render currency with text "TEST" in lower case', () => {
    render(<SelectedCurrency {...props} />)

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('should call removeCurrency on removeButton click', () => {
    render(<SelectedCurrency {...props} />)

    const removeButtonElement = screen.getByTestId('remove-button')

    expect(removeButtonElement).toBeInTheDocument()

    fireEvent.click(removeButtonElement)

    expect(mockRemoveCurrency).toHaveBeenCalledTimes(1)
  })
})
