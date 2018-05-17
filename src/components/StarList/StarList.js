import React, { Component } from 'react';

class StarList extends Component {

    

    render() {
        
        return (
         <ul>
            {this.props.starList.map(starName => <li key={starName.name}>{starName.name} is {starName.diameter} in diameter</li>)}
        </ul>
        )
    }
}

export default StarList;