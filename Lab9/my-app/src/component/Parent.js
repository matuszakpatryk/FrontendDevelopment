import React, {Component} from 'react';
import {Dollar} from './Dollar'
import {PLN} from './PLN'

export class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dollar: 0,
            pln: 0
        }
    }

    handleDollarChange = value => {
        var changedPln = value * 3.83
        this.setState({ dollar: value, pln: changedPln })
    }

    handlePlnChange = value => {
        var changedDollar = value / 3.83
        this.setState({ dollar: changedDollar, pln: value })
    }

    render() {
        return (
            <div>
                <Dollar dollars={this.state.dollar}
                    onDollarChange={this.handleDollarChange}/>
                <PLN pln={this.state.pln}
                    onPlnChange={this.handlePlnChange}/> 
            </div>
        )
    }
}