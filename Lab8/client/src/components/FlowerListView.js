import React from "react"
import FlowerListRowView from "./FlowerListRowView";
import FlowerDetailView from "./FlowerDetailView";
import FlowerEditView from "./FlowerEditView";
import FlowerAddView from "./FlowerAddView";

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
        padding: "5px 0px 5px 0px",
        margin: "10px 0px 10px 0px",
    },
    addItemButton: {
        backgroundColor: 'grey',
        width: "400px",
    },
    addItem: {
        backgroundColor: 'grey',
        width: "800px",
        padding: "5px 0px 5px 0px"
    }
};

class FlowerListView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flowers: [],
            rows: [],
            number: 0,
            showEdit: false,
            showDelete: false,
            showAdd: false,
        };
        this.downloadData()
    }

    downloadData() {
        fetch('http://127.0.0.1:4000/api/', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            console.log("DOWNLOADED")
            let flowers = data;
            this.setState({flowers: flowers});
            this.prepareRows()
        })
    }

    prepareRows() {
        this.state.flowers.forEach(element => {
            this.state.rows.push(<FlowerListRowView key={element._id} flower={element} flowerClicked={this.flowerClicked}/>)
        });
        this.forceUpdate()
    }

    flowerClicked = (id) => {
        let flowerNumber = this.findIndexOfFlowerById(id)
        this.setState({number: flowerNumber})
        this.forceUpdate()
    }

    findIndexOfFlowerById = (searchedId) => {
        let flowerId = -1
        let counter = 0
        this.state.flowers.forEach(element => {
            if (element._id === searchedId) {
                flowerId = counter
            }
            counter++;
        })
        return flowerId
    }

    editClicked = (id) => {
        this.setState({showEdit: !this.state.showEdit})
    }

    deleteClicked = async (id) => {
        var body = {}
        body["id"] = id
        var response = await fetch('http://127.0.0.1:4000/api/delete', {
                method: 'POST',
                body: JSON.stringify(body),
                mode: "cors",
                headers:{
                    'Content-Type': 'application/json'
                }
            });
        if (response.status === 200) {
            this.setState({
                flowers: [],
                rows: []})
            this.downloadData()
        }
    }

    addClicked = () => {
        this.setState({showAdd: !this.state.showAdd})
    }

    render() {
        console.log("rendered")
        return (
            <center>
                <div>
                <div style={STYLE.itemList}>
                    <h1>{this.state.rows}</h1>
                </div>
                <div style={STYLE.addItemButton}>
                <button onClick={this.addClicked}>Add new flower</button>
                </div>
                <div style={STYLE.itemDetail}>
                    {this.state.flowers.length > 0 ? <FlowerDetailView flower={this.state.flowers[this.state.number]} editClicked={this.editClicked} deleteClicked={this.deleteClicked} /> : null}
                </div>
                <div style={STYLE.itemEdit}>
                    {this.state.showEdit ? <FlowerEditView flower={this.state.flowers[this.state.number]}/> : null}
                </div>
                <div style={STYLE.addItem}>
                    {this.state.showAdd ? <FlowerAddView /> : null}
                </div>
            </div>
            </center>
        )
    }
}

export default FlowerListView;