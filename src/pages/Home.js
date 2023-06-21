import React, { useEffect } from 'react'
import './home.css'
import { Card } from '../component/Card';
import { useFetch } from '../hooks/useFetch';

export const Home = ({api,title}) => {
const {movies}= useFetch(api)

useEffect(()=>{
  document.title=`${title}-Cinemate`
})
 
return (
  <div className='card_cnt1'>
    {movies.map((movie)=>(<Card key={movie.id}  api={api} movie={movie} />))}
  </div>
)}
