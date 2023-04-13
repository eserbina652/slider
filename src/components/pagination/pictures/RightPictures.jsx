import React, {useState} from 'react';
import {dots, rightArrowHover} from "../../../assets/images/images";
import './pictures.css'

const RightPictures = ({setCurrentPage, numbers}) => {
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
                onClick={() => setCurrentPage(prevState =>  {
                    const newCurrentPage = prevState + 5
                    if (newCurrentPage>numbers[numbers.length-1]){
                        return numbers[numbers.length-1]
                    }
                    return newCurrentPage
                })}
            >
                <img className='images' src={imageRightSrc} alt="My Image" />
            </div>
    );
};

export default RightPictures;