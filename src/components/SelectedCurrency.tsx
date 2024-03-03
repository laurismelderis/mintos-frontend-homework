import React, { useContext } from 'react'
import { SelectedCurrenciesContext } from '../contexts/SelectedCurrenciesProvider'
import RemoveButton from '../common/RemoveButton'

interface SelectedCurrencyProps {
  currency: string
}

const SelectedCurrency = ({ currency }: SelectedCurrencyProps) => {
  const { selectedCurrencies, setSelectedCurrencies } = useContext(
    SelectedCurrenciesContext
  )

  const handleRemoveCurrency = () => {
    setSelectedCurrencies(
      selectedCurrencies.filter(
        (selectedCurrency) => selectedCurrency !== currency
      )
    )
  }

  return (
    <div
      className='selected-currency'
      style={{
        margin: '8px 7px 8px 4px',
        background: '#e5e5e5',
        position: 'relative',
        textAlign: 'center',
        padding: '4px',
        fontSize: '14px',
      }}
    >
      {currency}
      <RemoveButton onClick={handleRemoveCurrency} />
    </div>
  )
}

export default SelectedCurrency
