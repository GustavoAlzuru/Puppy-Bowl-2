import React from 'react';
import './Puppies.css'
const Puppies = ({puppies}) => {
    return (
        <div className='card-puppies'>
            <section className='puppy-img'>
                <img src={puppies.imageUrl} alt="photos of puppies" />
            </section>
            <section className='puppies-info'>
                <h3 className='puppy-name'>{puppies.name}</h3>
                <button className='puppy-btn'>Details</button>
            </section>
        </div>
    );
}

export default Puppies;
