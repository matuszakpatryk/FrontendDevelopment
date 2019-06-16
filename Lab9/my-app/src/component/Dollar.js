import React, { Component } from 'react';

export class Dollar extends Component {

    constructor(props) {
        super(props)
    }

    handleChange = event => {
        this.props.onDollarChange(event.target.value)
    }

    render() {
        const cash = this.props.dollars
        return (<div>
            <label>Dollars</label>
            <input value={cash} onChange={this.handleChange}/>
        </div>)
    }
}