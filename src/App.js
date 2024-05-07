// App.js

import React, { useState } from 'react';
import SearchForm from './SearchForm';
import TrainList from './TrainList';
import responseData from './responseData';
import './styles.css';

function App() {
  const [trains, setTrains] = useState(responseData || []); // Ensure trains is initialized with an empty array

  return (
    <div className="container">
      <h1>Train Schedule</h1>
      <SearchForm setTrains={setTrains} />
      <TrainList trains={trains} />
    </div>
  );
}

export default App;