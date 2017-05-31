import React, { Component } from 'react';
import VotingOption from './VotingOption.js';
// import sortBy from 'lodash/sortBy'

class Voting extends Component {
    constructor() {
        super();
        this.state = {
            languages: [
                {
                    name: 'React',
                    votes: 1
                },
                {
                    name: 'Vue',
                    votes: 1
                },
                {
                    name: 'Angular',
                    votes: 1
                },
                {
                    name: 'Ember',
                    votes: 1
                }
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(obj) {
        //console.log('I am in Voting.js, handleClick function' + this)
        const langs = this.state.languages;
        const index = langs.findIndex(item => item.name === obj.name)
        console.log(`index : ${index}, obj.votes: ${obj.votes}`);
        langs[index].votes += 1;
        // const curObj = this.state.languages[index];
        langs.sort( (a,b) => {
            return a.votes-b.votes
        })

        this.setState( { languages: langs } );

        // this.setState({object: [
        //     ...this.state.languages.filter(x => obj.name !== x.name),
        //     { name: `${obj.name}test`, votes: obj.votes+1}
        // ]})

        console.log(this.state.languages)
    }

    render() {
        const votingoptions = []; //this.state.languages.sort;
        for(var j = 0; j<this.state.languages.length; j++) {
            votingoptions.push(<VotingOption key={this.state.languages[j].name} languageObj={this.state.languages[j]} onClick={this.handleClick}/>)
        }
        return (
            <div>
                <div style={{textAlign:'center'}}>
                    {votingoptions}                   
                </div>
            </div>
        )
    }
}

export default Voting;