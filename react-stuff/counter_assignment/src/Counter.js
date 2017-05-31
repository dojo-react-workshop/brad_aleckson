import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.handleClickDecr = this.handleClickDecr.bind(this);
        this.handleClickIncr = this.handleClickIncr.bind(this);
    }

    handleClickIncr() {
        this.setState({count:this.state.count+1});
    }
    handleClickDecr() {
        this.setState({count:this.state.count-1});
    }

    render() {
        return (
            <div style={{border:'1px dotted black', margin:'15px', padding:'20px', width:'250px'}}>
                <div>{this.state.count}</div>
                <div>
                    <button onClick={this.handleClickIncr}>Increment</button>
                    &nbsp;
                    <button onClick={this.handleClickDecr}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default Counter;