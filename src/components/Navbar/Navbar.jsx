import React, {use} from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import navLogo from '../../assets/logo.png'

const Navbar = () => {
    const {user,logOut} = use(AuthContext);

    const handleLogOut = () =>{
        logOut().then(()=>{
            toast.success('Successfully logged out');
        })
        .catch(error=>{
            toast.error(error.message);
        })
    }

    const links = <>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/plants'>All Plants</NavLink></li>
                  </>
    return (
        <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm lg:px-3">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost p-2 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-medium">
                {links}
                <div className='flex md:hidden'>
                    <label className="toggle text-base-content">
                    <input type="checkbox" value="dark" className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                    </label>
                </div>
            </ul>
            
            </div>
            <div className='flex gap-1 items-center'>
                <img className='hidden md:flex w-12 h-10 object-cover' src={navLogo} alt="" />
                <a className="text-lg md:text-2xl font-bold">Plant Care</a>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg font-medium">
                {links}
            </ul>
        </div>
        <div className="navbar-end gap-2">
            <div className='hidden md:flex'>
                <label className="toggle text-base-content">
                <input type="checkbox" value="dark" className="theme-controller" />

                <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
            </div>
             {user ? 
                 (<div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        {user.photoURL ? (
                            <img src={user.photoURL} alt={user.displayName} />
                        ) : (
                            <FaUserCircle size={40} className="text-gray-400" />
                        )}
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                    >
                        <li className="cursor-default select-none font-semibold px-4 py-2">
                        {user.displayName}
                        </li>
                        <li>
                        <NavLink to="/dashboard" className="justify-between" tabIndex={-1}>
                            My Dashboard
                        </NavLink>
                        </li>
                        <li>
                        <button
                            onClick={handleLogOut}
                            className="w-full text-left"
                            tabIndex={-1}
                        >
                            Logout
                        </button>
                        </li>
                    </ul>
                    </div>
                ) :
                (<div className='flex gap-2'>
                    <Link to='/auth/login' className="btn btn-primary p-2 text-sm rounded-md">Login</Link>
                    <Link to='/auth/register' className="btn btn-primary p-2 text-sm rounded-md">Register</Link>
                </div>)}
        </div>
        </div>
    );
};

export default Navbar;