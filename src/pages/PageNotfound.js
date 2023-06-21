import React, { useEffect } from 'react'
import './notfound.css'

export const PageNotfound = () => {

  useEffect(()=>{
    document.title="page Not Found -CineMate"
  },[])

  return (
    <div className='found_cnt'>
        
        <div className='no_cnt'>
        <h1><span style={{color:'red'}}> ! </span>404</h1>
        <h1>ERROR NotFound</h1>
        </div>
        </div>
  )
}
