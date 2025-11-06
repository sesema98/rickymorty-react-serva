import { useState } from 'react'


export default function App() {
  const fetchData = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    console.log('fetch test', data);
  };

  fetchData();

  return (
    <h1>Rick y Morty</h1>
  );
}


