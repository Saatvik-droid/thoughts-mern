import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CreateThoughtPage from './views/CreateThought'
import UpdateThoughtPage from './views/UpdateThought';
import HomePage from './views/Home';

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
