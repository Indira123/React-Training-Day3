import React from 'react';
import Animals from './animals';
import Birds from './birds';
import Employees from './employees';
import Users from './users';
import ReactDOM from "react-dom";

class LivingThings extends React.Component {

    changeInformation(type) {
        ReactDOM.unmountComponentAtNode(document.getElementById('information'))
        if (type === 'animal') {
            ReactDOM.render(<Animals />, document.getElementById('information'))
        } else if (type === 'birds') {
            ReactDOM.render(<Birds />, document.getElementById('information'))
        } else if (type === 'employees') {
            ReactDOM.render(<Employees />, document.getElementById('information'))
        } else {
            ReactDOM.render(<Users />, document.getElementById('information'))
        }
    }
    render() {
        return (
            <div>
                <div class="btn-group">
                    <button onClick={() => this.changeInformation('animal')} type="button" class="btn btn-primary">Animal</button>
                    <button onClick={() => this.changeInformation('birds')} type="button" class="btn btn-primary">Birds</button>
                    <button onClick={() => this.changeInformation('employees')} type="button" class="btn btn-primary">Employees</button>
                    <button onClick={() => this.changeInformation('users')} type="button" class="btn btn-primary">Users</button>
                </div>
                <p id='information'></p>
            </div>

        )
    }
}
export default LivingThings;