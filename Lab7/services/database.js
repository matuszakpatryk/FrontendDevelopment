let fakeFlowers = require('../domain/fakeFlower')
let realFlowers = require('../domain/realFlower')
let fakeTypes = require('../domain/fakeType')
let realTypes = require('../domain/realType')

let FakeFlower = fakeFlowers.FakeFlower;
let RealFlower = realFlowers.RealFlower;

let FakeType = fakeTypes.FakeType;
let RealType = realTypes.RealType;


var DB_MODULE = function() {
    var flowers = []

    var createFlower = function(id, name, quantity, price, colors, isExotic, type, value) {
        var flower
        if (type.name === "Real") {
            flower = new RealFlower(id,name,quantity,price,colors,isExotic,type,value)
        } else {
            flower = new FakeFlower(id,name,quantity,price,colors,isExotic,type,value)
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
        if (searchedElementId === 0) {
            return -10
        } else {
            return searchedElementId
        }
    }

    var findFlowerIndexById = function(id) {
        var index = -1;
        flowers.forEach(element => {
            if (element.id === id) {
                index = flowers.indexOf(element)
            }
        })
        return index
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
            if (flag === 0) {
                flowers.push(flowerToAdd);
                return ("New flower added!")
            } else {
                return ("Flower cannot be added")
            }
        },
        removeFlower: function(id) {
            if (searchFlowerById(id) !== -10) {
                flowers.splice(searchFlowerById(id), 1)
                return ("Flower removed")
            } else {
                return ("Flower not found!")
            }
        },
        updateFlower: function(id, name, quantity, price, colors, isExotic, type, value) {
            let flowerIndex = findFlowerIndexById(id)
            if (flowerIndex !== -1) {
                flowers[flowerIndex].name = name
                flowers[flowerIndex].quantity = quantity
                flowers[flowerIndex].price = price
                flowers[flowerIndex].colors = colors
                flowers[flowerIndex].isExotic = isExotic
                flowers[flowerIndex].type = type
                flowers[flowerIndex].value = value
                return ("Flower updated!")
            } else {
                return ("Flower not found!")
            }
        },
        getFlowers: function() {
            console.log(typeof(flowers))
            return flowers
        },
        addData: function() {
            var fakeType = new FakeType("Fake", "23%")
            var realType = new RealType("Real", "8%")
            this.addFlower("123Orch", "Orchidea", 10, 12.99, ["White", "Blue", "Red"], false, fakeType, "Plastic")
            this.addFlower("345Ros", "Rose", 30, 8.99, ["Blue", "Orange"], false, realType, "Not Plastic")
            // this.addFlower("11Amar", "Amarylis", 3, 11.22, ["Black", "Red"], true, realType, true)
            // this.addFlower("756Cac", "Cactus", 70, 21.00, ["Blue", "Green"], true, realType, true)
            // this.addFlower("156Sun", "Sunflower", 120, 6.99, ["Purple", "Red"], true, realType, true)
            // this.addFlower("6464Tul", "Tulip", 300, 2.99, ["Blue"], true, realType, true)
            // this.addFlower("756Dai", "Daisy", 20, 14.50, ["Pink", "Red"], true, realType, true)
            // this.addFlower("675Cro", "Crocus", 30, 4.5, ["Green", "White"], true, realType, true)
            // this.addFlower("999For", "Forget me not", 30, 1.22, ["Blue", "Yellow"], true, realType, true)
        }
    }
}

module.exports = DB_MODULE;