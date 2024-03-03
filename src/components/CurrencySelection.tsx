import React from 'react'
import Currencies from './Currencies'
import SelectedCurrencies from './SelectedCurrencies'

const CurrencySelection = () => {
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
      <SelectedCurrencies />
      <Currencies />
    </div>
  )
}

export default CurrencySelection
