import React from 'react'
import Checkbox from '../common/Checkbox'
import './Currency.css'

interface CurrencyProps {
  currency: string
  checked?: boolean
  handleCurrency: (currency: string) => void
}

const Currency = ({
  currency,
  checked = false,
  handleCurrency,
}: CurrencyProps) => {
  return (
    <button
      className='currency-option-container'
      style={{
        background: checked ? '#00000000' : '',
      }}
      onClick={() => handleCurrency(currency)}
    >
      <Checkbox checked={checked} />
      <label>{currency.toUpperCase()}</label>
    </button>
  )
}

export default Currency
