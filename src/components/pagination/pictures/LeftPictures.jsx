import React, {useState} from 'react';
import {dots, leftArrow} from "../../../assets/images/images";
import './pictures.css'

const LeftPictures = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLeftSrc, setImageLeftSrc] = useState(dots);

    const handleLeftMouseEnter = () => {
        setIsHovered(!isHovered);
        setImageLeftSrc(leftArrow);
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
        >
            <img className='images' src={imageLeftSrc} alt="My Image"/>
        </div>
    );
};

export default LeftPictures;