import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/store";

import CreateThoughtPage from "./pages/CreateThought";
import UpdateThoughtPage from "./pages/UpdateThought";
import HomePage from "./pages/Home";
import Auth from "./pages/Auth";
import AppBar from "./components/AppBar/appBar";

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <AppBar />
      <Switch>
        <Route exact path={["/", "/thoughts"]} component={HomePage} />
        <Route path="/thoughts/create" component={CreateThoughtPage} />
        <Route path={`/thoughts/edit/:id`} component={UpdateThoughtPage} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
