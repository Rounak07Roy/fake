// components/SearchForm.js

import React, { useState } from 'react';
import { fetchTrainSchedule } from './api';

const SearchForm = ({ setTrains }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trains = await fetchTrainSchedule(query);
    setTrains(trains);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} placeholder="Enter station code" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
