import React, { Component } from 'react';

class PlanetList extends Component {

    render() {
        return (
        <ul>
            {this.props.planetList.map(planetName => <li key={planetName.name}>{planetName.name} is {planetName.diameter} km in diameter with a {planetName.climate} climate</li>)}
        </ul>
        )
    }
}

export default PlanetList;