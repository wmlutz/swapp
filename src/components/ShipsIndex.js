import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShipsIndex() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios('https://swapi.co/api/starships/')
      .then(response => setData(response.data.results));
  });

  return (
    <>
      <h2>Ships Index</h2>
      <ul>
        {data.map((x,i) => <li key={i}>{x.name}</li>)}
      </ul>
    </>
  );
}

export default ShipsIndex;