import React from 'react'
import { KEY_ACCESS_TOKEN, getItem } from '../utils/localStorage'
import { Navigate, Outlet } from 'react-router-dom'
import Books from './Book/Books';

function RequireUser() {
    const user = true;
  return (
     user ?   <Outlet /> : <Navigate to='/login' />
  )
}

export default RequireUser