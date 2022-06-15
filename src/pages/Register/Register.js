import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useHistory } from 'react-router-dom';
import { createUser } from '../../components/services/services';
import 'react-datepicker/dist/react-datepicker.css';
import "./style.css"
const Register = () => {
    const options = ["Mars", "Jupıter", "Moon"]
    const [newUser, setNewUser] = useState({ fullname: "", username: "", password: "", planet: "Mars", date: "" })
    const [error, setError] = useState(false)
    const history = useHistory();
    console.log(newUser.date);
    const addUSer = async () => {
        if (newUser.fullname.length >= 3 && newUser.username.length >= 3 && newUser.password.length >= 3 && options.includes(newUser.planet)) {
            const response = await createUser(newUser);
            if (response.status === 201) {
                history.push('/login');
            }
        }
        else {
            setError(true)
        }
    }

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='register-page'>
            <h1 className='register-header'>
                Sign-In
            </h1>
            <div>
                <div>
                    {
                        error && <p className='error-message'>Please fill all the fields</p>
                    }
                    <label className='planet-label'>
                        Full Name
                    </label>
                    <input className='reg-input' type="text" name='fullname' value={newUser.fullname} onChange={handleChange} />
                </div>
                <div>
                    <label className='planet-label'>
                        Username
                    </label>
                    <input className='reg-input' type="text" name='username' value={newUser.username} onChange={handleChange} />
                </div>
                <div>
                    <label className='planet-label'>
                        Password
                    </label>
                    <input className='reg-input' type="password" name='password' value={newUser.password} onChange={handleChange} />
                    <label className='planet-label'>Select Planet</label>
                    <select className='planet-select' name="planet" value={newUser.planet} onChange={handleChange}>
                        {options.map((option, index) => {
                            return <option key={index}>{option}</option>
                        })}
                    </select>
                </div>
                <label className='planet-label'>Select Date</label>
                <DatePicker
                    className='date-picker'
                    placeholderText='yyyy/mm/dd'
                    selected={newUser.date}
                    onChange={(date)  => setNewUser({ ...newUser, date: date })}
                    minDate={new Date()}
                    dateFormat="yyyy/MM/dd"
                    showYearDropdown
                    scrollableMonthYearDropdown />
                <div className='bottom-area'>
                    <button className='reg-button' onClick={addUSer}>SIGN-UP</button>
                </div>
            </div>
        </div>
    )
}

export default Register