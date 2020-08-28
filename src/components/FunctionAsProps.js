import React from "react";

const FunctionAsProps = props => {
    const data = [
        {
            name: "Rahul",
            skill: 'UI',
            company: 'tata'
        }
    ]
    return (
        <div>
            <button onClick={() => props.changeNameAsprops(data)}>
                Function as props
      </button>
        </div>
    );
};

export default FunctionAsProps;
