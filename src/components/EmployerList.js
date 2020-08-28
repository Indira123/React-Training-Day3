import React from "react";

const EmployerList = () => {
    const employerList = ["Infosys", "Accenture", "Yash", "Cybage"];
    return (
        <ul>
            {employerList.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
};

export default EmployerList;
