import React, { useState } from 'react';
import { addIcon, closeIcon } from '../assets/Icons';
import './Form.css'
import { sendPuppy } from '../api';
const Form = () => {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({})
    const handleForm = () => {
        setOpen(!open)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await sendPuppy(formData)
        console.log(data)
        handleForm()
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => ({...prevData, [name]: value}))
    }
    return (
        open ?
            <div className='form'>
                <form className='form-container' onSubmit={handleSubmit}>
                    <div className='close-icon' onClick={handleForm}>{closeIcon()}</div>
                    <h3>Create your Puppy</h3>
                    <div className='info-form'>
                        <div>
                            <label htmlFor="name">
                                Name <input type="text" name='name' onChange={handleChange}/>
                            </label>
                            <label htmlFor="breed">
                                Breed <input type="text" name='breed' onChange={handleChange}/>
                            </label>
                        </div>
                        <button type='submit'>Submit</button>
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
