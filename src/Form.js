import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');



// const reportOptions = [
  
//   { value: 'blood_test', label: 'Blood Test', price: 50 },
//   { value: 'blood_test', label: 'Blood Test', price: 50 }
  

// ];

const priceData = {
  'Blood Glucose Test': 30,
  'Blood Gases Test': 50,
  'Coagulation Test': 80,
  // Add more options and prices as needed
};


const Form = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    id: '',
    fullName: '',
    dateOfBirth: '',
    cnic: '',
    phoneNumber: '',
    report: '',
    reportType: '',
  });

  const [selectedValue1, setSelectedValue1] = useState(null);
  const [field1Options, setField1Options] = useState(['Blood', 'Heart', 'Kidney']);
const [field2Options, setField2Options] = useState(['']);
const handleField1Change = (event) => {
  const selectedValue = event.target.value;

  // Example logic: When selecting 'Option 1', update the options of the second field accordingly
  if (selectedValue === 'Blood') {
    setField2Options(['Blood Glucose Test', 'Blood Gases Test', 'Coagulation Test']);
  } else if (selectedValue === 'Heart') {
    setField2Options(['Electrocardiogram (ECG)', 'Magnetic resonance imaging (MRI)', 'Echocardiogram (ultrasound)']);
  } else if (selectedValue === 'Kidney') {
    setField2Options(['Kidney Test']);
  }
};
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [dis,setDis]=useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);}

    function handleSelectChange(event){
      setSelectedValue1(event.target.value)
      console.log(selectedValue1)
    }



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };
 
  // const [price, setPrice] = useState(0);
  // const selectedPrice = priceData[setSelectedValue1] || 0;
  //   setPrice(selectedPrice);

  let price = 0;

  // Update the price based on the selected option
  if (selectedValue1 === 'Blood Glucose Test') {
    price = 10;
  } else if (selectedValue1 === 'Blood Gases Test') {
    price = 20;
  } else if (selectedValue1 === 'Coagulation Test') {
    price = 30;
  }
  else if (selectedValue1 === 'Electrocardiogram (ECG)') {
    price = 40;
  } else if (selectedValue1 === 'Magnetic resonance imaging (MRI)') {
    price = 50;
  }
  else if (selectedValue1 === 'Echocardiogram (ultrasound)') {
    price = 60;
  } else if (selectedValue1 === 'Kidney Test') {
    price = 70;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Form Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>CNIC:</label>
          <input type="text" name="cnic" value={formData.cnic} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Report:</label>
          {/* <select name="report" value={formData.report} >
          <option value="" disabled hidden>
          -- Select Report --
        </option>
            {reportOptions.map((report) => (
              
              <option key={report.value} value={report.value}>
                {report.label}
              </option>
            ))}
          </select> */}
          <select onChange={handleField1Change}>
          <option value="" >
          -- Select Report --
        </option>
        {field1Options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
          
        ))}
        
      </select>
      

          <label>Report Type:</label>
      <select value={selectedValue1} onChange={handleSelectChange}>
      
        {field2Options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
        </div>
        {/* <div className="form-group">
          <label>Report Type:</label>
          <select name="reportType" value={selectedOption} onChange={handleOptionChange}>
          <option value="" disabled hidden>
          -- Select Report Type --
        </option>
          <option value="option1">CBC</option>
        <option value="option2">Blood glucose</option>
        <option value="option3">Blood gases test.</option>
           
          </select>
        </div> */}
        <div className="total-price">
          <u><p><b>Report Type Selected:</b> {selectedValue1}</p></u>
         <p>Price: {price} Rs</p>
         
         
         <p>Discount:</p>
         <p>Total:</p>
         
        </div>
        
        <button type="submit">Submit</button>
        <button type="submit">Cancel</button>
      </form>
    </Modal>
  );
};

export default Form;