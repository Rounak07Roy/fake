
import React from 'react';

const TrainList = ({ trains }) => {
  return (
    <div>
      <h2>Train List</h2>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>{train.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
