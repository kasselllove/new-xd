import './index.css'
import './styles/css/style.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header.jsx'
import Register from './pages/reg'
import Home from "./pages/home"
import Authenticate from './pages/reg/authenticate'
import Authorize from './pages/reg/authorize'
import PasswordRecovery from './pages/reg/password-recovery'
import RegisterPage from './pages/reg/register'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../src/components/firebase/firebase'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/register/register",
    element: <RegisterPage/>
  },
  {
    path: "/authenticate",
    element: <Authenticate/>
  },
  {
    path: "/authorize",
    element: <Authorize/>
  },
  {
    path: "/password-recovery",
    element: <PasswordRecovery/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
