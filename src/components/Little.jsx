import React, { Component } from 'react';

class Little extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.interval = null;
    }

    incCount = () => {
        console.log("Interval count: ", this.state.count);
        this.setState({ count: this.state.count + 1 });
    };

    componentDidMount = () => {
        this.interval = setInterval(this.incCount, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div style={{ marginBottom: "50px", border: "1px solid black" }}>
                <h5>I've been rendered for {this.state.count} seconds</h5>
            </div>
        );
    }
}

export default Little;