import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { back } from '../assets/Icons';
import Puppy from '../components/Puppy';
import { getPuppy } from '../api';

const Detail = () => {
    const {id} = useParams()
    const [puppy, setPuppy] = useState({})
    useEffect(() => {
        const data = async () => {
            try{
                const {data} = await getPuppy(id)
                setPuppy(data?.player)
            }catch(err){
                console.log('err', err)
            }
        }
        data()
    }, []);
    return (
        <div>
           <Link to={'/'}>{back()}</Link>
           <Puppy puppy={puppy}/>
        </div>
    );
}

export default Detail;
