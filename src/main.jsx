import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './routs/router'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './context/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router ={router}></RouterProvider>
   <ToastContainer position="top-center" autoClose={3000} />
</AuthProvider>
  </StrictMode>,
)
