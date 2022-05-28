import React from 'react'
import Earth from '../../img/earth.svg'
import Moon from '../../img/moon.svg'
import Mars from '../../img/mars.svg'
import Jupiter from '../../img/jupiter.svg'
import Rocket from '../../img/rocket.svg'
import "./style.css"
const Mainpage = () => {
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
        </div>
    )
}

export default Mainpage