import {React, useState, useEffect} from 'react'
import User from './User'

const UsersList = ({user}) => {
const USER_API_BASE_URL = "http://localhost:8080/api/vi/users"
const [users, setUsers] = useState(null)
const [loading, setLoading] = useState(true)
useEffect(() => {
  const fetchData = async () => {
      setLoading(true);
      try {
          const response = await fetch(USER_API_BASE_URL, {
              method: "GET",
              headers:{
                  "Content-Type": "application/json"
              },
          });
          const users = await response.json();
          setUsers(users)
      } catch (error) {
          console.log(error)
      }
      setLoading(false);
  }
  fetchData();
},[user]);


const deleteUser = (e, id) =>{
    e.preventDefault();
    e.preventDefault();
    fetch(USER_API_BASE_URL + "/" + id, {
        method: "DELETE",
    }).then((res) => {
        if(users) {
            setUsers((prevElement) => {
                return prevElement.filter((user) => user.id !== id);
            });
        }
    })
};

  return (
    <div className="container mx-auto my-8">
        <div className=" flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left font-medium text-gray-500 tracking-wide px-6 py-3">First Name</th>
                        <th className="text-left font-medium text-gray-500 tracking-wide px-6 py-3">Last Name</th>
                        <th className="text-left font-medium text-gray-500 tracking-wide px-6 py-3">EmailId</th>
                        <th className="text-right font-medium text-gray-500 tracking-wide px-6 py-3">Actions</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className="bg-white">
                        {users?.map((user) => <User user={user} key={user.id} deleteUser={deleteUser}/> )}   
                </tbody>
                )}  
            </table>
        </div>
    </div>
  )
}

export default UsersList