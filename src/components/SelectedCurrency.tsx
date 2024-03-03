import React from 'react'
import RemoveButton from '../common/RemoveButton'

interface SelectedCurrencyProps {
  currency: string
  removeCurrency: (currency: string) => void
}

const SelectedCurrency = ({
  currency,
  removeCurrency,
}: SelectedCurrencyProps) => {
  const handleRemoveCurrency = () => {
    removeCurrency(currency)
  }

  return (
    <div
      data-testid='selected-currency'
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
      {currency.toLowerCase()}
      <RemoveButton onClick={handleRemoveCurrency} />
    </div>
  )
}

export default SelectedCurrency
