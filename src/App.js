import React from 'react';
import Home from './pages/home/Home';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Home />
      </div>
    </Provider>
  );
};

export default App;
