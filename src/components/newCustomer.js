import React from 'react';

const NewCustomerForm = (props) => {
    return (
        <div className='container'>
      <div className="card-body">
        <form onSubmit={props.handleSubmit}>
          <div className = 'form-group'>
            <label htmlFor="name">Name:</label><br></br>
            <input type = 'text' id='name' name = 'name' onChange={props.handleChange}></input><br></br>
          </div>
      <label htmlFor='phone'>Phone Number:</label> <br></br>
      <input type = 'text' id='phone' name = 'phone' onChange={props.handleChange}></input><br></br>
      <label htmlFor='address'>Address:</label> <br></br>
      <input type = 'tel' id='address' name = 'address'onChange={props.handleChange}></input><br></br>
      <input type = 'submit' value = 'Submit'  ></input>

      </form>
    </div>
    </div>
    );
};

export default NewCustomerForm;