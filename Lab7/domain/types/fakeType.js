var FlowerType = require('./flowerType')

class FakeType extends FlowerType {
    constructor(name, vat) {
        super(name, vat)
    }
}

module.exports = {
    FakeType: FakeType
}