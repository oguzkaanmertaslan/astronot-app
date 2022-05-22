import React, { useState } from 'react'
import "./style.css"
const Register = () => {
    const [options, setOptions] = useState(["Mars", "Jupıter", "Moon"])
    return (
        <div className='register-page'>
            <h1 className='register-header'>
                Register
            </h1>
            <div className='register-area'>
                <div className='planet-select-area'>
                    <label className='planet-label'>Planet</label>
                    <select className='to-select'>
                        {options.map((option, index) => {
                            return <option key={index}>{option}</option>
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Register