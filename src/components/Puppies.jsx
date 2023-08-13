import React from 'react';
import './Puppies.css'
import { Link } from 'react-router-dom';
import Delete from './Delete';
const ListOfPuppies = ({ puppies }) => {
    return (
        <>
            {puppies.map((puppies) => (
                <li className='card-puppies' key={puppies.id}>
                    <section className='puppy-img'>
                        <img src={puppies.imageUrl} alt="photos of puppies" />
                    </section>
                    <section className='puppies-info'>
                        <h3 className='puppy-name'>{puppies.name}</h3>
                        <Link to={`detail/${puppies.id}`}>
                            <button className='puppy-btn'>Detail</button>
                        </Link>
                        <Delete pupId={puppies.id}/>
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
const Puppies = ({ puppies }) => {
    const hasPuppies = puppies?.length > 0
    return (
        hasPuppies
            ? <ListOfPuppies puppies={puppies} />
            : <NoPuppiesResult />
    );
}

export default Puppies;

