import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const CreateAccount = () => {

    const navigate = useNavigate();

    const [registerError, setRegisterError] = useState(false);

    const schema = yup.object().shape({
        username: yup.string().min(5).max(15).required('Username is required'),
        password: yup.string().min(8).max(15).required('Password is required'),
        email: yup.string().email().required('Email is required'),
        first_name: yup.string().required('First name is required'),
        last_name: yup.string().required('Last name is required'),
        street_address: yup.string().required('Street address is required'),
        street_address_2: yup.string(),
        city: yup.string().required('City is required'),
        st: yup.string().min(2).max(2).required('State is required'),
        zip_code: yup.string().matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Must be betwee 5 and 9 digits'),
    })



    const onSubmit = async (form) => {
        const isFormValid = await schema.validate(form).then((r) => submitUser(form))
    }

    const submitUser = (form) => {

        const data = {
            username: form.username,
            password: form.password,
            email: form.email,
            first_name: form.first_name,
            last_name: form.last_name,
            street_address: form.street_address,
            street_address_2: form.street_address_2,
            city: form.city,
            state: form.st,
            zip_code: form.zip_code,
            user_type_id: 1
        };

        axios
            .post('http://localhost:3000/register', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                withCredentials: false,
            })
            .then((response) => {
                if (response) {
                    navigate('/login')
                    setRegisterError(false)
                } else {
                    setRegisterError(true)
                }
            })
            .catch((error) => {
                // Handle login error
            });

    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    return (
        <div className="max-w-md mx-auto my-10">
            <div className="bg-white shadow-md py-10 border border-gray-200 rounded-lg flex justify-center dark:bg-gray-800 dark:border-gray-700">
                {registerError ?
                    <p className="text-red-500">Unable to register account.</p>
                    : <></>
                }
                <form className="space-y-6 w-full px-9" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create Account</h3>

                    <div className="flex flex-col">
                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-username">
                                    Username
                                </label>
                                <input
                                    placeholder="schedulemaniac"
                                    {...register('username')}
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                </input>
                                <p className="text-red-300">{errors.username?.message}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Password
                                </label>
                                <input
                                    placeholder="schedulemaniac"
                                    {...register('password')}
                                    type="password"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                </input>
                                <p className="text-red-300">{errors.password?.message}</p>
                            </div>
                        </div>


                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-email">
                                    Email
                                </label>
                                <input
                                    placeholder="schedulemaniac@email.com"
                                    {...register('email')}
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                </input>
                                <p className="text-red-300">{errors.email?.message}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-name">
                                    First Name
                                </label>
                                <input
                                    placeholder="Benjamin"
                                    {...register('first_name')}
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                </input>
                                <p className="text-red-300">{errors.first_name?.message}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input
                                    placeholder="Cisco"
                                    {...register('last_name')}
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                </input>
                                <p className="text-red-300">{errors.last_name?.message}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-street-1">
                                    Street Address
                                </label>
                                <input
                                    placeholder="123 Kardassia St."
                                    {...register('street_address')}
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                </input>
                                <p className="text-red-300">{errors.street_address?.message}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-street-2">
                                    Apt., Suite, etc.
                                </label>
                                <input
                                    placeholder="Apt #444"
                                    {...register('street_address_2')}
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                </input>
                                <p className="text-red-300">{errors.street_address_2?.message}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-street-2">
                                    City
                                </label>
                                <input
                                    placeholder="Bajor"
                                    {...register('city')}
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                </input>
                                <p className="text-red-300">{errors.city?.message}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-state">
                                    State
                                </label>
                                <input
                                    placeholder="Bajor"
                                    {...register('st')}
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                </input>
                                <p className="text-red-300">{errors.st?.message}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-street-2">
                                    Zip Code
                                </label>
                                <input
                                    placeholder="42323"
                                    {...register('zip_code')}
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                </input>
                                <p className="text-red-300">{errors.zip_code?.message}</p>
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