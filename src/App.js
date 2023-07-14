import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import CharacterList from './CharacterList';

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <CharacterList />
    </Container>
  );
}

export default App;

