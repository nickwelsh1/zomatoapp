import React from 'react';

const isChecked = () => { }

const Checkbox = ({count, name, handleChange, inputGroup, defaultChecked}) => { //destructuring to create simple properties
    return (
        <div className="Checkbox   mb2">
            <input className="mr2" type="checkbox" id={name} value={name} name={inputGroup} onChange={handleChange} defaultChecked={defaultChecked} />
            <label for={name} className="lh-copy">{name}</label>
        </div>
    );
}

export default Checkbox;