import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from '../App';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';
const Public = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/detail/:id' element={<Detail/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Public;
