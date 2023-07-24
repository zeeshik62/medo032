import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

const reportOptions = [
  
  { value: 'blood_test', label: 'Blood Test', price: 50 },
  { value: 'blood_test', label: 'Blood Test', price: 50 }
  

];




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

  const [totalPrice, setTotalPrice] = useState(0);
  const [dis,setDis]=useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);}



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
          <select name="report" value={formData.report} >
          <option value="" disabled hidden>
          -- Select Report --
        </option>
            {reportOptions.map((report) => (
              
              <option key={report.value} value={report.value}>
                {report.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Report Type:</label>
          <select name="reportType" value={selectedOption} onChange={handleOptionChange}>
          <option value="" disabled hidden>
          -- Select Report Type --
        </option>
          <option value="option1">CBC</option>
        <option value="option2">Blood glucose</option>
        <option value="option3">Blood gases test.</option>
           
          </select>
        </div>
        <div className="total-price">
         <p>Price: {selectedOption === 'option1' && <div>10,000 Rs</div>}
         {selectedOption === 'option2' && <div>3000</div>}
         {selectedOption === 'option3' && <div>2000</div>}
         </p>
         <p>Discount: {selectedOption === 'option1' && <div>500 Rs</div>}
         {selectedOption === 'option2' && <div>300</div>}
         {selectedOption === 'option3' && <div>200</div>}</p>
         <p>Total:{selectedOption === 'option1' && <div>9500 Rs</div>}
         {selectedOption === 'option2' && <div>2700</div>}
         {selectedOption === 'option3' && <div>1800</div>}</p>
        </div>
        <button type="submit">Submit</button>
        <button type="submit">Cancel</button>
      </form>
    </Modal>
  );
};

export default Form;