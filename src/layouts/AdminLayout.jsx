import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import { Outlet } from 'react-router'

function AdminLayout() {
  return (
    <div className="admin-layout">
        <AdminSideBar/>
        <div className="dashboard">
          <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout