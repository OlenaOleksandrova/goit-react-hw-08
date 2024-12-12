import React from 'react'
import Navigation from '../Navigation/Navigation'
import AuthNav from '../AuthNav/AuthNav'
import { NavLink } from 'react-router-dom'
import s from './AppBar.module.css'
import UserMenu from '../UserMenu/UserMenu'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import {  useSelector } from 'react-redux'

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  

  return (
   <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

    </header>
  );
};

export default AppBar