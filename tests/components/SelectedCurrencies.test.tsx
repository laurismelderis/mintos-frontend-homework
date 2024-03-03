import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SelectedCurrencies from '../../src/components/SelectedCurrencies'
import SelectedCurrenciesProvider from '../../src/contexts/SelectedCurrenciesProvider'

describe('Currency', () => {
  it('should render currency with text "TEST" in lower case', () => {
    render(
      <SelectedCurrenciesProvider startingSelectedCurrencies={['TEST']}>
        <SelectedCurrencies />
      </SelectedCurrenciesProvider>
    )

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('should remove currency if the remove button is clicked', () => {
    render(
      <SelectedCurrenciesProvider startingSelectedCurrencies={['eur', 'pln']}>
        <SelectedCurrencies />
      </SelectedCurrenciesProvider>
    )

    const [eurRemoveButton] = screen.getAllByTestId('remove-button')

    fireEvent.click(eurRemoveButton)

    expect(screen.getAllByTestId('selected-currency')).toHaveLength(1)
  })
})
