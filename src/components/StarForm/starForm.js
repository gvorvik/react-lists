//This is different in that it exports a function and not a component
import React from 'react';

const StarForm = props => (
    <form onSubmit={props.handleAddForChild}>
        <input value={props.newStar.name} onChange={props.handleChangeForChild('name')} type="text" placeholder="Star Name" />
        <input value={props.newStar.diameter} onChange={props.handleChangeForChild('diameter')} type="text" placeholder="Diameter" />
        <input type="submit" value="Submit Star" />
    </form>
);


export default StarForm;