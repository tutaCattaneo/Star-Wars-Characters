import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa'; // Importa el ícono de carga
import Character from './Character';
const Container = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  min-height: 100vh; /* Asegura que el contenedor ocupe al menos el 100% de la altura de la pantalla */
`;

const CharacterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const LoadingText = styled.p`
  font-size: 18px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CharacterList = () => {
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
      {loading ? (
        <LoadingText>
          <FaSpinner className="loading-icon" /> Cargando...
        </LoadingText>
      ) : (
        <CharacterListContainer>
          {characters.map((character) => (
            <Character
              key={character.url}
              name={character.name}
              gender={character.gender}
              hairColor={character.hair_color}
              onDelete={() => handleDelete(character.url)}
            />
          ))}
        </CharacterListContainer>
      )}
    </Container>
  );
};

export default CharacterList;
