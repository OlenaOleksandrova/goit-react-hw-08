import React from 'react'
import Navigation from '../Navigation/Navigation'
import AuthNav from '../AuthNav/AuthNav'
import { NavLink } from 'react-router-dom'
import s from './AppBar.module.css'
import UserMenu from '../UserMenu/UserMenu'

const AppBar = () => {
  

  return (
    <header className={s.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};

export default AppBar