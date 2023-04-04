import React, {useState} from 'react';
import './index.css'

const Slider = () => {
    const [data, setData] = useState(['red', 'black', 'blue', 'pink'])
    const handleClick = (el) => {
        if (el < 1) {
            setData(prevState => {
                const currentData=[...prevState]
                const lastEl = currentData.pop()
                currentData.unshift(lastEl)
                return currentData
            })
        } else if (el > 1) {
            setData(prevState => {
                const currentData=[...prevState]
                const firstEl = currentData.shift()
                currentData.push(firstEl)
                return currentData
            })
        }
    }
    return (
        <div className='slider-wrapper'>
            {data.map((el, index) => {
                if (index > 2) {
                    return;
                }
                return (<div onClick={() => handleClick(index)} id={index === 1 ? 'active' : undefined}
                             style={{backgroundColor: el}}
                             key={index.toString()}></div>)
            })}
        </div>
    );
};

export default Slider;