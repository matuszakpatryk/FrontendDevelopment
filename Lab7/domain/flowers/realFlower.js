var Flower = require('./flower')

class RealFlower extends Flower {
    constructor(id, name, quantity, price, colors, isExotic, type, material) {
        super(id, name, quantity, price, colors, isExotic, type)
        this._material = material

        this.decreaseQuantity = (value) => {this._quantity -= value}
    }

    get material() {
        return this._material
    }
    set material(value) {
        this._material = value
    }
}

module.exports = {
    RealFlower: RealFlower
}