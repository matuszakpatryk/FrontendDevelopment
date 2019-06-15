var FlowerType = require('./flowerType')

class RealType extends FlowerType {
    constructor(name, vat) {
        super(name, vat)
    }
}

module.exports = {
    RealType: RealType
}