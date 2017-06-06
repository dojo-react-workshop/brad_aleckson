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
        const langs = this.state.languages;
        const newLanguages = langs.map( (lang) => {
            if(lang.name === obj.name)
            {
                return {
                    ...lang,
                    votes: lang.votes + 1
                }
            }
            return lang
        })
        newLanguages.sort( (a,b) => {
            return b.votes-a.votes
        })
        this.setState( { languages: newLanguages } )
        // console.log(this.state.languages)
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