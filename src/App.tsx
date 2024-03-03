import React from 'react'
import CurrencySelection from './components/CurrencySelection'
import './App.css'
import SelectedCurrenciesProvider from './contexts/SelectedCurrenciesProvider'

const App = () => (
  <div className='main-container'>
    <SelectedCurrenciesProvider startingSelectedCurrencies={[]}>
      <CurrencySelection />
    </SelectedCurrenciesProvider>
  </div>
)

export default App
