import React from 'react';
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/account" className="navbar-link">Account</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/appointments" className="navbar-link">Appointment</Link>
                        </li>
                        {/* <li className="navbar-item">
                        <Link href="#" className="navbar-link">Settings</Link>
                    </li> */}
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navbar;