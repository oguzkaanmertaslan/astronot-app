import React, { useState } from 'react';
import "./style.css"
const Register = () => {
    const options = ["Mars", "Jupiter", "Moon"]
    return (
        <div className='register-page'>
            <h1 className='register-header'>
                Register
            </h1>
            <div>
                <div>
                    <label className='planet-label'>
                        Username:
                    </label>
                    <input className='reg-input' type="text" />
                </div>
                <div>
                    <label className='planet-label'>
                        Password:
                    </label>
                    <input className='reg-input' type="text" />
                    <label className='planet-label'>Select Planet</label>
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