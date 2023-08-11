import React, { useState } from 'react';
import { addIcon } from '../assets/Icons';
import './Form.css'
const Form = () => {
    const [open, setOpen] = useState(false)
    const handleForm = () => {
        setOpen(!open)
    }
    return (
        open ? 
        <div className='form'>

        </div>
        : 
        <div className='add' onClick={handleForm}>
            {addIcon()}
        </div>
    );
}

export default Form;
