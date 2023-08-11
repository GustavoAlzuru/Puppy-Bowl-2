import React from 'react';
import './Puppy.css'
const Puppy = ({puppy}) => {
    return (
        <div className='puppy-wrapper'>
            <div className='pup-img'>
                <img src={puppy.imageUrl} alt={`photograph of puppy ${puppy.name}`}/>
            </div>
            <div className='puppy-card'>
                <header className='pup-name'>
                    <h2>{puppy.name}</h2>
                </header>
                <p className='pup-breed'>{puppy.breed}</p>
                <p className='status'>Status: {puppy?.status?.toUpperCase()}</p>
                <section className='sec-team'>
                    <h3>Team</h3>
                    <div className='info-team'>
                        <span>Name: {puppy?.team?.name}</span>
                        <span>Score: {puppy?.team?.score}</span>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Puppy;
