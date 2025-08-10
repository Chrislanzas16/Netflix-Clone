import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search__icon from '../../assets/search_icon.svg'
import bell__icon from '../../assets/bell_icon.svg'
import profile__img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {

const navRef = useRef(null);

useEffect(()=> {
  const onScroll = ()=>{
    const el = navRef.current;
    if (!el) return;
    if (window.scrollY >= 80)el.classList.add('nav-dark');
    else el.classList.remove('nav-dark')
  };

  window.addEventListener('scroll', onScroll, {passive:true}); 
  onScroll();
    return () => window.removeEventListener('scroll',onScroll);
}, []);

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New and Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search__icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell__icon} alt="" className='icons' />
        <div className="navbar-profile">
            <img src={profile__img} alt="" className='profile' />
            <img src={caret_icon} alt="" />
            <div className="dropdown">
              <p>Sign Out of Netflix</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
