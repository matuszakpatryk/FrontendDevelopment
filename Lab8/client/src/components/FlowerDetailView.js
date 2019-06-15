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

    editClicked = () => {
        this.props.editClicked(this.flower._id)
    }

    deleteClicked = () => {
        console.log("CHILD DELETED")
        this.props.deleteClicked(this.flower._id)
    }

    render() {
        return (
            <div>
                <div>
                    <p>NAME: {this.flower._name}</p>
                    <p>QUANTITY: {this.flower._quantity}</p>
                    <p>PRICE: {this.flower._price} PLN</p>
                    <p>TYPE: {this.flower._type._name}</p>
                </div>
                <div>
                    <button onClick={this.editClicked}>Edit</button>
                    <button onClick={this.deleteClicked}>Delete</button>
            </div>
            </div>
        )
    }
}

export default FlowerDetailView;