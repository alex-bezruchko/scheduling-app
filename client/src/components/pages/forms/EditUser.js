import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const EditUser = () => {


    const schema = yup.object().shape({
        username: yup.string().min(5).max(15).required('Username is required'),
        email: yup.string().email().required('Email is required'),
        first_name: yup.string().required('First name is required'),
        last_name: yup.string().required('Last name is required'),
        street_address: yup.string().required('Street address is required'),
        street_address_2: yup.string(),
        city: yup.string().required('City is required'),
        zip_code: yup.string().matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Must be 5 between 9 digits'),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {

        // Form validate, Submit to api 

    }
    return (
        <div className="max-w-md mx-auto my-10">
            <div className="bg-white shadow-md py-10 border border-gray-200 rounded-lg flex justify-center dark:bg-gray-800 dark:border-gray-700">

                <form className="space-y-6 w-full px-9" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <div className="w-full">
                            <h1 className="text-blueGray-700 text-xl font-bold mb-4">Edit user</h1>
                        </div>
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

export default EditUser