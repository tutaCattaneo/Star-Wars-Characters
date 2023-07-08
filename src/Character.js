import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
`;

const Character = ({ name, gender, hairColor, onDelete }) => {
  return (
    <CharacterCard>
      <CharacterName>{name}</CharacterName>
      <CharacterInfo>Género: {gender}</CharacterInfo>
      <CharacterInfo>Color de cabello: {hairColor}</CharacterInfo>
      <DeleteButton onClick={onDelete}>Eliminar</DeleteButton>
    </CharacterCard>
  );
};

export default Character;
