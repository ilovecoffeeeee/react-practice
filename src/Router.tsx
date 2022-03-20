import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components"
import Home from "./routes/Home";
import Netflix from "./routes/Netflix/NetflixApp";
import ToDoList from "./routes/ToDoList";
import Animation from "./routes/Animation"

interface IRouterProps {

};

const Tabs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 5px;
    background-color: black;
    position: fixed;
    z-index: 1;
    color: black;
`;


const Tab = styled.div`
    width: 100px;
    height: 30px;
    padding-top: 5px; 
    margin-right: 10px;
    background-color: whitesmoke;
    border-radius: 10px;
    text-align: center;
`;


function Router({}:IRouterProps) {
    return (        
        <BrowserRouter>
            <Tabs>
                <Tab>
                    <Link to={`/`}>Home</Link>
                </Tab>
                <Tab>
                    <Link to={`/react-practice/netflix`}>Netflix Clone</Link>
                </Tab>
                <Tab>
                    <Link to={`/react-practice/todolist`}>To Do List</Link>
                </Tab>
                <Tab>
                    <Link to={`/react-practice/animation`}>Animation</Link>
                </Tab>
            </Tabs>
            
            <Switch>
                <Route path="/react-practice/animation">
                    <Animation />
                </Route>
                <Route path={["/react-practice/netflix", "/react-practice/netflix/movies/:movieId"]}>
                    <Netflix />
                </Route>
                <Route path="/react-practice/todolist">
                    <ToDoList />
                </Route>
                <Route path="/">
                    <Home />
                </Route >
            </Switch>
        </BrowserRouter>
    
    )
}

export default Router;