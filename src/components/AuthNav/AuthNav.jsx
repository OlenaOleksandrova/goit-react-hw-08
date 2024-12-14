import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './AuthNav.module.css'

const AuthNav = () => {
    return (
        <>
            <NavLink to="/register" className={s.linkheder}> Register </NavLink>
            <NavLink to="/login" className={s.linkheder}> Login </NavLink>
        </>
  )
}

export default AuthNav