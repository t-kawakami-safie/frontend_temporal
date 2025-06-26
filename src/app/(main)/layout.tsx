import React from 'react'
import SideMenu from '../components/SideMenu/SideMenu';
import TopMenu from '../components/TopMenu/TopMenu';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
        <div className='flex h-screen'>
                <SideMenu/>
            <div>
                <TopMenu/>
                <main className='bg-slate-100 flex-1 overflow-auto h-screen'>{children}</main>
            </div>
        </div>
    </div>
  )
}

export default MainLayout