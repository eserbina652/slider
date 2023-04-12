import React from 'react';
import Slider from "./components/sliders/Slider";
import './App.css'
import Pagination from "./components/pagination/Pagination";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Pagination/>
          {/*<Slider/>*/}
        </div>
    );
};

export default App;