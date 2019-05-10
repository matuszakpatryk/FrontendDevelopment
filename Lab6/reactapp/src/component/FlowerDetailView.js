import React from "react"

class FlowerDetailView extends React.Component {

    constructor(props) {
        super(props)
        this.flower = props.flower
    }

    componentWillReceiveProps(props) {
        if (props.flower._id.toString() !== this.flower._id.toString()) {
            this.flower = props.flower
            this.forceUpdate()
        }
      }

    render() {
        return (
            <div>
                <p>NAME: {this.flower._name}</p>
                <p>QUANTITY: {this.flower._quantity}</p>
                <p>PRICE: {this.flower._price} PLN</p>
            </div>
        )
    }
}

export default FlowerDetailView;