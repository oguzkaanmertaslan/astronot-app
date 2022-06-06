import React, { useEffect, useState } from 'react'
import Earth from '../../img/earth.svg'
import Moon from '../../img/moon.svg'
import Mars from '../../img/mars.svg'
import Jupiter from '../../img/jupiter.svg'
import Rocket from '../../img/rocket.svg'
import "./style.css"

const Mainpage = () => {
    const [timer, setTimer] = useState(10)
    const flyUser = (localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null

    useEffect(() => {

        const interval = setInterval(() => {
            if (timer !== 0) {
                setTimer(timer - 1)
            }

        }, 1000);
        return () => {
            clearInterval(interval)
        };

    }, [timer])
    useEffect(() => {
        if (timer === 0) {
            flyUser.map(user => {
                if (user.planet === 'Jupıter') {
                    document.body.classList.toggle("fly-jupiter")
                }
                else if (user.planet === 'Mars') {
                    document.body.classList.toggle("fly-mars")
                }
                else if (user.planet === 'Moon') {
                    document.body.classList.toggle("fly-moon")
                }
            })
        }
    }, [timer])

    return (
        <div className='mainpage-area'>
            <div className='timer'>{timer}</div>

            <div className='rocket-area'>
                <div className='rocket'>
                    <img src={Rocket} alt="rocket" />
                </div>
            </div>
            <div className="wrapper">
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
        </div>
    )
}

export default Mainpage