import React from 'react';
import './dropdown.css'

const Dropdown = ({dropdownName, setDropdownName, toggleDropdown, el, lastOfNumbers}) => {
    return (
        <li className={dropdownName === el ? 'liOpen' : undefined}
            onClick={() => {
                lastOfNumbers()
                setDropdownName(el)
                toggleDropdown()
            }}>
            {el} / pages</li>
    );
};

export default Dropdown;