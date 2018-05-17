import React, { Component } from 'react';

class StarForm extends Component {

    render() {

        return (
            <form onSubmit={this.props.handleAddForChild}>
                <input value={this.props.newStar.name} onChange={this.props.handleChangeForChild('name')} type="text" placeholder="Star Name" />
                <input value={this.props.newStar.diameter} onChange={this.props.handleChangeForChild('diameter')} type="text" placeholder="Diameter" />
                <input type="submit" value="Submit Star" />
            </form>
        )
    }
}

export default StarForm;