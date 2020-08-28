import React, { useState } from 'react';

const Employees = () => {
    const employeesInfo = 'An employee information form contains key information on employees that is used to keep a record of who worked for the company, their duration of employment, and in what role. It can also be used as an emergency contact information form in the event of any serious workplace injury.'
    const [employeesInformation, setEmployeesInformation] = useState(employeesInfo)
    return (
        <div className='container'>
            <h4>Employees Information</h4>
            <p>{employeesInformation}</p>
        </div>
    )
}

export default Employees;