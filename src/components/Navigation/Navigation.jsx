import React from 'react'
import s from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
// import AuthNav from '../AuthNav/AuthNav'


const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={s.link}>
        Home
      </NavLink>
    </nav>
  );
};


export default Navigation