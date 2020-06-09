import React from 'react';
import Homenavigation from './src/navigation/homenavigation';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { reducer } from './src/redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducer, {}, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <Homenavigation />
    </Provider>
  );

};

export default App;