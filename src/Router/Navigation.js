import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Info } from '../pages/Info'
import { PageNotfound } from '../pages/PageNotfound'
import { Search } from '../pages/Search'

export const Navigation = () => {
  return (
    <Routes>
        <Route path="" element={<Home api="movie/now_playing" title='Home'/>  }/> 
        <Route path="movies/Popular" element={<Home api="movie/popular" title='Popular'/> }/>
        <Route path="movies/Top-Rated" element={<Home api="movie/top_rated" title='Top-Rated'/> }/>
        <Route path="movies/Upcoming" element={<Home api="movie/upcoming" title='Upcoming'/> }/>
         <Route path="movies/Info/:id" element={<Info/> }/>
         <Route path="movies/Popular/movies/Info/:id" element={<Info/> }/>
         <Route path="movies/Top-Rated/movies/Info/:id" element={<Info/> }/>
         <Route path="movies/Upcoming/movies/Info/:id" element={<Info/> }/>
         <Route path="search/movies/Info/:id" element={<Info/> }/>




         <Route path="*" element={<PageNotfound/> }/>
        <Route path="search" element={<Search  api="search/movie"/> }/>



        
    </Routes>
    )
}
