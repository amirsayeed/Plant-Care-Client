import React from 'react';
import { Link, Outlet, useLocation } from 'react-router';

const DashboardLayout = () => {
    const location = useLocation();

    const isDashboardRoot = location.pathname === '/dashboard';

    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
            {/* Page content here */}
            <div className="navbar bg-base-300 w-full lg:hidden">
                <div className="flex-none">
                    <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                    </label>
                </div>
                <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
            
            </div>
            {/* Page content here */}
            {/* Main content */}
            {isDashboardRoot && (
            <div className="p-4">
                <h2 className="text-2xl font-bold text-green-800">Welcome to Your Plant Dashboard</h2>
                <p className="text-gray-600 mt-2">
                Use the sidebar to manage your plants, track care routines, and view your personalized tips.
                </p>
            </div>
            )}

            <Outlet/>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-2">
            {/* Sidebar content here */}
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/dashboard/myPlants'>My Plants</Link></li>
            <li><Link to='/dashboard/addPlant'>Add a plant</Link></li>
            <li><Link to='/' className='btn btn-primary w-36 text-sm'>Back to Home</Link></li>
            </ul>
        </div>
        </div>
    );
};

export default DashboardLayout;