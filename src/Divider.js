
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Styled hr element
 */

const Divider = ({
  width,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, borderColor } = config

  return (
    <Base
      {...props}
      tagName='hr'
      className='Divider'
      baseStyle={{
        width,
        marginTop: scale[2],
        marginBottom: scale[2],
        border: 0,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: borderColor
      }} />
  )
}

Divider.propTypes = {
  /** Sets a fixed width for stylistic options */
  width: React.PropTypes.number
}

Divider.contextTypes = {
  rebass: React.PropTypes.object
}

export default Divider

