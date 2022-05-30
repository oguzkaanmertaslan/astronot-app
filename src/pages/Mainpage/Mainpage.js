import React, { useEffect, useState } from 'react'
import Earth from '../../img/earth.svg'
import Moon from '../../img/moon.svg'
import Mars from '../../img/mars.svg'
import Jupiter from '../../img/jupiter.svg'
import Rocket from '../../img/rocket.svg'
import { getUser } from '../../components/services/services'
import "./style.css"
const Mainpage = () => {
    const [user, setUser] = useState([])
    const tableGetUSer = async () => {
        const response = await getUser();
        setUser(response);
    };
    useEffect(() => {
        tableGetUSer();
    }, []);
    
    return (
        <div className='mainpage-area'>
            <div className='rocket-area'>
            <div className='rocket'>
                <img src={Rocket} alt="rocket" />
            </div>
            </div>
            
            <div class="wrapper">
                <div className="moon">
                    <img className='moon' src={Moon} alt="moon" />

                </div>
                <div className="mars">
                    <img className='mars' src={Mars} alt="mars" />

                </div>
                <div className="earth">
                    <img className='earth' src={Earth} alt="earth" />

                </div>
                <div className="jupiter">
                    <img className='jupiter' src={Jupiter} alt="jupiter" />
                </div>
            </div>
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
                                <td>{user.username}</td>
                                <td>{user.planet}</td>
                                <td>{user.date}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
        </div>
    )
}

export default Mainpage