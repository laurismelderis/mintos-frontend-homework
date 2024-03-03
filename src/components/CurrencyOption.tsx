import React, { memo, useContext } from 'react'
import { SelectedCurrenciesContext } from '../contexts/SelectedCurrenciesProvider'
import Checkbox from '../common/Checkbox'

interface CurrencyOptionProps {
  currency: string
  checked?: boolean
  handleAddCurrency: (currency: string) => void
}

const CurrencyOption = ({
  currency,
  checked = false,
  handleAddCurrency,
}: CurrencyOptionProps) => {
  console.log(currency)
  return (
    <div
      className='currency-option-container'
      style={{
        margin: '8px 4px',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        background: checked ? '#00000000' : '#e5e5e5',
        border: '1px solid #bababa',
        padding: '4px',
      }}
      onClick={() => handleAddCurrency(currency)}
    >
      <Checkbox checked={checked} />
      <label style={{ paddingLeft: '4px', color: '#002b69' }}>{currency}</label>
    </div>
  )
}

export default CurrencyOption
