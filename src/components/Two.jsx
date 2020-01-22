import React, { Component } from 'react';

class Two extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 1995,
            type: "Mercedes",
            used: true
        }
    }

    swapCar = () => {
        this.setState({ year: 2018, type: "BMW", used: false });
    }

    render() {
        return (
            <div style={{ marginBottom: "50px" }}>
                <h2>Challenge 2</h2>
                <h3>Car Spec is:</h3>
                <ul>
                    <li>{this.state.type}</li>
                    <li>{this.state.year}</li>
                    <li>{this.state.used ? "Used Car" : "Brand New!"}</li>
                </ul>
                <button onClick={this.swapCar}>Swap Car!</button>
            </div>
        );
    }
}

export default Two;