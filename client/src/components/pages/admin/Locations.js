import { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const LocationList = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Fetch user data from API or database
        // const fetchData = async () => {
        //   const response = await fetch('/api/users');
        //   const data = await response.json();
        //   setLocations(data);
        // };

        // fetchData();

        setLocations([
            {
                "id": 1,
                "name": "Hessel, Ortiz and Gerlach",
                "street_address": "586 Springview Alley",
                "street_address_2": "Room 1736",
                "city": "Orlando",
                "state": "Florida",
                "zip_code": "32830",
                "phone": "4079702576"
            },
            {
                "id": 2,
                "name": "McDermott, Paucek and McLaughlin",
                "street_address": "26 Merrick Street",
                "street_address_2": "12th Floor",
                "city": "Kansas City",
                "state": "Missouri",
                "zip_code": "64136",
                "phone": "8162102227"
            },
            {
                "id": 3,
                "name": "Boyle Inc",
                "street_address": "61525 Shelley Drive",
                "street_address_2": "Room 1637",
                "city": "Saint Paul",
                "state": "Minnesota",
                "zip_code": "55108",
                "phone": "6122401724"
            },
            {
                "id": 4,
                "name": "Cormier Inc",
                "street_address": "54360 Morning Center",
                "street_address_2": "PO Box 65375",
                "city": "Cleveland",
                "state": "Ohio",
                "zip_code": "44177",
                "phone": "4403481925"
            },
            {
                "id": 6,
                "name": "Zieme Group",
                "street_address": "991 Esch Court",
                "street_address_2": "Apt 1357",
                "city": "New York City",
                "state": "New York",
                "zip_code": "10249",
                "phone": "2124022954"
            },
            {
                "id": 7,
                "name": "Erdman Inc",
                "street_address": "53366 Raven Street",
                "street_address_2": "3rd Floor",
                "city": "Chicago",
                "state": "Illinois",
                "zip_code": "60652",
                "phone": "3126722712"
            },
            {
                "id": 8,
                "name": "Fahey LLC",
                "street_address": "0646 Jay Plaza",
                "street_address_2": "Room 998",
                "city": "Cleveland",
                "state": "Ohio",
                "zip_code": "44111",
                "phone": "2164086252"
            },
            {
                "id": 9,
                "name": "Murazik, Robel and Nader",
                "street_address": "56505 Loomis Plaza",
                "street_address_2": "Apt 406",
                "city": "Shawnee Mission",
                "state": "Kansas",
                "zip_code": "66220",
                "phone": "9135640054"
            },
            {
                "id": 10,
                "name": "Purdy-Kuhn",
                "street_address": "5804 Debra Street",
                "street_address_2": "Suite 57",
                "city": "Decatur",
                "state": "Georgia",
                "zip_code": "30033",
                "phone": "7709726030"
            },
            {
                "id": 11,
                "name": "Tremblay LLC",
                "street_address": "08420 Sauthoff Avenue",
                "street_address_2": "Room 1964",
                "city": "Hartford",
                "state": "Connecticut",
                "zip_code": "06105",
                "phone": "2039473435"
            }
        ])
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold mb-8 pt-8">Locations</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Street Address</th>
                        <th className="px-4 py-2">Apt., Suite</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-2 py-2 text-left text-sm">Edit</th>
                        <th className="px-2 py-2 text-left text-sm">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map((location) => (
                        <tr key={location.id}>
                            <td className="border px-4 py-2">{location.id}</td>
                            <td className="border px-4 py-2">{location.name}</td>
                            <td className="border px-4 py-2">{location.street_address}</td>
                            <td className="border px-4 py-2">{location.street_address_2}</td>
                            <td className="border px-4 py-2">{location.phone}</td>
                            <td className="border px-2 py-2"><Link to={`/locations/${location.id}`} className="flex justify-center text-orange-400"><FaEdit /></Link></td>
                            <td className="border px-2 py-2"><Link to={location.id} className="flex justify-center text-red-800"><FaTrashAlt /></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default LocationList;