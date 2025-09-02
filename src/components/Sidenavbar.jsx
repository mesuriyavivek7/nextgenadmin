import React from 'react'
import { Link, useLocation } from 'react-router-dom';

//Importing icon
import { LayoutDashboard } from 'lucide-react';

const adminRoutes = [
    {
      label:'Dashboard',
      icon:LayoutDashboard,
      link:'/admin'
    },

]

function Sidenavbar({showSideBar}) {
  const location = useLocation()

  const isActive = (label) =>{
     if(location.pathname==='/admin' && label==='Dashboard') return true
     if(location.pathname.includes(label.toLowerCase())) return true

     return false

  }

  return (
    <div className={`w-64 bg-white border-r border-neutral-200 fixed top-0 ${showSideBar ? "left-0" : "-left-64 "} md:left-0  bottom-0 z-20`}>
       {/* Logo */}
       <div className='h-16 w-full flex justify-center gap-2 items-center'>
         <h2 className='text-2xl font-semibold text-black'>Nextgen</h2>
       </div>
       {/* Links */}
       <div className='flex flex-col p-6 gap-4'>
          {
            adminRoutes.map(({link, label, icon:Icon}, index) => (
              <Link key={index} to={link} className={`group flex p-2 items-center hover:bg-blue-100 gap-2 ${isActive(label) && "bg-blue-100"} rounded-md`}>
                <Icon className={`${isActive(label) && "text-blue-500"} group-hover:text-blue-500`} size={20}></Icon>
                <span className={`${isActive(label) ? "text-blue-500" : 'text-black'} group-hover:text-blue-500 font-medium`}>{label}</span>
              </Link>
            ))
          }
       </div>
    </div>
  )
}

export default Sidenavbar