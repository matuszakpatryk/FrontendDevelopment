"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Flower Type //
var FlowerType =
/*#__PURE__*/
function () {
  function FlowerType(name, vat) {
    _classCallCheck(this, FlowerType);

    this._name = name;
    this._vat = vat;
  }

  _createClass(FlowerType, [{
    key: "name",
    set: function set(value) {
      this._name = name;
    },
    get: function get() {
      return this._name;
    }
  }, {
    key: "vat",
    set: function set(value) {
      this._vat = vat;
    },
    get: function get() {
      return this._vat;
    }
  }]);

  return FlowerType;
}();

var RealType =
/*#__PURE__*/
function (_FlowerType) {
  _inherits(RealType, _FlowerType);

  function RealType(name, vat) {
    _classCallCheck(this, RealType);

    return _possibleConstructorReturn(this, _getPrototypeOf(RealType).call(this, name, vat));
  }

  return RealType;
}(FlowerType);

var FakeType =
/*#__PURE__*/
function (_FlowerType2) {
  _inherits(FakeType, _FlowerType2);

  function FakeType(name, vat) {
    _classCallCheck(this, FakeType);

    return _possibleConstructorReturn(this, _getPrototypeOf(FakeType).call(this, name, vat));
  }

  return FakeType;
}(FlowerType);

var Flower =
/*#__PURE__*/
function () {
  function Flower(id, name, quantity, price, colors, isExotic, type) {
    _classCallCheck(this, Flower);

    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.colors = colors;
    this.isExotic = isExotic;
    this.type = type;
  }

  _createClass(Flower, [{
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      this._name = value;
    }
  }, {
    key: "quantity",
    get: function get() {
      return this._quantity;
    },
    set: function set(value) {
      this._quantity = value;
    }
  }, {
    key: "price",
    get: function get() {
      return this._price;
    },
    set: function set(value) {
      this._price = value;
    }
  }, {
    key: "colors",
    get: function get() {
      return this._colors;
    },
    set: function set(value) {
      this._colors = value;
    }
  }, {
    key: "isExotic",
    get: function get() {
      return this._isExotic;
    },
    set: function set(value) {
      this._isExotic = value;
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    },
    set: function set(value) {
      this._type = value;
    }
  }]);

  return Flower;
}();

var FakeFlower =
/*#__PURE__*/
function (_Flower) {
  _inherits(FakeFlower, _Flower);

  function FakeFlower(id, name, quantity, price, colors, isExotic, type, material) {
    var _this;

    _classCallCheck(this, FakeFlower);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FakeFlower).call(this, id, name, quantity, price, colors, isExotic, type));
    _this._material = material;

    _this.decreaseQuantity = function (value) {
      _this._quantity -= value;
    };

    return _this;
  }

  _createClass(FakeFlower, [{
    key: "waterMe",
    value: function waterMe() {
      console.log("Water me ".concat(this._quantity, " times! plum plum"));
    }
  }, {
    key: "material",
    get: function get() {
      return this._material;
    },
    set: function set(value) {
      this._material = value;
    }
  }]);

  return FakeFlower;
}(Flower);

var realType = new RealType("Real", 8);
var fakeType = new FakeType("Fake", 23);
var orchideaFakeFlower = new FakeFlower("123Orch", "Orchidea", 10, 12.99, true, ["White", "Blue", "Red"], fakeType, "Plastic");
console.log(orchideaFakeFlower);
orchideaFakeFlower.waterMe();
orchideaFakeFlower.decreaseQuantity(2);
orchideaFakeFlower.waterMe();