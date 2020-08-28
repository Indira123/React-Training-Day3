import React, { useState } from 'react';

const Animals = () => {
    const usersInfo = 'User information is information transferred across the functional interface between a source user and a telecommunications system for delivery to a destination user. In telecommunications systems, user information includes user overhead information.'
    const [usersInformation, setUsersInformation] = useState(usersInfo)
    return (
        <div className='container'>
            <h4>Users Information</h4>
            <p>{usersInformation}</p>
        </div>
    )
}

export default Animals;