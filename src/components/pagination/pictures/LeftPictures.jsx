import React, {useState} from 'react';
import {dots, leftArrowHover} from "../../../assets/images/images";
import './pictures.css'

const LeftPictures = ({setCurrentPage}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLeftSrc, setImageLeftSrc] = useState(dots);

    const handleLeftMouseEnter = () => {
        setIsHovered(!isHovered);
        setImageLeftSrc(leftArrowHover);
    }

    const handleLeftMouseLeave = () => {
        setIsHovered(!isHovered);
        setImageLeftSrc(dots);
    }
    return (
        <div
            className='imageWrap'
            onMouseEnter={handleLeftMouseEnter}
            onMouseLeave={handleLeftMouseLeave}
            onClick={() => setCurrentPage(prevState =>  {
                const newCurrentPage = prevState - 5
                if (newCurrentPage<1){
                    return 1
                }
                return newCurrentPage
            })}
        >
            <img className='images' src={imageLeftSrc} alt="My Image"/>
        </div>
    );
};

export default LeftPictures;