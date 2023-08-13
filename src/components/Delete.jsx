import React from 'react';
import './Delete.css'
import { deletePuppy } from '../api';
const Delete = ({pupId}) => {
    const handleDelete = async () => {
        const remove = await deletePuppy(pupId)
        console.log(remove)
    }
    return (
        <button 
        onClick={handleDelete}
        className='delete-btn'>Delete</button>
    );
}

export default Delete;
