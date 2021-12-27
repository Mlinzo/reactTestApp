import React from 'react'
import '../styles/App.css'

/* DEPRECATED */
export default class ClassCounter extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() { this.setState({count: this.state.count + 1}) }
    decrement() { this.setState({count: this.state.count - 1}) }

    render(){
        return (
            <div>
                <div className="counter">
                    <h1>Class Counter (Deprecated)</h1>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.increment}>Up</button>
                    <button onClick={this.decrement}>Down</button>
                </div>
                <hr/>
            </div>
        )
    }
}