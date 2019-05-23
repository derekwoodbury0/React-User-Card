import React, { Component } from 'react'
import Data from '../data'

class UserCard extends Component {
    constructor () {
        super()

        this.state = {
            people: Data,
            index: 0
        }
    }

    nextUp = () => {
        if (this.state.index < 24) {
            this.setState ({ index: this.state.index + 1 })
        }
    }

    backOne = () => {
        if (this.state.index > 0) {
            this.setState ({ index: this.state.index - 1})
        }
    }

    render() {
        const {people, index} = this.state
        return (
            <div className="userCard">
                <div className="topRight">
                    <span>{this.state.index + 1}/25</span>
                </div>
                <h1>{people[index].name.first} {people[index].name.last}</h1>
                <p><b>From:</b> {people[index].city}, {people[index].country}</p>
                <p><b>Job Title:</b> {people[index].title}</p>
                <p><b>Employer:</b> {people[index].employer}</p>
                <ol><b> Favorite Movies </b>
                    <li>{people[index].favoriteMovies[0]}</li>
                    <li>{people[index].favoriteMovies[1]}</li>
                    <li>{people[index].favoriteMovies[2]}</li>
                </ol>
                {<div className="buttons">
                    <button onClick={this.backOne}> &lt; Previous</button>
                    <button onClick={this.nextUp}> Next &gt;</button>
                </div>}
                
            </div>
            
        )
    }
}

export default UserCard