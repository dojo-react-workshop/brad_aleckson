import React, { Component } from 'react';
import Counter from './Counter.js';

class Container extends Component {
    constructor() {
        super();
        this.state = {
            numCounters: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({numCounters:this.state.numCounters+1})
    }

    render() {
        var counters = [];
        for(var j = 0; j<this.state.numCounters; j++) {
            counters.push(<Counter key={j}/>)
        }
        return (
            <div>
                <div style={{textAlign:'left'}}>
                    <button onClick={this.handleClick}>Add Counter</button>
                </div>
                <div style={{textAlign:'center'}} className="my-counters">
                    {counters}                   
                </div>
            </div>
        )
    }
}

export default Container;