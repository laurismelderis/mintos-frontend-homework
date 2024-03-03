import { useState } from 'react'

const useSelectedCurrencies = (
  startingSelectedCurrencies: Array<string> = []
) => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<Array<string>>(
    startingSelectedCurrencies
  )

  const addCurrency = (currency: string) => {
    setSelectedCurrencies([...selectedCurrencies, currency])
  }

  const removeCurrency = (currency: string) => {
    setSelectedCurrencies(
      selectedCurrencies.filter(
        (selectedCurrency) => selectedCurrency !== currency
      )
    )
  }

  return {
    selectedCurrencies,
    addCurrency,
    removeCurrency,
  }
}

export default useSelectedCurrencies
