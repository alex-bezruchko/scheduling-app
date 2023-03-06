import { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from API or database
        // const fetchData = async () => {
        //   const response = await fetch('/api/users');
        //   const data = await response.json();
        //   setUsers(data);
        // };

        // fetchData();

        setUsers([
            {
                "id": 1,
                "username": "hlangfield0",
                "email": "hlangfield0@comcast.net",
                "password_hash": "hlangfield0_pass",
                "first_name": "Hamlen",
                "last_name": "Langfield",
                "street_address": "0 Dapin Pass",
                "street_address_2": "Suite 43",
                "city": "San Jose",
                "state": "California",
                "zip_code": "95128",
                "user_type_id": 2
            },
            {
                "id": 2,
                "username": "mcayser1",
                "email": "mcayser1@dedecms.com",
                "password_hash": "mcayser1_pass",
                "first_name": "Merla",
                "last_name": "Cayser",
                "street_address": "92580 Bartillon Hill",
                "street_address_2": "Room 66",
                "city": "Milwaukee",
                "state": "Wisconsin",
                "zip_code": "53210",
                "user_type_id": 2
            },
            {
                "id": 3,
                "username": "kcocklie2",
                "email": "kcocklie2@tamu.edu",
                "password_hash": "kcocklie2_pass",
                "first_name": "Kiel",
                "last_name": "Cocklie",
                "street_address": "100 Union Drive",
                "street_address_2": "Apt 318",
                "city": "Charlotte",
                "state": "North Carolina",
                "zip_code": "28235",
                "user_type_id": 1
            },
            {
                "id": 4,
                "username": "bhallatt3",
                "email": "bhallatt3@bloglovin.com",
                "password_hash": "bhallatt3_pass",
                "first_name": "Brandais",
                "last_name": "Hallatt",
                "street_address": "75891 Pennsylvania Terrace",
                "street_address_2": "Room 1311",
                "city": "Des Moines",
                "state": "Iowa",
                "zip_code": "50981",
                "user_type_id": 2
            },
            {
                "id": 5,
                "username": "aefford4",
                "email": "aefford4@acquirethisname.com",
                "password_hash": "aefford4_pass",
                "first_name": "Amos",
                "last_name": "Efford",
                "street_address": "3 Jenna Park",
                "street_address_2": "PO Box 73060",
                "city": "New Orleans",
                "state": "Louisiana",
                "zip_code": "70149",
                "user_type_id": 2
            },
            {
                "id": 6,
                "username": "hdillamore5",
                "email": "hdillamore5@epa.gov",
                "password_hash": "hdillamore5_pass",
                "first_name": "Hurleigh",
                "last_name": "Dillamore",
                "street_address": "6 Fremont Trail",
                "street_address_2": "PO Box 83863",
                "city": "Newark",
                "state": "New Jersey",
                "zip_code": "07188",
                "user_type_id": 2
            },
            {
                "id": 7,
                "username": "groux6",
                "email": "groux6@ibm.com",
                "password_hash": "groux6_pass",
                "first_name": "Gale",
                "last_name": "Roux",
                "street_address": "10961 East Plaza",
                "street_address_2": "12th Floor",
                "city": "Memphis",
                "state": "Tennessee",
                "zip_code": "38119",
                "user_type_id": 1
            },
            {
                "id": 8,
                "username": "skeogh7",
                "email": "skeogh7@time.com",
                "password_hash": "skeogh7_pass",
                "first_name": "Sinclare",
                "last_name": "Keogh",
                "street_address": "1 Corben Street",
                "street_address_2": "Room 709",
                "city": "Salt Lake City",
                "state": "Utah",
                "zip_code": "84140",
                "user_type_id": 1
            },
            {
                "id": 9,
                "username": "mgummer8",
                "email": "mgummer8@mtv.com",
                "password_hash": "mgummer8_pass",
                "first_name": "Mic",
                "last_name": "Gummer",
                "street_address": "1 Menomonie Way",
                "street_address_2": "PO Box 45818",
                "city": "Canton",
                "state": "Ohio",
                "zip_code": "44705",
                "user_type_id": 1
            },
            {
                "id": 10,
                "username": "obozward9",
                "email": "obozward9@slashdot.org",
                "password_hash": "obozward9_pass",
                "first_name": "Orin",
                "last_name": "Bozward",
                "street_address": "16 Annamark Point",
                "street_address_2": "PO Box 27444",
                "city": "Memphis",
                "state": "Tennessee",
                "zip_code": "38181",
                "user_type_id": 1
            }
        ],)
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold mb-8 pt-8">Users</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-2 py-2 text-left text-sm">ID</th>
                        <th className="px-2 py-2 text-left text-sm">Username</th>
                        <th className="px-2 py-2 text-left text-sm">Email</th>
                        <th className="px-2 py-2 text-left text-sm">First Name</th>
                        <th className="px-2 py-2 text-left text-sm">Last Name</th>
                        <th className="px-2 py-2 text-left text-sm">Address</th>
                        <th className="px-2 py-2 text-left text-sm">Edit</th>
                        <th className="px-2 py-2 text-left text-sm">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border px-2 py-2 fs-1">{user.id}</td>
                            <td className="border px-2 py-2 fs-1">{user.username}</td>
                            <td className="border px-2 py-2 fs-1">{user.email}</td>
                            <td className="border px-2 py-2 fs-1">{user.first_name}</td>
                            <td className="border px-2 py-2 fs-1">{user.last_name}</td>

                            <td className="border px-2 py-2">
                                {`${user.street_address}${user.street_address_2 ? `, ${user.street_address_2}` : ''}, ${user.city}, ${user.state} ${user.zip_code}`}
                            </td>
                            <td className="border px-2 py-2"><Link to={`/users/${user.id}`} className="flex justify-center text-orange-400"><FaEdit /></Link></td>
                            <td className="border px-2 py-2"><Link to={user.id} className="flex justify-center text-red-800"><FaTrashAlt /></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UserList;