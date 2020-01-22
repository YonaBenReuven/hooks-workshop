import React, { Component } from 'react';
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import Four from "./components/Four";

import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hooks Practice</h1>
                <div className="container">
                    <One />
                    <Two />
                    <Three />
                    <Four />
                </div>
            </div>
        );
    }
}

export default App;