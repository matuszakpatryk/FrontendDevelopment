// ======= Flower =======
function Flower(id, name, quantity, price, colors, isExotic) {
    this.id = id
    this.name = name
    this.quantity = quantity
    this.price = price
    this.colors = colors
    this.isExotic = isExotic
}

Flower.prototype = {
    getId: function () {
        return this.id
    },
    getName: function() {
        return this.name
    },
    getQuantity: function() {
        return this.quantity
    },
    getColors: function() {
        return this.colors
    },
    getIsExotic: function() {
        return this.isExotic
    }
}

// ======= Fake Flower =======
function FakeFlower (id, name, quantity, price, colors, isExotic, isReal) {
    Flower.call(this, id, name, quantity, price, colors, isExotic)
    this.isReal = isReal
}

FakeFlower.prototype = Object.create(Flower.prototype)
FakeFlower.prototype.constructor = FakeFlower

// ======= Rozszerzanie =======
FakeFlower.prototype.getIsReal = function() {
    return this.isReal
}

// ======= Tworzenie obiektu =======
var orchideaFakeFlower = new FakeFlower("123Orch", "Orchidea", 10, 12.99, ["White", "Blue", "Red"], true, false)
console.log("Testing")
console.log(orchideaFakeFlower.getIsReal())