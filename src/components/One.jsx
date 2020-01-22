import React, { Component } from 'react';

class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div style={{ marginBottom: "50px" }}>
                <h2>Challenge 1</h2>
                <p>Count is: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase Count!</button>
            </div>
        );
    }
}

export default One;