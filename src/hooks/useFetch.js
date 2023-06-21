import  { useEffect, useState } from 'react'


export const useFetch = (apipath,queryTerm='') => {
    const [movies,setMovies]=useState([]);
    const url=`https://api.themoviedb.org/3/${apipath}?api_key=f9e8a861afcb56af4327236c2036a85f&query=${queryTerm}`;

    useEffect(()=>{
        async function fetchMovies(){
          const response=await fetch(url);
          const json =await response.json()
          setMovies(json.results)
        }
        fetchMovies();
      },[url])
    
    
    
  
    return {movies}
   
}
