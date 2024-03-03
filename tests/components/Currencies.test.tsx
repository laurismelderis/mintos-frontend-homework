import React from 'react'
import { render, screen } from '@testing-library/react'
import Currencies from '../../src/components/Currencies'
import SelectedCurrenciesProvider from '../../src/contexts/SelectedCurrenciesProvider'

describe('Currency', () => {
  it('should render currency with text "TEST"', () => {
    render(
      <SelectedCurrenciesProvider>
        <Currencies />
      </SelectedCurrenciesProvider>
    )

    expect(screen.getByText('EUR')).toBeInTheDocument()
  })
})
