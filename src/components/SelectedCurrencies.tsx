import React, { useContext } from 'react'
import SelectedCurrency from './SelectedCurrency'
import { SelectedCurrenciesContext } from '../contexts/SelectedCurrenciesProvider'

const SelectedCurrencies = () => {
  const { selectedCurrencies, removeCurrency } = useContext(
    SelectedCurrenciesContext
  )

  return (
    <div
      className='selected-currencies'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        minHeight: '32px',
      }}
    >
      {selectedCurrencies.map((currency) => (
        <SelectedCurrency
          key={currency}
          currency={currency}
          removeCurrency={removeCurrency}
        />
      ))}
    </div>
  )
}

export default SelectedCurrencies
