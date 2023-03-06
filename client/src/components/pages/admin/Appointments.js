import { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        //     // Fetch appointment data from API or database
        //     const fetchData = async () => {
        //       const response = await fetch('/api/appointments');
        //       const data = await response.json();
        //       setAppointments(data);
        //     };
        //     fetchData();
        //   }, []);
        setAppointments([
            {
                "id": 1,
                "time": "2023-02-12T09:35:33.000Z",
                "user_id": 51,
                "location_id": 60,
                "user": {
                    "username": "cquartermain1e",
                    "email": "cquartermain1e@posterous.com",
                    "first_name": "Cull",
                    "last_name": "Quartermain",
                    "street_address": "8657 Stuart Way",
                    "street_address_2": "16th Floor",
                    "city": "Saint Louis",
                    "state": "Missouri",
                    "zip_code": "63136",
                    "user_type_id": 1
                },
                "location": {
                    "name": "Marks, Shields and Ferry",
                    "phone": "5179727575",
                    "street_address": "39 Little Fleur Center",
                    "street_address_2": "PO Box 34723",
                    "city": "Kalamazoo",
                    "state": "Michigan",
                    "zip_code": "49048"
                }
            },
            {
                "id": 2,
                "time": "2022-01-19T00:21:54.000Z",
                "user_id": 67,
                "location_id": 179,
                "user": {
                    "username": "soverland1u",
                    "email": "soverland1u@macromedia.com",
                    "first_name": "Suzie",
                    "last_name": "Overland",
                    "street_address": "6732 Londonderry Pass",
                    "street_address_2": "PO Box 83059",
                    "city": "Young America",
                    "state": "Minnesota",
                    "zip_code": "55557",
                    "user_type_id": 2
                },
                "location": {
                    "name": "Gutmann and Sons",
                    "phone": "9105839406",
                    "street_address": "25122 Lakeland Way",
                    "street_address_2": "PO Box 73468",
                    "city": "Greensboro",
                    "state": "North Carolina",
                    "zip_code": "27455"
                }
            },
            {
                "id": 3,
                "time": "2023-05-15T04:19:56.000Z",
                "user_id": 30,
                "location_id": 37,
                "user": {
                    "username": "nstoditt",
                    "email": "nstoditt@hibu.com",
                    "first_name": "Nils",
                    "last_name": "Stodit",
                    "street_address": "591 Green Ridge Street",
                    "street_address_2": "6th Floor",
                    "city": "Houston",
                    "state": "Texas",
                    "zip_code": "77035",
                    "user_type_id": 2
                },
                "location": {
                    "name": "Hand-Dickens",
                    "phone": "9131158319",
                    "street_address": "28 Troy Park",
                    "street_address_2": "Room 1758",
                    "city": "Shawnee Mission",
                    "state": "Kansas",
                    "zip_code": "66215"
                }
            },
            {
                "id": 4,
                "time": "2022-04-18T22:57:01.000Z",
                "user_id": 179,
                "location_id": 175,
                "user": {
                    "username": "fcumbes4y",
                    "email": "fcumbes4y@house.gov",
                    "first_name": "Fernandina",
                    "last_name": "Cumbes",
                    "street_address": "37 Blue Bill Park Street",
                    "street_address_2": "Room 1417",
                    "city": "Glendale",
                    "state": "California",
                    "zip_code": "91210",
                    "user_type_id": 1
                },
                "location": {
                    "name": "Parisian, Bogisich and Dare",
                    "phone": "7196392391",
                    "street_address": "6 Lunder Avenue",
                    "street_address_2": "PO Box 41024",
                    "city": "Colorado Springs",
                    "state": "Colorado",
                    "zip_code": "80930"
                }
            },
            {
                "id": 7,
                "time": "2022-03-26T16:42:55.000Z",
                "user_id": 37,
                "location_id": 118,
                "user": {
                    "username": "ecurneen10",
                    "email": "ecurneen10@bloglovin.com",
                    "first_name": "Elisabeth",
                    "last_name": "Curneen",
                    "street_address": "7854 Moose Hill",
                    "street_address_2": "PO Box 87508",
                    "city": "Houston",
                    "state": "Texas",
                    "zip_code": "77281",
                    "user_type_id": 1
                },
                "location": {
                    "name": "Daniel, Smith and Jerde",
                    "phone": "3044748889",
                    "street_address": "38 Main Lane",
                    "street_address_2": "Room 525",
                    "city": "Huntington",
                    "state": "West Virginia",
                    "zip_code": "25775"
                }
            },
            {
                "id": 8,
                "time": "2022-02-08T10:16:53.000Z",
                "user_id": 65,
                "location_id": 101,
                "user": {
                    "username": "jcello1s",
                    "email": "jcello1s@cbslocal.com",
                    "first_name": "Jacquelin",
                    "last_name": "Cello",
                    "street_address": "613 Autumn Leaf Alley",
                    "street_address_2": "Room 836",
                    "city": "Madison",
                    "state": "Wisconsin",
                    "zip_code": "53785",
                    "user_type_id": 2
                },
                "location": {
                    "name": "Kutch LLC",
                    "phone": "5095032151",
                    "street_address": "558 Veith Court",
                    "street_address_2": "Apt 58",
                    "city": "Spokane",
                    "state": "Washington",
                    "zip_code": "99220"
                }
            },
            {
                "id": 9,
                "time": "2022-09-27T03:43:14.000Z",
                "user_id": 161,
                "location_id": 157,
                "user": {
                    "username": "tbunyard4g",
                    "email": "tbunyard4g@unicef.org",
                    "first_name": "Tam",
                    "last_name": "Bunyard",
                    "street_address": "152 Lillian Road",
                    "street_address_2": "Suite 10",
                    "city": "Miami",
                    "state": "Florida",
                    "zip_code": "33175",
                    "user_type_id": 1
                },
                "location": {
                    "name": "Kling LLC",
                    "phone": "7197894785",
                    "street_address": "40 Saint Paul Lane",
                    "street_address_2": "Suite 61",
                    "city": "Pueblo",
                    "state": "Colorado",
                    "zip_code": "81010"
                }
            },
            {
                "id": 10,
                "time": "2021-06-20T16:50:49.000Z",
                "user_id": 98,
                "location_id": 126,
                "user": {
                    "username": "mlardner2p",
                    "email": "mlardner2p@google.de",
                    "first_name": "Marlin",
                    "last_name": "Lardner",
                    "street_address": "8420 Mitchell Avenue",
                    "street_address_2": "Suite 97",
                    "city": "El Paso",
                    "state": "Texas",
                    "zip_code": "88563",
                    "user_type_id": 1
                },
                "location": {
                    "name": "Hirthe, Stoltenberg and Schmeler",
                    "phone": "6197132640",
                    "street_address": "07 Canary Alley",
                    "street_address_2": "Suite 82",
                    "city": "San Diego",
                    "state": "California",
                    "zip_code": "92137"
                }
            },
            {
                "id": 11,
                "time": "2021-11-07T04:34:28.000Z",
                "user_id": 115,
                "location_id": 37,
                "user": {
                    "username": "fyarrington36",
                    "email": "fyarrington36@cnn.com",
                    "first_name": "Fanni",
                    "last_name": "Yarrington",
                    "street_address": "966 Mcguire Pass",
                    "street_address_2": "Suite 92",
                    "city": "Aurora",
                    "state": "Illinois",
                    "zip_code": "60505",
                    "user_type_id": 1
                },
                "location": {
                    "name": "Hand-Dickens",
                    "phone": "9131158319",
                    "street_address": "28 Troy Park",
                    "street_address_2": "Room 1758",
                    "city": "Shawnee Mission",
                    "state": "Kansas",
                    "zip_code": "66215"
                }
            },
            {
                "id": 12,
                "time": "2022-12-12T19:04:23.000Z",
                "user_id": 163,
                "location_id": 17,
                "user": {
                    "username": "jlevington4i",
                    "email": "jlevington4i@vimeo.com",
                    "first_name": "Julie",
                    "last_name": "Levington",
                    "street_address": "69856 Springs Terrace",
                    "street_address_2": "5th Floor",
                    "city": "Tuscaloosa",
                    "state": "Alabama",
                    "zip_code": "35487",
                    "user_type_id": 2
                },
                "location": {
                    "name": "Lind-Jacobs",
                    "phone": "2107395863",
                    "street_address": "441 North Alley",
                    "street_address_2": "Room 714",
                    "city": "San Antonio",
                    "state": "Texas",
                    "zip_code": "78240"
                }
            }
        ])
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold mb-8 pt-8">Appointment List</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-2 py-2 text-left text-sm">ID</th>
                        <th className="px-2 py-2 text-left text-sm">Appointmet Time</th>
                        <th className="px-2 py-2 text-left text-sm">User</th>
                        <th className="px-2 py-2 text-left text-sm">Location Name</th>
                        <th className="px-2 py-2 text-left text-sm">Location Address</th>
                        <th className="px-2 py-2 text-left text-sm">Edit</th>
                        <th className="px-2 py-2 text-left text-sm">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td className="border px-4 py-1">{appointment.id}</td>
                            <td className="border px-4 py-1">{appointment.time}</td>
                            <td className="border px-4 py-1">{appointment.user.username}</td>
                            <td className="border px-4 py-1">{appointment.location.name}</td>
                            <td className="border px-4 py-1">{appointment.location.street_address + ' ' + appointment.location.street_address_2}</td>
                            <td className="border px-2 py-2"><Link to={`/appointments/${appointment.id}`} className="flex justify-center text-orange-400"><FaEdit /></Link></td>
                            <td className="border px-2 py-2"><Link to={appointment.id} className="flex justify-center text-red-800"><FaTrashAlt /></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );

};

export default Appointments;