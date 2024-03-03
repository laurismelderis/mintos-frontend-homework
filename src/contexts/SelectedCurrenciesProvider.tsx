import React, { createContext, useState } from 'react'
import useSelectedCurrencies from '../hooks/useSelectedCurrencies'

interface SelectedCurrenciesContextType {
  selectedCurrencies: Array<string>
  addCurrency: (currency: string) => void
  removeCurrency: (currency: string) => void
  handleCurrency: (currency: string) => void
}

interface SelectedCurrenciesProviderType {
  children: React.JSX.Element
  startingSelectedCurrencies?: Array<string>
}

export const SelectedCurrenciesContext =
  createContext<SelectedCurrenciesContextType>(null!)

const SelectedCurrenciesProvider: React.FC<SelectedCurrenciesProviderType> = ({
  children,
  startingSelectedCurrencies,
}) => {
  const { selectedCurrencies, addCurrency, removeCurrency } =
    useSelectedCurrencies(startingSelectedCurrencies)

  const handleCurrency = (currency: string) => {
    if (selectedCurrencies.includes(currency)) {
      removeCurrency(currency)
    } else {
      addCurrency(currency)
    }
  }

  return (
    <SelectedCurrenciesContext.Provider
      value={{
        selectedCurrencies,
        addCurrency,
        removeCurrency,
        handleCurrency,
      }}
    >
      {children}
    </SelectedCurrenciesContext.Provider>
  )
}

export default SelectedCurrenciesProvider
