import React, { useState } from 'react';
import { addIcon, closeIcon } from '../assets/Icons';
import './Form.css'
const Form = () => {
    const [open, setOpen] = useState(false)
    const handleForm = () => {
        setOpen(!open)
    }
    return (
        open ? 
        <div className='form'>
            <form className='form-container'>
                <div className='close-icon' onClick={handleForm}>{closeIcon()}</div>
                <h3>Create your Puppy</h3>
                <div className='info-form'>
                    <div>
                        <label htmlFor="name">
                            Name <input type="text" />
                        </label>
                        <label htmlFor="breed">
                            Breed <input type="text" />
                        </label>
                    </div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
        : 
        <div className='add' onClick={handleForm}>
            {addIcon()}
        </div>
    );
}

export default Form;
