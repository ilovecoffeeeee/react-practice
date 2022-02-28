import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Title = styled.div`
  color: red;
`;

const ToDos = styled.ul`
  
`;

const Todo = styled.li`
  
`;

const toDoList = [
  "npx create-react-app react-practice --template typescript",
  "npm i styeld-component",
  "npm i react-router-dom@5.3.0",
  "npm i react-query",
  "npm i gh-pages",
]

function App() {
  return (
    <Container>
      <Title>Set up</Title> 
      <ToDos>
          {toDoList.map((todo) => <Todo>{todo}</Todo>)}
      </ToDos>
    </Container>
    
  );
}

export default App;
