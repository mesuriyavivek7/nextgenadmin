import React from 'react'

//import icon
import { LogOut, Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Menu } from 'lucide-react';
import { toast } from 'react-toastify';
import { logout } from '../services/authServices';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header({setShowSideBar}) {
  const navigate = useNavigate()
  const {setAuth} = useAuth()

  const handleLogout = async () =>{
    try{
      const data = await logout()
      setAuth({
        token:null,
        user:null,
        loading:false
      })
      navigate('/login')
    }catch(err){
      console.log(err)
      toast.error(err?.message)
    }
  }

  return (
    <div className='h-16 p-2 flex justify-between items-center px-4 md:px-8 fixed top-0 right-0 left-0 md:left-64 bg-white z-10 border-b border-neutral-200'>
       <div className='flex items-center gap-4'>
         <Menu className='md:hidden block' onClick={()=>setShowSideBar((prev)=> !prev)}></Menu>
         <div className='bg-[#F9FAFB] border w-52 md:w-96 border-neutral-200 px-2 rounded-md flex items-center gap-2'>
           <Search size={16} className='text-gray-500'></Search>
           <input type='text' className='outline-none h-8 text-sm' placeholder='Search for anything...'></input>
         </div>
       </div>
       <div className='flex items-center gap-4'>
         <LogOut onClick={handleLogout} size={24} className='text-red-500 cursor-pointer'></LogOut>
         <Bell size={24} className='text-gray-500'></Bell>
       </div>
    </div>
  )
}

export default Header