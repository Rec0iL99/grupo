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
import isAuthenticated from './utils/isAuthenticated';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Room from './pages/room/Room';
import './App.scss';

const componentRegistry = {
  Login,
  Signup,
  Room,
};

const RenderRoute = (route) => {
  const history = useHistory();

  // Setting titles for all pages
  document.title = route.title || 'Grupo';

  // If route needs auth and if user is not authenticated then prompt user to login
  if (route.needsAuth && !isAuthenticated()) {
    history.push('/login');
  }

  // If user visits login even after login then push user to main chat page
  if (route.component === 'Login' && isAuthenticated()) {
    history.push('/');
  } else if (route.component === 'Signup' && isAuthenticated()) {
    history.push('/');
  }

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
