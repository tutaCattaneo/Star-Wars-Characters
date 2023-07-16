import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CharacterCard = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CharacterImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const CharacterName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const CharacterInfo = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

const DeleteButton = styled.button`
  background-color: #ff5050;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out; /* Agrega una transición suave */
  
  &:hover {
    background-color: #e60000; /* Cambia el color al pasar el mouse */
  }
`;

const Character = ({ name, gender, hairColor, onDelete }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
        const data = await response.json();
        if (data.results.length > 0) {
          const character = data.results[0];
          setImage(`https://starwars-visualguide.com/assets/img/characters/${character.url.split('/')[5]}.jpg`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacterData();
  }, [name]);

  return (
    <CharacterCard>
      <CharacterImage src={image} alt={name} />
      <CharacterName>{name}</CharacterName>
      <CharacterInfo>Género: {gender}</CharacterInfo>
      <CharacterInfo>Color de cabello: {hairColor}</CharacterInfo>
      <DeleteButton onClick={onDelete}>Eliminar</DeleteButton>
    </CharacterCard>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Character;
