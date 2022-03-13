import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import ToDoList from "./routes/ToDoList";

interface IRouterProps {

};

function Router({}:IRouterProps) {
    return (
        <BrowserRouter>
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