import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./routes/Home";
import ToDoList from "./routes/ToDoList";

interface IRouterProps {

};

const Tab = styled.div`
    width: 100px;
    height: 100px;
`;

function Router({}:IRouterProps) {
    return (        
        <BrowserRouter>
            <Tab>
                <Link to={`/result/todolist`}>To Do List</Link>
            </Tab>
            <Switch>
                <Route path="/">
                    <Home />
                </Route >
                <Route path="/result/todolist">
                    <ToDoList />
                </Route>
            </Switch>
        </BrowserRouter>
    
    )
}

export default Router;