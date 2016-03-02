
import React from 'react'
import theme from './theme'

const Switch = ({
  checked,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Switch : {}
  const { scale, colors, borderColor } = config

  const width = scale[3] * 1.5
  const color = checked ? colors.success : borderColor
  const transform = checked ? `translateX(${scale[3] * .5}px)` : `translateX(0)`

  const sx = {
    root: {
      boxSizing: 'border-box',
      // display: 'inline-block',
      display: 'inline-flex',
      width: scale[3] * 1.5,
      height: scale[3],
      color,
      backgroundColor: checked ? 'currentcolor' : null,
      borderRadius: 99999,
      boxShadow: 'inset 0 0 0 2px',
      cursor: 'pointer',
      ...customStyle,
      ...style
    },
    dot: {
      width: scale[3],
      height: scale[3],
      transitionProperty: 'transform, color',
      transitionDuration: '.1s',
      transitionTimingFunction: 'ease-out',
      transform,
      boxShadow: 'inset 0 0 0 2px',
      borderRadius: 99999,
      color,
      backgroundColor: colors.white,
    }
  }

  return (
    <div
      {...props}
      className='Switch'
      role='checkbox'
      aria-checked={checked}
      style={sx.root}>
      <div style={sx.dot} />
    </div>
  )
}

Switch.propTypes = {
  /** Sets the Switch to an active style */
  checked: React.PropTypes.bool
}

Switch.contextTypes = {
  rebass: React.PropTypes.object
}

export default Switch

