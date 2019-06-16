import React, { Component } from 'react';

export class PLN extends Component {

    constructor(props) {
        super(props)
    }

    handleChange = event => {
        this.props.onPlnChange(event.target.value)
    }

    render() {
        const cash = this.props.pln
        return (<div>
            <label>PLN</label>
            <input value={cash} onChange={this.handleChange} />
        </div>)
    }
}