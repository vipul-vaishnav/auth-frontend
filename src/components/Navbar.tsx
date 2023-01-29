import React from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid"

const NAV_DATA = [
  { label: "Home", route: "/" },
  { label: "Dashboard", route: "/dashboard" },
  { label: "Login", route: "/login" },
  { label: "Register", route: "/register" },
]

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-8 py-5 bg-primary text-white">
      <h1 className='uppercase font-bold text-xl'>Auth</h1>
      <ul className="flex items-center justify-center gap-4">
        {NAV_DATA.map((item) => {
          return <li key={uuidv4()}>
            <Link to={item.route} className="hover:underline">
              {item.label}
            </Link>
          </li>
        })}
      </ul>
    </header>
  )
}

export default Navbar