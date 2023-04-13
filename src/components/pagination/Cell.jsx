import React from 'react';
import './pagination.css'
const Cell = ({el, changeActiveNumber, activeNumber}) => {
    return (
        <>
            <div onClick={() => changeActiveNumber(el)} className={el===activeNumber?'cell active':'cell'}>
                {el}
            </div>
        </>

    );
};

export default Cell;