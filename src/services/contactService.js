import api from '../utils/api.js'


export const getAllContacts = async () =>{
     try{
        const response = await api.get('/contact')
        return response.data.data
     }catch(err){
        console.log(err)
        const errMessage = err?.response?.data?.message
        throw new Error(errMessage)
     }
}