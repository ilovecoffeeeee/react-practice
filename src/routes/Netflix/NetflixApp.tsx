import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import NetflixHeader from './Components/NetflixHeader';
import NetflixHome from './NetflixHome';
import NetflixSearch from './NetflixSearch';
import NetflixTv from './NetflixTv';

function Netflix_App() {
    return (
        <Router>
            <NetflixHeader />
            <Switch>
                <Route path="/react-practice/netflix/tv">
                    <NetflixTv />
                </Route>
                <Route path="/react-practice/netflix/search">
                    <NetflixSearch />
                </Route>
                <Route path="/react-practice/netflix">
                    <NetflixHome />
                </Route>
            </Switch>
        </Router>
    )
}

export default Netflix_App;