import React from "react"
import FlowerListRowView from "./FlowerListRowView";
import FlowerDetailView from "./FlowerDetailView";

const STYLE = {
    itemList: {
        backgroundColor: 'green',
        width: "400px",
        margin: "10px 0px 10px 0px",
        padding: "5px 0px 5px 0px"
    },
    itemDetail: {
        backgroundColor: 'orange',
        width: "500px",
        padding: "5px 0px 5px 0px"
    }
};

class FlowerListView extends React.Component {

    constructor(props) {
        super(props)
        this.flowers = props.flowers
        this.rows = []
        this.number = 0;
        this.prepareRows()
    }

    prepareRows() {
        this.flowers.forEach(element => {
            this.rows.push(<FlowerListRowView flower={element.name} />)
        });
    }

    componentDidMount() {
        this.timerId = setInterval( () => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.number = this.randomizeNumberBetween(0, this.flowers.length - 1)
        this.forceUpdate()
    }

    randomizeNumberBetween(start, end) {
        return Math.floor(Math.random() * ((end - start + 1) + start))
    }

    render() {
        return (
            <center>
                <div>
                <div style={STYLE.itemList}>
                    <h1>{this.rows}</h1>
                </div>
                <div style={STYLE.itemDetail}>
                    <FlowerDetailView flower={this.flowers[this.number]} />
                </div>
            </div>
            </center>
        )
    }
}

export default FlowerListView;