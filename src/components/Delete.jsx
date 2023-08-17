import React from 'react';
import './Delete.css'
import { deletePuppy } from '../api';
const Delete = ({pupId, setFilteredPuppies, allPuppies, setNewPuppy, newPuppy, setAllPuppies, listOfPuppies}) => {
    const handleDelete = async () => {
        const remove = await deletePuppy(pupId)
        const deleted = listOfPuppies.filter(puppy => puppy.id !== pupId)
        const dataRemoved = newPuppy.filter(puppy => puppy.id !== pupId)
        setNewPuppy(dataRemoved)
        if(!newPuppy.length > 0){
            localStorage.removeItem('newPuppies')
        }else{
            
            localStorage.setItem('newPuppies', JSON.stringify(dataRemoved))
        }
        setFilteredPuppies(deleted)
        setAllPuppies(deleted)
    }
    return (
        <button 
        onClick={handleDelete}
        className='delete-btn'>Delete</button>
    );
}

export default Delete;
