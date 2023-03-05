import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {

        event.preventDefault();

        const data = {
            email: email,
            password: password,
        };
        // Store jwt in cookies (install cookies)
        axios
            .post('http://localhost:3000/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
            .then((response) => {
                console.log(response)
                // Handle successful login
            })
            .catch((error) => {
                // Handle login error
            });
    };

    return (
        <div className="max-w-md mx-auto my-10">
            <div className="bg-white shadow-md py-10 border border-gray-200 rounded-lg flex justify-center dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6 w-full px-9 py-9" onSubmit={login}>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in</h3>

                    <div className="flex flex-col">
                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-username">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" value="" required="" />
                            </div>
                            <div className="text-sm ml-3">
                                <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                <Link to="/password-reset" className="navbar-link">Reset password</Link>
                            </div>
                        </div>

                    </div>
                    <button type="submit" className="w-full text-white button-sec focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to="/create" className="navbar-link">Create
                            account</Link>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Login;