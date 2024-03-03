import React, { useContext } from 'react'
import CurrencyOptions from './CurrencyOptions'
import SelectedCurrencies from './SelectedCurrencies'
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

const CurrencySelection = () => {
  const { selectedCurrencies } = useContext(SelectedCurrenciesContext)
  console.log('render')

  return (
    <div
      className='currency-selection-container'
      style={{
        border: '1px solid #bababa',
        borderRadius: '4px',
        minWidth: '350px',
        boxShadow: '2px 2px 2px #bababa',
        padding: '12px',
      }}
    >
      <SelectedCurrencies currencies={selectedCurrencies} />
      <CurrencyOptions currencies={POSSIBLE_CURRENCIES} />
    </div>
  )
}

export default CurrencySelection
