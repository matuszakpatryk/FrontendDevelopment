import React from "react"

let fakeFlowers = require('../domain/flowers/fakeFlower')
let realFlowers = require('../domain/flowers/realFlower')
let fakeTypes = require('../domain/types/fakeType')
let realTypes = require('../domain/types/realType')

let FakeFlower = fakeFlowers.FakeFlower;
let RealFlower = realFlowers.RealFlower;

let FakeType = fakeTypes.FakeType;
let RealType = realTypes.RealType;

class FlowerAddView extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            id: "",
            name: "",
            quantity: 0,
            price: "",
            type: "Real",
        }
    }

    addFlower = async (e) => {
        if (this.validateFlower()) {
            let flower = this.createFlower(this.state.id, this.state.name, this.state.quantity, this.state.price, ["Red"], false, this.state.type, "Value")
            let body = JSON.stringify(flower)
            await fetch('http://127.0.0.1:4000/api/create', {
                method: 'POST',
                body: body,
                headers:{
                    'Content-Type': 'application/json'
                }
            });
        }
    }

    createFlower = function(id, name, quantity, price, colors, isExotic, type, value) {
        var flower
        var fakeType = new FakeType("Fake", "23%")
        var realType = new RealType("Real", "8%")
        if (type === "Real") {
            console.log("REAL")
            flower = new RealFlower(id,name,quantity,price,colors,isExotic,realType,value)
        } else {
            console.log("FAKE")
            flower = new FakeFlower(id,name,quantity,price,colors,isExotic,fakeType,value)
        }
        return flower
    }

    validateFlower() {
        if (this.state.name.length <= 0) {
            return false
        } else if (this.state.price.length <= 0) {
            return false
        } else if (this.state.type.length <= 0) {
            return false
        } else {
            return true
        }
    }

    handleChange(event) {
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
      }

    render() {
        return (
            <div>
                <form onSubmit={this.addFlower}>
                <label>Id:
                    <input type="text" name="id" value={this.state.id} onChange={this.handleChange} style={{margin: '5px'}}/>
                </label>
                <label>Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} style={{margin: '5px'}}/>
                </label>
                <label>Quantity:
                    <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange} style={{margin: '5px'}}/>
                </label>
                <label>Price:
                    <input type="text" name="price" value={this.state.price} onChange={this.handleChange} style={{margin: '5px'}}/>
                </label>
                <center>
                    <label>Type:
                        <div style={{padding: '5px 10px 5px 10px'}}>
                            <select name="type" value={this.state.type} onChange={this.handleChange}>
                                <option value="Real">Real</option>
                                <option value="Fake">Fake</option>
                            </select>
                        </div>
                    </label>
                    <input type="submit" value="Save"/>
                </center>
                </form>
            </div>
        )
    }
}

export default FlowerAddView;