import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Chat from './pages/chat/Chat';
import './App.scss';

const componentRegistry = {
  Login,
  Signup,
  Chat,
};

const RenderRoute = (route) => {
  const history = useHistory();

  // Setting titles for all pages
  document.title = route.title || 'Grupo';

  return (
    <Route
      exact
      path={route.path}
      component={componentRegistry[route.component]}
    />
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Switch>
            {routes.map((route, index) => (
              <RenderRoute {...route} key={index} />
            ))}
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
