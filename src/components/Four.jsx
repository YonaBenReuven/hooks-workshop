import React, { Component } from 'react';
import Little from "./Little";

class Four extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        }
    }

    showLittle = () => {
        this.setState({ showText: !this.state.showText });
    }

    render() {
        return (
            <div style={{ marginBottom: "50px" }}>
                <h2>Challenge 4</h2>
                <h3>Here below lies little text in a box</h3>
                <button onClick={this.showLittle}>Click to toggle Little</button>
                {this.state.showText ? <Little /> : ""}
            </div>
        );
    }
}

export default Four;