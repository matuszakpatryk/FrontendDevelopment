class FlowerType {
    constructor(name, vat) {
        this._name = name
        this._vat = vat
    }
    set name(value) {
        this._name = value
    }
    get name() {
        return this._name
    }
    set vat(value) {
        this._vat = value
    }
    get vat() {
        return this._vat
    }
}

module.exports = FlowerType;