import React from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import './Card.css'
import backup from '../assets/images/backup_poster.jpg'
export const Card = ({movie ,api}) => {
    const navigate =useNavigate();
const location=useLocation();
    
    const imageurl=movie.poster_path?`https://image.tmdb.org/t/p/original${movie.poster_path}`:backup;

    const handlecard=()=>{
       location.pathname==='/'?navigate(`movies/Info/${movie.id}`,{state:{movie}}):navigate(`${location.pathname}/movies/Info/${movie.id}`,{state:{movie}})
    
    }
 
   return (
    <div className='card_cnt1'>
        <div  onClick={handlecard} className='card_cnt2'>
            <img className='card_img' src={imageurl} alt='card imag'/>
            <h1 className='card_name'>{movie.original_title}</h1>
            <p className='card_info'>{movie.overview}</p>
        </div>
    </div>
)}
