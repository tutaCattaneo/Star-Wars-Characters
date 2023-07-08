import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';
import styled from 'styled-components';
import Navbar from './Navbar';


const Container = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
`;


function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleDelete = (url) => {
    setCharacters(characters.filter((character) => character.url !== url));
  };
  return (
    <Container>
      <Navbar />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        characters.map((character) => (
          <Character
            key={character.url}
            name={character.name}
            gender={character.gender}
            hairColor={character.hair_color}
            onDelete={() => handleDelete(character.url)}
          />
        ))
      )}
    </Container>
  );
  
}

export default App;
