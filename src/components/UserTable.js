import React from "react";
import FunctionAsProps from "./FunctionAsProps";
import EmployerList from "./EmployerList";
import ReactDOM from "react-dom";

class UserTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [
                {
                    name: "Vijaya",
                    skill: "UI",
                    company: "Accenture"
                },
                {
                    name: "Shekhar",
                    skill: "React",
                    company: "Yash"
                },
                {
                    name: "Ashish",
                    skill: "Angular",
                    company: "Infosys"
                }
            ],
            temp: "Vijaya"
        };
    }
    changeName = data => {
        this.setState({
            userData: data
        });
    };
    showEmployerList() {
        ReactDOM.render(<EmployerList />, document.getElementById("employerList"));
    }
    unmountComponent() {
        ReactDOM.unmountComponentAtNode(document.getElementById("employerList"));
        ReactDOM.render(<userList />, document.getElementById("employerList"));
    }
    render() {
        return (
            <>
                <h2>Function as props example</h2>
                <FunctionAsProps changeNameAsprops={this.changeName} />

                <hr />
                <h2>ReactDom render example</h2>
                <button onClick={() => this.showEmployerList()}>
                    Show Employer List
        </button>
                <div id="employerList"></div>
                <hr />
                <h2>Unmount component</h2>
                <button onClick={() => this.unmountComponent()}>
                    Unmount Component
        </button>
            </>
        );
    }
}
export default UserTable;
