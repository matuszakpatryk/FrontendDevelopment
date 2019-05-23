class Flower {
    constructor(id, name, quantity, price, colors, isExotic, type) {
        this.id = id
        this.name = name
        this.quantity = quantity
        this.price = price
        this.colors = colors
        this.isExotic = isExotic
        this.type = type
    }

    get id() {
        return this._id
    }
    set id(value) {
        this._id = value
    }
    get name() {
        return this._name
    }
    set name(value) {
        this._name = value
    }
    get quantity() {
        return this._quantity
    }
    set quantity(value) {
        this._quantity = value
    }
    get price() {
        return this._price
    }
    set price(value) {
        this._price = value
    }
    get colors() {
        return this._colors
    }
    set colors(value) {
        this._colors = value
    }
    get isExotic() {
        return this._isExotic
    }
    set isExotic(value) {
        this._isExotic = value
    }
    get type() {
        return this._type
    }
    set type(value) {
        this._type = value
    }
}

module.exports = Flower;