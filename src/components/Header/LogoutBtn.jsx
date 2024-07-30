import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-block gap-3 px-6 py-2 mr-4 duration-200 rounded-full text-black  hover:bg-black hover:text-white transform hover:scale-105'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn