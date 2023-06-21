import React from 'react'
import { Card } from '../component/Card';
import { useFetch } from '../hooks/useFetch'; 
import { useSearchParams } from 'react-router-dom';


export const Search = ({api}) => {
  const [searchparam]=useSearchParams();
  const queryTerm =searchparam.get('q');
  const {movies}= useFetch(api,queryTerm)


  return (
    <>
    <h1 style={{padding:'40px' }}>{movies.length===0?`No Result Found For "${queryTerm} "`:`Result for "${queryTerm}`}</h1>
<div className='card_cnt1'>
    {movies.map((movie)=>(<Card key={movie.id}  api={api} movie={movie} />))}
  </div>
  </>  )
}
