import React, { createContext, useState } from 'react'

interface SelectedCurrenciesContextType {
  selectedCurrencies: Array<string>
  setSelectedCurrencies: (currencies: Array<string>) => void
}

export const SelectedCurrenciesContext =
  createContext<SelectedCurrenciesContextType>(null!)

const SelectedCurrenciesProvider: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<Array<string>>(
    []
  )

  return (
    <SelectedCurrenciesContext.Provider
      value={{ selectedCurrencies, setSelectedCurrencies }}
    >
      {children}
    </SelectedCurrenciesContext.Provider>
  )
}

export default SelectedCurrenciesProvider
