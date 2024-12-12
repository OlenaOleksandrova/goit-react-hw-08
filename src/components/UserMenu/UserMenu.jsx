import React from 'react'
import s from './UserMenu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';


const UserMenu = () => {

const isLoggedIn = useSelector(selectIsLoggedIn)
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.user); 

  return (
    <div className={s.userMenu}>
      {/* <p className={s.userName}>Welcome, {user.name}</p> */}
      {isLoggedIn && <button type="button" className={s.logoutButton} onClick={() => dispatch(logout())}>
      Logout
    </button> }
    </div>
  )
}

export default UserMenu