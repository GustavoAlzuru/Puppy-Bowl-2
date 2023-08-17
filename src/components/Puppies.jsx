import React from 'react';
import './Puppies.css'
import { Link } from 'react-router-dom';
import Delete from './Delete';
const ListOfPuppies = ({ allPuppies, newPuppy, setFilteredPuppies, setNewPuppy, setAllPuppies, listOfPuppies }) => {
    return (
        <>
            {allPuppies.map((puppies) => (
                <li className='card-puppies' key={puppies?.id}>
                    <section className='puppy-img'>
                        <img src={puppies?.imageUrl} alt="photos of puppies" />
                    </section>
                    <section className='puppies-info'>
                        <h3 className='puppy-name'>{puppies?.name}</h3>
                        <Link to={`detail/${puppies?.id}`}>
                            <button className='puppy-btn'>Detail</button>
                        </Link>
                        {newPuppy?.some(puppy => puppy.id === puppies.id) && (
                            <Delete pupId={puppies?.id} allPuppies={allPuppies} setFilteredPuppies={setFilteredPuppies} setNewPuppy={setNewPuppy} newPuppy={newPuppy} setAllPuppies={setAllPuppies} listOfPuppies={listOfPuppies}/>
                        )}
                    </section>
                </li>
            ))}
        </>
    );
}
const NoPuppiesResult = () => {
    return (
        <p>No puppies found</p>
    )
}
const Puppies = ({ allPuppies, setFilteredPuppies, newPuppy, setNewPuppy, setAllPuppies, listOfPuppies }) => {
    const hasPuppies = allPuppies?.length > 0
    return (
        hasPuppies
            ? <ListOfPuppies allPuppies={allPuppies} setFilteredPuppies={setFilteredPuppies} newPuppy={newPuppy} setNewPuppy={setNewPuppy} setAllPuppies={setAllPuppies} listOfPuppies={listOfPuppies}/>
            : <NoPuppiesResult />
    );
}

export default Puppies;

