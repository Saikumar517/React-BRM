import React from 'react'
import { FaHome, FaFile, FaSignOutAlt } from "react-icons/fa"
import { MdPeople } from "react-icons/md"
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className='d-flex justify-content-between align-content-center align-items-center bg-dark p-3' >
      <div>
        <Link to='/'> <FaHome className="icons" size={'2em'} /> </Link>
        <Link to='/BenchList'><MdPeople className="icons" size={'2em'} /> </Link>
        <Link to='' ><FaFile className="icons" size={'1.4em'} /></Link>
      </div>
      <div>
        <FaSignOutAlt className="icons" size={'2em'} />
      </div>
    </div>
  )
}

export default Header;