import React from 'react';
import './dropdown.css'

const Dropdown = ({dropdownValue, setDropdownValue, el}) => {
    return (
        <li className={dropdownValue === el ? 'liOpen' : undefined}
            onClick={() => {
                setDropdownValue(el)
            }}>
            {el} / pages</li>
    );
};

export default Dropdown;