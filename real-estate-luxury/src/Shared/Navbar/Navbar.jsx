import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import 'animate.css';

const Navbar = () => {
    const { userInfo, handleSignOut } = useContext(AuthContext)
    // console.log(userInfo)

    const handleLogOut = () => {
        handleSignOut()
            .then(() => alert('user Logged Out'))
            .catch(error => console.log(error.message))
    }
    const navLinks = <>
        <li> <NavLink to='/'> Home </NavLink> </li>
        <li> <NavLink to='/updateProfile'> Update Profile </NavLink> </li>
        <li> <NavLink to='/userProfile'> User Profile </NavLink> </li>
        <li> <NavLink to='/cart'> Cart </NavLink> </li>
    </>
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="navbar bg-base-100 animate__animated  animate__backInRight " >
            < div className="navbar-start" >
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content -mt-24  ml-14  p-2 shadow bg-base-100 rounded-box w-52  z-20 "  >
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Oni-giri</a>
            </div >
            <div className="navbar-center hidden lg:flex z-20">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    userInfo ?
                        <div className="flex space-x-5"> <img title={userInfo.displayName} className="h-14 rounded-full" src={userInfo.photoURL} /> <button onClick={handleLogOut} className="btn btn-primary"> Log Out</button>  </div>
                        : <div> <button className="btn"> <Link to='/signin'>Login</Link> </button>
                        </div>
                }
            </div>
        </div >
    );
};

export default Navbar;