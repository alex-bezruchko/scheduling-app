const CreateAccount = () => {
    return (
        <div className="max-w-md mx-auto my-10">
            <div className="bg-white shadow-md py-10 border border-gray-200 rounded-lg flex justify-center dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6 w-full px-9" action="#">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create Account</h3>

                    <div className="flex flex-col">
                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-username">
                                    Username
                                </label>
                                <input placeholder="schedulemaniac" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"></input>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Password
                                </label>
                                <input placeholder="" type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"></input>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-name">
                                    First Name
                                </label>
                                <input placeholder="Benjamin" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"></input>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input placeholder="Cisco" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"></input>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-street-1">
                                    Street Address
                                </label>
                                <input placeholder="123 Kardassia St." type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"></input>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-street-2">
                                    Apt., Suite, etc.
                                </label>
                                <input placeholder="" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"></input>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-street-2">
                                    City
                                </label>
                                <input placeholder="Bajor" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"></input>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-street-2">
                                    Zip Code
                                </label>
                                <input placeholder="42323" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"></input>
                            </div>
                        </div>
                        <div className="w-full">
                            <button type="submit" className="w-full text-white button-sec focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create Account</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )

}

export default CreateAccount;