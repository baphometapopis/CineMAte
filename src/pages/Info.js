import React, { useEffect, useState } from 'react'
import './Info.css'
import star from '../assets/images/star.png'
import { useLocation, useParams } from 'react-router-dom'
import backup from '../assets/images/backup_poster.jpg'

export const Info = () => {
const params=useParams();
const [m_data,setm_data]=useState([]);
const [genre,setgenre]=useState();

const imageurl=m_data.poster_path?`https://image.tmdb.org/t/p/original${m_data.poster_path}`:{backup};



useEffect(()=>{
  async function fetchMovies(){
    const response=await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=f9e8a861afcb56af4327236c2036a85f`);
    const json =await response.json()
    setm_data(json)
    setgenre(json.genres)
  }
  fetchMovies();
},[params.id])

   return (
    <div className='page_cnt'>
        <section className='info_cnt'>
        <img  className='info_image' src={imageurl} alt='infoimage'/>
        <div className='info_data'>
            <h1 className='m_title'> {m_data.title}</h1> 
            <p className='m_data'>{m_data.overview}</p>
                     {genre? <h4 > {genre.map((info)=>(<span key={info.id}className='m_genre'>{info.name}</span>))}  </h4>:""}
            
            
             <p className='m_review'><span ><img  className='m_star'src={star} alt='star'/>{m_data.popularity} popularity</span></p>
            <h3>Runtime :<span className='m_font'> {m_data.runtime}min</span></h3>
            <h3>Revenue :<span className='m_font'> {m_data.revenue}</span></h3>


            <h3>Vote Count :<span className='m_font'> {m_data.vote_count}</span></h3>
             <h3>Budget : <span className='m_font'>{m_data.budget}</span></h3>
            <h3>Released Date : <span className='m_font'> {m_data.release_date}</span> </h3>
            <h3>IMDB Code : <span className='m_font'> {m_data.imdb_id}</span></h3>

            </div>
        </section>




    </div>
  )
}
