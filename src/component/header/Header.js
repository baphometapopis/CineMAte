import React, { useCallback, useEffect, useState } from 'react'
import "./Header.css"
import logo from '../../assets/images/logo.png'
import menulogo from '../../assets/images/Menu.png'
import { Navbar } from './Navbar'
import { useNavigate } from 'react-router-dom'


export const Header = () => {
 const navigate =useNavigate();

const [menu,setMenu]=useState(false) 
const [size,setSize]=useState(window.innerWidth)



const detectSize=useCallback(()=>{
  setSize(window.innerWidth)
  if (size>667){
    setMenu(false)
  }

},[size])
  useEffect(()=>{
    window.addEventListener('resize',detectSize)

    return()=>{ window.removeEventListener('resize',detectSize)}
  },[size,detectSize])

  const handleMenu=()=>{
    setMenu(!menu)
  }

  const handlesubmit=(event)=>{
    event.preventDefault();
    const queryTerm=event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`)
  }


return (
<div>
<header>
    <div className='logo'>
      <img  onClick={handleMenu}  className='menu' src={menulogo} alt='menu'/>
    
    <img  style={{cursor:'pointer'}} onClick={()=>{navigate('/')}} src={logo} alt='logo'/>
    <h2   style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}>CineMate</h2>
    </div>
    

    <nav >
      <Navbar/>     
    </nav>
    <form onSubmit={handlesubmit}>
    <input   className='s_input' type='text'  name='search' placeholder='Search....' autoComplete='off'/>
    </form>
</header>
{menu && < div className='MenuClicked'>
<Navbar/>
</div>
  
}
</div>
)}
