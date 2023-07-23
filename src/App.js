import React, { useState } from 'react';
import './App.css';
import Form from './Form';

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="App">
      <h1>React Form App</h1>
      <button onClick={handleOpenForm}>Open Form</button>
      {isFormOpen && <Form isOpen={isFormOpen} onClose={handleCloseForm} />}
    </div>
  );
};

export default App;
