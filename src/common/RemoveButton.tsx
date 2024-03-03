import React from 'react'
import './RemoveButton.css'

interface RemoveButtonProps {
  onClick: () => void
}

const RemoveButton = ({ onClick }: RemoveButtonProps) => {
  return (
    <button className='remove-button' type='button' onClick={onClick}>
      x
    </button>
  )
}

export default RemoveButton
