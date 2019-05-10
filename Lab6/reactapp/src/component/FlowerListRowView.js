import React from "react"

class FlowerListRowView extends React.Component {

    constructor(props) {
        super(props)
        this.flower = props.flower
    }

    render() {
        return (
            <p>{this.flower}</p>
        )
    }
}

export default FlowerListRowView;