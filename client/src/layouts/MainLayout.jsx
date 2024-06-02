import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        {/* navbar */}
        <div>
            <Outlet/>
        </div>
        {/* footer */}
    </div>
  )
}

export default MainLayout