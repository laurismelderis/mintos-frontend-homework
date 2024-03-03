import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CurrencySelection from '../../src/components/CurrencySelection'
import SelectedCurrenciesProvider from '../../src/contexts/SelectedCurrenciesProvider'

beforeEach(() => {
  render(
    <SelectedCurrenciesProvider startingSelectedCurrencies={[]}>
      <CurrencySelection />
    </SelectedCurrenciesProvider>
  )
})

describe('Currency', () => {
  it('should render currency with text "EUR"', () => {
    expect(screen.getByText('EUR')).toBeInTheDocument()
  })

  it('should handle currency, so it would accordingly add or remove the currency to/from the selectedCurrencies list', () => {
    const eurCurrency = screen.getByText('EUR')
    const plnCurrency = screen.getByText('PLN')

    fireEvent.click(eurCurrency)
    expect(screen.getAllByTestId('selected-currency')).toHaveLength(1)
    expect(screen.getAllByText('eur')).toHaveLength(1)

    fireEvent.click(plnCurrency)
    expect(screen.getAllByTestId('selected-currency')).toHaveLength(2)
    expect(screen.getAllByText('eur')).toHaveLength(1)
    expect(screen.getAllByText('pln')).toHaveLength(1)

    fireEvent.click(eurCurrency)
    expect(screen.getAllByTestId('selected-currency')).toHaveLength(1)
    expect(screen.getAllByText('pln')).toHaveLength(1)
  })
})
