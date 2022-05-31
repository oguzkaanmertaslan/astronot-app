import React, { useState, useEffect } from 'react'
import { getUser } from '../../components/services/services'
import "./style.css"

const UserProfile = () => {
  const [tableUser, setTableUser] = useState([])
  const user = (localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null
  const tableGetUSer = async () => {
    const response = await getUser();
    setTableUser(response);
  };
  useEffect(() => {
    tableGetUSer();
  }, []);
  return (
    <>
    {
      user.map(user => (
        <div className="user-container">
          <p>{user.fullname}</p>
          <p>{user.planet}</p>
          <p>{user.date}</p>
</div>
      ))
    }
      <div className='table-area'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Planet</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tableUser.map(user => (
              <tr key={user.id}>
                <td>{user.fullname}</td>
                <td>{user.planet}</td>
                <td>{user.date}</td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </>
  )
}

export default UserProfile