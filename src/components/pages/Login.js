const Login = () => {
    return (
        <div className="max-w-md mx-auto my-10">
            <div className="bg-white shadow-md py-10 border border-gray-200 rounded-lg flex justify-center dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <div className="text-sm ml-3">
                                <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>

                    </div>
                    <a href="#" className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Forgot
                        Password?</a>
                    <button type="submit" className="w-full text-white button-sec focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create
                            account</a>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Login;