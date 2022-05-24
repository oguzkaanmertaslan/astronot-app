import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./style.css"
const Register = () => {
    const options = ["Mars", "Jupıter", "Moon"]
    const [selectedDate, setSelectedDate] = useState(null);
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
                    <input className='reg-input' type="text" />
                </div>
                <div>
                    <label className='planet-label'>
                        Password
                    </label>
                    <input className='reg-input' type="text" />
                    <label className='planet-label'>Select Planet</label>
                    <select className='planet-select'>
                        {options.map((option, index) => {
                            return <option key={index}>{option}</option>
                        })}
                    </select>
                </div>
                <label className='planet-label'>Select Date</label>
                <DatePicker 
                    className='date-picker'
                    placeholderText='yyyy/mm/dd'
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
                    showYearDropdown
                    scrollableMonthYearDropdown />
                <div className='bottom-area'>
                    <button className='reg-button'>SIGN-UP</button>
                </div>
            </div>
        </div>
    )
}

export default Register