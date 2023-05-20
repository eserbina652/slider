import React, {useEffect, useState} from 'react';
import './pagination.css'
import Cell from "./Cell";
import LeftPictures from "./pictures/LeftPictures";
import RightPictures from "./pictures/RightPictures";
import Dropdown from "./dropdown/Dropdown";
import {downArrow, leftArrow, rightArrow} from "../../assets/images/images";
import {dropdownData, data} from "../../data/data";


const dropdownOptions = dropdownData
const paginationData = data

const Pagination = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(dropdownOptions[0])
    const [numbers, setNumbers] = useState(paginationData)
    const [currentPage, setCurrentPage] = useState(1)

    const handleChangeCurrentPage = (el) => {
        setCurrentPage(el)
    }

    useEffect(() => {
        if (!isNaN(dropdownValue)){
            if (dropdownValue>paginationData[paginationData.length-1]){
                setNumbers([1])
            } else {
                setNumbers(paginationData.slice(0, Math.round(paginationData.length/dropdownValue)))
            }
        }
        setIsDropdownOpen(false)
    }, [dropdownValue])

    return (<div className='page-wrapper'>
            <div className="pageInfo">
                {data.map((el, index) => {
                    if (el<=dropdownValue*currentPage&&el>(dropdownValue*currentPage)-dropdownValue){
                        return <div className='oneOfData' key={index}>{el}</div>
                    }
                })}
            </div>
            <div className='pagination'>
                <div className="imageWrap">
                    <img onClick={() => setCurrentPage(prevState => {
                        const newCurrentPage = prevState - 1
                        if (newCurrentPage < 1) {
                            return 1
                        }
                        return newCurrentPage
                    })} className='images' src={leftArrow} alt="one to left"/>
                </div>

                {currentPage <= 3||numbers.map((el, index) => {
                    if (el === 1) {
                        return <Cell CurrentPage={currentPage} changeCurrentPage={handleChangeCurrentPage} el={el}
                                     key={index} index={index}/>
                    }
                })}
                {currentPage <= 4||(numbers[numbers.length-1]<10)||<LeftPictures setCurrentPage={setCurrentPage}/>}
                    {numbers.map((el, index) => {
                    if (el >= currentPage - 2 && el <= currentPage + 2) {
                        return <Cell currentPage={currentPage} changeCurrentPage={handleChangeCurrentPage} el={el}
                                     key={index} index={index}/>
                    }
                    if (currentPage < 4 && (el < currentPage || el <= 5)) {
                            return <Cell currentPage={currentPage} changeCurrentPage={handleChangeCurrentPage} el={el}
                                         key={index} index={index}/>
                    }
                    if (currentPage > numbers[numbers.length - 4] && (el <= numbers[numbers.length - 1] && el >= numbers[numbers.length - 5])) {
                            return <Cell currentPage={currentPage} changeCurrentPage={handleChangeCurrentPage} el={el}
                                         key={index} index={index}/>
                    }
                })}
                {currentPage >= numbers[numbers.length - 4]||(numbers[numbers.length-1]<10)||
                    <RightPictures numbers={numbers} setCurrentPage={setCurrentPage}/>}
                {currentPage >= numbers[numbers.length - 3] ||(numbers[numbers.length-1]<10) ||numbers.map((el, index) => {
                    if (el === numbers[numbers.length - 1]) {
                        return <Cell currentPage={currentPage} changeCurrentPage={handleChangeCurrentPage} el={el}
                                     key={index} index={index}/>
                    }
                })}
                <div className="imageWrap">
                    <img onClick={() => setCurrentPage(prevState => {
                        const newCurrentPage = prevState + 1
                        if (newCurrentPage > numbers[numbers.length - 1] || numbers[numbers.length-1]>10 ) {
                            return numbers[numbers.length - 1]
                        }
                        return newCurrentPage
                    })} className='images' src={rightArrow} alt="one to right"/>
                </div>
                <div className="dropdown">
                    <button className={isDropdownOpen ? 'dropdown-open' : "dropdown-toggle"} onClick={() => setIsDropdownOpen(true) }>
                        {dropdownValue} / pages
                        <img className='images menu' src={downArrow} alt='dropdown'/>
                    </button>
                    {isDropdownOpen &&
                        <ul className="dropdown-menu">
                            {dropdownOptions.map((el, index) => {
                                return <Dropdown
                                    dropdownValue={dropdownValue}
                                    setDropdownValue={setDropdownValue}
                                    el={el}
                                    key={index}/>
                            })}
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default Pagination;