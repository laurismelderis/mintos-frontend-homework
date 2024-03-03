import React from 'react'
import { render, screen } from '@testing-library/react'
import RemoveButton from '../../../src/common/RemoveButton'

describe('RemoveButton', () => {
  it('should render', () => {
    render(<RemoveButton />)

    expect(screen.getByTestId('remove-button')).toBeInTheDocument()
  })
})
