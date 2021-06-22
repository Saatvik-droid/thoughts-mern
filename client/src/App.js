import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { history } from './redux/store';
import CreateThoughtPage from './views/CreateThought'
import UpdateThoughtPage from './views/UpdateThought';
import HomePage from './views/Home';

const App = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={["/", "/thoughts"]} component={HomePage} />
                <Route path="/thoughts/create" component={CreateThoughtPage} />
                <Route path={`/thoughts/edit/:id`} component={UpdateThoughtPage}/>
            </Switch>
        </ConnectedRouter>
    )
}

export default App
