// ======= FlowerType =======

function FlowerType(name, vat) {
    this.name = name
    this.vat = vat
}

function FakeType(name, vat) {
    FlowerType.call(this, name, vat)
}

function RealType(name, vat) {
    FlowerType.call(this, name, vat)
}

// ======= Flower =======
function Flower(id, name, quantity, price, colors, isExotic, type) {
    this.id = id
    this.name = name
    this.quantity = quantity
    this.price = price
    this.colors = colors
    this.isExotic = isExotic
    this.type = type
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
    getPrice: function() {
        return this.price
    },
    getColors: function() {
        return this.colors
    },
    getIsExotic: function() {
        return this.isExotic
    },
    getType: function() {
        return this.type
    }
}

// ======= Fake Flower =======
function FakeFlower (id, name, quantity, price, colors, isExotic, type, material) {
    Flower.call(this, id, name, quantity, price, colors, isExotic, type)
    this.material = material
}

FakeFlower.prototype = Object.create(Flower.prototype)
FakeFlower.prototype.constructor = FakeFlower

// ======= Rozszerzanie =======
FakeFlower.prototype.getMaterial = function() {
    return this.material
}

// ======= Real Flower =======
function RealFlower(id, name, quantity, price, colors, isExotic, type, isCutted) {
    Flower.call(this, id, name, quantity, price, colors, isExotic, type)
    this.isCutted = isCutted
}

RealFlower.prototype = Object.create(Flower.prototype)
RealFlower.prototype.constructor = RealFlower

// ======= Rozszerzanie =======
RealFlower.prototype.getIsCutted = function() {
    return this.isCutted
}

// ======= Tworzenie obiektu =======
var realType = new RealType("Real", 8)
var fakeType = new FakeType("Fake", 23)

var orchideaFakeFlower = new FakeFlower("123Orch", "Orchidea", 10, 12.99, true, ["White", "Blue", "Red"], fakeType, "Plastic")
console.log(orchideaFakeFlower.getMaterial())

var roseRealFlower = new RealFlower("145Ros", "Rose", 10, 12.99, false, ["Blue", "Red"], realType, true)
console.log(roseRealFlower.getIsCutted())

// ====== Moduł =======

var DB_MODULE = function() {
    var realType = new RealType("Real", 8)
    var fakeType = new FakeType("Fake", 23)
    var flowers = []

    var createFlower = function(id, name, quantity, price, colors, isExotic, type, value) {
        var flower
        if (type.name == "Real") {
            flower = new RealFlower(id, name, quantity, price, colors, isExotic, realType, value)
        } else {
            flower = new FakeFlower(id, name, quantity, price, colors, isExotic, fakeType, value)
        }
        return flower
    }

    var searchFlowerById = function(flowerId) {
        var searchedElementId = 0;
        flowers.forEach(element => {
            if (element.id === flowerId) {
                searchedElementId = element.id
            }
        });
        if (searchedElementId == 0) {
            return -10
        } else {
            return searchedElementId
        }
    }

    return {
        showFlowers: function() {
            console.log("=== Flowers database ===")
            console.log(flowers)
        },
        addFlower: function(id, name, quantity, price, colors, isExotic, type, value) {
            var flowerToAdd = createFlower(id, name, quantity, price, colors, isExotic, type, value)

            var flag = 0;
            flowers.forEach(element => {
                if (element.id === flowerToAdd.id) {
                    flag = 1
                }
            });
            if (flag == 0) {
                flowers.push(flowerToAdd);
                console.log("New flower added!")
            } else {
                console.log("Flower exists")
            }
        },
        removeFlower: function(id) {
            if (searchFlowerById(id) != -10) {
                flowers.splice(searchFlowerById(id), 1)
            } else {
                console.log("Flower not found!")
            }
        }
    }
}
console.log("=== DB MODULE TESTING ===")
var DB = DB_MODULE()
DB.addFlower("123Orch", "Orchidea", 10, 12.99, ["White", "Blue", "Red"], true, fakeType, "Plastic")
DB.addFlower("345Ros", "Rose", 30, 8.99, ["Blue", "Red"], true, realType, true)
DB.showFlowers()
DB.removeFlower("111")
DB.showFlowers()
DB.removeFlower("123Orch")
DB.showFlowers()


