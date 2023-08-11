import React, { useState } from 'react';
import { searchIcon } from '../assets/Icons';
import './SearchBar.css'
const SearchBar = ({getValue}) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        const newValue = e.target.value
        setValue(newValue)
        getValue(newValue)
    }
    return (
        <div className='wrapper'>
            <input type="text" 
            onChange={(e) => handleChange(e)} 
            className='search' 
            maxLength={20} 
            placeholder='Search puppy name'
            value={value}
            />
            <span className='icon'>{searchIcon()}</span> 
        </div>
    );
}

export default SearchBar;
