import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";

const Navbar = () => {
    const { userInfo, handleSignOut } = useContext(AuthContext)
    // console.log(userInfo)

    const handleLogOut = () => {
        handleSignOut()
            .then(() => console.log('user Logged Out'))
            .catch(error => console.log(error.message))
    }
    const navLinks = <>
        <li> <Link to='/'> Home </Link> </li>
        <li> <Link to='/updateProfile'> Update Profile </Link> </li>
        <li> <Link to='/userProfile'> User Profile </Link> </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    userInfo ?
                        <div className="flex space-x-5"> <img className="h-14 rounded-full" src={userInfo.photoURL} /> <button onClick={handleLogOut} className="btn btn-primary"> Log Out</button>  </div>
                        : <div> <button className="btn"> <Link to='/signin'>Login</Link> </button>
                            <button className="btn"> <Link to='/signup'>SignUp</Link> </button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;