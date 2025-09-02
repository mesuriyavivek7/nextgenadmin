import { useEffect, useState, } from "react";
import { toast } from "react-toastify";

import { formatDate } from "../helper";

//Importing images

import PHONE from '../assets/call.png'
import CALENDAR from '../assets/calendar.png'
import ACMANAGER from '../assets/acmanager.png'
import MAIL from '../assets/mail.png'

import { getAllContacts } from "../services/contactService";


export const useContactTable = () => {
    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(false)

    const handleGetAllContacts = async ()=>{
        setLoading(true)
        try{
          const data = await getAllContacts()
          setRows(data)
        }catch(err){
          console.log(err)
          toast.error(err?.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
      handleGetAllContacts()
    },[])


    const columns = [
       {
        headerName: 'Full Name',
        field: 'full_name',
        minWidth: 220,
        cellRenderer: (params) => (
          <div className="flex items-center w-full h-full">
             <div className="flex items-center gap-3">
               <img src={ACMANAGER} alt="vendor" className="w-9 h-9 rounded-full" />
               <span>{params.value}</span>
             </div>
          </div>
        ),
       },
       {
        headerName: 'Mobile No',
        field: 'contact_no',
        minWidth: 200,
        cellRenderer: (params) => (
          <div className="flex w-full h-full items-center">
            <div className="flex items-center gap-2">
            <img src={PHONE} alt="phone" className="w-6 h-6 rounded-full" />
            <span>{params.value}</span>
            </div>
          </div>
        ),
       },
       {
        headerName: 'Email',
        field: 'email',
        minWidth: 280,
        cellRenderer: (params) => (
          <div className="flex w-full h-full items-center">
            <div className="flex items-center gap-2">
            <img src={MAIL} alt="email" className="w-6 h-6" />
            <span>{params.value}</span>
            </div>
          </div>
        ),
       },
       {
        headerName: 'Company',
        field: 'company',
        minWidth: 220,
        flex: 1,
        cellRenderer: (params) => (
         <div className="flex items-center w-full h-full">
             <div className="flex items-center gap-2">
               <span>{params.value}</span>
             </div>
            
         </div>
        ),
       },
       {
        headerName: 'Created At',
        field:'createdAt',
        minWidth: 200,
        flex: 1,
        cellRenderer: (params) => (
            <div className="flex items-center w-full h-full">
              <div className="flex items-center gap-2">
                <img src={CALENDAR} alt="calendar" className="w-7 h-7" />
                <span className="font-medium">{formatDate(params.value)}</span>
              </div>
            </div>
        ),
       },

    ]

    return {rows, columns, loading, refetch : handleGetAllContacts}
}