import React, { Component } from 'react';

class NewStar extends Component {

    render() {
        return (
            <p>The new star is named {this.props.newStar.name} and its diameter is {this.props.newStar.diameter}.</p>
        )
    }
}

export default NewStar;