"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Drawer.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Drawer = function Drawer(_ref) {
  var children = _ref.children,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '250px' : _ref$width,
    _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
    onClose = _ref.onClose,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'left' : _ref$position;
  var drawerStyles = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    position: 'fixed',
    top: 0
  }, position, isOpen ? 0 : "-".concat(width)), "width", width), "height", '100%'), "transition", 'transform 0.3s ease-in-out'), "transform", isOpen ? 'translateX(0)' : "translateX(-".concat(width, ")")), "backgroundColor", '#333'), "color", '#fff'), "overflowX", 'hidden'), "padding", '16px'), "zIndex", 2);
  var overlayStyles = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1 // Ensures the overlay appears below the drawer
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: overlayStyles,
    onClick: onClose
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: drawerStyles
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    style: {
      marginBottom: '16px',
      background: 'none',
      color: 'inherit',
      border: 'none',
      cursor: 'pointer'
    }
  }, "Close"), children));
};
Drawer.propTypes = {
  children: _propTypes["default"].node,
  width: _propTypes["default"].string,
  isOpen: _propTypes["default"].bool,
  onClose: _propTypes["default"].func.isRequired,
  position: _propTypes["default"].oneOf(['left', 'right'])
};
var _default = exports["default"] = Drawer;