var Flower = require('../domain/flower')

class FakeFlower extends Flower {
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

    waterMe() {
        console.log(`Water me ${this._quantity} times! plum plum`)
    }
}

module.exports = {
    FakeFlower: FakeFlower
}