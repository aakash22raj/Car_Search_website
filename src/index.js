import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import {createRoot} from 'react-dom/client';

// rendering the React application by wrapping with a Redux store, 
// and the main application component is App.
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
