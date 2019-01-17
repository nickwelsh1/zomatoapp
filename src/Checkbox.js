import React from 'react';

const Checkbox = ({count, name}) => { //destructuring to create simple properties
    return (
        <div className="Checkbox   mb2">
            <input className="mr2" type="checkbox" id={name} value={name} />
            <label for={name} className="lh-copy">{name}</label>
        </div>
    );
}

export default Checkbox;