import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PeopleIndex() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios('https://swapi.co/api/people/')
      .then(response => setData(response.data.results));
  });

  return (
    <>
      <h2>People Index</h2>
      <ul>
        {data.map((x,i) => <li key={i}>{x.name}</li>)}
      </ul>
    </>
  );
}

export default PeopleIndex;