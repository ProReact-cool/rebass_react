'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Flex = (function (_React$Component) {
  function Flex() {
    _classCallCheck(this, Flex);

    _get(Object.getPrototypeOf(Flex.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Flex, _React$Component);

  _createClass(Flex, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        {
          className: (0, _classnames2['default'])('flex', {
            'flex-wrap': this.props.wrap,
            'flex-center': this.props.center,
            'mxn2': this.props.pad
          }) },
        this.props.children
      );
    }
  }]);

  return Flex;
})(_react2['default'].Component);

Flex.propTypes = {
  wrap: _react2['default'].PropTypes.bool,
  center: _react2['default'].PropTypes.bool,
  pad: _react2['default'].PropTypes.bool
};

Flex.defaultProps = {
  center: true,
  pad: true
};

var FlexItem = (function (_React$Component2) {
  function FlexItem() {
    _classCallCheck(this, FlexItem);

    _get(Object.getPrototypeOf(FlexItem.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(FlexItem, _React$Component2);

  _createClass(FlexItem, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])({
            'flex-auto': this.props.auto,
            'flex-none': !this.props.auto,
            'px2': this.props.pad
          }) },
        this.props.children
      );
    }
  }]);

  return FlexItem;
})(_react2['default'].Component);

FlexItem.propTypes = {
  auto: _react2['default'].PropTypes.bool,
  pad: _react2['default'].PropTypes.bool
};

FlexItem.defaultProps = {
  pad: true
};

exports['default'] = { Flex: Flex, FlexItem: FlexItem };
module.exports = exports['default'];