var realType = {
    name: "real",
    vat: 8
}

var fakeType = {
    name: "fake",
    vat: 23
}

var roseFlower = {
    id: "1",
    name: "Rose",
    quantity: "10",
    colors: ["Blue", "Red", "Green"],
    isExotic: false,
    type: fakeType
}

var amaryllisFlower = {
    id: "2",
    name: "Amaryllis",
    quantity: "20",
    colors: ["Blue", "Green"],
    isExotic: true,
    type: realType
}

var flowers = [roseFlower, amaryllisFlower]

var addFlower = function(flower) {
    var flag = 0;
    flowers.forEach(element => {
        if (element.id === flower.id) {
            flag = 1;
        }
    });

    if (flag == 0) {
        flowers.push(flower);
    } else {
        console.log("Flower exists");
    }
}

var removeFlower = function(flower) {
    if (flowers.indexOf(flower) != -1) {
        flowers.splice(flowers.indexOf(flower), 1)
    } else {
        console.log("Flower not found!")
    }
}

var updateFlower = function(flower, name) {
    flowers[flowers.indexOf(flower)].name = name
}

var searchFlower = function(flowerId) {
    var searchedElement = 0;
    flowers.forEach(element => {
        if (element.id === flowerId) {
            searchedElement = element
        }
    });
    if (searchedElement == 0) {
        return "Not found"
    } else {
        return searchedElement
    }
    
}

console.log("Start!")
console.log("Database:")
console.log(flowers)
console.log("")
console.log("Adding a new flower...")
var orchideaFlower = {
    id: "3",
    name: "Orchidea",
    quantity: "39",
    colors: ["Blue"],
    isExotic: true,
    type: fakeType
}
addFlower(orchideaFlower)
console.log("Database:")
console.log(flowers)
console.log("")
console.log("Adding a duplicated flower...")
addFlower(orchideaFlower)
console.log("Database:")
console.log(flowers)
console.log("")
console.log("Updating a flower...")
updateFlower(orchideaFlower, "OrchideaTest")
console.log("Database:")
console.log(flowers)
console.log("")
console.log("Removing an existing flower...")
removeFlower(orchideaFlower)
console.log("Database:")
console.log(flowers)
console.log("")
console.log("Removing flower which doesnt exists...")
removeFlower(orchideaFlower)
console.log("Database:")
console.log(flowers)
console.log("")
console.log("Searching a flower with id = 2 ...")
console.log(searchFlower("2"))
console.log("")
console.log("Searching a flower with id = 3 ...")
console.log(searchFlower("3"))
console.log("")
console.log("")
console.log("")

console.log("Every flower with quantity bigger than 11...")
const result = flowers.filter(element => element.quantity > 11);
console.log(result)
console.log("")
