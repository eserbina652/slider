import React, {useState} from 'react';
import {dots, rightArrowHover} from "../../../assets/images/images";
import './pictures.css'

const RightPictures = ({setActiveNumber, numbers}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageRightSrc, setImageRightSrc] = useState(dots);
    const handleRightMouseEnter = () =>{
        setIsHovered(!isHovered);
        setImageRightSrc(rightArrowHover);
    }
    const handleRightMouseLeave = () =>{
        setIsHovered(!isHovered);
        setImageRightSrc(dots);
    }
    return (
            <div
                className='imageWrap'
                onMouseEnter={handleRightMouseEnter}
                onMouseLeave={handleRightMouseLeave}
                onClick={() => setActiveNumber(prevState =>  {
                    const newActiveNumber = prevState + 5
                    if (newActiveNumber>numbers[numbers.length-1]){
                        return numbers[numbers.length-1]
                    }
                    return newActiveNumber
                })}
            >
                <img className='images' src={imageRightSrc} alt="My Image" />
            </div>
    );
};

export default RightPictures;