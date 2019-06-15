import React from "react"

class FlowerListRowView extends React.Component {

    constructor(props) {
        super(props)
        this.flower = props.flower
    }

    flowerClicked = () => {
        this.props.flowerClicked(this.flower._id)
    }

    render() {
        return (
            <div onClick={this.flowerClicked}>
                <p>{this.flower._name}</p>
            </div>
        )
    }
}

export default FlowerListRowView;