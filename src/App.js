import React from 'react';
import './App.css';
import ClassBased from './components/classBased';
import Functional from './components/functional';
import UserTable from './components/UserTable';
import LivingThings from './components/assignment/livingThings';

const employeeList = [
  {
    name: 'Vijaya',
    gender: 'female',
    id: '111'
  },
  {
    name: 'Smita',
    gender: 'female',
    id: '222'
  },
  {
    name: 'Aryan',
    gender: 'male',
    id: '333'
  },
  {
    name: 'Abhay',
    gender: 'male',
    id: '444'
  }
]
function App() {
  return (
    <div className="App">
      {/* <ClassBased name="Vijaya" />
      <Functional employeeList={employeeList} />
      <hr />
      <UserTable /> */}
      <LivingThings />
    </div>
  );
}

export default App;
