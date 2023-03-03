import { Outlet } from "react-router-dom";
import Navbar from './../components/sections/Navbar.js'


const Layout = () => {
    return (
        <div className="container-full">
            <Navbar />

            <div className="container">
                <Outlet />
            </div>
        </div>
    )
};

export default Layout;