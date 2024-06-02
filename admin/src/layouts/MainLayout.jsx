import React from 'react'

const MainLayout = () => {
    return (
        <div>
            {/*vidu navbar */}
            <div className='min-h-screen'>
                <Outlet />
            </div>
            {/* {/*vidu navbar */} */}
        </div>
    )
}

export default MainLayout