import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Account</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Appointment</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Settings</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;