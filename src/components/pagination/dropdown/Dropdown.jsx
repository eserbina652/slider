import React from 'react';
import './dropdown.css'

const Dropdown = ({dropdownName, setDropdownName, toggleDropdown, el}) => {
    return (
        <li className={dropdownName === el ? 'liOpen' : undefined}
            onClick={() => {
                setDropdownName(el)
                toggleDropdown()
            }}>
            {el} / pages</li>
    );
};

export default Dropdown;