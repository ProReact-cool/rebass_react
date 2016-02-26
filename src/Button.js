
import React from 'react'
import theme from './theme'

/**
 * A general purpose button element with customizable colors
 */

const Button = ({
  href,
  big,
  rounded,
  outline,
  color,
  backgroundColor,
  children,
  style,
  className,
  ...props
}, { rebass }) => {

  const config = { ...theme, ...rebass }
  const buttonStyle = rebass ? rebass.Button : {}
  const { fontSizes, bold, scale, colors, borderRadius } = config

  const Component = href ? 'a' : 'button'

  const radii = {
    top: `${borderRadius}px ${borderRadius}px 0 0`,
    right: `0 ${borderRadius}px ${borderRadius}px 0`,
    bottom: `0 0 ${borderRadius}px ${borderRadius}px`,
    left: `${borderRadius}px 0 0 ${borderRadius}px`,
  }

  const sx = {
    fontFamily: 'inherit',
    fontSize: fontSizes[5],
    fontWeight: bold,
    display: 'inline-block',
    margin: 0,
    padding: big ? scale[2] : `${scale[1]}px ${scale[2]}px`,
    cursor: 'pointer',
    border: 0,
    borderRadius: rounded ? (radii[rounded] || borderRadius) : 0,
    color: color || colors.white,
    backgroundColor: backgroundColor || colors.blue,
    ...buttonStyle,
    ...style
  }

  return (
    <Component {...props}
      className='Button'
      style={sx}>
      {children}
    </Component>
  )
}

Button.propTypes = {
  /** Pass an href prop to make the Button an <a> tag instead of a <button> */
  href: React.PropTypes.string,
  /** Button color */
  color: React.PropTypes.string,
  /** Button background color */
  backgroundColor: React.PropTypes.string,
  /** Controls the border radius for creating button groups */
  rounded: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left'
    ])
  ]),
  /** Creates a larger button */
  big: React.PropTypes.bool
}

Button.defaultProps = {
  rounded: true
}

Button.contextTypes = {
  rebass: React.PropTypes.object
}

export default Button

