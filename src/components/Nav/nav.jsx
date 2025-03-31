import React, { useEffect } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { GoChecklist } from 'react-icons/go'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'




const Nav = () => {

  const [activeNav, setActiveNav] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setActiveNav(window.location.hash || '#')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (

    <nav className='p-1 p-sm-2'>

      <a href="#"  rel="noopener noreferrer" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#aboutUs"  rel="noopener noreferrer" onClick={() => setActiveNav('#aboutUs')} className={activeNav === '#aboutUs' ? 'active' : ''}><BiUser /></a>
      <a href="#skill"  rel="noopener noreferrer" onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}><FaLaptopCode /></a>
      <a href="#myprojects"  rel="noopener noreferrer" onClick={() => setActiveNav('#myprojects')} className={activeNav === '#myprojects' ? 'active' : ''}><GoChecklist /></a>
      <a href="#contact"  rel="noopener noreferrer" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>

    </nav>
  )
}

export default Nav