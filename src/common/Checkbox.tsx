import React from 'react'
import './Checkbox.css'

interface CheckboxProps {
  checked?: boolean
}

const Checkbox = ({ checked = false }: CheckboxProps) => {
  return (
    <div
      className='checkbox'
      style={{
        color: checked ? '#ff0404' : '#00000000',
      }}
      role='checkbox'
    >
      x
    </div>
  )
}

export default Checkbox
