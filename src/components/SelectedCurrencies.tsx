import React from 'react'
import SelectedCurrency from './SelectedCurrency'

interface SelectedCurrenciesProps {
  currencies?: Array<string>
}

const SelectedCurrencies = ({ currencies }: SelectedCurrenciesProps) => {
  return (
    <div
      className='selected-currencies'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        minHeight: '32px',
      }}
    >
      {currencies?.map((currency) => (
        <SelectedCurrency key={currency} currency={currency} />
      ))}
    </div>
  )
}

export default SelectedCurrencies
