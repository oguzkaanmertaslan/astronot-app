import React, {useState,useEffect} from 'react'
import { getUser } from '../../components/services/services'
import "./style.css"

const UserProfile = () => {
  const [user, setUser] = useState([])
  const tableGetUSer = async () => {
      const response = await getUser();
      setUser(response);
  };
  useEffect(() => {
      tableGetUSer();
  }, []);
  
  return (
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
                        {user.map(user => (
                            <tr>
                                <td>{user.fullname}</td>
                                <td>{user.planet}</td>
                                <td>{user.date}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
  )
}

export default UserProfile