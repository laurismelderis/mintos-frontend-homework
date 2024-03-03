import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import RemoveButton from '../../../src/common/RemoveButton'

describe('RemoveButton', () => {
  it('should render', () => {
    render(<RemoveButton />)

    expect(screen.getByTestId('remove-button')).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const tree = renderer.create(<RemoveButton />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
