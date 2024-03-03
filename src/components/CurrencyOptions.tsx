import React, { useContext } from 'react'
import CurrencyOption from './CurrencyOption'
import { SelectedCurrenciesContext } from '../contexts/SelectedCurrenciesProvider'

interface CurrencyOptions {
  currencies?: Array<string>
}

const CurrencyOptions = ({ currencies }: CurrencyOptions) => {
  const { selectedCurrencies, setSelectedCurrencies } = useContext(
    SelectedCurrenciesContext
  )

  const handleAddCurrency = (currency: string) => {
    if (selectedCurrencies.includes(currency)) {
      setSelectedCurrencies(
        selectedCurrencies.filter(
          (selectedCurrency) => selectedCurrency !== currency
        )
      )
    } else {
      setSelectedCurrencies([...selectedCurrencies, currency])
    }
  }

  return (
    <div
      className='currency-options-container'
      style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
    >
      {currencies?.map((currency) => (
        <CurrencyOption
          key={currency}
          checked={selectedCurrencies.includes(currency)}
          currency={currency}
          handleAddCurrency={handleAddCurrency}
        />
      ))}
    </div>
  )
}

export default CurrencyOptions
