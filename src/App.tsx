import React from 'react'
import CurrencySelection from './components/CurrencySelection'
import SelectedCurrenciesProvider from './contexts/SelectedCurrenciesProvider'

const App = () => (
  <div
    className='main-container'
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
  >
    <SelectedCurrenciesProvider startingSelectedCurrencies={[]}>
      <CurrencySelection />
    </SelectedCurrenciesProvider>
  </div>
)

export default App
