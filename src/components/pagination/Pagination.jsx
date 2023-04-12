import React, {useState} from 'react';
import './pagination.css'
import Cell from "./Cell";
import res from "../../data/data";
import LeftPictures from "./pictures/LeftPictures";
import RightPictures from "./pictures/RightPictures";
import Dropdown from "./dropdown/Dropdown";
import {downArrow} from "../../assets/images/images";


const dropdownOptions = [10, 20, 50, 100]
const Pagination = () => {
    const [numbers, setNumbers] = useState(res)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownName, setDropdownName] = useState(dropdownOptions[0])
/*
Зробити новий стан, в якому буде зберігатися активне число
повертати в мапі лише 5 чисел відштовхуючись від активного по 2 з кожної сторони
 */
    //Todo: new state for active value, finished logic for dropdown(divide numbers by active dropdownOptions),
    // return in map only 5 numbers and +two by every side from active number
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const lastOfNumbers = () => {

    }
    return (
        <div className='pagination'>
            <div className='numbers'>{numbers[0]}</div>
            <LeftPictures/>
            {numbers.map((el, index) => {
                if (index > 2 && index < 8)
                    return <Cell el={el} key={index} index={index}/>
            })}
            <RightPictures/>
            <div className="numbers">{numbers[numbers.length - 1]}</div>
            <div className="dropdown">
                <button className={isDropdownOpen ? 'dropdown-open' : "dropdown-toggle"} onClick={toggleDropdown}>
                    {dropdownName} / pages
                    <img className='images menu' src={downArrow} alt='dropdown'/>
                </button>
                {isDropdownOpen &&
                    <ul className="dropdown-menu">
                        {dropdownOptions.map((el, index) => {
                            return <Dropdown
                                dropdownName={dropdownName}
                                setDropdownName={setDropdownName}
                                toggleDropdown={toggleDropdown}
                                lastOfNumbers={lastOfNumbers}
                                el={el}
                                key={index}/>
                        })}
                    </ul>
                }
            </div>
        </div>
    );
};

export default Pagination;