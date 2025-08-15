import React from 'react'
import { Userslice } from '../slice/User'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function Routing() {
    const user=useSelector(state=>state.userinfo.user)
  if(!user){
    return <Navigate to='/'/>
    
  }
  return <Outlet />
}

export default Routing