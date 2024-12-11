import React from 'react'
import s from './UserMenu.module.css'
import { useDispatch, useSelector } from 'react-redux';

const UserMenu = () => {

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.user); 

  return (
    <div className={s.userMenu}>
      {/* <p className={s.userName}>Welcome, {user.name}</p> */}
      <button type="button"  className={s.logoutButton}>
        Logout
      </button>
    </div>
  )
}

export default UserMenu