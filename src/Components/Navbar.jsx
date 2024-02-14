import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(false)
    const barIcon =() =>{
        setShow(true)
    }
    const crossIcon =() =>{
        setShow(false)
    }

    const goTop = () =>{
        window.scrollTo({top:0,behavior:"smooth"})
    }
  return (
    <>
        <nav>
            <div className='logo'>
                <h1>Sufyan Shaikh</h1>
            </div>
            <div id='icons' className={show? "showData":"hideData"}>
                <i onClick={barIcon} id='barIcon' class="fa-solid fa-bars"></i> 
                <i onClick={crossIcon} id='crossIcon' class="fa-solid fa-xmark"></i> 
                
                <ul className='nav-items'>
                <NavLink className="navItem" onClick={()=>{setShow(false)}} to='/'><li><p onClick={goTop} >Home</p></li></NavLink>
                <NavLink className="navItem" onClick={()=>{setShow(false)}} to='/about'><li><p onClick={goTop}>About Us</p></li></NavLink>
                <NavLink className="navItem" onClick={()=>{setShow(false)}} to='/skill'><li><p onClick={goTop}>Skill's</p></li></NavLink>
                <NavLink className="navItem" onClick={()=>{setShow(false)}} to='/project'><li><p onClick={goTop}>My Work</p></li></NavLink>
                <NavLink className="navItem" onClick={()=>{setShow(false)}} to='/youtube'><li><p onClick={goTop}>My YouTube Channel</p></li></NavLink>
                <NavLink className="navItem" onClick={()=>{setShow(false)}} to='contact'><li><p onClick={goTop}>Contact Us</p></li></NavLink>


                 
                 
                </ul>
            
            </div>
             

        </nav>
    </>
  )
}

export default Navbar