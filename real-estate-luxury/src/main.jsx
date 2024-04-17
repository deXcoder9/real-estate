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
import UserProfile from './Components/User pf/UserProfile.jsx';
import PrivateRoute from './Components/Private Routee/PrivateRoute.jsx';
import Details from './Components/Home/Details.jsx';
import Cart from './Components/Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('resorts.json')
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute><UpdatePfp></UpdatePfp> </PrivateRoute>
      },
      {
        path: '/userProfile',
        element: <PrivateRoute> <UserProfile></UserProfile> </PrivateRoute>
      },
      {
        path: '/details/:id',
        loader: () => fetch('resorts.json'),
        element: <PrivateRoute><Details></Details></PrivateRoute>
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
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
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
