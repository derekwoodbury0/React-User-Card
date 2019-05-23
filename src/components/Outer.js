import React, { Component } from 'react'
import UserCard from './UserCard'


class Outer extends Component {
    
    render() {
        return(
            <div className="outer">
                <UserCard />
            </div>
        ) 
    }
}

export default Outer