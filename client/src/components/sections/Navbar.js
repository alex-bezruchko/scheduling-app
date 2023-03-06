import React from 'react';
import { useState } from 'react';

import { Link } from "react-router-dom";


const Navbar = () => {
    const [isDropDownOpen, setDropDown] = useState(false);
    const [isAdminDropDownOpen, setAdminDropDown] = useState(false);

    const toggleDropdown = () => {
        setDropDown(!isDropDownOpen);
        setAdminDropDown(false);
    };

    const toggleAdminDropdown = () => {
        setAdminDropDown(!isAdminDropDownOpen);
        setDropDown(false);
    };
    return (
        <>

            <nav className="bg-gray-800">
                <div className="container">
                    <div className="flex justify-between h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Scheduler</Link>
                        </div>
                        <div className="flex items-center">
                            <div className="md:block">
                                <div className="relative inline-block text-left">
                                    <button type="button" className="flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" id="options-menu" aria-expanded="true" aria-haspopup="true" onClick={toggleDropdown}>
                                        My Account
                                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0L10 13.414l-2.293 2.293a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    {isDropDownOpen && (
                                        <div className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <div className="py-1 list-none" role="none">
                                                <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                    <Link to="/account" className="">Account</Link>
                                                </li>

                                                <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                    <Link to="/Appointments" className=""> My Appointments</Link>
                                                </li>

                                                <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                    <Link to="/Appointments" className=""> My Settings</Link>
                                                </li>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="relative inline-block text-left">
                                    <button type="button" className="flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" id="options-menu" aria-expanded="true" aria-haspopup="true" onClick={toggleAdminDropdown}>
                                        Admin
                                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0L10 13.414l-2.293 2.293a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    {isAdminDropDownOpen && (
                                        <div className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <div className="py-1 list-none" role="none">
                                                <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                    <Link to="/users" className="">Users</Link>
                                                </li>
                                                <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                    <Link to="/locations" className="">Locations</Link>
                                                </li>
                                                <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                    <Link to="/appointments" className="">Appointments</Link>
                                                </li>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </nav>

        </>
    )
}

export default Navbar;