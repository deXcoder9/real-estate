import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Shared/ErrorPage.jsx';
import SignIN from './Components/Authentication/SignIN.jsx';
import SignUP from './Components/Authentication/SignUP.jsx';
import AuthProvider from './Auth Provider/AuthProvider.jsx';
import UpdatePfp from './Components/Update Profile/UpdatePfp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signin',
        element: <SignIN></SignIN>
      },
      {
        path: '/signup',
        element: <SignUP></SignUP>
      },
      {
        path: '/updateProfile',
        element: <UpdatePfp></UpdatePfp>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
