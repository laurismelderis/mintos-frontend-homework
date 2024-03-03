import React, { useContext } from 'react'
import Currency from './Currency'
import { SelectedCurrenciesContext } from '../contexts/SelectedCurrenciesProvider'

const POSSIBLE_CURRENCIES = [
  'EUR',
  'PLN',
  'GEL',
  'DKK',
  'CZK',
  'GBP',
  'SEK',
  'USD',
  'RUB',
]

const Currencies = () => {
  const { selectedCurrencies, handleCurrency } = useContext(
    SelectedCurrenciesContext
  )

  return (
    <div
      className='currency-options-container'
      style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
    >
      {POSSIBLE_CURRENCIES.map((currency) => (
        <Currency
          key={currency}
          checked={selectedCurrencies.includes(currency)}
          currency={currency}
          handleCurrency={handleCurrency}
        />
      ))}
    </div>
  )
}

export default Currencies
