import './App.css';
import React, { useEffect, useState } from 'react';


import GetAPI from './components/getAPI';
import NewCustomerForm from './components/newCustomer'

const App = () =>  {

  const sendData = GetAPI();

const [state, setState] = useState({
  name: "",
  phone: "",
  address: ""
})


const handleSubmit = (event) => {
  event.preventDefault();
  console.log(state)
  sendData.post(state).then(response => {
    console.log(response);
    alert("Customer successfully added)")
  }).catch(error => {
    console.log(error);
  })
}



const handleChange = event => {
  event.preventDefault();
  setState({
      ...state,
      [event.target.name]: event.target.value
  })
}

  return (
    <div>
    <NewCustomerForm state = {state} handleChange = {handleChange} handleSubmit = {handleSubmit} />
    </div>
  );
}

export default App;
