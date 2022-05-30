import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useHistory } from 'react-router-dom';
import { createUser } from '../../components/services/services';
import 'react-datepicker/dist/react-datepicker.css';
import "./style.css"
const Register = () => {
    const options = ["Mars", "Jupıter", "Moon"]
    const [newUser, setNewUser] = useState({ username: "", password: "", planet: "", date: "" })
    const history = useHistory();
    const addUSer = async () => {
        const response = await createUser(newUser);
        if (response.status === 201) {
            history.push("/login");
        }
    }
    return (
        <div className='register-page'>
            <h1 className='register-header'>
                Sign-In
            </h1>
            <div>
                <div>
                    <label className='planet-label'>
                        Username
                    </label>
                    <input className='reg-input' type="text" value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} />
                </div>
                <div>
                    <label className='planet-label'>
                        Password
                    </label>
                    <input className='reg-input' type="password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                    <label className='planet-label'>Select Planet</label>
                    <select className='planet-select' value={newUser.planet} onChange={(e) => setNewUser({ ...newUser, planet: e.target.value })}>
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
                    onChange={date => setNewUser({ ...newUser, date: date })}
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
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