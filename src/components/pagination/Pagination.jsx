import React, {useEffect, useState} from 'react';
import './pagination.css'
import Cell from "./Cell";
import res from "../../data/data";
import LeftPictures from "./pictures/LeftPictures";
import RightPictures from "./pictures/RightPictures";
import Dropdown from "./dropdown/Dropdown";
import {downArrow, leftArrow, rightArrow} from "../../assets/images/images";


const dropdownOptions = [10, 20, 50, 100]
const Pagination = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownName, setDropdownName] = useState(dropdownOptions[0])
    const [numbers, setNumbers] = useState(res)
    const [activeNumber, setActiveNumber] = useState(6)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleChangeActiveNumber = (el) => {
        setActiveNumber(el)
    }

    const lastOfNumbers = () => {
        setNumbers(() => {
            let newState = []
            let lastOfNumbers = res[res.length - 1]
            let currentNumber = lastOfNumbers / dropdownName
            for (let i = currentNumber; i >= 1; i--) {
                newState.unshift(i)
            }
            return newState
        })
    }


    return (<>
            <div className="pageInfo">

            </div>
            <div className='pagination'>
                <div className="imageWrap">
                    <img onClick={() => setActiveNumber(prevState => {
                        const newActiveNumber = prevState - 1
                        if (newActiveNumber < 1) {
                            return 1
                        }
                        return newActiveNumber
                    })} className='images' src={leftArrow} alt="one to left"/>
                </div>

                {activeNumber <= 3 || numbers.map((el, index) => {
                    if (el === 1) {
                        return <Cell activeNumber={activeNumber} changeActiveNumber={handleChangeActiveNumber} el={el}
                                     key={index} index={index}/>
                    }
                })}
                {activeNumber <= 4 || <LeftPictures setActiveNumber={setActiveNumber}/>}
                {numbers.map((el, index) => {
                    if (el >= activeNumber - 2 && el <= activeNumber + 2) {
                        return <Cell activeNumber={activeNumber} changeActiveNumber={handleChangeActiveNumber} el={el}
                                     key={index} index={index}/>
                    }
                    if (activeNumber < 4) {
                        if (el < activeNumber || el <= 5) {
                            return <Cell activeNumber={activeNumber} changeActiveNumber={handleChangeActiveNumber} el={el}
                                         key={index} index={index}/>
                        }
                    }
                    if (activeNumber > numbers[numbers.length - 4]) {
                        if (el <= numbers[numbers.length - 1] && el >= numbers[numbers.length - 5]) {
                            return <Cell activeNumber={activeNumber} changeActiveNumber={handleChangeActiveNumber} el={el}
                                         key={index} index={index}/>
                        }
                    }
                })}
                {activeNumber >= numbers[numbers.length - 4] ||
                    <RightPictures numbers={numbers} setActiveNumber={setActiveNumber}/>}
                {activeNumber >= numbers[numbers.length - 3] || numbers.map((el, index) => {
                    if (el === numbers[numbers.length - 1]) {
                        return <Cell activeNumber={activeNumber} changeActiveNumber={handleChangeActiveNumber} el={el}
                                     key={index} index={index}/>
                    }
                })}
                <div className="imageWrap">
                    <img onClick={() => setActiveNumber(prevState => {
                        const newActiveNumber = prevState + 1
                        if (newActiveNumber > numbers[numbers.length - 1]) {
                            return numbers[numbers.length - 1]
                        }
                        return newActiveNumber
                    })} className='images' src={rightArrow} alt="one to right"/>
                </div>
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
        </>
    );
};

export default Pagination;