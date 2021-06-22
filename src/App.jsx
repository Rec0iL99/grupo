import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import routes from './routes';
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
  const { title, needsAuth, component, path } = route;

  // Setting titles for all pages
  document.title = title || 'Grupo';

  // If route needs auth and if user is not authenticated then prompt user to login
  if (needsAuth && !isAuthenticated()) {
    history.push('/login');
  }

  // If user visits login even after login then push user to main chat page
  if (component === 'Login' && isAuthenticated()) {
    history.push('/');
  } else if (component === 'Signup' && isAuthenticated()) {
    history.push('/');
  }

  return <Route exact path={path} component={componentRegistry[component]} />;
};

const App = () => (
  <div className='App'>
    <Router>
      <Switch>
        {routes.map((route) => (
          <RenderRoute
            key={uuidv4()}
            title={route.title}
            needsAuth={route.needsAuth}
            component={route.component}
            path={route.path}
          />
        ))}
      </Switch>
    </Router>
  </div>
);

export default App;
