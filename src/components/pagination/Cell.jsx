import React from 'react';
import './pagination.css'
const Cell = ({el, currentPage, changeCurrentPage}) => {
    return (
        <>
            <div onClick={() => changeCurrentPage(el)} className={el===currentPage?'cell active':'cell'}>
                {el}
            </div>
        </>

    );
};

export default Cell;