import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link, Switch, Route } from "react-router-dom";
import useQuery from 'react-query';
import { ToDoList } from './ToDoList';
import { SuperCounverter } from './SuperCounverter';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Title = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const ToDos = styled.ul`
  
`;

const Todo = styled.li`
  padding: 5px 10px;
  background-color: white;
  color: black;
  margin-bottom: 5px;
  border-radius: 5px;
  
`;

const toDoList = [
  "npx create-react-app react-practice --template typescript",
  "npm i styeld-component",
  "npm i --save-dew @types/styled-components",
  "npm i react-router-dom@5.3.0",
  "npm i react-query",
  "npm i gh-pages",
  "npm i react-helmet",
  "npm i --save-dev @types/react-helmet",
  "npm i --save-dev @types/react-router-dom@5.3.0",
]


function Home() {
    return (
        <Container>
        <Helmet>
          <title>연습일지</title>
        </Helmet>
        <Title>Set up</Title> 
        <ToDos>
            {toDoList.map((todo) => <Todo>{todo}</Todo>)}
        </ToDos>
        <Link to={`/todolist`}>To Do List</Link>
        <Link to={`/supercounverter`}>Super Counverter</Link>
        <Switch>
            <Route path={`/todolist`}>
                <ToDoList/>
            </Route>
            <Route path={`/supercounverter`}>
                <SuperCounverter/>
            </Route>
        </Switch>
        
      </Container>
    );
}

export default Home;