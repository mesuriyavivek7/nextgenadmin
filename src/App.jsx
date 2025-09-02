import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './utils/ProtectedRoute';
import Loader from './components/Loader';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

import './App.css'
import './index.css'

function App() {

  const {auth} = useAuth();

  if(auth.loading){
    return (
      <Loader></Loader>
    )
  }

  return (
    <Router>
    <Routes>

      <Route path='/login' element={<Login></Login>}></Route>

      {/* Admin Routes */}
      <Route path='/admin' element={<ProtectedRoute><AdminLayout></AdminLayout></ProtectedRoute>}
      >
        <Route index element={<Dashboard></Dashboard>}></Route>
      </Route>
 

     <Route path="*" element={<Navigate to={'/admin'} />} />

    </Routes>
  </Router>
  )
}

export default App
