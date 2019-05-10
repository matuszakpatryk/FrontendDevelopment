import RealType from '../domain/flower'
import FakeType from '../domain/flower'
import RealFlower from '../domain/flower'
import FakeFlower from '../domain/flower'

var DB_MODULE = function() {
    var realType = new RealType("Real", 8)
    var fakeType = new FakeType("Fake", 23)
    var flowers = []

    var createFlower = function(id, name, quantity, price, colors, isExotic, type, value) {
        var flower
        if (type.name === "Real") {
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
        if (searchedElementId === 0) {
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
            if (flag === 0) {
                flowers.push(flowerToAdd);
                console.log("New flower added!")
            } else {
                console.log("Flower exists")
            }
        },
        removeFlower: function(id) {
            if (searchFlowerById(id) !== -10) {
                flowers.splice(searchFlowerById(id), 1)
            } else {
                console.log("Flower not found!")
            }
        },
        getFlowers: function() {
            console.log(typeof(flowers))
            return flowers
        }
    }
}
var fakeType = new FakeType("Fake", "23")
var realType = new RealType("Real", "8")

console.log("=== DB MODULE TESTING ===")
var DB = DB_MODULE()
DB.addFlower("123Orch", "Orchidea", 10, 12.99, ["White", "Blue", "Red"], true, fakeType, "Plastic")
DB.addFlower("345Ros", "Rose", 30, 8.99, ["Blue", "Red"], true, realType, true)
DB.showFlowers()
DB.removeFlower("111")
DB.showFlowers()
DB.removeFlower("123Orch")
DB.showFlowers()

export default DB_MODULE;