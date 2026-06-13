import React from 'react'
import { Link } from 'react-router'

function AdminSideBar() {
  return (
    <div className='admin-side-bar'>
        <h2>admin panel</h2>

        <div>
            <Link to={"/admin/add-product"}><p>add-product</p></Link>
            <p>orders</p>
            <Link to={"/"}><p>switch to client view</p></Link>
        </div>
    </div>
  )
}

export default AdminSideBar