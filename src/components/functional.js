import React from 'react';
import '../styles/functional.css';

const Functional = ({ employeeList }) => {
    return (
        <div className='container'>
            <table className='table stripped text-left' style={{ background: 'blue', color: 'white' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((item, index) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.gender}</td>
                            <td>{item.id}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Functional;