// components/SearchForm.js

import React, { useState } from 'react';
import fetchTrainLiveStatusById from './api';

const SearchForm = ({ setTrains }) => {
  const [query, setQuery] = useState('');
  const [date, setDate] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleChange2 = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trains = await fetchTrainLiveStatusById(query,date);
    console.log(trains);
    setTrains(trains);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} placeholder="Enter station code" />
      <input type="text" value={date} onChange={handleChange2} placeholder="Enter date" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
