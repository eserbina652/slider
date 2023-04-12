import React, {useState} from 'react';
import {dots, rightArrow} from "../../../assets/images/images";
import './pictures.css'

const RightPictures = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageRightSrc, setImageRightSrc] = useState(dots);
    const handleRightMouseEnter = () =>{
        setIsHovered(true);
        setImageRightSrc(rightArrow);
    }
    const handleRightMouseLeave = () =>{
        setIsHovered(false);
        setImageRightSrc(dots);
    }
    return (
            <div
                className='imageWrap'
                onMouseEnter={handleRightMouseEnter}
                onMouseLeave={handleRightMouseLeave}
            >
                <img className='images' src={imageRightSrc} alt="My Image" />
            </div>
    );
};

export default RightPictures;