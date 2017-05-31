import React, { Component } from 'react';

class VotingOption extends Component {
    constructor(props) {
        super(props);
        this.countVote = this.countVote.bind(this);
    }

    countVote() {
        console.log('VotingOption.js, countVote function, this.languageObj.name: ' + this.props.languageObj.name);
        this.props.onClick(this.props.languageObj)
    }

    render() {
        console.log(this.props);
        const {languageObj} = this.props;
        // const {onClick} = this.props;
        return (
            <div className="language">
                    <div className="vote">{languageObj.votes}</div>
                    <div className="name">{languageObj.name}</div>
                    <div className="plus" onClick={(e) => alert('voted for ' + languageObj.name)}>&#43;</div>
                    <button onClick={this.countVote}>Vote!</button>
            </div>
        )
    }
}

export default VotingOption;