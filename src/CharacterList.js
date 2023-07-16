import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa'; // Importa el ícono de carga
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Character from './Character';

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        toast.error('Hubo un error al cargar la lista de personajes.');
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    if (!isFirstRender.current) {
      toast.success('¡Bienvenido a la lista de personajes de Star Wars!');
    } else {
      isFirstRender.current = false;
    }
  }, []);

  const handleDelete = (url) => {
    setCharacters(characters.filter((character) => character.url !== url));
  };

  return (
    <Container>
      <ToastContainer position="top-center" />
      {loading ? (
        <LoadingText>
          <FaSpinner className="loading-icon" /> Cargando lista...
        </LoadingText>
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};

export default CharacterList;
