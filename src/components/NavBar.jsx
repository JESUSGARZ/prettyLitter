import React from 'react';
import '../styles/navbar.css'

const NavBar = () => {
  const refresh = () => {
      window.location.reload();
  }
  
  return (
    <nav className='nav__container'>
        <img onClick={refresh} src="https://subir-imagen.com/images/2022/11/22/logo.png" alt="prettylitter logo" />
    </nav>
  )
}

export default NavBar