import React from 'react';
import './pagination.css'
const Cell = ({el, index}) => {
    return (
        <>
            <div className={el===6?'cell active':'cell'}>
                {el}
            </div>
        </>

    );
};

export default Cell;