import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CreateThoughtPage from './pages/CreateThought'
import UpdateThoughtPage from './pages/UpdateThought';
import HomePage from './pages/Home';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/thoughts"]} component={HomePage} />
                <Route path="/thoughts/create" component={CreateThoughtPage} />
                <Route path={`/thoughts/edit/:id`} component={UpdateThoughtPage}/>
            </Switch>
        </Router>
    )
}

export default App
