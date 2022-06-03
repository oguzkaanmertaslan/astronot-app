import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getUser } from '../../components/services/services'
import "./style.css"

const UserProfile = () => {
  const [tableUser, setTableUser] = useState([])
  const history = useHistory()
  const user = (localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null

  const tableGetUSer = async () => {
    const response = await getUser();
    setTableUser(response);
  };
  useEffect(() => {
    tableGetUSer();
  }, []);

  const newDate = tableUser.map(date => { return date.date })

  const newDate2 = newDate.map(date => {
    return new Date(date)
  }

  )
  console.log(newDate2);
  const handleStart = () => {
    history.push("/mainpage")
  }
  return (
    <>

      {
        user.map(user => (
          <div className="user-container" key={user.id}>
            <div className='user-header'>
              <h1>Welcome {user.fullname}</h1>
            </div>
            <p className='user-info'>Name: {user.fullname}</p><br />
            <p className='user-info'>Planet: {user.planet}</p><br />
            <p className='user-info'>Flying Date: {user.date}</p>
            <button className='fly-button' onClick={handleStart}>START FLY</button>
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