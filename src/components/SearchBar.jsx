import React, { useState } from 'react';
import { searchIcon } from '../assets/Icons';
import './SearchBar.css'
const SearchBar = ({getValue}) => {
    const handleChange = (e) => {
        getValue(e.target.value)
    }
    return (
        <div className='wrapper'>
            <input type="text" onChange={(e) => handleChange(e)} className='search' maxLength={20} placeholder='Search puppy name'/>
            <span className='icon'>{searchIcon()}</span> 
        </div>
    );
}

export default SearchBar;
