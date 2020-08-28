import React, { Component } from 'react'


class ClassBased extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.baseState = this.state;
        this.increament = this.increament.bind(this)
    }
    reset() {
        this.setState(this.baseState);

    }
    increament() {
        this.setState({ counter: this.state.counter + 1 })

    }
    decreament() {
        this.setState({ counter: this.state.counter - 1 })

    }
    render() {
        return (
            <div>
                <h2>{this.props.name} you are in Class Based Stateful Component</h2>
                <span>{this.state.counter} </span>
                <button onClick={this.increament}>Increament Counter</button>
                <button onClick={this.decreament.bind(this)}>Decreament Counter</button>
                <button onClick={() => this.reset()}>Reset</button>
            </div>
        );
    }
}
export default ClassBased;